const couchbase = require("couchbase");

const cluster = new couchbase.Cluster(process.env.COUCHBASE_HOST);
// Authenticate that cluster connection with the DB admin credentials.
cluster.authenticate(process.env.COUCHBASE_USER, process.env.COUCHBASE_PASS);

module.exports = {
  cluster
};
