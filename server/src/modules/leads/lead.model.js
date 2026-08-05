import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
      default: "",
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      trim: true,
      default: "",
    },

    source: {
      type: String,
      enum: [
        "WEBSITE",
        "FACEBOOK",
        "LINKEDIN",
        "REFERRAL",
        "EMAIL",
        "OTHER",
      ],
      default: "WEBSITE",
    },

    status: {
      type: String,
      enum: [
        "NEW",
        "CONTACTED",
        "QUALIFIED",
        "PROPOSAL",
        "NEGOTIATION",
        "WON",
        "LOST",
      ],
      default: "NEW",
      index: true,
    },

    priority: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      default: "MEDIUM",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    remarks: {
      type: String,
      default: "",
    },

    isDeleted: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

leadSchema.index({
  firstName: "text",
  lastName: "text",
  email: "text",
  company: "text",
});

const Lead = mongoose.model("Lead", leadSchema);

export default Lead;