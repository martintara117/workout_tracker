const router = require("express").Router();
const path = require("path");
const db = require("../models");
let aggregate;

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/api/workouts", (req, res) => {
  // get last workout
  // needs to return an array of workouts
  db.Workout.find({}).then((response) => {
    res.json(response);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  // adds exercise to a previously made workout
  // needs to return an array of workouts
  // id is the id of the workout
  aggregate += req.body.duration
  db.Workout.findOneAndUpdate({_id: req.params.id}, {
    $push: {exercises: req.body},
    totalDuration: aggregate
  }).then(dbUpdate => {
    res.send(dbUpdate)
  })
});

router.post("/api/workouts", (req, res) => {
  // creates new workout
  // assigns an id
  // returns a workout object without any exercises in it
  aggregate = 0;
  db.Workout.create({}).then((dbWorkout) => {
    res.json(dbWorkout);
  });
});

router.get("/api/workouts/range", (req, res) => {
  // unknown function
  db.Workout.find({}).then((response) => {
    res.json(response);
  });
});

module.exports = router;
