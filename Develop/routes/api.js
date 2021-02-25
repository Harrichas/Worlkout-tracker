const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", (req, res) => {
    console.log("look here!");
    console.log(req.body);
  db.Workout.create(req.body)
    .then(results => {
    //console.log(results);
      res.json(results);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
//, {exercises: req.body}.collection
router.put("/api/workouts/:id", (req, res) => {
   // console.log(req.body);
  db.Workout.findById(req.params.id)
    .then(results => {
        //console.log(results)
      res.json(results);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
