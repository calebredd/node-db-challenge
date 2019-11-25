const express = require("express"),
  server = express(),
  cors = require("cors"),
  apiRoutes = require("./projects/routes"),
  port = process.env.PORT || 4000;
server.use(express.json());
server.use(cors());
server.use("/", apiRoutes);
server.listen(port, () => {
  console.log("Server is running on port:" + port);
});
module.exports = server;
