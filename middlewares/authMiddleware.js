const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect routes (authenticate users)
exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user to request object
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// Middleware to allow only teachers
exports.teacherOnly = (req, res, next) => {
  if (req.user && req.user.role === "Teacher") {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Teachers only." });
  }
};
