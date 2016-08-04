'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * login(request, response) {
    const input = request.only('email', 'password');

    try {
      const user = yield User.findBy('email', input.email);

      yield Hash.verify(input.password, user.password);
      const jwt = yield request.auth.generate(user);

      user.access_token = jwt;
      return response.json(user.toJSON());
    } catch (e) {
      return response.status(401).json({
        error: 'User failed to login'
      });
    }
  }

  * store (request, response) {
    // Get email & password, then hash the password
    const input = request.only('email', 'password', 'username');
    input.password = yield Hash.make(input.password);

    const newUser = yield User.create(input);
    response.json(newUser.toJSON());
  }

}

module.exports = UserController;