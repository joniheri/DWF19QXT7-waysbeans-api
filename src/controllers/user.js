const { User, Profile } = require("../../models");
const responSuccess = "Response success";

//user hashOne Profile
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send({
      status: responSuccess,
      message: "Get Users successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server error",
      },
    });
  }
};

exports.getUsersHashOne = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Profile,
        attributes: {
          exclude: ["userid", "createdAt", "updatedAt", "userId", "UserId"],
        },
      },
    });
    res.send({
      status: responSuccess,
      message: "Get Users Hash One successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server error",
      },
    });
  }
};

exports.function = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server error",
      },
    });
  }
};
