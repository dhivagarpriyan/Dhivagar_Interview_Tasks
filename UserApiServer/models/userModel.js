import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema({
    name: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    dob: { type: Date, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    createdOn: { type: Date, default: Date.now },
    modifiedOn: { type: Date, default: Date.now },
});

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;
