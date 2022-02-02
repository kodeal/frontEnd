const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/common',{
            target: 'http://52.231.75.227:8000',
            changeOrigin: true,
        })
    );
    // app.use(
    //     createProxyMiddleware('/common',{
    //         target: 'http://52.231.75.227:8000',
    //         changeOrigin: true,
    //     })
    // );
    // app.use(
    //     createProxyMiddleware('/common',{
    //         target: 'http://52.231.75.227:8000',
    //         changeOrigin: true,
    //     })
    // );
};