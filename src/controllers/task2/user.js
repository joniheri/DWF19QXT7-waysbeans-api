// import function from models
const { Usertask2 } = require("../../../models");

const responSuccess = "success";

//get Users
exports.getUsersTask2 = async (req, res) => {
  try {
    const users = await Usertask2.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: responSuccess,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server error",
        error: `${error}`,
      },
    });
  }
};

//delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const getUseId = await Usertask2.findOne({
      where: {
        id,
      },
    });
    if (!getUseId) {
      return res.status(400).send({
        status: "Response fail",
        message: `Data User with ID: ${id} not found`,
        data: null,
      });
    } else {
      await Usertask2.destroy({
        where: {
          id,
        },
      });
      res.send({
        status: responSuccess,
        message: `Delete data with id: ${id} successfully.`,
        data: id,
      });
    }
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
