const express = require("express");
const { json } = require("express");

module.exports = () => {
  const app = express();
  app.use(json())

  return app;
};
