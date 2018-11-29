JSX React 的 模版一种语法
Component render()
函数式组件 return()
template 跟vue不一样 在JS里 所有叫JSX babel

1. JSX 是一切组件的基础，函数式组件，以返回JSX为目标的
2. JSX 真的就是JS，阔以执行一切JS
3. React JSX React.createElement() 更优雅的表达 可读性，

JSX 是用来描述UI信息的， React.createELement()更能表达这点

不管是小程序 vue react 都是MVVM 
模版 数据绑定的{} {{}}
JSX 不支持wx:for 还好他的纯JS阔以自己写逻辑 灵活，

(
    <ul>
        {
            users.map((user, index) => <li key={index}> {user.name} </li>)
        }
    </ul>
)