'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * login(request, response) {
    const data = request.only('email', 'password');

    const user = yield User.findBy('email', data.email);
    const login = yield Hash.verify(data.password, user.password);
    const jwt = yield request.auth.generate(user);

    if (login) {
      response.json({ access_token: jwt })
      return
    }

    response.unauthorized('Invalid credentails');
  }

  * register (request, response) {
    const data = request.only('email', 'username', 'password', 'firstname', 'lastname');
    data.password = yield Hash.make(data.password);
    let user = yield User.create(data);
    yield response.json(user.toJSON());
  }

}

module.exports = UserController;