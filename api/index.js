const express = require("express");

// Create express instnace
const app = express();

// Require API routes
const routes = require("./routes");

// Import API Routes
app.use(routes);

// Export the server middleware
module.exports = {
  path: "/api",
  handler: app
};
