const express = require("express");
const billingControllers = require("../controllers/billing.controller");
const userControllers = require("../controllers/user.controller");

const router = express.Router();

router.route("/add-billing").post(billingControllers.newBilling);
router.route("/billing-list").get(billingControllers.getBilling);
router.route("/delete-billing/:id").delete(billingControllers.deleteBilling);
router.route("/update-billing/:id").put(billingControllers.updateBilling);
router.route("/add-user").post(userControllers.addUser);
router.route("/get-user/:email").get(userControllers.getUser);
router.route("/post-job").post(userControllers.jobPost);
router.route("/get-job").get(userControllers.getJobs);
router.route("/get-jobById/:id").get(userControllers.getJobsById);
router.route("/job-apply").patch(userControllers.jobApply);
// router.route("/upload").post(userControllers.fileUpload);
module.exports = router;
