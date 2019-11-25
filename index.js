const express = require("express"),
  server = require("./server"),
  app = express();
app.use(server);
