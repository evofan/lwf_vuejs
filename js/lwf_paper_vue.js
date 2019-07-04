global.LWF.Script = global.LWF.Script || {};
global.LWF.Script["lwf_paper_vue"] = function() {
	var LWF = global.LWF;
	var Loader = global.LWF.Loader;
	var Movie = global.LWF.Movie;
	var Property = global.LWF.Property;
	var Point = global.LWF.Point;
	var Matrix = global.LWF.Matrix;
	var Color = global.LWF.Color;
	var ColorTransform = global.LWF.ColorTransform;
	var Tween = global.LWF.Tween;
	var _root;

	var fscommand = function(type, arg) {
		if (type === "event") {
			_root.lwf.dispatchEvent(arg, this);
		} else {
			throw Error("unknown fscommand");
		}
	};

	var trace = function(msg) {
		console.log(msg);
	};

	var Script = (function() {function Script() {}

	Script.prototype["init"] = function() {
		var movie = this;
		while (movie.parent !== null)
			movie = movie.parent.lwf.rootMovie;
		_root = movie;
	};

	Script.prototype["destroy"] = function() {
		_root = null;
	};

	Script.prototype["_root_0_2"] = function() {
			_root.max_obj_num = _root.lwf.privateData.data.obj_num;
			
			_root.fade_count = 0;
			
			for(var i = 0; i < _root.max_obj_num; i++){
				var mc = "mc_" + i;
				this.attachMovie("mc_paper", mc, {"depth": i});
			}
	};

	Script.prototype["_root_1_2"] = function() {
			this.stop();
	};

	Script.prototype["mc_color_0_2"] = function() {
			this.blendMode = 'add';
		
			this.stop();
			this.rnd = Math.floor(Math.random() * 5 + 1);
			
			if(this.rnd === 1){
				this.gotoAndPlay("yellow");
			}else if(this.rnd === 2){
				this.gotoAndPlay("red");
			}else if(this.rnd === 3){
				this.gotoAndPlay("green");
			}else if(this.rnd === 4){
				this.gotoAndPlay("blue");
			}else if(this.rnd === 5){
				this.gotoAndPlay("white");
			}else{
				//
			}
	};

	Script.prototype["mc_color_12_2"] = function() {
			this.stop();
			this.gotoAndPlay("red");
	};

	Script.prototype["mc_color_18_2"] = function() {
			this.stop();
			this.gotoAndPlay("green");
	};

	Script.prototype["mc_color_24_2"] = function() {
			this.stop();
			this.gotoAndPlay("blue");
	};

	Script.prototype["mc_color_30_2"] = function() {
			this.stop();
			this.gotoAndPlay("white");
	};

	Script.prototype["mc_color_6_2"] = function() {
			this.stop();
			this.gotoAndPlay("yellow");
	};

	Script.prototype["mc_paper_0_2"] = function() {
			// stage size
			this.STAGE_WIDTH = 550;
			this.STAGE_HEIGHT = 350;
			
			// x position
			this.x_num = Math.floor(Math.random() * this.STAGE_WIDTH + 1);
			this.x = this.x_num;
			
			// y position
			this.y_num = - Math.floor(Math.random() * 100);
			this.y = this.y_num;
		
			// scale
			this.scale_min = 0.1;
			this.scale_num = Math.floor(Math.random() * 3.5) + this.scale_min;
			this.scaleX = this.scaleY = this.scale_num / 10;
		
			// acceleration
			this.accel_num = Math.floor(Math.random() * 5 + 1);
		
			// alpha
			this.alpha_num = Math.floor(Math.random() * 50 + 50) / 100;
			this.temp = Math.floor(this.alpha_num * 10);
			this.alpha = this.temp / 10;
			
			// radius
			this.radius_num = Math.floor(Math.random() * 5 + 3);
			
			// angle
			this.angle_num = Math.floor(Math.random() * 360 + 1);
			
			// life cycle start num
			this.loop_count_num = 1;
			
			// end flag
			this.fall_flg = false;
			
			// fade alpha start
			this.fade_alpha = 1.0;
			
			// fade alpha speed
			this.minus_alpha = 0.15;
			
			// life time
			this.end_frame = 72; // 24frame = 1sec
	};

	Script.prototype["mc_paper_1_2"] = function() {
			this.radian = Math.floor(this.angle_num * Math.PI / 180);
			this.x = Math.floor(this.x + this.radius_num * Math.cos(this.radian));
			this.y = Math.floor(this.y + (1 + this.accel_num));
			this.angle_num += 5;
		
			if(this.y > this.STAGE_HEIGHT){
				if(this.fall_flg){
					// console.log("領域外に出た且つ表示時間を過ぎてれば順次フェードアウトする");
					this.fade_alpha -= this.minus_alpha;
					this.alpha = this.fade_alpha;
				}else{
					this.scaleX = this.scaleY = this.scale_num / 10;
					this.x_num = Math.floor(Math.random() * this.STAGE_WIDTH + 1);
					this.x = this.x_num;
					this.y = -30;
				}		
			}
		
			if(this.x > this.STAGE_WIDTH || this.x < 0 || this.y >(this.STAGE_HEIGHT + 10) || this.y < 0){
				this.visible = false;
			}else{
				this.visible = true;
			}
	};

	Script.prototype["mc_paper_2_2"] = function() {
			this.stop();
			this.loop_count_num++;
			
			if(this.loop_count_num >= this.end_frame){
						
				this.fall_flg = true;
				
				if(this.fade_alpha < 0){
					this.gotoAndPlay("end");
				}else{
					this.gotoAndPlay("loop");
				}
				
			}else{
				this.gotoAndPlay("loop");
			}
	};

	Script.prototype["mc_paper_5_2"] = function() {
			this.removeMovieClip();
			
			_root.fade_count++;
			
			// console.log(_root.fade_count);
			// console.log("_root.max_obj_num：" + _root.max_obj_num);
			
			if(_root.fade_count === Number(_root.max_obj_num)){
				// console.log("再スタートする");
				_root.gotoAndPlay("start");
			}else{
				// console.log("まだ再スタートしない");
			}
	};

	return Script;

	})();

	return new Script();
};
