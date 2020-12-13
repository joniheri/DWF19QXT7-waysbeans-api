const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  let header, token;

  const header = req.header("Authorization");
  const token = header.replace("Bearer ", "");

  if (!header || !token) {
    return res.status(400).send({
      status: "Respon failed",
      error: {
        message: "Access Denied",
      },
      s,
    });
  }

  try {
    const privateKey = "JonHeri11xX";
    const verified = jwt.verify(token.privateKey);
  } catch (err) {}
};
