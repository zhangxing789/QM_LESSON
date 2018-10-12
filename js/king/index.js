const chior = []; //乐队

//只有会嘎嘎叫的才要 check
//代码 流程 组成乐队 办事流程
var duck = {
    duckSing:function(){
        console.log('嘎嘎嘎');
    }
}

//要求1000只 能找到999只duck
/*for(var i=0;i<999;i++){
    if(typeof duck.duckSing === 'function'){
    chior.push(chicken);
    }
}*/

//js 动态类型的语言

var chicken = {
    chickSing: function(){
        console.log('咯咯咯');
    },
 /*   duckSing: function(){
        console.log('嘎嘎嘎');
    }
*/
}

//如果它走起路来是鸭子，叫起来也是鸭子，那么就是鸭子，duck typing js弱类型

/*
  功能加入合唱团
  params：animal 动物对象
  chior 加入新成员
 */
function joinChior(animal){
    if(animal && typeof animal.duckSing === 'function'){
        chior.push(animal);
    }

}

//函数式编程,将编程目的分成一个或多个函数取代逐行式编程
//将流程式开发 函数式 完成封装
for(var i=0;i<999;i++){
    joinChior(duck);
}

chicken.duckSing = function(){
    console.log('嘎嘎嘎');
}

joinChior(chicken);
console.log(chior.length);



