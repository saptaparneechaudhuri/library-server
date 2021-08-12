const mongoose = require("mongoose");

const issueReturnSchema = mongoose.Schema({
  booksIssued: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BookInventory",
    required: true,
  },

  image: {
    type: String,
    default:
      "data:image/jpeg;base64,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",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "Return Due",
  },

  issueDate: {
    type: Date,
    default: Date.now,
  },
});

// use a virtual to get id as id and not _id

issueReturnSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

issueReturnSchema.virtual("issueDateFormat").get(function () {
  let day = this.issueDate.getDay();
  let month = this.issueDate.getMonth();
  // let newDate = new Date()
  let year = this.issueDate.getFullYear();

  return +day + 1 + "/" + (+month + 1) + "/" + year;
});

issueReturnSchema.virtual("returnDateFormat").get(function () {
  let day = this.issueDate.getDay();
  let month = this.issueDate.getMonth();
  // let newDate = new Date()
  let year = this.issueDate.getFullYear();

  return day + "/" + (+month + 2) + "/" + year;
});
// set the virtuals to show

issueReturnSchema.set("toJSON", {
  virtuals: true,
});

exports.IssueReturn = mongoose.model("IssueReturn", issueReturnSchema);
