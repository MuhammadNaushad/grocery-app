import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "delivery_partner"],
      default: "user",
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const customerSchema = new mongoose.Schema({
  ...userSchema.obj,
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  liveLocation: {
    latitude: Number,
    longitude: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const deliveryPartnerSchema = new mongoose.Schema({
  ...userSchema.obj,
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  vehicleType: {
    type: String,
    enum: ["bike", "car", "van"],
    required: true,
  },
  vehicleNumber: {
    type: String,
    required: true,
    unique: true,
  },
  liveLocation: {
    latitude: Number,
    longitude: Number,
    required: true,
  },
});

const adminSchema = new mongoose.Schema({
  ...userSchema.obj,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin"],
    default: "admin",
  },
});

const User = mongoose.model("User", userSchema);
const Customer = mongoose.model("Customer", customerSchema);
const DeliveryPartner = mongoose.model(
  "DeliveryPartner",
  deliveryPartnerSchema,
);
const Admin = mongoose.model("Admin", adminSchema);

export { User, Customer, DeliveryPartner, Admin };
