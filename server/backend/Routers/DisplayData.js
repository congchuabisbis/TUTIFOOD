const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send([global.food_items, global.foodCategory]);
  } catch (error) {
    console.log(error.message);
    res.send("Lỗi máy chủ");
  }
});

module.exports = router;
