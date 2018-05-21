var db = require('../db/couchbase')
var couchbase = require('couchbase')
var N1qlQuery = couchbase.N1qlQuery

const getAll = (req, res) => {

    query = N1qlQuery.fromString(`SELECT META().id, c.* FROM contacts c`);
    
    db.query(query, 
        (error, rows, meta) => {

            if(error) {
                res.status(500).send(error)
            } 

            let count = meta.metrics.resultCount

            res.status(200).json({
                total: count,
                contacts: rows,      
            })
        }
    )
     
}

module.exports = {
    getAll
}