const http = require('http')
const {port, host} = require("./config");


http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('im server from node.js')

}).listen(port, host)

console.log(` server is running at http://${host}:${port} `)
