// import function from models
const { Author, Book } = require("../../models");

const responSuccess = "Response success";

//get Author hashMany Book
exports.getAuthorsBelongsToManyBook = async (req, res) => {
  try {
    const authors = await Author.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Book,
        as: "book",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });
    res.send({
      status: responSuccess,
      message: "Get Users Hash One successfully",
      data: authors,
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

//get Books hashMany Author
exports.getBooksBelongsToManyAuthor = async (req, res) => {
  try {
    const books = await Book.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      include: {
        model: Author,
        as: "author",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    });
    res.send({
      status: responSuccess,
      message: "Get Books Belongs To Many successfully",
      data: {
        books,
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
