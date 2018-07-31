const N1qlQuery = require("couchbase").N1qlQuery;
const { queryBucket } = require("../config/couchbase");

module.exports = {
  async getContacts() {
    // Build query string and query it to a bucket. Return the promise of that response.
    let query = N1qlQuery.fromString(`SELECT META().id, c.* FROM contacts c`);

    // Get the data and metrics from the DB query.
    const {
      data,
      // Destructure the "meta" data to get the "resultCount"
      meta: {
        metrics: { resultCount: count }
      }
    } = await queryBucket("contacts", query);

    return { count, data };
  }
};
