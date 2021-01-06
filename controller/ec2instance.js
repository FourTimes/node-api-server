const awsd = require("../model/awsInstance");
const cred = require("../model/credentials");

const compute = new awsd(cred);

exports.postInstanceId = (req, res) => {
  let idState = req.body.State == "Start" ? 0 : 1;
  compute.InstanceIds(idState).then((result) => {
    res.send(result);
  });
};

exports.getStartInstance = (req, res) => {
  compute
    .startInstances()
    .then((result) => {
      res.send({
        type: "Success",
        result,
      });
    })
    .catch((error) => {
      res.send({
        type: "Failure",
        error,
      });
    });
};

exports.getStopInstance = (req, res) => {
  compute
    .stopInstances()
    .then((result) => {
      res.send({
        type: "Success",
        result,
      });
    })
    .catch((error) => {
      res.send({
        type: "Failure",
        error,
      });
    });
};

exports.postSingleInstanceStop = (req, res) => {
  let instanceid = req.body.Selectedid;
  compute
    .stopInstances(instanceid)
    .then((result) => {
      res.send({
        type: "Success",
        result,
      });
    })
    .catch((error) => {
      res.send({
        type: "Failure",
        error,
      });
    });
};

exports.postsingleInstanceStart = (req, res) => {
  let instanceid = req.body.Selectedid;
  compute
    .startInstances(instanceid)
    .then((result) => {
      res.send({
        type: "Success",
        result,
      });
    })
    .catch((error) => {
      res.send({
        type: "Failure",
        error,
      });
    });
};

exports.postcreateInstance = (req, res) => {
  let instaceParams = req.body;
  compute
    .createInstance(instaceParams)
    .then((result) => {
      res.send({
        type: "Success",
        result,
      });
    })
    .catch((error) => {
      res.send({
        type: "Failure",
        error,
      });
    });
};

