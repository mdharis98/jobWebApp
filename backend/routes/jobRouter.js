import express from  "express";
import { deleteJobs, getAllJobs, getMyjobs, postJob, updateJob, getSingleJob} from '../controllers/jobController.js';
import {isAuthorized} from '../middlewares/auth.js'


const router = express.Router();

router.get("/getall", getAllJobs)
router.post("/post", isAuthorized, postJob)
router.get("/getmyjobs", isAuthorized, getMyjobs)
router.put("/updatejob/:id", isAuthorized, updateJob)
router.delete("/deletejob/:id", isAuthorized, deleteJobs)
router.get("/:id", isAuthorized, getSingleJob);

export default router; 