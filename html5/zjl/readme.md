为了封装性，易用性， 代码的可读性，
将弹幕的业务逻辑 （独立） 封装成一个类 并将其模块化
直接在浏览器端引入export default ;
import模块化关键字，浏览器目前还不支持，
async 最近版本谷歌支持  syntax
如何用面向未来的编码风格  又能够编译通过
写的代码 compile babel 最后执行的代码不一样
webpack 
    test.js
        babel-loader es5
webpack-dev-server


webpack-dev-server http server 在这之前，
它会先compile webpack
entry(入口会引入更深层次的文件)
module test loader
output(出口)


- canvas 业务逻辑模式
  render()负责一直画
  递归 requestAnimationFrame(this.render.bind(this))
  renderBarrage()
  clearRect(0,0,w,h)

- barrage 集合，
  哪些是可以画的》 video.currentTime >= time 完了之后回收，item.flag = true 
  render() 

代码的思想
    面向对象 对象的职责和分工
    容器对象 canvas video data   render() 负责一直画(递归 + x 更新) constructor 生成业务对象barrage的集合
    业务细节对象 data item属性 render() 负责画出文字  constructor