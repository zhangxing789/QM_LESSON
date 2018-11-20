const http = require('http');
const zlib = require('zlib');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //http 返回， 头部几个字节， 头部信息 快
    //on data end 类型

    const acceptEncoding = req.headers['accept-encoding'];
    console.log(acceptEncoding);
    if (acceptEncoding.indexOf('gzip') !== 1) {
        gzip = zlib.createGzip();

        res.writeHead(200, {
            'Content-Encoding': 'gzip',
            'Content-Type': "text/plain; charset=utf-8"
        
        });
        fs.createReadStream('./a.txt').pipe(gzip).pipe(res);
    
    }else {
        fs.createReadStream('./a.txt').pipe(res);
    }
    
    
})



server.listen(3000, '127.0.0.1', () => {
    console.log('服务器启动了');
})