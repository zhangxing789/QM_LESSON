- 嵌套
  省去选择器的重复输入，会自动帮助我们补全上层的选择器
  嵌套给css带来了模块化的概念
  一个模块下的所有样式，统一组织

- css 技巧
  1. vertical-align 兄弟之间,非父子间对齐
  ，通常用在图片跟文字默认底部对齐
  2. 自定义字体 @font-face
  图标字体库 优化 fonts文件夹
  再使用：before 伪元素 content:'\e123'
  3. @media 条件 媒体查询
  自适应不同的手机
    min-device-pixel-ratio
    img 在不同pixel ratio 2x 3x

- stylus 技巧
  代码片段的复用 使用函数 mixin 混合