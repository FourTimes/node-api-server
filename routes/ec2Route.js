const express = require("express");
const router = express.Router();

const ec2detailsController = require("../controller/ec2instance")

router.post("/instanceId", ec2detailsController.postInstanceId);
router.get("/startInstance", ec2detailsController.getStartInstance);
router.get("/stopInstance", ec2detailsController.getStopInstance );
router.post("/singleInstanceStop", ec2detailsController.postSingleInstanceStop);
router.post("/singleInstanceStart", ec2detailsController.postsingleInstanceStart);
router.post("/createInstance", ec2detailsController.postcreateInstance);



router.post('/new', function (req, res, next) {
  console.log(req.body);
  res.locals.connection.query(`INSERT INTO register(firstname,lastname,username,city,state,zip)
   VALUES('${req.body.FirstName}','${req.body.LastName}','${req.body.Username}','${req.body.City}','${req.body.State}','${req.body.Zip}')`, (error, results, fields) => {
      if (error) throw error;
      res.send(JSON.stringify(results));
  });
});



module.exports = router;
