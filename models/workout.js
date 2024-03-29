const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: { type: String, required: "Choose a workout option" },
      name: {
        type: String,
      },

      duration: {
        type: Number,
      },

      weight: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      distance: {
        type: Number,
      },

    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
