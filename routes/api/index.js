const router = require("express").Router();
const bookRoutes = require("./books");
const resourcesRoutes = require("./resources");
const applicationRoutes = require("./application");

// routes
router.use("/books", bookRoutes);
router.use("/resources", resourcesRoutes);
router.use("/application", applicationRoutes);

module.exports = router;