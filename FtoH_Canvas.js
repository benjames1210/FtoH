(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHOAAQAAC/iHCIQiICHi/AAQi+AAiIiHQiHiIAAi/QAAi+CHiIQCIiHC+AAQC/AACICHQCHCIAAC+g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlFFGQiIiHAAi/QAAi+CIiHQCHiIC+AAQC/AACHCIQCICHAAC+QAAC/iICHQiHCIi/AAQi+AAiHiIg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AnzAAQAAi4CTiDQCSiEDOAAQDPAACSCEQCTCDAAC4QAAC5iTCDQiSCEjPAAQjOAAiSiEQiTiDAAi5g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlgE8QiTiDAAi5QAAi4CTiDQCTiDDNgBQDOABCTCDQCTCDAAC4QAAC5iTCDQiTCDjOABQjNgBiTiDg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AoYAAQAAiyCdh/QCeh/DdAAQDeAACeB/QCdB/AACyQAACzidB/QieB/jeAAQjdAAieh/Qidh/AAizg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Al6EyQieh/AAizQAAiyCeh/QCdh/DdAAQDeAACdB/QCeB/AACyQAACzieB/QidB/jeAAQjdAAidh/g");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("Ao+AAQAAisCph7QCoh7DtAAQDuAACoB7QCpB7AACsQAACtipB7QioB7juAAQjtAAioh7Qiph7AAitg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AmVEoQiph7AAitQAAisCph7QCoh7DtAAQDuAACoB7QCpB7AACsQAACtipB7QioB7juAAQjtAAioh7g");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ApkAAQAAimC0h3QCzh2D9AAQD+AACzB2QC0B3AACmQAACni0B3QizB2j+AAQj9AAizh2Qi0h3AAing");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AmwEeQizh3AAinQAAimCzh3QC0h2D8AAQD9AAC0B2QCzB3AACmQAACnizB3Qi0B2j9AAQj8AAi0h2g");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AqJAAQAAigC+hyQC/hzEMAAQENAAC/BzQC+ByAACgQAAChi+ByQi/BzkNAAQkMAAi/hzQi+hyAAihg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AnKETQi/hyAAihQAAigC/hyQC+hzEMABQENgBC+BzQC/ByAACgQAAChi/ByQi+BzkNgBQkMABi+hzg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AqvAAQAAiaDKhuQDJhuEcAAQEdAADJBuQDKBuAACaQAACbjKBuQjJBukdAAQkcAAjJhuQjKhuAAibg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AnlEJQjJhuAAibQAAiaDJhuQDJhuEcAAQEdAADJBuQDJBuAACaQAACbjJBuQjJBukdAAQkcAAjJhug");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("ArUAAQAAiUDUhqQDVhqErAAQEsAADVBqQDUBqAACUQAACVjUBqQjVBqksAAQkrAAjVhqQjUhqAAiVg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AoAD+QjUhpAAiVQAAiUDUhpQDVhqErAAQEsAADUBqQDVBpAACUQAACVjVBpQjUBqksAAQkrAAjVhqg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("Ar6AAQAAiODghmQDfhlE7AAQE8AADfBlQDgBmAACOQAACPjgBmQjfBlk8AAQk7AAjfhlQjghmAAiPg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AoaD0QjghlAAiPQAAiODghlQDghmE6AAQE7AADgBmQDgBlAACOQAACPjgBlQjgBmk7AAQk6AAjghmg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AsgAAQAAiIDrhhQDrhiFKAAQFLAADrBiQDrBhAACIQAACJjrBhQjrBilLAAQlKAAjrhiQjrhhAAiJg");

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ao1DqQjqhhgBiJQABiIDqhhQDrhiFKAAQFLAADrBiQDqBhAACIQAACJjqBhQjrBilLAAQlKAAjrhig");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AtFAAQAAiCD2hdQD1hdFaAAQFbAAD1BdQD2BdAACCQAACDj2BdQj1BdlbAAQlaAAj1hdQj2hdAAiDg");

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ApPDgQj2hdAAiDQAAiCD2hdQD1hdFaAAQFbAAD1BdQD2BdAACCQAACDj2BdQj1BdlbAAQlaAAj1hdg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AtrAAQAAh8EBhZQEBhZFpAAQFqAAEBBZQEBBZAAB8QAAB9kBBZQkBBZlqAAQlpAAkBhZQkBhZAAh9g");

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ApqDWQkAhZAAh9QAAh8EAhZQEBhYFpgBQFqABEBBYQEABZAAB8QAAB9kABZQkBBYlqABQlpgBkBhYg");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AuQAAQAAh2ELhVQEMhUF5AAQF6AAEMBUQELBVAAB2QAAB3kLBVQkMBUl6AAQl5AAkMhUQkLhVAAh3g");

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AqFDMQkLhVAAh3QAAh2ELhVQEMhUF5AAQF6AAEMBUQELBVAAB2QAAB3kLBVQkMBUl6AAQl5AAkMhUg");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("Au2AAQAAhwEXhQQEWhRGJAAQGKAAEWBRQEXBQAABwQAABxkXBQQkWBRmKAAQmJAAkWhRQkXhQAAhxg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AqfDBQkXhQAAhxQAAhwEXhQQEWhQGJAAQGKAAEWBQQEXBQAABwQAABxkXBQQkWBQmKAAQmJAAkWhQg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AvcAAQAAhqEihMQEihMGYAAQGZAAEiBMQEiBMAABqQAABrkiBMQkiBMmZAAQmYAAkihMQkihMAAhrg");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Aq6C3QkhhMgBhrQABhqEhhMQEihMGYAAQGZAAEiBMQEhBMABBqQgBBrkhBMQkiBMmZAAQmYAAkihMg");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AQCAAQAABlktBIQksBImpAAQmoAAkshIQkthIAAhlQAAhkEthIQEshIGoAAQGpAAEsBIQEtBIAABkg");

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ArUCsQkthHAAhlQAAhkEthHQEthJGnABQGogBEtBJQEtBHAABkQAABlktBHQktBJmogBQmnABkthJg");

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AvZAAQAAhrEhhMQEhhMGXAAQGYAAEhBMQEhBMAABrQAABskhBMQkhBMmYAAQmXAAkhhMQkhhMAAhsg");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Aq3C3QkihLAAhsQAAhrEihLQEghNGXAAQGYAAEgBNQEiBLAABrQAABskiBLQkgBNmYAAQmXAAkghNg");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AuxAAQAAhxEWhRQEVhRGGAAQGHAAEVBRQEWBRAABxQAABykWBRQkVBRmHAAQmGAAkVhRQkWhRAAhyg");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AqbDDQkVhRAAhyQAAhxEVhRQEVhRGGAAQGHAAEVBRQEVBRAABxQAABykVBRQkVBRmHAAQmGAAkVhRg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AuIAAQAAh4EJhVQEJhVF2AAQF3AAEJBVQEJBVAAB4QAAB5kJBVQkJBVl3AAQl2AAkJhVQkJhVAAh5g");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ap+DOQkKhVAAh5QAAh4EKhVQEJhVF1AAQF2AAEJBVQEKBVAAB4QAAB5kKBVQkJBVl2AAQl1AAkJhVg");

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AtgAAQAAh+D+haQD9haFlAAQFmAAD9BaQD+BaAAB+QAAB/j+BaQj9BalmAAQllAAj9haQj+haAAh/g");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ApiDYQj+haAAh+QAAh9D+haQD9hbFlABQFmgBD9BbQD+BaAAB9QAAB+j+BaQj9BblmgBQllABj9hbg");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("As4AAQAAiEDyhfQDyheFUAAQFVAADyBeQDyBfAACEQAACFjyBfQjyBelVAAQlUAAjyheQjyhfAAiFg");

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ApGDjQjyheAAiFQAAiEDyheQDyhfFUAAQFVAADyBfQDyBeAACEQAACFjyBeQjyBflVAAQlUAAjyhfg");

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AsQAAQAAiLDnhjQDlhjFEAAQFFAADlBjQDnBjAACLQAACMjnBjQjlBjlFAAQlEAAjlhjQjnhjAAiMg");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AopDvQjmhkAAiLQAAiKDmhkQDmhjFDAAQFEAADmBjQDmBkAACKQAACLjmBkQjmBjlEAAQlDAAjmhjg");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("ArnAAQAAiRDahoQDahnEzAAQE0AADaBnQDaBoAACRQAACSjaBnQjaBok0AAQkzAAjahoQjahnAAiSg");

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AoMD5QjbhnAAiSQAAiRDbhoQDZhnEzAAQE0AADaBnQDaBoAACRQAACSjaBnQjaBok0AAQkzAAjZhog");

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("Aq/AAQAAiYDOhsQDPhsEiAAQEjAADPBsQDOBsAACYQAACZjOBsQjPBskjAAQkiAAjPhsQjOhsAAiZg");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AnwEFQjPhtABiYQgBiXDPhtQDOhsEiAAQEjAADOBsQDPBtgBCXQABCYjPBtQjOBskjAAQkiAAjOhsg");

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("AqXAAQAAieDDhxQDChxESAAQETAADCBxQDDBxAACeQAACfjDBxQjCBxkTAAQkSAAjChxQjDhxAAifg");

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AnUEPQjChwgBifQABieDChwQDDhyERAAQESAADDByQDCBwABCeQgBCfjCBwQjDBykSAAQkRAAjDhyg");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("ApuAAQAAilC2h1QC3h1EBAAQECAAC3B1QC2B1AAClQAACmi2B1Qi3B1kCAAQkBAAi3h1Qi2h1AAimg");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Am4EaQi2h0AAimQAAilC2h0QC4h2EAAAQEBAAC3B2QC3B0AAClQAACmi3B0Qi3B2kBAAQkAAAi4h2g");

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("ApGAAQAAirCrh6QCrh6DwAAQDxAACrB6QCrB6AACrQAACsirB6QirB6jxAAQjwAAirh6Qirh6AAisg");

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AmbEmQirh6AAisQAAirCrh6QCrh6DwABQDxgBCrB6QCrB6AACrQAACsirB6QirB6jxgBQjwABirh6g");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AoeAAQAAixCfh/QCfh+DgAAQDhAACfB+QCfB/AACxQAACyifB/QifB+jhAAQjgAAifh+Qifh/AAiyg");

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Al/ExQieh/AAiyQAAixCeh/QCfh+DgAAQDhAACfB+QCeB/AACxQAACyieB/QifB+jhAAQjgAAifh+g");

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("An2AAQAAi4CUiDQCTiDDPAAQDQAACTCDQCUCDAAC4QAAC5iUCDQiTCDjQAAQjPAAiTiDQiUiDAAi5g");

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AliE7QiUiDAAi4QAAi3CUiDQCUiEDOAAQDPAACUCEQCUCDAAC3QAAC4iUCDQiUCEjPAAQjOAAiUiEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-47.2,94.5,94.5);


