//egret Main 类

class Main extends EventTarget.DisplayObjectContainer {
    constructor () {
        super();
        //如果子类要有自己的构造函数代码，它就必须要让父类的构造函数先运行
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

    }
    onAddToStage (event) {
        let textField = new egret.TextFiled();
        this.addChild(textField);
        textField.textColor = 0xff0000;
        textField.text = "hello";
    }

}

window['Main'] = Main;
egret.runEgret();