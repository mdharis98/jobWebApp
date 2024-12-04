import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please Provide Job Title"],
        minLength:[3, "Job title must contain 3 characters"],
        maxLength:[50,"Job title cannot exceed more than 50 words"],
    },
    description:{
        type: String,
        required: [true, "Please Provide Job description"],
        minLength:[50, "Job description must contain 50 characters"],
        maxLength:[350,"Job description cannot exceed more than 350 words"],
    },
    category:{
        type: String,
        required:[true, "Please provide job catehory"],
    },
    country:{
        type: String,
        required:[true, "Enter Job Location Country"],
    },
    city:{
        type: String,
        required:[true, "Enter Job Location city"],
    },
    location:{
        type: String,
        required:[true, "Enter exact Job Location"],
        minLength:[50,"Job location must contaion in 50 character"],
    },
    fixedSalary:{
        type: Number,
        minLength:[4, "minimum fixed salary must in 4 digits"],
        maxLength:[9, "maximum fixed salary not exceed in 9 digits"],
    },
    salaryFrom:{
        type:Number,
        minLength:[4, "minimum salary from must in 4 digits"],
        maxLength:[7, "maximum salary from not exceed in 7 digits"],
    },
    salaryTo:{
        type:Number,
        minLength:[4, "minimum salary to must in 4 digits"],
        maxLength:[9, "maximum salary from not exceed in 9 digits"],
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    }
})


export const Job = mongoose.model("Job", jobSchema);