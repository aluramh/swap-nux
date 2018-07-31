const getCluster = require("./config");
let cluster = null;

function getBucket(bucketName) {
  // If there is no cluster connection, make one and save it.
  if (!cluster) {
    // Get a Cluster connection.
    cluster = getCluster();
  }

  // Open the bucket connection.
  const bucket = cluster.openBucket(bucketName);

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
    const bucket = getBucket(bucketName, reject);

    // Perform the query.
    bucket.query(query, (error, data, meta) => {
      // Close the bucket/connection.
      closeBucket(bucket);

      // Check for errors.
      if (error) return reject(error);
      // Resolve the promise and return the results from the DB.
      resolve({ data, meta });
    });
  });
}

// This function creates a bucket, queries for an ID, closes the bucket and
// handles the response/error.
function getDocument(bucketName = "contacts", docID) {
  return new Promise((resolve, reject) => {
    // Open the bucket connection.
    const bucket = getBucket(bucketName, reject);

    bucket.get(docID, (err, data) => {
      closeBucket(bucket);

      if (err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = { queryBucket, getDocument };
