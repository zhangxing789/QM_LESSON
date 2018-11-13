//命令 ？ 
//1. 按键事件
//  不同的按键执行不同的操作？
//2. 不同的player JSON 
//接口 Interface    英雄可以替换使用 完成了解耦


const Ryu = {
    name: 'Ryu',
    attack () {
        console.log(this.name + '攻击');
    },
    defense () {
        console.log(this.name + '防御');
    },
    jump () {
        console.log(this.name + '跳跃');
    },
    crouch () {
        console.log(this.name + '蹲下');
    }
}

//回放功能， 数据结构， 栈， 数组就是最简单的栈
const commandStack = [];

const makeCommand = function (receiver, state) {
    //命令对象生成者, 按键对应的操作出来了， 这样就解耦了
    //目的不是执行函数而是找到对应的对象的相应动作函数 进行返回
    return function () {
        if (receiver[state]) {
            receiver[state]();
            
        }
       
    }    
}

const commands = {
    "119": "jump",
    "115": "crouch",
    "97": "defense",
    "100": "attack"
}

document.onkeypress = function (ev) {
    var keyCode = ev.keyCode;
    var command = makeCommand(Ryu, commands[keyCode]);
    if (command) {
        commandStack.push(command);

        command();
    }
}

document.getElementById('backBtn').addEventListener('click', function() {
    //commandStack 操作的历史 ， makeCommand 返回了命令对象 命令时 请记起来命令模式
    var command;
    while (command = commandStack.shift()) {
        command();
    }
}, false);