const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

const Workout = require("../models/workoutModel");

const router = express.Router();

// GET ALL WORKOUTS
// router.get("/", (req, res) => {
//   res.json({ mssg: "GET ALL WORKOUTS" });
// });
router.get("/", getWorkouts);

// GET A SINGLE WORKOUT
// router.get("/:id", (req, res) => {
//   res.json({ masg: "GET A SIGNLE WORKOUT" });
// });
router.get("/:id", getWorkout);

// POST A NEW WORKOUT
router.post("/", createWorkout);
// router.post("/", async (req, res) => {
//   const { title, load, reps } = req.body;

//   try {
//     const workout = await Workout.create({
//       title,
//       load,
//       reps,
//     });
//     res.status(200).json(workout);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }

//   // res.json({mssg: 'POST A NEW WORKOUT'})
// });

// DELETE A WORKOUT
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE A NEW WORKOUT" });
});

//UPDATE A WORKOUT
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE A WORKOUT" });
});

module.exports = router;
