// import class name model from follder model
const { Usertask2 } = require("../../../models");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../../routes/router1");
const { getUsersHashOne } = require("../user");

// login function
exports.login = async (req, res) => {
  try {
    const { body } = req;
    const schema = Joi.object({
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

    const { email, password } = req.body;

    const user = await Usertask2.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).send({
        status: "Login failed",
        error: {
          message: "Login invalid",
        },
      });
    }

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res.status(400).send({
        status: "Login failed",
        error: {
          message: "Login invalid",
        },
      });
    }

    const privateKey = "JonHeri11xX";
    const token = jwt.sign(
      {
        id: user.id,
      },
      privateKey
    );

    res.send({
      status: "Response success",
      message: "Login successfully",
      data: {
        canel: {
          fullName: getUsersHashOne.fullName,
          email: user.email,
          token,
        },
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

    const checkEmail = await Usertask2.findOne({
      where: {
        email: body.email,
      },
    });

    if (checkEmail) {
      return res.status(400).send({
        status: "Register failed",
        message: `email ${body.email} already existed`,
      });
    }

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
