const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/common",
    createProxyMiddleware({
      target: "http://52.231.75.227:8000",
      changeOrigin: true,
    })
  );
};
