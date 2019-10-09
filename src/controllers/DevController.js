const Dev = require("../models/Dev");
const http = require("../services/http");

module.exports = {
  async store(req, res) {
    const { username: user } = req.body;

    const userExists = await Dev.findOne({ user });
    if (userExists) {
      return res.json(userExists);
    }

    const { data } = await http.get(`/${user}`);
    const { name, bio, avatar_url: avatar } = data;

    const response = await Dev.create({
      name,
      bio,
      avatar,
      user
    });

    return res.json(response);
  },
  async index(req, res) {
    const { user } = req.headers;
    const loggedUser = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedUser.likes } },
        { _id: { $nin: loggedUser.dislikes } }
      ]
    });

    return res.json(users);
  }
};
