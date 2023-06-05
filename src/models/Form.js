import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now(), required: true },
    breakfast: { type: Number, min: 0, max: 5, required: true },
    nap: { type: Number, min: 0, max: 5, required: true },
    lunch: { type: Number, min: 0, max: 5, required: true },
    pee: { type: Boolean, required: true },
    poop: { type: Boolean, required: true },
    observations: { type: String },
    teacherId: { type: String, required: true },
    studentId: { type: String, required: true },
    courseId: { type: String, required: true }
});

export default mongoose.model("Form", formSchema);


