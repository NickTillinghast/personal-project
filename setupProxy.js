const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/auth",
    proxy({
      target: "http://localhost:4001",
      changeOrigin: true
    })
  );
};
