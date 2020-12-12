// import function from models
const { User, Skill } = require("../../models");

const responSuccess = "Response success";

//get Skills
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "UserId"],
      },
    });
    res.send({
      status: responSuccess,
      message: "Get Skills successfully",
      data: skills,
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

// get ProfilesBelongsTo
exports.getSkillsBelongsTo = async (req, res) => {
  try {
    const skills = await Profile.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "UserId"],
      },
      include: {
        model: User,
        as: "user",
        attributes: {
          exclude: ["userid", "createdAt", "updatedAt", "userId", "UserId"],
        },
      },
    });
    res.send({
      status: responSuccess,
      message: "Get Skills Belongs To successfully",
      data: skills,
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
