const express = require ("express")
const router = express.Router();
exports.router = router;
const {postedbook,getallbooks,deletebook,getSingleBook,updateBook} = require("./book.controller")

// post a book 
router.post("/create-book",postedbook )

// get all books
router.get("/get-all-books",getallbooks)

// delete a single book
router.delete("/delete-book/:id",deletebook)

//get a single book 
router.get("/get-single-book/:id",getSingleBook)

//update a book
router.put("/update-book/:id",updateBook)
module.exports = router 









