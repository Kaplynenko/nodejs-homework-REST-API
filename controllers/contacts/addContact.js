const Contact = require("../../models/contact");
const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(200).json(result);
};
module.exports = addContact;
