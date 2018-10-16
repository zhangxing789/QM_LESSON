const html = `
    <view>
        <text>{{username}}</text>
    </view>
`;    
let obj = {
    'username': 'zx'
};

/* {{}}
在模板中查找{{key}}
替换成 username 变量的值 replace */
function compile (html) {
    //匹配占位符
    if (/\{\{(.*)\}\}/.test(html)){
        let key = RegExp.$1;
        html = html.replace(/\{\{(.*)\}\}/gm, obj[key]);
    }
    return html;
}

const compiledHTML = compile(html);
console.log(compiledHTML);