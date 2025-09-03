export default class UserController {
  getRegister(req, res) {
    res.render("registration");
  }
  getLogin(req, res) {
    res.render("login");
  }
}
