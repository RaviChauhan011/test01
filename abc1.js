(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"abc1_atlas_1", frames: [[330,348,320,320],[0,0,346,346],[0,348,328,328],[0,678,120,120],[330,670,402,164],[348,0,304,328]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["abc1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["abc1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["abc1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["abc1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["abc1_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["abc1_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-82,-82,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-86.5,-86.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(-80,-80,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("ApDJEQjwjxAAlTQAAlTDwjwQDwjwFTAAQFTAADxDwQDwDwAAFTQAAFTjwDxQjxDwlTAAQlTAAjwjwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-82,-82,164,164);
p.frameBounds = [rect, new cjs.Rectangle(-86.5,-86.5,173,173), new cjs.Rectangle(-80,-80,160,160), new cjs.Rectangle(-82,-82,164,164)];


(lib.Symbol25copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		//var _this = this;
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjODPIAAmdIGdAAIAAGdg");
	this.shape.setTransform(-102.475,-0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-132.5,-30.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-49.8,-40.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(2));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("A4NHWIAAurMAwbAAAIAAOrg");
	this.shape_1.setTransform(17.3,0.025,1.1121,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-155.1,-47,344.8,94.1);
p.frameBounds = [rect, rect];


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-75.95,-87.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-87.9,152,164);
p.frameBounds = [rect];


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(0,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:347.9979},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-81.9,152,164);
p.frameBounds = [rect, new cjs.Rectangle(-90.1,-95.7,182.8,192), new cjs.Rectangle(-100.3,-105.1,205.6,211.6), new cjs.Rectangle(-106.1,-109.7,219.4,222), new cjs.Rectangle(-107.4,-109.2,223.6,222.7), new cjs.Rectangle(-103.9,-103.7,218,213.7), new cjs.Rectangle(-95.8,-93.3,202.9,195.3), new cjs.Rectangle(-83.6,-78.7,179,168.3), new cjs.Rectangle(-83.6,-77.5,179,168.3), new cjs.Rectangle(-95.8,-89.7,202.9,195.2), new cjs.Rectangle(-103.9,-97.8,218,213.7), new cjs.Rectangle(-107.4,-101.4,223.6,222.7), new cjs.Rectangle(-106.2,-100.2,219.4,222), new cjs.Rectangle(-100.4,-94.4,205.6,211.6), new cjs.Rectangle(-90.2,-84.3,182.8,192), new cjs.Rectangle(-76,-70.2,152,164), new cjs.Rectangle(-92.6,-84.3,182.8,192), new cjs.Rectangle(-105.2,-94.5,205.6,211.6), new cjs.Rectangle(-113.1,-100.3,219.4,222), new cjs.Rectangle(-116.1,-101.5,223.6,222.7), new cjs.Rectangle(-114,-98,218,213.7), new cjs.Rectangle(-107,-89.9,202.9,195.3), new cjs.Rectangle(-95.3,-77.6,179,168.3), new cjs.Rectangle(-95.3,-78.8,179,168.3), new cjs.Rectangle(-107,-93.5,202.9,195.2), new cjs.Rectangle(-114,-103.8,218,213.7), new cjs.Rectangle(-116,-109.3,223.6,222.7), new cjs.Rectangle(-113,-109.8,219.4,222), new cjs.Rectangle(-105,-105.2,205.6,211.7), new cjs.Rectangle(-92.5,-95.7,182.8,192)];


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(0,0,0.7315,0.7315);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1,3,true).p("AzkUoMATLgpPMAT+ApPI0CkEg");
	this.shape.setTransform(0,-32.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdQkIzHEEMATMgpPMAT9ApPg");
	this.shape_1.setTransform(0,-32.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, rect = new cjs.Rectangle(-126.2,-165.9,252.5,266), [rect]);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		if(this.parent.btnT.currentFrame == 1)
		{this.stop();}
	}
	this.frame_9 = function() {
		if(this.parent.btnT.currentFrame == 1)
		{this.stop();}
	}
	this.frame_19 = function() {
		if(this.parent.btnT.currentFrame == 1)
		{this.stop();}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(11));

	// Layer_1
	this.arw = new lib.Symbol5();
	this.arw.name = "arw";

	this.timeline.addTween(cjs.Tween.get(this.arw).to({rotation:347.9979},29).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-126.2,-165.9,252.5,266);
p.frameBounds = [rect, new cjs.Rectangle(-144.1,-162.8,247,286.9), new cjs.Rectangle(-155.7,-152.7,230.9,295.2), new cjs.Rectangle(-160.6,-135.9,256.5,290.7), new cjs.Rectangle(-158.4,-113.2,280.3,273.6), new cjs.Rectangle(-149.4,-85.6,292,244.7), new cjs.Rectangle(-133.9,-89.4,291,240.2), new cjs.Rectangle(-112.6,-115.2,277.4,251.1), new cjs.Rectangle(-112.6,-135.9,277.9,251.1), new cjs.Rectangle(-133.9,-150.7,292.6,240.2), new cjs.Rectangle(-149.4,-159,294.5,240.3), new cjs.Rectangle(-158.4,-160.4,283.7,269.9), new cjs.Rectangle(-160.5,-154.7,260.6,287.7), new cjs.Rectangle(-155.7,-142.5,230.9,293.1), new cjs.Rectangle(-144.1,-124,247,285.8), new cjs.Rectangle(-126.2,-100.1,252.5,266), new cjs.Rectangle(-102.9,-124,247,286.9), new cjs.Rectangle(-75.2,-142.5,230.9,295.2), new cjs.Rectangle(-95.9,-154.7,256.5,290.7), new cjs.Rectangle(-121.8,-160.3,280.3,273.6), new cjs.Rectangle(-142.5,-159,292,244.7), new cjs.Rectangle(-157,-150.7,291,240.2), new cjs.Rectangle(-164.7,-135.9,277.4,251.1), new cjs.Rectangle(-165.2,-115.2,277.9,251.1), new cjs.Rectangle(-158.6,-89.5,292.6,240.2), new cjs.Rectangle(-145,-81.2,294.5,240.3), new cjs.Rectangle(-125.2,-109.4,283.7,269.9), new cjs.Rectangle(-100,-132.9,260.6,287.7), new cjs.Rectangle(-75.1,-150.6,230.9,293.1), new cjs.Rectangle(-158,-188.5,302.3,312.7)];


// stage content:
(lib.abc1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.btnT.addEventListener("click", fl_btnT.bind(this));
		
		function fl_btnT()
		{
			if(this.btnT.currentFrame == 0)
			{
				this.btnT.gotoAndStop(1);
			}
			else
			{
				this.btnT.gotoAndStop(0);
			}
		}
		
		this.btnN.addEventListener("click", fl_btnN.bind(this));
		
		function fl_btnN()
		{
			if(this.mn.currentFrame !=29)
			{
				this.mn.gotoAndPlay(this.mn.currentFrame +1);
			}
			else
			{
				this.mn.gotoAndPlay(0);
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.mn = new lib.Symbol6();
	this.mn.name = "mn";
	this.mn.setTransform(453.5,330.95);

	this.timeline.addTween(cjs.Tween.get(this.mn).wait(1));

	// Layer_1
	this.btnN = new lib.Symbol27();
	this.btnN.name = "btnN";
	this.btnN.setTransform(926.3,686.55,0.4513,0.4513,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.btnN, 0, 1, 2, false, new lib.Symbol27(), 3);

	this.btnT = new lib.Symbol25copy2();
	this.btnT.name = "btnT";
	this.btnT.setTransform(861.05,597.35,0.5165,0.5165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnT},{t:this.btnN}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(839.3,549.1,638.1,560.6);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: 'F92D9EE413531C428791E0528A328827',
	width: 1024,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/abc1_atlas_1.png?1712661644185", id:"abc1_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F92D9EE413531C428791E0528A328827'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;