/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  const regex1 = /[a-z]/;
  const regex2 = /[A-Z]/;
  const regex3 = /[0-9]/;
  const str = "!@#$%^&*()-+";

  let flag = false;

  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1]) {
      return false;
    }
  }

  for (let i = 0; i < password.length; i++) {
    if (str.includes(password[i])) {
      flag = true;
    }
  }

  if (!flag) {
    return false;
  }

  return (
    password.length >= 8 &&
    regex1.test(password) &&
    regex2.test(password) &&
    regex3.test(password)
  );
};
