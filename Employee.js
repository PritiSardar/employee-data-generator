import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  Language: String,
  City: String,
  isManager: Boolean
});

export const Employee = mongoose.model('Employee', EmployeeSchema);