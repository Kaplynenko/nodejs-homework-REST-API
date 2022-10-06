const express = require("express");

const { isValidId } = require("../../middleWares");
const { validateBody } = require("../../middleWares");
const router = express.Router();
const schemas = require("../../Schema/contacts");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const ctrl = require("../../controllers/contacts");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.deleteContact));

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateContact)
);
router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;
