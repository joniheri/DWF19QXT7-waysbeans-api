// import function from models
const { User, Profile, Skill } = require("../../models");

const responSuccess = "Response success";

//get Users
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

//user HashOne Profiles
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

//user hasToMany Skills
exports.getUsersHashToMany = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Skill,
        as: "skill",
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId", "UserId"],
        },
      },
    });
    res.send({
      status: responSuccess,
      message: "Get Users Hash Many successfully",
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

//user hashOne Profile n user hasMany Skills
exports.getUsersHashOneMany = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: [
        {
          model: Profile,
          attributes: {
            exclude: ["userid", "createdAt", "updatedAt", "userId", "UserId"],
          },
        },
        {
          model: Skill,
          as: "skill",
          attributes: {
            exclude: ["createdAt", "updatedAt", "userId", "UserId"],
          },
        },
      ],
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

// null function
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
