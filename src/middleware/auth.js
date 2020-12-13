const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  let header, token;

  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  ) {
    return res.status(400).send({
      status: "Respon failed",
      error: {
        message: "Access Denied",
      },
    });
  }

  try {
    const privateKey = "JonHeri11xX";
    const verified = jwt.verify(token, privateKey);
    req.userId = verified;
    next();
  } catch (err) {
    return res.status(401).send({
      status: "Respon failed",
      error: {
        message: "Invalid token",
      },
      s,
    });
  }
};
