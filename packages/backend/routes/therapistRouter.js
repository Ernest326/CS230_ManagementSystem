const express = require("express");;
const router = express.Router();
const controller = require("../controllers/therapistController");

router.get("/", controller.getTherapists);
router.get("/:id", controller.getTherapistById);
router.put("/:id", controller.updateTherapist);
router.delete("/:id", controller.deleteTherapist);
router.post("/", controller.createTherapist);

module.exports = router;