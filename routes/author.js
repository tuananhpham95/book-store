const authorController = require("../controller/authorController");

const router = require("express").Router();

//add author
router.post("/", authorController.addAuthor);

//get all authors
router.get("/", authorController.getAllAuthous);

module.exports = router;
