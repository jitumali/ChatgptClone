const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  imagegeneratorController,
} = require("../controller/openaiController");
const router = express.Router();

// router

router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/jsconverter", jsconverterController);
router.post("/imagegenerator", imagegeneratorController);

module.exports = router;
