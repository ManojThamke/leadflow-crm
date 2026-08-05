import User from "./auth.model.js";

export const findUserByEmail = (email) => {
  return User.findOne({ email }).select("+password");
};

export const findUserById = (id) => {
  return User.findById(id);
};

export const createUser = (payload) => {
  return User.create(payload);
};