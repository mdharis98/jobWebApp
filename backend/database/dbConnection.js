import mongoose from "mongoose";


export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_SEEKING_WEBSITE_USING_MERN_STACK"
    }).then(()=>{
        console.log('connected to database')
    }).catch((err) =>{
        console.log(`some error occured while connecting to databas ${err}`)
    })
}