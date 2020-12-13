// import function from models
const { Post } = require("../../models");

// import joi
const Joi = require("joi");

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    if (!posts) {
      return res.status(400).send({
        status: "Data Post Empty",
        data: null,
      });
    } else {
      res.send({
        status: "Respon success",
        data: {
          posts,
        },
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

exports.hiddenFieldCreatedAtUpdatedAt = async (req, res) => {
  try {
    const posts = await Post.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    if (!posts) {
      return res.status(400).send({
        status: "Data Post Empty",
        data: null,
      });
    } else {
      res.send({
        status: "Respon success",
        message: "Hidden data on field created n field updatedAt successfully",
        data: {
          posts,
        },
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

exports.getSinglePostById = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findOne({
      where: {
        id,
      },
    });
    if (!post) {
      return res.status(400).send({
        status: "Reasponse fail",
        message: `Post with ID: ${id} not found`,
        data: null,
      });
    } else {
      res.send({
        status: "Respon success",
        message: `Get data by ID: ${id} data successfully`,
        data: {
          data: null,
        },
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

// add data post normal
exports.addPost = async (req, res) => {
  try {
    const { body } = req;

    const post = await Post.create(body);
    if (!post) {
      return res.send({
        status: "Respon fail",
        data: "No data to send",
      });
    } else {
      res.send({
        status: "Response success",
        message: "Add data successfully",
        data: {
          post,
        },
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

// add data post with check input validate1
exports.addPostValidate1 = async (req, res) => {
  try {
    const { body } = req;

    const schema = Joi.object({
      title: Joi.string().min(3).required(),
      thumbnail: Joi.string().min(3),
      description: Joi.string().min(5).required(),
    });

    //get function Joi "error" if any requireq input is null
    const { error } = schema.validate(body);

    //check if any input is null
    if (error) {
      return res.status(400).send({
        status: "Validate input fail!",
        error: {
          message: error.details[0].message,
        },
      });
    } else {
      const post = await Post.create(body);
      if (!post) {
        return res.send({
          status: "Respon fail",
          data: "No data to send",
        });
      } else {
        res.send({
          status: "Response success",
          message: "Add data successfully",
          data: {
            post,
          },
        });
      }
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

// add data post with check input validate2
exports.addPostValidate2 = async (req, res) => {
  try {
    const { body } = req;

    const schema = Joi.object({
      title: Joi.string().min(3).required(),
      thumbnail: Joi.string().min(3),
      description: Joi.string().min(5).required(),
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
    } else {
      const post = await Post.create(body);
      if (!post) {
        return res.send({
          status: "Respon fail",
          data: "No data to send",
        });
      } else {
        res.send({
          status: "Response success",
          message: "Add data successfully",
          data: {
            post,
          },
        });
      }
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

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const getPostById = await Post.findOne({
      where: {
        id,
      },
    });
    if (!getPostById) {
      return res.status(400).send({
        status: "Response fail",
        message: `Post with ID: ${id} not found`,
        data: null,
      });
    } else {
      const post = await Post.update(body, {
        where: {
          id,
        },
      });
      const getPostAfterUpdate = await Post.findOne({
        where: {
          id,
        },
      });
      res.send({
        status: "Response succsess.",
        message: "Update data succsess.",
        data: {
          post: getPostAfterUpdate,
        },
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

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const getPostById = await Post.findOne({
      where: {
        id,
      },
    });
    if (!getPostById) {
      return res.status(400).send({
        status: "Response fail",
        message: `Data Post with ID: ${id} not found`,
        data: null,
      });
    } else {
      await Post.destroy({
        where: {
          id,
        },
      });
      res.send({
        status: "Response succsess.",
        message: `Delete data with id: ${id} successfully.`,
        data: null,
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

exports.restorePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.restore({
      where: {
        id,
      },
    });
    res.send({
      status: "Response succsess.",
      message: `Restore data with id: ${id} successfully.`,
      data: null,
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
  } catch (error) {}
};
