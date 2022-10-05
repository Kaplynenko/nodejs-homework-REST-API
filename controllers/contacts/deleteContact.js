const { RequestError } = require("../../helpers");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw RequestError(400, "Not found");
  }
  res.json("contact deleted");
};
module.exports = deleteContact;
