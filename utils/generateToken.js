const jwt = require("jsonwebtoken");

module.exports = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    userType:user.userType,
  };

  return jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: 60 * 60 * 24,
  });
};