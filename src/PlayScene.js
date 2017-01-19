var quiz = Array(
            {"question":"我的经历就是到了上海，\n到了20世纪____的时候，我在想我估计也\n快离休了，我想我应该去当大学教授。",
                "optA":"70年代初",
                "optB":"80年代初",
                "optC":"80年代末"},

            {"question":"人呐就都不知道，自己不可以预料，\n一个人的命运啊，当然要靠自我奋斗，\n但是也要考虑历史的____。",
                "optA":"进程",
                "optB":"旅程",
                "optC":"行程"},

            {"question":"我绝对不知道，我作为一个上海__\n怎么把我选到北京去了。",
                "optA":"党委书记",
                "optB":"市长",
                "optC":"市委书记"},

            {"question":"所以我就到了北京，到了北京我干了这十几年也没有什么别的，大概___件事。",
                "optA":"5",
                "optB":"4",
                "optC":"3"},

            {"question":"如果说还有一点成绩就是____。",
                "optA":"提出了三个代表",
                "optB":"建立了社会主义市场经济",
                "optC":"军队一律不能经商"},

            {"question":"但是这些都是次要的，我主要的就是三件事情。\n很惭愧，就做了一点__的工作，\n谢谢大家！",
                "optA":"微薄",
                "optB":"平凡",
                "optC":"微小"},

            {"question":"“____呢，最近发表了一个报告说呢，\n北京会透过一些渠道去影响、干预香港的法治。\n你对这个看法有什么回应呢？”\n“没听到过！”",
                "optA":"美国",
                "optB":"路透社",
                "optC":"欧盟"},

            {"question":"假使这些完全____的东西，\n你再帮他说一遍，你等于\n——你也有责任吧？！",
                "optA":"不知真假",
                "optB":"毫无证据",
                "optC":"无中生有"},

            {"question":"没有，没有任何这个意思！\n还是按照香港的、按照基本法、\n按照__——去产生……",
                "optA":"宪法",
                "optB":"行政法",
                "optC":"选举法"},

            {"question":"刚才你们问我呀，我可回答你说“___”。\n但是你们又不高兴，那怎么办？！",
                "optA":"不知道",
                "optB":"不了解",
                "optC":"无可奉告"},

            {"question":"你们要知道，美国的华莱士，\n（___）那比你们不知要高到哪里去了。",
                "optA":"激动地挥舞着手",
                "optB":"朝天指着天花板",
                "optC":"伸出双手大拇指作称赞状"},

            {"question":"你们非常熟悉西方的那一套的理论，\n你们毕竟还____!\n——明白这意思吗？！",
                "optA":"sometimesnaive",
                "optB":"toosimple",
                "optC":"tooyoung"},

            {"question":"但是你们啊，你们\n——我感觉你们新闻界，还要学习___。",
                "optA":"一些",
                "optB":"一下",
                "optC":"一个"},

            {"question":"我告诉你们，我\n是___了！见得多了！",
                "optA":"出生入死",
                "optB":"枪林弹雨",
                "optC":"身经百战"},

            {"question":"就是说媒体呀，还是要提高\n自己的姿势水平。____？",
                "optA":"懂不懂啊",
                "optB":"知不知道啊",
                "optC":"识得唔识得啊"},

            {"question":"全世界跑到什么地方，你们\n比其他的西方记者,跑得还快！\n但是___呀，都tooyoung,\ntoosimple,sometimesnaive！",
                "optA":"说来说去的话",
                "optB":"提来提去的询问",
                "optC":"问来问去的问题"},

            {"question":"我很抱歉，我今天是作为\n一个长者，跟你们讲的！我不是___，\n但是我见得太多了，有必要告诉你\n一点人生的经验。",
                "optA":"新闻共同体",
                "optB":"西方记者",
                "optC":"新闻工作者"},

            {"quesiton":"刚才我很想啊，就我每次碰到你们，\n我就想到中国有句话叫:____。",
                "optA":"这是坠吼的",
                "optB":"图样图森破",
                "optC":"闷声发大财"},

            {"question":"哎，连任也按照香港的法律呀，\n对不对？要按着香港的——\n当然我们的____，也是很重要的！",
                "optA":"知情权",
                "optB":"选举权",
                "optC":"决定权"},

            {"question":"我沒有說要欽定，沒有任何\n這個意思，但是你必要問我對\n董先生支持不支持，我怎麼不支持？\n他現在是____呀，我們怎麼\n不支持__？對不對？",
                "optA":"政委",
                "optB":"元首",
                "optC":"特首"}

);


