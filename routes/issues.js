const express = require("express");
const router = express.Router();

const { IssueReturn } = require("../models/issueReturn");

// Sends the list of books issued for a user

router.get("/", async (req, res) => {
  const issueList = await IssueReturn.find();
  if (!issueList) {
    res.status(500).json({ success: false });
  }

  res.send(issueList);
});

// Post the book that user lends
router.post("/", async (req, res) => {
  let bookIssued = new IssueReturn({
    ISBN: req.body.ISBN,
    bookUID: req.body.bookUID,
    user: req.body.user,
  });

  bookIssued = await bookIssued.save();

  if (!bookIssued) return res.status(500).send("Book cannot be issued");

  res.send(bookIssued);
});

module.exports = router;
