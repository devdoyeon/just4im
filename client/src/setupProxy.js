const { createProxyMiddleware } = require('http-proxy-middleware');
const t = 'http://localhost:5000/'; // 지은님

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: t,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
