const { model, Schema } = require("mongoose");

const journalSchema = new Schema({
  Calendar: [
    {
      type: Object,
    },
  ],
  GymPlan: [
    {
      type: Object,
      trim: true,
    },
  ],
  FoodPlan: [
    {
      type: Object,
      trim: true,
    },
  ],
  BMI: {
    type: String,
    required: true,
  },
  HeartRate: {
    type: String,
    trim: true,
  },

});

module.exports = model("Journal", journalSchema);
