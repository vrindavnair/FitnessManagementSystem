const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization header malformed or missing!" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired!" });
    }
    res.status(403).json({ message: "Invalid token!" });
  }
};

const hasRole = (userRole, roles = []) => roles.includes(userRole.toLowerCase());

exports.isAdminOrCoach = (req, res, next) => {
  if (hasRole(req.user.role, ["admin", "coach"])) {
    return next();
  }
  return res.status(403).json({ message: "Access denied: You do not have the required role." });
};

exports.isAdminOrSelf = (req, res, next) => {
  const { id, role } = req.user;
  const { id: targetUserId } = req.params;
  if (role.toLowerCase() === "admin" || id === targetUserId) {
    return next();
  }
  return res.status(403).json({ message: "Access denied!" });
};
