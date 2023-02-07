const express = require("express");
const billingControllers = require("../controllers/billing.controller");

const router = express.Router();

router.route("/add-billing").post(billingControllers.newBilling);
router.route("/billing-list").get(billingControllers.getBilling);
router.route("/delete-billing/:id").delete(billingControllers.deleteBilling);
router.route("/update-billing/:id").put(billingControllers.updateBilling);
// router.route("/get-bill-with-name/:id").put(billingControllers.getBillWithName);

module.exports = router;
