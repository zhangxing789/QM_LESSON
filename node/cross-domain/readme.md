# 前端跨域问题解决方法
  - cookies
    网站为了识别用户身份，进行session跟踪而存储在用户本地终端上的数据。服务端和客户端都可访问或操作。
    ctx.cookies.set document.cookie 形式是；隔开的key=value
  1. path 选项
    指定coolie 有效选项
  2. http-only
    true js 无法获取cookie的值，增强了安全性
  3. maxAge
    页面加载后cookie有效时间
  4. expires
    cookie失效截止时间
  5. overwrite
    是否允许被覆盖

跨域
同源：协议 域名 端口 都一致
同源策略 浏览器会拒绝这次请求

1 A 网银网站 Cookie
2 QQ 澳门赌场 向网银cookie 发出读的请求
3 同源策略

book.douban.com movie.douban.com
前端工程化进化，前后端分离 vue 8080 koa api 3000


  - jsonp
    1. 浏览器不允许跨域的读操作
    2. 跨域资源嵌入 img src script[src]
    前后端

  - cors