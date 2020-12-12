const { User, Profile } = require("../../models");
const responSuccess = "Response success";

//user hashOne Profile
exports.getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId", "UserId"],
      },
    });
    res.send({
      status: responSuccess,
      message: "Get Profiles successfully",
      data: profiles,
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

exports.getProfilesBelongsTo = async (req, res) => {
  try {
    const profiles = await Profile.findAll({
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
      message: "Get Profile Belongs To successfully",
      data: profiles,
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
