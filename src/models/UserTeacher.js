import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name: { type: String, required: true },
    registration: { type: String, required: true },
    birthdate: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    birthdate: { type: Date },
    schoolId: { type: String, required: true },
    courseId: { type: String, required: true },
});

export default mongoose.model("UserTeacher", teacherSchema)