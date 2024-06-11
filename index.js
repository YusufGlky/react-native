const EMAIL_REGEX = "/^[^s@]+@[^s@]+.[^s@]+$/";
function isValidEmail(email) {
  const emailRegex = EMAIL_REGEX;
  return emailRegex.test(email);
}
module.exports = { isValidEmail };
