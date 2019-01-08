- 启动一个web server
HTTP Server 3000 伺服

用户request(n) 中间件(函数)  response(访问结束)

图片/css/js/text， 不可能都给url 静态资源服务

中间件有顺序的， next
response.body 