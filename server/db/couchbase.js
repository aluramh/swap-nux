var couchbase = require('couchbase')

var cluster = new couchbase.Cluster(process.env.COUCHBASE_HOST)
cluster.authenticate(process.env.COUCHBASE_USER, process.env.COUCHBASE_PASS)
var bucket = cluster.openBucket(process.env.COUCHBASE_BUCKET)

bucket.on('error', err => {
  console.log(err)
})

module.exports = bucket
