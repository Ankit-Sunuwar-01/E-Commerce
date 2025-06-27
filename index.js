const http = require("http");
const app = require("./src/config/express.config");

//IIFS
(() => {
  const httpServer = http.createServer(app);

  const PORT = 9005;
  const HOST = "localhost";

  httpServer.listen(PORT, HOST, () => {
    console.log(`URL: http://${HOST}: ${PORT}`);
    console.log("Serve is connected sucessful in port:" + " " + PORT);
    console.log("Press CTRL+C to disconnected the server....");
  });
})();
