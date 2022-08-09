const { default: axios } = require("axios");

module.exports = {
  newUser: (req, res) => {
    console.log("req: ", req.body, "res: ", res.data);
  },
};
