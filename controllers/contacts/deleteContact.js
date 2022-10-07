const { RequestError } = require("../../helpers");
const Contact = require("../../models/contact");
const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw RequestError(400, "Not found");
  }
  res.json("contact deleted");
};
module.exports = deleteContact;
