import express from "express";
const app = express();
import {mongoose} from "mongoose";
import cors from "cors";

import { userRouter } from "./routes/user.js";
import { adminRouter } from "./routes/admin.js";
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/admins", adminRouter);

mongoose.connect("mongodb+srv://brihat7:HBSLd1pcTTVD8pwh@cluster0.fcaoknh.mongodb.net/courses");

app.listen(3000, () => console.log("Server is listening at 3000"));