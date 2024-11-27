exports.isRole = (allowedRoles) => {
    return (req, res, next) => {
      const { role } = req.user;
      if (allowedRoles.includes(role)) {
        next();
      } else {
        res.status(403).json({ error: "Access denied" });
      }
    };
  };
  