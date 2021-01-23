const router = require("express").Router();
const path = require("path");

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
});

router.put("/api/workouts/:id", (req, res) => {
  // adds exercise to a previously made workout
  // needs to return an array of workouts
  // id is the id of the workout
});

router.post("/api/workouts", (req, res) => {
  // creates new workout
  // assigns an id
  // returns a workout object without any exercises in it
});

router.get("/api/workouts/range", (req, res) => {
  // unknown function
});

module.exports = router;
