import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import { AuthenticationAdmin, SecretCode } from "../middlewares/auth/auth.js";

import { Admins, Courses } from "../db/database.js";

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admins.findOne({ username: username });
  if (admin) {
    return res.status(400).send("Admin/username already exists"); // Bad Request
  } else {
    const newAdmin = new Admins({ username: username, password: password });
    newAdmin.save();

    const token = jwt.sign({ username: username, password: password }, SecretCode, { expiresIn: '1h' });
    return res.status(201).send({ message: 'Admin created successfully', token: token }); // Created
  }
});

router.post('/login', async (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;

  const admin = await Admins.findOne({ username, password });

  if (admin) {
    const token = jwt.sign({ username: username, password: password }, SecretCode, { expiresIn: '1h' });
    return res.send({ message: 'Logged in successfully', token: token }); // OK
  } else {
    return res.status(401).send({ message: "Invalid admin" }); // Unauthorized
  }
});

router.post('/courses', AuthenticationAdmin, async (req, res) => {
  const newCourse = new Courses(req.body);
  await newCourse.save();
  return res.status(201).send({ message: 'Course created successfully', courseId: newCourse._id }); // Created
});

router.put('/courses/:courseId', AuthenticationAdmin, async (req, res) => {
  const courseId = req.params.courseId;
  const updatedCourse = req.body;
  await Courses.findOneAndReplace({ _id: courseId }, updatedCourse);
  return res.send({ message: 'Course updated successfully' }); // OK
});

router.get('/courses', AuthenticationAdmin, async (req, res) => {
  const courses = await Courses.find({});
  return res.json({ courses }); // OK
});

router.delete('/courses/:courseId', AuthenticationAdmin, async (req, res) => {
  const courseId = req.params.courseId;
  await Courses.findByIdAndDelete(courseId);
  return res.send({ message: 'Course updated successfully' }); // OK
});

export { router as adminRouter };
