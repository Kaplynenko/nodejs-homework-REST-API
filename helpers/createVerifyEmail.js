const { BASE_URL } = process.env;
const createVerifyEmail = (email, verificationToken) => {
  const mail = {
    to: email,
    subject: "Підтвердження реєстрації на сайті",
    html: `<button><a href="${BASE_URL}/api/users/verify/${verificationToken}">Натиснути для підтвердження</a></button>`,
  };
  return mail;
};
module.exports = createVerifyEmail;
