var httpProxy = require('http-proxy');

var turbulenceHost = process.env.TURBULENCE_HOST

var proxy = httpProxy.createServer({
  target:'https://' + turbulenceHost + ':8080',
  secure: false
});

var port = process.env.LISTENING_PORT

proxy.listen(port);
