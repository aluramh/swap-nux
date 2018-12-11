const bcrypt = require("bcrypt");
const saltRounds = 3;

const encryptPassword = plaintext => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return reject(err);

      bcrypt.hash(plaintext, salt, (err, hash) => {
        if (err) return reject(err);
        resolve(hash);
      });
    });
  });
};

module.exports = encryptPassword;