var PlayLayer = cc.Layer.extend({
      bgSprite:null,
      question:null,
      optA:null,
      optB:null,
      optC:null,
      QueOptList:Array(),
      answerList:Array(),
      questionNum:1,
      hintToAnswer:"我大可以说无可奉告，你又要不高兴",
      wrongList:Array("你们啊还是要学习一个","要多多提高自己的姿势水平", "我是见得多了"),
      rightList:Array("看来你也见得多了","你得到了几百个教授一致通过","你很熟悉西方那一套理论"),
      correctAnswer:0,
      ctor:function () {
          this._super();

          var size = cc.winSize;

          this.bgSprite = new cc.Sprite(res.BackGround_png);
          this.bgSprite.attr({
              x: size.width / 2,
              y: size.height / 2,
          })
          cc.log("hello");
          this.addChild(this.bgSprite, 0);

         var indexs = Array();
         for(var i = 0; i < 8 ;){
                var newIndex = Math.floor(Math.random() * quiz.length );
                if(indexs.indexOf(newIndex) == -1){
                    indexs.push(newIndex);
                    i += 1;
               }
        }
          cc.log("hello");

          for(var i = 0; i < 8 ; i++ ){
              this.QueOptList.push(quiz[indexs[i]]);
              this.answerList.push(3);
          }
          cc.log("hello");


		  this.question = new cc.LabelTTF("","written",25);
		  this.question.x = size.width/2;
          this.question.y = size.height/2+50;
          this.question.setColor(cc.color.BLACK);
		  this.addChild(this.question,0);


          this.optA = new cc.LabelTTF("","written",25);
          this.optA.x = size.width/2;
          this.optA.y = size.height/2-50;
          this.optA.setColor(cc.color.BLACK);
		  this.addChild(this.optA,0);

          this.optB = new cc.LabelTTF("","written",25);
          this.optB.x = size.width/2;
          this.optB.y = size.height/2-100;
          this.optB.setColor(cc.color.BLACK);
		  this.addChild(this.optB,0);

          this.optC = new cc.LabelTTF("","written",25);
          this.optC.x = size.width/2;
          this.optC.y = size.height/2-150;
          this.optC.setColor(cc.color.BLACK);
		  this.addChild(this.optC,0);

		  this.hintToAnswer = new cc.LabelTTF("请开始你的表演","written",25);
		  this.hintToAnswer.x = size.width/2;
		  this.hintToAnswer.y = size.height/2 + 150;
		  this.hintToAnswer.setColor(cc.color.BLACK);
		  this.addChild(this.hintToAnswer,0)

		  this.refreshQA(this.questionNum);

          cc.log("hello");

          cc.eventManager.addListener({
              event: cc.EventListener.TOUCH_ONE_BY_ONE,
              swallowTouches: true,
              onTouchBegan: function (t, e) {
                  return true;
              },
              onTouchEnded: function (t, e) {
                  var target = e.getCurrentTarget();
                  var pos = t.getLocation();
                  var type = 0;
                  if (cc.rectContainsPoint(cc.rect(0,cc.winSize.height / 2 - 50,cc.winSize.width,50),pos)){
                      type = 1;
                  }
                  else if (cc.rectContainsPoint(cc.rect(0,cc.winSize.height / 2-100,cc.winSize.width,50),pos)){
                      type = 2;
                  }
                  else if (cc.rectContainsPoint(cc.rect(0,cc.winSize.height / 2-150,cc.winSize.width,50),pos)){
                      type = 3;
                  } else {
                      return true;
                  }


                  if(type == target.answerList[target.questionNum]){
                      target.correctAnswer += 1;
                      var randomIndex = Math.floor(Math.random() * 3);
                      target.hintToAnswer.setString(target.rightList[randomIndex]);
                  }else{
                      var randomIndex = Math.floor(Math.random() * 3);
                      target.hintToAnswer.setString(target.wrongList[randomIndex]);
                  }

                  if(target.questionNum == 8){
                      //to result
                      cc.log("Result comes out.");
                      cc.director.runScene(new ResultScene());

                      return true;
                  }

                  target.questionNum += 1;
                  target.refreshQA(target.questionNum);

              },
              onTouchMoved: function () {
                  return true;
              }
          }, this);

          return true;
      },
      refreshQA:function (num) {
          this.question.setString(this.QueOptList[num]['question']);
          this.optA.setString(this.QueOptList[num]['optA']);
          this.optB.setString(this.QueOptList[num]['optB']);
          this.optC.setString(this.QueOptList[num]['optC']);

      }
  });



  var PlayScene = cc.Scene.extend({
      onEnter:function () {
          this._super();
          var layer = new PlayLayer();
          this.addChild(layer);

      }
  });




