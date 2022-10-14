const { query } = require("express");
const Contact = require("../../models/contact");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.find({ owner, ...query });
  res.json(result);
};
module.exports = getAll;
