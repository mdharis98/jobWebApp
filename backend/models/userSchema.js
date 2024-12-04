import mongoose, { now }  from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please provide your name"],
        minLength: [3, " Name must contain at least 3 characters"],
        maxLength: [30, " Name can not exceed 30 characters"],
    },
    email:{
        type: String,
        unique:true,
        required: [true, "please provide your email"],
        validate: [validator.isEmail, "please provide a valid email"],
    },
    phone:{
        type: Number,
        required:[true,"Please enter mobile number"],
    },
    role: {
        type: String,
        required:[true, "Please provide your role"],
        default: "Job Seeker",
        enum: {
            values: ["Job Seeker", "Employer"],
            message: "Role must be either 'Job Seeker' or 'Employer'"
        },
    },
    password:{
        type:String,
        required:[true,"Please enter the password"],
        minLength:[8,"password must contain at least 8 characters"],
        maxLength:[32,"password can not exceed more than 32 character"],
        select : false
    },
    createdAt:{
        type: Date,
        default: Date, now,
    }
})



// HASHING THE PASSWORD 

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
})

// COMAPARING PASSWORD 

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// GENERATE A JSON WEB TOKEN FOR AUTHPORIZATON 

userSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE,
    })
}


export const User = mongoose.model("User", userSchema);

