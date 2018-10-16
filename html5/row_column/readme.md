如何设计一个跨终端的网页栅格系统， 4等分 (PC)，三等分(IPAD), 二等分(mobile)

- Twitter Bootstrap 是一个自适应的前端框架， 一份代码，到处运行。
  在一个col上定义多个尺寸， 
  media query
  .col-lg-n 超大    >1200px min-width
  .col-md-n 中等    >1000px min-width
  .col-sm-n 小型    >768px <1024px
  .col-xs-n 超小    <768    max-width

- .container
  .row
  .col-${n}

  float 具有更好的兼容性 