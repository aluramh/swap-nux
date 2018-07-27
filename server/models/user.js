const { getDocument } = require("../config/couchbase");

module.exports = {
  async getUser(id) {
    const response = await getDocument("user_bucket", id);
    return response;
  }
};
