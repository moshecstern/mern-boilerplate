const router = require("express").Router();
const bookRoutes = require("./books");
const resourcesRoutes = require("./resources");

// routes
router.use("/books", bookRoutes);
router.use("/resources", resourcesRoutes);

module.exports = router;