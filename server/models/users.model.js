const N1qlQuery = require("couchbase").N1qlQuery;
const { cluster } = require("../config/couchbase");

function findById(userID) {
  return new Promise((resolve, reject) => {
    const userBucket = cluster.openBucket("user_bucket");

    userBucket.get(userID, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

function findByUsername(username) {
  const statement = `
        SELECT docID, \`password\`
        FROM user_bucket WHERE email="${username}"`;

  const query = N1qlQuery.fromString(statement);

  return new Promise((resolve, reject) => {
    const userBucket = cluster.openBucket("user_bucket");

    userBucket.query(query, (error, rows, meta) => {
      if (error) {
        reject(error);
      }
      resolve(rows[0]);
    });
  });
}
module.exports = {
  findById,
  findByUsername
};
