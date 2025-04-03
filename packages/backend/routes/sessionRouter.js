const express = require("express");;
const router = express.Router();
const controller = require("../controllers/sessionController");

router.get("/", controller.getSessions);
router.get("/:id", controller.getSessionById);
router.put("/:id", controller.updateSession);
router.delete("/:id", controller.deleteSession);
router.post("/", controller.createSession);

module.exports = router;