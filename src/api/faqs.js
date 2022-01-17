const express = require("express");

const router = express.Router();

// read all
router.get("/", (req, res, next) => {
  res.json({
    message: "Hello read all",
  });
});

// read one
router.get("/", (req, res, next) => {
  res.json({
    message: "Hello read one",
  });
});

//create one
router.post("/", (req, res, next) => {
  res.json({
    message: "Hello Create all",
  });
});
//update one
router.put("/:id", (req, res, next) => {
  res.json({
    message: "Hello update all",
  });
});

//delete one

router.delete("/:id", (req, res, next) => {
  res.json({
    message: "Hello delete one",
  });
});

module.exports = router;
