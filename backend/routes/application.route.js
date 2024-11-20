import express from 'express';
import { applyJob, getApplications, getAppliedJobs, updateStatus } from '../controllers/application.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';


const router = express.Router();

router.route('/apply/:id').get(isAuthenticated,applyJob);
router.route('/get').get(isAuthenticated,getAppliedJobs);
router.route('/:id/applicants').get(isAuthenticated,getApplications);
router.route('/status/:id/update').put(isAuthenticated,updateStatus);

export default router;