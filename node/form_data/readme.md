1. Backend
    Web Server  硬件服务器 || php java 等语言 来提供后端服务器应用程序
    提供http访问 http://127.0.0.1:3000/index?a=1&b=2
    http:// protocol 协议
    127.0.0.1   IP地址 => domain 映射 baidu.com
    3000 端口号 从此端口进入伺服状态
    /path 路径 
    ？ querystring

2. 类事件的概念
    http.createServer((req, res) => {
        
    })
    server.listen(port, ip, () => {})