// stage content:
(lib.FtoH_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* import flash.utils.Timer;
		import flash.events.MouseEvent;
		
		var timer = new Timer(1000);
		timer.addEventListener(TimerEvent.TIMER, timerHandler);
		timer.start();
		
		
		function timerHandler(e:TimerEvent)
		{
			trace("aaaa");
			ball.x+=10;
		}
		
		
		ball.addEventListener(MouseEvent.CLICK, clickHandler);
		ball.buttonMode = true;
		
		
		function clickHandler(e:MouseEvent)
		{
			ball.x-=10;
		}*/
		this.stop();
		this.ball.stop();
		this.ball.addEventListener("click", alertpopup);
		function alertpopup()
		{
			alert('clicked');
			this.ball.play();
		}
		
		
		this.ball.alpha = 0;
		createjs.Tween.get(this.ball).to({alpha:1}, 1000).call(handleComplete);
		function handleComplete() {
			//Tween complete
			alert('tween complete');
		}
		
		var c = document.getElementById("myCanvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.arc(95,50,40,0,2*Math.PI);
		ctx.stroke();
		//alert("this will run when the timeline hits this frame");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ball = new lib.ball();
	this.ball.setTransform(175.3,147.3);

	this.timeline.addTween(cjs.Tween.get(this.ball).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(403.5,300.5,93.5,93.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;