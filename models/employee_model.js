import mongoose from "mongoose";



const Schema = mongoose.Schema;

const userSchema = new Schema({
    saluatation: String,
    firstName: String,
    lastName: String,
    email: { type: String },
    phone: { type: String, },
    gender: { type: String, },
    qualification: { type: String },
    adress: String,
    city: String,
    state: String,
    Country: String,
    userName: String,
    password: String
});

const employee = mongoose.model('Employee', userSchema, 'employeeDetails');


export {employee};