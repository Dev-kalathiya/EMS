exports.adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "Admin") {
      next();
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  };
  
  exports.studentOnly = (req, res, next) => {
    if (req.user && req.user.role === "Student") {
      next();
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  };
  