// import function from models
const { Product } = require("../../../models");

// import joi
const Joi = require("joi");

const responSuccess = "success";

//get Users
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: responSuccess,
      data: products,
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

//getProductById
exports.getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const getProduct = await Product.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!getProduct) {
      return res.status(400).send({
        status: "Reasponse fail",
        message: `Data with ID: ${id} not found`,
        data: null,
      });
    }
    res.send({
      status: "Respon success",
      message: `Get data by ID: ${id} data successfully`,
      data: {
        data: getProduct,
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

// add data post with check input validate2
exports.addProductValidate2 = async (req, res) => {
  try {
    const { body } = req;

    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      price: Joi.number().integer().min(1).required(),
      description: Joi.string().min(5).required(),
      stock: Joi.number().integer().min(1).required(),
      photo: Joi.string().min(5),
    });

    //get function Joi "error" if any requireq input is null
    const { error } = schema.validate(body, {
      abortEarly: false,
    });

    //check if any input is null
    if (error) {
      return res.status(400).send({
        status: "Validate input fail!",
        error: {
          message: error.details.map((error) => error.message),
        },
      });
    }
    const addProduct = await Product.create(body);
    if (!addProduct) {
      return res.send({
        status: "Respon fail",
        data: "No data to send",
      });
    }
    res.send({
      status: "Add data success",
      message: "Add data successfully",
      data: {
        addProduct,
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

// Update or edit product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const getProductById = await Product.findOne({
      where: {
        id,
      },
    });
    if (!getProductById) {
      return res.status(400).send({
        status: "Response fail",
        message: `Data with ID: ${id} not found`,
        data: null,
      });
    }
    await Product.update(body, {
      where: {
        id,
      },
    });
    const getProductAfterUpdate = await Product.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "Response succsess.",
      message: "Update data succsess.",
      data: {
        getProductAfterUpdate,
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

//delete product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const getProductById = await Product.findOne({
      where: {
        id,
      },
    });
    if (!getProductById) {
      return res.status(400).send({
        status: "Response failed",
        message: `Data with ID: ${id} not found`,
        data: null,
      });
    }
    await Product.destroy({
      where: {
        id,
      },
    });
    res.send({
      status: "Response success",
      message: `Delete data with id: ${id} successfully.`,
      data: id,
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
