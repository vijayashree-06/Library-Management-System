const express = require("express");
const Member = require("../modles1/Member");
const Book = require("../modles1/Book");

const router = express.Router();

// Create a new member
router.post("/", async (req, res) => {
  try {
    const member = new Member(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get a member by ID
router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id).populate("borrowedBooks");
    if (!member) return res.status(404).json({ message: "Member not found" });
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
