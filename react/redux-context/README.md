redux 父子组件，兄弟组件传值很麻烦
context 帮助实现跨组件传值  react-redux 基于它实现
全局状态
打破层次关系实现共享
redux ？ context

- context API redux 依靠它
childContextTypes = {
    store: PropTypes.Object
}
getChildContext () {
    return { store: {} }
}

context 分四部
- ChildContextTypes 顶层组件中规定context数据类型
- getChildContext 顶层组件中设置数据
- 后代组件通过contxtTypes 规定数据类型
- 后代组件this.context获取数据

太烦了  不是react 数据流的语法的烦 context api代码的重复，dry don‘t repeat yourself
connect react-redux HOC