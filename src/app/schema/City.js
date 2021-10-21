const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const City = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

City.plugin(mongoosePaginate);

module.exports = mongoose.model("city", City);
