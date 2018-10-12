//首字母大写，构造函数
var BicycleShop;
BicycleShop = function (name) {
    this.name = name;

}
var BicycleFactory = function() {
}
BicycleFactory.createBicycle = function(model){
        let bicycle;
        switch(model) {
            case 'The Speedster':
                bicycle = new Speedster();
                break;
            case 'The Lowrider':
                bicycle = new Lowrider();
                break;
            case 'The Comfort Cruiser':
                bicycle = new ComfortCruiser();
                break;
            // 缺点，新增品牌时，软件要下线
            //   剥离选择自选车的业务 工厂模式
                
            default:
                bicycle = new Giant();
        }
        return bicycle;
    }


function Speedster() {
    
  }
Speedster.prototype = {
    assemble: function(){},
    wash: function(){}
}
  
  function Lowrider() {
    
  }
  Lowrider.prototype = {
    assemble: function(){},
    wash: function(){}
}
  
  function ComfortCruiser() {
   
  }
  ComfortCruiser.prototype = {
    assemble: function(){
        console.log('组装出一部ComfortCruiser');
    },
    wash: function(){
        console.log('清洗完毕 感谢购买');
    }
}
  
  function Giant() {

  }
  Giant.prototype = {
    assemble: function(){},
    wash: function(){}
}
  



//给类添加方法
BicycleShop.prototype = {
    sellBicycle:function(model) {
        /* 有很多的车型 */
        var bicycle = 
        BicycleFactory.createBicycle(model);        
        bicycle.assemble();
        bicycle.wash();
        return bicycle;
    }
}
/* console.log(typeof BicycleShop); */
/* js BicycleShop 变量名 值  动态类型
   变量 = 变量名 + 值 + 类型
   变量没有赋值之前。 underfined
   变量的类型由值来决定
   类型决定变量的职责和功能
*/

var bicycleShop = new BicycleShop('叶斌斌大佬的自行车店');
console.log(bicycleShop.name);
var bicycle = bicycleShop.sellBicycle('The Comfort Cruiser');