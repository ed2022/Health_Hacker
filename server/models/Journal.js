const { model, Schema } = require("mongoose");

const journalSchema = new Schema({
    gymPlan: [
        {
          type: String,
          trim: true,
        },
      ],
      foodPlan: [
        {
          type: String,
          trim: true,
        },
      ],
      BMI: {
        type: String,
        required: true,
      },
   
});

module.exports = model("Journal", journalSchema);
