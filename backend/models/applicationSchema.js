import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please enter your name"],
        minLength:[3,"Name must contain atleast 3 character"],
        maxLength:[30,"Name not exceed more than 30 character"],
    },
    email:{
        type: String,
        validator:[validator.isEmail, "please enter valid email"],
        required:[true, "please enter your email"]
    },
    coverLetter:{
        type: String,
        required:[true,"please provide cover letter"],
    },
    phone:{
        type: Number,
        required:[true, "please enter the number"],
    },
    address:{
        type: String,
        required:[true,"please enter your current address"]
    },
    resume:{
        public_id:{
            type: String,
             required: true
        },
        url:{
            type: String,
            required: true
        },
    },
    applicationID:{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        role:{
            type: String,
            enum:["Job Seeker"],
            required: true
        },
    },
    employerID:{
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        role:{
            type: String,
            enum:["Employer"],
            required: true
        },
    },
})


export const Application = mongoose.model("Application", applicationSchema)
