const express = require("express");
const monk = require("monk");
const Joi = require("@hapi/joi");
require("dotenv").config();

const db = monk(
  "mongodb+srv://Alex:<password>@cluster0.qlq30.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
const faqs = db.get("faqs");

const schema = Joi.object({
  question: Joi.string().trim().required(),
  answer: Joi.string().trim().required(),
  video_url: Joi.string().uri().uri,
});

const router = express.Router();

// read all
router.get("/", async (req, res, next) => {
  try {
    const items = await faqs.find({});
    res.json(items);
  } catch (err) {
    next(err);
  }
});

// read one

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await faqs.findOne({
      _id: id,
    });
    if (!item) {
      return next();
      return res.json(item);
    }
  } catch (error) {
    next(error);
  }
});

//create one

router.post("/", async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    res.json(value);
  } catch (error) {
    next(error);
  }
});
//update one

router.put("/:id", async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req.body);
    res.json(value);
  } catch (error) {
    next(error);
  }
});

//delete one

router.delete("/:id", (req, res, next) => {
  res.json({
    message: "Hello delete one",
  });
});

module.exports = router;
