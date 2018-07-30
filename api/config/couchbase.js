const couchbase = require("couchbase");

// Create new cluster that is connected to the DB.
const cluster = new couchbase.Cluster(process.env.COUCHBASE_HOST);
// Authenticate that cluster connection with the DB admin credentials.
cluster.authenticate(process.env.COUCHBASE_USER, process.env.COUCHBASE_PASS);

function openBucket(bucketName, errorHandler) {
  // Open the bucket connection.
  const bucket = cluster.openBucket(bucketName);

  // Declare how to handle an error in the connection.
  bucket.on("error", errorHandler);

  // Return the bucket instance.
  return bucket;
}

function closeBucket(bucket) {
  bucket.disconnect();
}

// This functions creates a Bucket connection from the Cluster, uses that Bucket
// to execute the query and then closes/disconnects that Bucket.
function queryBucket(bucketName = "contacts", query) {
  return new Promise((resolve, reject) => {
    // Open the bucket connection.
    const bucket = openBucket(bucketName, reject);

    // Perform the query.
    bucket.query(query, (error, data, meta) => {
      if (error) {
        reject(error);
      }

      // Close the bucket/connection.
      closeBucket(bucket);

      // Resolve the promise and return the results from the DB.
      resolve({ data, meta });
    });
  });
}

function getDocument(bucketName = "contacts", docID) {
  return new Promise((resolve, reject) => {
    // Open the bucket connection.
    const bucket = openBucket(bucketName, reject);

    bucket.get(docID, (err, data) => {
      closeBucket(bucket);

      if (err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = { queryBucket, getDocument };
