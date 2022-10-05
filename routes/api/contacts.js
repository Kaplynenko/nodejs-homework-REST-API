const express = require("express");
// const { request } = require("../../app");
const { RequestError } = require("../../helpers");
const { validateBody } = require("../../middleWares");
const router = express.Router();
const schemas = require("../../Schema/contacts");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const ctrl = require("../../controllers/contacts");

// router.get("/", ctrlWrapper(ctrl.getAll));

// router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

// router.delete("/:contactId", ctrlWrapper(ctrl.deleteContact));

// router.put(
//   "/:contactId",
//   validateBody(schemas.addSchema),
//   ctrlWrapper(ctrl.updateContact)
// );

module.exports = router;
