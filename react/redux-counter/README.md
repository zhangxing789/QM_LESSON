- 代码结构
    store
        状态仓库 共享和管理 财务部
            共享状态 getState setState 
- 组件通信 
    api

统一状态树 Store 唯一的
1. store.getState() 返回状态 只读
2. store.dispatch({ type: 'INCREMENT' })
    相应的reducer 得以计算 返回新的状态
    MVVM 更新 UI 