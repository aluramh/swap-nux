const N1qlQuery = require("couchbase").N1qlQuery;
const { getDocument, queryBucket } = require("../config/couchbase");

module.exports = {
  async getUser(id) {
    const response = await getDocument("user_bucket", id);
    return response;
  },

  // Get a single user by fields from the DB.
  async getUserByFields(fields) {
    if (Object.keys(fields).length <= 0) throw "No fields sent for DB query.";

    const whereStatements = Object.entries(fields)
      .map(([key, val]) => `AND \`${key}\` = "${val}"`)
      .join();

    const query = `SELECT * FROM user_bucket WHERE 1 ${whereStatements}`;

    const { data } = await queryBucket(
      "user_bucket",
      N1qlQuery.fromString(query)
    );
    return data;
  }
};
