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