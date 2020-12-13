// import class name model from follder model
const { Usertask2 } = require("../../../models");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../../routes/router1");

// login function
exports.login = async (req, res) => {
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

// rgister function
exports.register = async (req, res) => {
  try {
    const { body } = req;
    const schema = Joi.object({
      fullName: Joi.string().min(1).required(),
      email: Joi.string().email().min(5).required(),
      password: Joi.string().min(5).required(),
    });

    //get function Joi "error" if any requireq input is null
    const { error } = schema.validate(body, {
      abortEarly: false,
    });

    //check if any valodation is null
    if (error) {
      return res.status(400).send({
        status: "Validate fail!",
        error: {
          message: error.details.map((error) => error.message),
        },
      });
    }

    // if (!user) {
    //   return res.send({
    //     status: "Respon fail",
    //     data: "No data to send",
    //   });
    // }

    const { name, email, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = await Usertask2.create({
      name,
      email,
      password: hashedPassword,
    });

    const privateKey = "JonHeri11xX";
    const token = jwt.sign(
      {
        id: user.id,
        privateKey,
      },
      privateKey
    );

    res.send({
      status: "Response success",
      message: "Regiser successfully",
      data: {
        email: user.email,
        token,
      },
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
