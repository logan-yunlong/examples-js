const http = require('http');
const {host, port} = require('./config')
const querystring = require("querystring");

const getByHttp = () => {
    var options = {
        hostname: host, port, path: '/', method: "GET",
    }
    const req = http.request(options, res => {
        console.log('status:' + res.statusCode)
        console.log('headers:' + JSON.stringify(res.headers))
        res.setEncoding('utf-8')
        res.on('data', (chunk) => {
            console.log(chunk)
        })
    })
    req.on('data', (chunk) => {
        console.log('req chunk' + chunk);
    })
    req.end();
}

// getByHttp();

const postByHttp = () => {
    const postData = querystring.stringify({
        'msg': 'Hello World!'
    });

    const options = {
        hostname: 'www.google.com', port: 80, path: '/upload', method: 'POST', headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(postData)
        }
    };
    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });
        res.on('end', () => {
            console.log('No more data in response.');
        });
    });

    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });
    req.writable.writableLength

// Write data to request body
    req.write(postData);
    req.end();
}
postByHttp();
