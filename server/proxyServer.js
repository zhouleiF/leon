var httpProxy = require('http-proxy'),
    options = {
        pathnameOnly: true,
        router: {
            '/projects/jsconsole': '127.0.0.1:8000',
            '/projects/weinre': '127.0.0.1:8001',
            '/api': '127.0.0.1:8002'
        }
    },
    proxyServer = httpProxy.createServer(options)
    proxyServer.listen(80)
