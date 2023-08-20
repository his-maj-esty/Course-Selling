const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : String,
    password: String,
    purchasedCourses: [{type: mongoose.Schema.Types.ObjectId, ref: "Courses"}]
});
  
const adminSchema = new mongoose.Schema({
    username : String,
    password: String
});
  
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean
});
  
const Admins = mongoose.model("Admins", adminSchema);
const Users = mongoose.model("Users", userSchema);
const Courses = mongoose.model("Courses", courseSchema);
  
export default {Admins, Users, Courses};