  var StartLayer = cc.Layer.extend({
      ctor:function () {
          this._super();

          var size = cc.winSize;
		  
		  var sp = new cc.Sprite("res/background.png");
		  cc.director.getRunningScene().addChild(sp,0);
          sp.setPosition(cc.director.getVisibleSize().width/2, cc.director.getVisibleSize().height/2);


		  
		  var startItem = new cc.MenuItemImage(
             res.Start_N_png,
             res.Start_S_png,
             function () {
                 cc.log("Menu is clicked!");
				 cc.director.runScene(new PlayScene());
             }, this);
		  startItem.attr({
			x: size.width/2,
			y: size.height/2,
			anchorX: 0.5,
			anchorY: 0.5
		  });

		  var menu = new cc.Menu(startItem);
		  menu.x = 0;
		  menu.y = 0;
		  this.addChild(menu, 1);

          return true;
      }
  });

  var StartScene = cc.Scene.extend({
      onEnter:function () {
          this._super();
          var layer = new StartLayer();
          this.addChild(layer);
      }
  });