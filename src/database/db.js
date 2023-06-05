import mongoose from "mongoose";

async function connectDatabase() {
    await mongoose.connect(
        "mongodb+srv://quaresmaamanda4:3EYWFQMF2cnBKSmC@mandy.fhynimk.mongodb.net/"
    )
}

export default connectDatabase