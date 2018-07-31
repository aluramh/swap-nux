// . In a typical application, you would create a single, static Cluster object
// that would live for the duration of the application or the process’s lifetime.
// Create the Cluster object when the application starts and call it Dispose
// method when the application shuts down.
// https://developer.couchbase.com/documentation/server/4.0/sdks/dotnet-2.2/closing-connections.html

// NOTE: TO-DO: May need to make this a global variables useable by all during the whole
// server uptime.

const couchbase = require("couchbase");

const getCluster = () => {
  // Create new cluster that is connected to the DB.
  const cluster = new couchbase.Cluster(process.env.COUCHBASE_HOST);
  // Authenticate that cluster connection with the DB admin credentials.
  cluster.authenticate(process.env.COUCHBASE_USER, process.env.COUCHBASE_PASS);
  return cluster;
};

module.exports = getCluster;
