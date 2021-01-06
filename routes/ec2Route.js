const express = require("express");
const router = express.Router();

const ec2detailsController = require("../controller/ec2instance")

router.post("/instanceId", ec2detailsController.postInstanceId);
router.get("/startInstance", ec2detailsController.getStartInstance);
router.get("/stopInstance", ec2detailsController.getStopInstance );
router.post("/singleInstanceStop", ec2detailsController.postSingleInstanceStop);
router.post("/singleInstanceStart", ec2detailsController.postsingleInstanceStart);
router.post("/createInstance", ec2detailsController.postcreateInstance);








module.exports = router;
