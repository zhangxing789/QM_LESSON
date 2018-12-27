// 写 要有规则 何时写 如何写 dispatch 只有代号
// 只负责state的计算
export const storeChange = (state, action) => {
    switch (action.type) {
        case 'HEAD_COLOR':
            state.head.color = action.color
            break;
        case 'BODY_TEXT':
            state.body.text = action.text
            break;
        default:
            break;
    }
}