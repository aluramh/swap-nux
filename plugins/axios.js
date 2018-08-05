import * as axios from "axios";

let options = {};
// The server-side needs a full url to works
if (process.server) {
  if (process.env.API_URL) {
    options.baseURL = process.env.API_URL;
    console.log("baseURL is ", options.baseURL);
  } else {
    const domain = process.env.HOST || "localhost";
    const port = process.env.PORT || 3000;

    options.baseURL = `http://${domain}:${port}`;
  }
}

export default axios.create(options);
