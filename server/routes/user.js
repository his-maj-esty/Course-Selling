import express from "express";
const router = express.Router(); 
import jwt from "jsonwebtoken";
import { AuthenticationUser, SecretCode } from "../middlewares/auth/auth.js";

import { Users, Courses } from "../db/database.js";

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ username });
    if (user) {
        return res.status(400).send({ message:"User/username already exists "}); // Bad Request
    } else {
        const newUser = new Users({ username: username, password: password });
        await newUser.save();

        const token = jwt.sign({ username: username, password: password }, SecretCode, { expiresIn: '1h' });
        return res.status(201).send({ message: 'User created successfully', token: token }); // Created
    }
});

router.post('/login', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await Users.findOne({ username, password });

    if (user) {
        const token = jwt.sign({ username: username, password: password }, SecretCode, { expiresIn: '1h' });
        return res.send({ message: 'Logged in successfully', token: token }); // OK
    } else {
        return res.status(401).send({ message: "Invalid user" }); // Unauthorized
    }
});

router.get('/courses', AuthenticationUser, async (req, res) => {
    const courses = await Courses.find({});
    return res.json({ courses }); // OK
});

router.post('/courses/:courseId', AuthenticationUser, async (req, res) => {
    const courseId = req.params.courseId;
    const course = await Courses.findById(courseId);
    if (course) {
        const user = await Users.findOne({ username: req.user.username });
        user.purchasedCourses.push(course); // it is only pushing id(acting smart and following schema)
        await user.save();
        return res.send({ message: 'Course purchased successfully' }); // OK
    } else {
        return res.status(404).send({ message: 'Course not found' }); // Not Found
    }
});

router.get('/purchasedCourses', AuthenticationUser, async (req, res) => {
    const user = await Users.findOne({ username: req.user.username }).populate("purchasedCourses");
    const courses = user.purchasedCourses;
    return res.json({ purchasedCourses: courses }); // OK
});

export { router as userRouter };
