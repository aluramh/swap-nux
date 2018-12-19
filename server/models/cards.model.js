const N1qlQuery = require("couchbase").N1qlQuery;
const { cluster } = require("../config/couchbase");

function applyFilters(statement, filters) {
  if (!Object.getOwnPropertyNames(filters).length) {
    return statement;
  }

  let filterQueries = "";

  // This way ensure that we only provide valid filter names in the querystring
  const { category, position } = filters;

  if (category) {
    filterQueries += ` AND category="${category}"`;
  }
  if (position) {
    filterQueries += ` AND Position="${position}"`;
  }

  return statement + filterQueries;
}

function findAll(userID, filters) {
  let statement = `
    SELECT Name, Position, category
    FROM \`card_bucket\` 
    WHERE userID="${userID}"`;

  statement = applyFilters(statement, filters);

  const query = N1qlQuery.fromString(statement);

  return new Promise((resolve, reject) => {
    const cardBucket = cluster.openBucket("card_bucket");

    cardBucket.query(query, (error, rows, meta) => {
      if (error) {
        reject(error);
      }
      const { resultCount } = meta.metrics;

      resolve({
        cards: rows,
        resultCount
      });
    });
  });
}

function searchByTerm(userID, term) {
  let statement = `
    SELECT Name, Position, category
    FROM \`card_bucket\` 
    WHERE userID = "${userID}" AND
    LOWER(Name) LIKE "%${term.toLowerCase()}%"`;

  const query = N1qlQuery.fromString(statement);

  return new Promise((resolve, reject) => {
    const cardBucket = cluster.openBucket("card_bucket");

    cardBucket.query(query, (error, rows, meta) => {
      if (error) {
        reject(error);
      }
      const { resultCount } = meta.metrics;

      resolve({
        cards: rows,
        resultCount
      });
    });
  });
}

module.exports = {
  findAll,
  searchByTerm
};
