const express = require("express");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(`server sarted at ${PORT}`);
  });
};

setupAndStartServer();
