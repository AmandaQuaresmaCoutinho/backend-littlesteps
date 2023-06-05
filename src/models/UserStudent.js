import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    registration: { type: String, required: true },
    birthdate: { type: Date, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    fathersName: { type: String, required: true },
    mothersName: { type: String, required: true },
    courseId: { type: String, required: true },
});

export default mongoose.model("UserStudent", studentSchema)