const router = require("express").Router();
const bookController = require("../controllers/bookController");
//add books
router.post("/", bookController.addABook);

//get all books
router.get("/", bookController.getAllBooks);

//get a book
router.get("/:id", bookController.getABook);

//update a book
router.put("/:id", bookController.updateBook);

//delete a book
router.delete("/:id", bookController.deleteABook);

module.exports = router;
