const couchbase = require("couchbase");

// Create new cluster that is connected to the DB.
const cluster = new couchbase.Cluster(process.env.COUCHBASE_HOST);
// Authenticate that cluster connection with the DB admin credentials.
cluster.authenticate(process.env.COUCHBASE_USER, process.env.COUCHBASE_PASS);

// This functions creates a Bucket connection from the Cluster, uses that Bucket
// to execute the query and then closes/disconnects that Bucket.
function queryBucket(bucketName = "contacts", query) {
  return new Promise((resolve, reject) => {
    // Open the bucket connection.
    const bucket = cluster.openBucket(bucketName);

    // Declare the error handler.
    bucket.on("error", err => {
      console.error(err);
      reject(err);
    });

    // Perform the query.
    bucket.query(query, (error, data, meta) => {
      if (error) {
        reject(error);
      }

      // Close the bucket/connection.
      bucket.disconnect();

      // Resolve the promise and return the results from the DB.
      resolve({ data, meta });
    });
  });
}

module.exports = queryBucket;
