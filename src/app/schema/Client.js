const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
mongoose.set("toJSON", { virtuals: true });

const Client = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    city: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "city",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

Client.virtual("age")
  .get(function () {
    const dates = this.birthDate.split("/");
    const d = new Date();

    const userday = dates[0];
    const usermonth = dates[1];
    const useryear = dates[2];

    const curday = d.getDate();
    const curmonth = d.getMonth() + 1;
    const curyear = d.getFullYear();

    let age = curyear - useryear;

    if (curmonth < usermonth || (curmonth === usermonth && curday < userday)) {
      age--;
    }
    return age;
  })
  .set(function (v) {
    this.age = v.toString();
  });

Client.plugin(mongoosePaginate);

module.exports = mongoose.model("client", Client);
