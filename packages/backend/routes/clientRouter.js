const express = require("express");;
const router = express.Router();
const controller = require("../controllers/clientController");

router.get("/", controller.getClients);
router.get("/:id", controller.getClientById);
router.put("/:id", controller.updateClient);
router.post("/", controller.createClient);

module.exports = router;