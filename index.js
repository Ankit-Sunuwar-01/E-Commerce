const http = require("http");

//IIFS
(() => {
  const httpServer = http.createServer();

  const PORT = 9005;
  const HOST = "localhost";

  httpServer.listen(PORT, HOST, () => {
    console.log(`URL: http://${HOST}: ${PORT}`);
    console.log("Serve is connected sucessful in port:" + " " + PORT);
  });
})();
