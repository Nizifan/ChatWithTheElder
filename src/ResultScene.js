var ResultLayer = cc.Layer.extend({

    judge:null,

    ctor:function () {
        this._super();

        var size = cc.winSize;

        var sp = new cc.Sprite("res/background.png");
        cc.director.getRunningScene().addChild(sp,0);
        sp.setPosition(cc.director.getVisibleSize().width/2, cc.director.getVisibleSize().height/2);
        this.judge = new cc.LabelTTF("支持董先生","written",25);
        this.judge.x = size.width / 2;
        this.judge.y = size.height / 2;
        this.judge.setColor(cc.color.BLACK);
        this.addChild(this.judge,1);




        return true;
    }
});

var ResultScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new ResultLayer();
        this.addChild(layer);
    }
});