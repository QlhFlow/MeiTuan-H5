(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._35wegsew = function() {
	this.initialize(img._35wegsew);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.asfasfa = function() {
	this.initialize(img.asfasfa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.BB = function() {
	this.initialize(img.BB);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.efzfafa = function() {
	this.initialize(img.efzfafa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.etsdgset = function() {
	this.initialize(img.etsdgset);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);


(lib.setsdgs = function() {
	this.initialize(img.setsdgs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1206);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.ClipGroupsdfsfsdsdfs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAWSBFmIgVgKQr+liqFqFQ2S2SAA/jQAA/iWS2TQKFqFL+lhIAVgKIAHgDMAAACLRIgHgDg");
	mask.setTransform(1342,724.6);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(2385.9,774.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUOjx3");
	this.shape_1.setTransform(2337.5,774.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_2.setTransform(2289,774.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_3.setTransform(2240.6,774.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(2192.1,774.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(2143.7,774.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_6.setTransform(2095.3,774.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_7.setTransform(2046.8,774.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_8.setTransform(1998.4,774.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_9.setTransform(1949.9,774.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(1901.5,774.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(1853,774.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_12.setTransform(1804.6,774.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_13.setTransform(1756.2,774.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_14.setTransform(1707.7,774.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(1659.3,774.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(1610.9,774.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(1562.4,774.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(1514,774.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_19.setTransform(1465.5,774.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(1417.1,774.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(1368.7,774.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_22.setTransform(1320.2,774.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_23.setTransform(1271.8,774.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_24.setTransform(1223.3,774.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_25.setTransform(1174.9,774.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(1126.4,774.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(1078,774.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_28.setTransform(1029.6,774.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_29.setTransform(981.1,774.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_30.setTransform(932.7,774.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_31.setTransform(884.2,774.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroupsdfsfsdsdfs, new cjs.Rectangle(1198.7,278.9,286.6,891.4), null);


(lib.ClipGroupsdfsf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgW+hGGQM7FkKwKwQWSWTAAffQAAfg2SWSQqwKxs7Fkg");
	mask.setTransform(2008.6,741.2);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(2385.9,774.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUOjx3");
	this.shape_1.setTransform(2337.5,774.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_2.setTransform(2289,774.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_3.setTransform(2240.6,774.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(2192.1,774.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(2143.7,774.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_6.setTransform(2095.3,774.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_7.setTransform(2046.8,774.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_8.setTransform(1998.4,774.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_9.setTransform(1949.9,774.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(1901.5,774.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(1853,774.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_12.setTransform(1804.6,774.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_13.setTransform(1756.2,774.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_14.setTransform(1707.7,774.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(1659.3,774.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(1610.9,774.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(1562.4,774.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(1514,774.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_19.setTransform(1465.5,774.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(1417.1,774.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(1368.7,774.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_22.setTransform(1320.2,774.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_23.setTransform(1271.8,774.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_24.setTransform(1223.3,774.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_25.setTransform(1174.9,774.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(1126.4,774.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(1078,774.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_28.setTransform(1029.6,774.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_29.setTransform(981.1,774.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_30.setTransform(932.7,774.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_31.setTransform(884.2,774.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroupsdfsf, new cjs.Rectangle(1861.5,292.4,294.2,897.5), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpZBLKMAAAiWTQDogWDsAAQPXAAOCF7QNiFwKdKdQKdKcFvNjQF7OCAAPWQAAPXl7OCQlvNjqdKcQqdKetiFuQuCF8vXAAQjsAAjogWg");
	mask.setTransform(4860.5,1159.4);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(5319.5,1226.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUOjx3");
	this.shape_1.setTransform(5271.1,1226.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_2.setTransform(5222.7,1226.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_3.setTransform(5174.2,1226.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(5125.8,1226.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(5077.3,1226.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_6.setTransform(5028.9,1226.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_7.setTransform(4980.5,1226.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_8.setTransform(4932,1226.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_9.setTransform(4883.6,1226.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(4835.1,1226.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(4786.7,1226.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_12.setTransform(4738.3,1226.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_13.setTransform(4689.8,1226.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_14.setTransform(4641.4,1226.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(4593,1226.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(4544.5,1226.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(4496.1,1226.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(4447.6,1226.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_19.setTransform(4399.2,1226.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(4350.7,1226.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(4302.3,1226.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_22.setTransform(4253.9,1226.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_23.setTransform(4205.4,1226.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_24.setTransform(4157,1226.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_25.setTransform(4108.5,1226.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(4060.1,1226.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(4011.7,1226.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_28.setTransform(3963.2,1226.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_29.setTransform(3914.8,1226.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_30.setTransform(3866.3,1226.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_31.setTransform(3817.9,1226.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(4595.5,676.2,530.1,966.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egq0BCnQqkkeornWMAAAhzgQHmmbJCkOQBTgnBUgkIACgBMA6uAAAIABABQBVAkBSAnQL+FlJbJcQKdKcFvNjQF7ODAAPXQAAPVl7OCQlvNkqdKcQqdKdtjFvQuCF8vWAAQvXAAuCl8g");
	mask.setTransform(4871.2,955.5);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(5462.4,1003.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUOjx3");
	this.shape_1.setTransform(5414,1003.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_2.setTransform(5365.5,1003.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_3.setTransform(5317.1,1003.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(5268.6,1003.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(5220.2,1003.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_6.setTransform(5171.8,1003.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_7.setTransform(5123.3,1003.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_8.setTransform(5074.9,1003.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_9.setTransform(5026.4,1003.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(4978,1003.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(4929.5,1003.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_12.setTransform(4881.1,1003.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_13.setTransform(4832.7,1003.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_14.setTransform(4784.2,1003.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(4735.8,1003.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(4687.4,1003.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(4638.9,1003.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(4590.5,1003.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_19.setTransform(4542,1003.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(4493.6,1003.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(4445.2,1003.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_22.setTransform(4396.7,1003.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_23.setTransform(4348.3,1003.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_24.setTransform(4299.8,1003.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_25.setTransform(4251.4,1003.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(4202.9,1003.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(4154.5,1003.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_28.setTransform(4106.1,1003.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_29.setTransform(4057.6,1003.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_30.setTransform(4009.2,1003.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_31.setTransform(3960.7,1003.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(4474,491.3,794.4,928.5), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egr5A/lMAAAhmRIOY44MBJbB/Jg");
	mask.setTransform(-503,-503.9);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(12.7,-272.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_1.setTransform(-35.8,-272.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_2.setTransform(-84.2,-272.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_3.setTransform(-132.6,-272.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(-181.1,-272.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(-229.5,-272.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_6.setTransform(-278,-272.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_7.setTransform(-326.4,-272.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_8.setTransform(-374.9,-272.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_9.setTransform(-423.3,-272.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(-471.7,-272.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(-520.2,-272.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_12.setTransform(-568.6,-272.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_13.setTransform(-617.1,-272.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_14.setTransform(-665.5,-272.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(-713.9,-272.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(-762.4,-272.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(-810.8,-272.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(-859.3,-272.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_19.setTransform(-907.7,-272.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(-956.1,-272.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(-1004.6,-272.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_22.setTransform(-1053,-272.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_23.setTransform(-1101.4,-272.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_24.setTransform(-1149.9,-272.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_25.setTransform(-1198.3,-272.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(-1246.8,-272.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(-1295.2,-272.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_28.setTransform(-1343.6,-272.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_29.setTransform(-1392.1,-272.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_30.setTransform(-1440.5,-272.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_31.setTransform(-1489,-272.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(-783.9,-910.9,561.9,813.9), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiGA7EMBEMh2HMAAAB2Hg");
	mask.setTransform(1672.9,-2805.5);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(2629.2,-2602.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_1.setTransform(2580.7,-2602.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_2.setTransform(2532.3,-2602.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_3.setTransform(2483.9,-2602.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(2435.4,-2602.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(2387,-2602.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_6.setTransform(2338.5,-2602.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_7.setTransform(2290.1,-2602.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_8.setTransform(2241.6,-2602.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_9.setTransform(2193.2,-2602.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(2144.8,-2602.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(2096.3,-2602.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_12.setTransform(2047.9,-2602.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_13.setTransform(1999.4,-2602.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_14.setTransform(1951,-2602.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(1902.6,-2602.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(1854.1,-2602.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(1805.7,-2602.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(1757.2,-2602.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_19.setTransform(1708.8,-2602.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(1660.4,-2602.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(1611.9,-2602.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_22.setTransform(1563.5,-2602.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_23.setTransform(1515.1,-2602.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_24.setTransform(1466.6,-2602.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_25.setTransform(1418.2,-2602.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(1369.7,-2602.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(1321.3,-2602.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_28.setTransform(1272.9,-2602.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_29.setTransform(1224.4,-2602.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_30.setTransform(1176,-2602.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_31.setTransform(1127.5,-2602.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(1454.6,-3183.5,436.5,756.1), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EguEAzUMA7QhmnMAg5A48MAAAAtrg");
	mask.setTransform(1596.9,464);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(2385.9,774.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_1.setTransform(2337.5,774.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_2.setTransform(2289,774.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_3.setTransform(2240.6,774.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(2192.2,774.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(2143.7,774.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_6.setTransform(2095.3,774.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_7.setTransform(2046.8,774.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_8.setTransform(1998.4,774.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_9.setTransform(1950,774.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(1901.5,774.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(1853.1,774.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_12.setTransform(1804.6,774.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_13.setTransform(1756.2,774.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_14.setTransform(1707.8,774.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(1659.3,774.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(1610.9,774.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(1562.4,774.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(1514,774.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_19.setTransform(1465.6,774.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(1417.1,774.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(1368.7,774.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_22.setTransform(1320.3,774.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_23.setTransform(1271.8,774.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_24.setTransform(1223.4,774.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_25.setTransform(1174.9,774.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(1126.5,774.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(1078,774.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_28.setTransform(1029.6,774.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_29.setTransform(981.2,774.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_30.setTransform(932.7,774.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_31.setTransform(884.3,774.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(1302.1,135.6,589.7,656.9), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgJHA0qQtjlvqdqdQqdqdlvtjQl7uBAAvXQAAvXF7uCQCwmfD1lyMBh9AAAMAAABsmQiuBai3BOQuCF7vXAAQvXAAuBl7g");
	mask.setTransform(1579,815.9);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(2385.9,774.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUOjx3");
	this.shape_1.setTransform(2337.5,774.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_2.setTransform(2289,774.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_3.setTransform(2240.6,774.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(2192.1,774.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(2143.7,774.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_6.setTransform(2095.3,774.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_7.setTransform(2046.8,774.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_8.setTransform(1998.4,774.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_9.setTransform(1949.9,774.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(1901.5,774.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(1853,774.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_12.setTransform(1804.6,774.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_13.setTransform(1756.2,774.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_14.setTransform(1707.7,774.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(1659.3,774.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(1610.9,774.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(1562.4,774.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(1514,774.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_19.setTransform(1465.5,774.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(1417.1,774.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(1368.7,774.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_22.setTransform(1320.2,774.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_23.setTransform(1271.8,774.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_24.setTransform(1223.3,774.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_25.setTransform(1174.9,774.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(1126.4,774.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(1078,774.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_28.setTransform(1029.6,774.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_29.setTransform(981.1,774.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_30.setTransform(932.7,774.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_31.setTransform(884.2,774.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(1225.5,441,707,749.8), null);


(lib.Clipdggfgdfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgDoBEGQj6jEjqjqQ2S2SAA/jQAA/hWS2TQS6y7Zli3IAMgCMAAACILg");
	mask.setTransform(1413,676.2);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(2385.9,774.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUOjx3");
	this.shape_1.setTransform(2337.5,774.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_2.setTransform(2289,774.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_3.setTransform(2240.6,774.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(2192.1,774.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(2143.7,774.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_6.setTransform(2095.3,774.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_7.setTransform(2046.8,774.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_8.setTransform(1998.4,774.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_9.setTransform(1949.9,774.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(1901.5,774.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(1853,774.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_12.setTransform(1804.6,774.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_13.setTransform(1756.2,774.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_14.setTransform(1707.7,774.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(1659.3,774.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(1610.9,774.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(1562.4,774.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(1514,774.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_19.setTransform(1465.5,774.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(1417.1,774.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(1368.7,774.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_22.setTransform(1320.2,774.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_23.setTransform(1271.8,774.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_24.setTransform(1223.3,774.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_25.setTransform(1174.9,774.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(1126.4,774.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(1078,774.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_28.setTransform(1029.6,774.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_29.setTransform(981.1,774.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_30.setTransform(932.7,774.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_31.setTransform(884.2,774.4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clipdggfgdfg, new cjs.Rectangle(1198.7,240.5,428.6,871.5), null);


(lib.元件127 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-127.7,-226.2)).s().p("Al7huIDTijIFwANIAbAxIAQAEICJC9IgpChIisB6IkIAJg");
	this.shape.setTransform(38,27.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,54.8);


(lib.元件126 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-171.9,-173.2)).s().p("AjHFDIgyhGIiQkNICQlgICNgmIHCEaIA0E/IkaDTg");
	this.shape.setTransform(39.4,40.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.8,81.3);


(lib.元件125 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-142.5,-110.8)).s().p("AkwhFICKi/IFBg6ICWCzIAAFEInxCGg");
	this.shape.setTransform(30.5,31.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61,63.8);


(lib.元件124 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-99.9,-146.5)).s().p("Aj+EmIAAo1IB/gXIEsCNIBSDkIi/Dbg");
	this.shape.setTransform(56.1,29.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.7,0,50.9,58.9);


(lib.元件123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-462.5,-287.3)).s().p("AldF2IgMgQIgCADIgagZIBDj5Ig4gYIAGhcIA1gkIA3jhIKOsLMAAAAhbg");
	this.shape.setTransform(39,214.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,107.7,78,214);


(lib.元件122 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-407.4,-316.1)).s().p("AirDHIA4i9IgPgWIB1kkIC5BQIgUEzIg2DLIibATg");
	this.shape.setTransform(17.2,30.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.5,60.9);


(lib.元件121 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-370,-313)).s().p("ACBDHImCkjIBBiHIATgEIDFAzICDBKIBmCSIg5DAg");
	this.shape.setTransform(25.8,23.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.5,46.4);


(lib.元件120 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-362.5,-278.7)).s().p("ABkCjIjUg4IgEAJIi5ArIgohCIBKk7IInCEIA6BhIiIDXg");
	this.shape.setTransform(34.2,22.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.5,44.5);


(lib.元件119 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-405.6,-260.8)).s().p("AiBB1IidkJIA6hXID5giIEKE6IgmCaIg1AkIgCAjg");
	this.shape.setTransform(28.7,27);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.4,53.9);


(lib.元件118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-368.7,-749.7)).s().p("Eg0EAQXIADoeISPmhIA0nKMAlFgKkIbeCYILZWKIJHB8IjPE0ImSAvIhWAsg");
	this.shape.setTransform(333.3,104.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,666.7,209.5);


(lib.元件115 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-517.9,-791.5)).s().p("AirCsQhHhHAAhlQAAhkBHhHQBHhHBkAAQBlAABHBHQBHBHAABkQAABlhHBHQhHBHhlAAQhkAAhHhHg");
	this.shape.setTransform(24.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件115, new cjs.Rectangle(0,0,48.6,48.6), null);


(lib.元件114 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-255.8,-789.8)).s().p("AirCsQhHhHAAhlQAAhkBHhHQBHhHBkAAQBlAABHBHQBHBHAABkQAABlhHBHQhHBHhlAAQhkAAhHhHg");
	this.shape.setTransform(24.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件114, new cjs.Rectangle(0,0,48.6,48.6), null);


(lib.元件110 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-213.2,-982.2)).s().p("AsJuHIIIlmIQKPiI4SX4g");
	this.shape.setTransform(193.4,126.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件110, new cjs.Rectangle(115.6,0,155.5,252.3), null);


(lib.元件109 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-471.8,-1034.4)).s().p("AibPCIklpoIFK2lII3gYMAAAAjHg");
	this.shape.setTransform(44.9,117.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件109, new cjs.Rectangle(0,4.9,89.9,224.8), null);


(lib.元件107 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-528.2,-515)).s().p("AivArIAuh3IBmhEICpAWIAiCSIiKB2IhyADg");
	this.shape.setTransform(17.6,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件107, new cjs.Rectangle(0,0,35.2,29), null);


(lib.元件106 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-521.1,-453.9)).s().p("Ah+BaIALi1IBxg1IB4B4IAJAmIAABaIiAAog");
	this.shape.setTransform(12.7,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件106, new cjs.Rectangle(0,0,25.4,28.9), null);


(lib.元件105 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-482.9,-423.8)).s().p("AipBsIgbi3ID6h2ICPCaIgOCLIikBeg");
	this.shape.setTransform(19.7,19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件105, new cjs.Rectangle(0,0,39.3,38.8), null);


(lib.元件104 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-530.7,-398.6)).s().p("Aj4AXICdj7IAwgQIEkCmIj3FDg");
	this.shape.setTransform(24.9,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件104, new cjs.Rectangle(0,0,49.8,49), null);


(lib.元件103 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-569.5,-458.1)).s().p("AkcD6IhIkWIAAgcIhGhHIAliiIE2krIHhiSIAZALIAAWJIkyApg");
	this.shape.setTransform(42.7,73.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件103, new cjs.Rectangle(0,0,85.4,147.1), null);


(lib.元件102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-384.2,-769.3)).s().p("EghmAOsQlBjIloCeIl7gYIBIqdIZ4x4MAsAgEVIPxKKINkWwIttFHg");
	this.shape.setTransform(321.1,121.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件102, new cjs.Rectangle(0,0,642.3,243.4), null);


(lib.元件101 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(66,66,66,0.008)").s().p("Eg/NBiHMAAAjENMB+bAAAMAAADENg");
	this.shape.setTransform(404.6,627.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件101, new cjs.Rectangle(0,0,809.2,1255.9), null);


(lib.元件100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("Aj+BjID+jFID/DF");
	this.shape.setTransform(25.5,35.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").ss(1,1,1).p("Aj+BjID+jFID/DF");
	this.shape_1.setTransform(25.5,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,11.8,52.9,34.7);


(lib.元件98 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-83.6,-252.1)).s().p("AhvBwQgtgvAAhBQAAhAAtgvQAugtBBgBQBBABAuAtQAuAvAABAQAABBguAvQguAthBABQhBgBgugtg");
	this.shape.setTransform(15.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.5,31.5);


(lib.元件97 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-43.1,-238.2)).s().p("AhvBwQgtgvAAhBQAAhAAtgvQAugtBBgBQBBABAuAtQAuAvAABAQAABBguAvQguAthBABQhBgBgugtg");
	this.shape.setTransform(15.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.5,31.5);


(lib.元件96 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-62.1,-202.2)).s().p("AhvBwQgtgvAAhBQAAhAAtgvQAugtBBgBQBBABAuAtQAuAvAABAQAABBguAvQguAthBABQhBgBgugtg");
	this.shape.setTransform(15.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.5,31.5);


(lib.元件95 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-131.2,-173.6)).s().p("AhvBwQgtgvAAhBQAAhAAtgvQAugtBBgBQBBABAuAtQAuAvAABAQAABBguAvQguAthBABQhBgBgugtg");
	this.shape.setTransform(15.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31.5,31.5);


(lib.元件94 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-90.6,-165)).s().p("AhaBbQglglgBg2QABg1AlglQAlglA1gBQA2ABAlAlQAmAlAAA1QAAA2gmAlQglAmg2AAQg1AAglgmg");
	this.shape.setTransform(12.9,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,25.7);


(lib.元件93 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-51.1,-173.6)).s().p("AhaBbQglglgBg2QABg1AlglQAlglA1gBQA2ABAlAlQAmAlAAA1QAAA2gmAlQglAmg2AAQg1AAglgmg");
	this.shape.setTransform(12.9,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,25.7);


(lib.元件92 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-518,-563.7)).s().p("A0bG4IAAtvMAoxAAAIAGBbIAAMUg");
	this.shape.setTransform(130.8,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.6,88.1);


(lib.元件92_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-518,-563.7)).s().p("A0bG4IAAtvMAoxAAAIAGBbIAAMUg");
	this.shape.setTransform(130.8,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.6,88.1);


(lib.元件92_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-518,-563.7)).s().p("A0bG4IAAtvMAoxAAAIAGBbIAAMUg");
	this.shape.setTransform(130.8,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.6,88.1);


(lib.元件91 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-317.9,-563.7)).s().p("Aq0G4IAAtvIVpAAIAANvg");
	this.shape.setTransform(69.3,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.6,88.1);


(lib.元件91_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-317.9,-563.7)).s().p("Aq0G4IAAtvIVpAAIAANvg");
	this.shape.setTransform(69.3,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.6,88.1);


(lib.元件91_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-317.9,-563.7)).s().p("Aq0G4IAAtvIVpAAIAANvg");
	this.shape.setTransform(69.3,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.6,88.1);


(lib.元件90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-188.6,-563.7)).s().p("ApXG4IAAtvISvAAIAANvg");
	this.shape.setTransform(60,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,88.1);


(lib.元件90_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-188.6,-563.7)).s().p("ApXG4IAAtvISvAAIAANvg");
	this.shape.setTransform(60,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,88.1);


(lib.元件90_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-188.6,-563.7)).s().p("ApXG4IAAtvISvAAIAANvg");
	this.shape.setTransform(60,44);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,88.1);


(lib.元件89 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-502,-798.7)).s().p("AiZCaQhAhAAAhaQAAhZBAhAQBAhABZAAQBaAABABAQBABAAABZQAABahABAQhABAhaAAQhZAAhAhAg");
	this.shape.setTransform(21.8,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.7,43.7);


(lib.元件88 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-242,-799.2)).s().p("AiZCaQhAhAAAhaQAAhZBAhAQBAhABZAAQBaAABABAQBABAAABZQAABahABAQhABAhaAAQhZAAhAhAg");
	this.shape.setTransform(21.8,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.7,43.7);


(lib.元件86 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-628.7,-1108.3)).s().p("Ak8EzIgMpIIKQksIAASDg");
	this.shape.setTransform(32.9,64.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,6.6,65.7,115.7);


(lib.元件85 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-516.9,-1100.9)).s().p("AokJSIkDt8ILAoxINzCXIAcW7ImpBlg");
	this.shape.setTransform(80.8,86);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.6,172.1);


(lib.元件84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-225.4,-1034.4)).s().p("AuLWTMAAAgswIOhA4IN2M4I6kfLg");
	this.shape.setTransform(221.2,144.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130.4,0.4,181.6,287.6);


(lib.元件82 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-509.5,-795.4)).s().p("AinCoQhGhGAAhiQAAhhBGhGQBFhGBiAAQBjAABFBGQBGBGAABhQAABihGBGQhFBGhjAAQhiAAhFhGg");
	this.shape.setTransform(23.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件82, new cjs.Rectangle(0,0,47.6,47.5), null);


(lib.元件81 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-589.9,-139)).s().p("AqZDxIIfx4IMUAAIAATOIkIJBg");
	this.shape.setTransform(66.6,139);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,48.6,133.3,180.9);


(lib.元件80 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-406.5,-267.5)).s().p("AvES9MAAAgqTILYAAIOTP2IEeVKIo8JRIxrAbg");
	this.shape.setTransform(187.7,149.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91.2,0,192.9,298.9);


(lib.元件79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-251.1,-795.4)).s().p("AinCoQhGhGAAhiQAAhhBGhGQBFhGBiAAQBjAABFBGQBGBGAABhQAABihGBGQhFBGhjAAQhiAAhFhGg");
	this.shape.setTransform(23.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件79, new cjs.Rectangle(0,0,47.6,47.5), null);


(lib.元件78 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-150.3,-244.1)).s().p("AhVBVQgjgjgBgyQABgxAjgkQAjgkAyAAQAyAAAjAkQAlAkgBAxQABAyglAjQgjAlgygBQgyABgjglg");
	this.shape.setTransform(12.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,24.3);


(lib.元件77 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-119,-218.3)).s().p("AhVBVQgjgjgBgyQABgxAjgkQAjgkAyAAQAyAAAjAkQAlAkgBAxQABAyglAjQgjAlgygBQgyABgjglg");
	this.shape.setTransform(12.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,24.3);


(lib.元件76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-147.8,-190.1)).s().p("AhiBjQgqgoAAg7QAAg5AqgqQAogoA6gBIACAAQA5ABAoAoQAqAqAAA5QAAA7gqAoQgoAqg7AAQg5AAgpgqg");
	this.shape.setTransform(14.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,28.2);


(lib.元件75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-220.1,-190.1)).s().p("AAACNQg6gBgpgpQgpgoAAg7QAAg5ApgqQAqgpA5AAQA7AAAoApQAqAqAAA5QAAA7gqAoQgoApg5ABg");
	this.shape.setTransform(14.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,28.2);


(lib.元件74 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-188.3,-170.9)).s().p("AAACNQg6gBgpgpQgpgoAAg7QAAg5ApgqQAqgpA5AAQA7AAAoApQAqAqAAA5QAAA7gqAoQgoApg5ABg");
	this.shape.setTransform(14.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,28.2);


(lib.元件73 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-147.8,-161.9)).s().p("AAACNQg6gBgpgpQgpgoAAg7QAAg5ApgqQAqgpA5AAQA7AAAoApQAqAqAAA5QAAA7gqAoQgoApg5ABg");
	this.shape.setTransform(14.1,14.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.2,28.2);


(lib.元件72 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-82.8,-178.5)).s().p("AhVBVQgjgjgBgyQABgxAjgkQAjgkAyAAQAyAAAjAkQAlAkgBAxQABAyglAjQgjAlgygBQgyABgjglg");
	this.shape.setTransform(12.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,24.3);


(lib.元件71 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-55.5,-126)).s().p("AhVBVQgjgjgBgyQABgxAjgkQAjgkAyAAQAyAAAjAkQAlAkgBAxQABAyglAjQgjAlgygBQgyABgjglg");
	this.shape.setTransform(12.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,24.3);


(lib.元件70 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-93.5,-107.3)).s().p("AhVBVQgjgjgBgyQABgxAjgkQAjgkAyAAQAyAAAjAkQAlAkgBAxQABAyglAjQgjAlgygBQgyABgjglg");
	this.shape.setTransform(12.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,24.3);


(lib.元件69 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-101.8,-84.3)).s().p("AhVBVQgjgjgBgyQABgxAjgkQAjgkAyAAQAyAAAjAkQAlAkgBAxQABAyglAjQgjAlgygBQgyABgjglg");
	this.shape.setTransform(12.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.3,24.3);


(lib.元件65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.asfasfa, null, new cjs.Matrix2D(1,0,0,1,-477,-941.4)).s().p("EgYJApWIyg6CMBVTg4pMAAABSrg");
	this.shape.setTransform(273,264.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,546,529.1);


(lib.元件64 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.asfasfa, null, new cjs.Matrix2D(1,0,0,1,-269.4,-828.7)).s().p("A+YNfIrtnCIAAluILnG0IJPLDIKgi2IHfp2MApMgckIEKFvI/tS5IwpQQIqWEPIpMAOg");
	this.shape.setTransform(269.4,145.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,538.9,290.2);


(lib.元件63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.asfasfa, null, new cjs.Matrix2D(1,0,0,1,-552.7,-64.5)).s().p("A6TqEIEaAAILHHnIImJYILAlCIK4r9IGoAAIndKQIv2JbIqdAeg");
	this.shape.setTransform(168.4,64.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336.8,129.1);


(lib.元件62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.asfasfa, null, new cjs.Matrix2D(1,0,0,1,-382.2,-652.7)).s().p("A/HgcMBBvgNkIicNUMhCzAOtg");
	this.shape.setTransform(221.6,89.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,443.2,179.4);


(lib.元件61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.asfasfa, null, new cjs.Matrix2D(1,0,0,1,-380.5,-468)).s().p("Eg3RAUaICWkEIBB8/MBrLgWaMgGBAu7MhViARqIggAsIyGE2g");
	this.shape.setTransform(353.8,224.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,707.5,448.8);


(lib.元件60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.asfasfa, null, new cjs.Matrix2D(1,0,0,1,-192,-150.3)).s().p("A90KAMAAAgheMA7pAAAMgLdAu9g");
	this.shape.setTransform(192,150.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.1,0,381.9,300.6);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-625,-1029.4)).s().p("AlTFUIgRvNILJjaIAAang");
	this.shape.setTransform(35.7,85.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(0,0.2,71.4,170.5), null);


(lib.元件58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-590.1,-1095.1)).s().p("AndRVImpo4IgNn5IE2q+QEnkxI2AwIA1hTIJfhmMAAAAipg");
	this.shape.setTransform(91.6,122.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11.6,183.2,221.9);


(lib.元件57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-111.8,-857.6)).s().p("AtZSDIE/j2IpBmZMAAAgnNIXlJBILSalIpgGcIi2JzIsOK+g");
	this.shape.setTransform(111.8,201.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0.1,223.2,402);


(lib.元件56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-406.6,-1049.1)).s().p("ACHNqIwVy/IAdlqIEbivIHUBsIG9J2IDECJIGQNyg");
	this.shape.setTransform(91.1,87.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.3,175.9);


(lib.元件55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-518.5,-902.6)).s().p("AufKvIl7rAIDotBILamcILjBtIIvFCIFhLmIhcLtIi/EBIg0BTQo3gwkoEyIgWAFg");
	this.shape.setTransform(130.7,126.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.5,252.6);


(lib.元件54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-671,-803.8)).s().p("Ao2hFIACjwIDqliIJhhtIEgGFIAARCIkPBCg");
	this.shape.setTransform(56.7,77.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.3,154.7);


(lib.元件52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1.5,1,1).p("AAAi8IAAF5");
	this.shape.setTransform(0,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,39.7);


(lib.元件52_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1.5,1,1).p("AAAi8IAAF5");
	this.shape.setTransform(0,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,39.7);


(lib.元件52_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1.5,1,1).p("AAAi8IAAF5");
	this.shape.setTransform(0,18.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,39.7);


(lib.元件51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(2).p("EAr1ADKIAArsMhTBAAAIkoFeIAALnMBSfAAAg");
	this.shape.setTransform(183.2,35.7,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,368.4,73.5);


(lib.元件51_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(2).p("EAr1ADKIAArsMhTBAAAIkoFeIAALnMBSfAAAg");
	this.shape.setTransform(183.2,35.7,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,368.4,73.5);


(lib.元件51_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(2).p("EAr1ADKIAArsMhTBAAAIkoFeIAALnMBSfAAAg");
	this.shape.setTransform(183.2,35.7,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,368.4,73.5);


(lib.元件50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("AtsAAIbZAA");
	this.shape.setTransform(57.3,0,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,116.6,2);


(lib.元件50_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("AtsAAIbZAA");
	this.shape.setTransform(57.3,0,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,116.6,2);


(lib.元件50_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("AtsAAIbZAA");
	this.shape.setTransform(57.3,0,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,116.6,2);


(lib.元件49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AAmAAQAAAPgLAMQgMALgPAAQgOAAgLgLQgMgMAAgPQAAgOAMgLQALgMAOAAQAPAAAMAMQALALAAAOg");
	this.shape.setTransform(41.1,2.4,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AgZAaQgLgLAAgPQAAgPALgLQALgLAOABQAPgBAMALQAKALABAPQgBAPgKALQgMAMgPgBQgOABgLgMg");
	this.shape_1.setTransform(41.1,2.4,0.653,0.653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").ss(2).p("AAgAUQgIANgQADQgOAEgNgJQgNgIgEgPQgDgOAIgNQAJgNAPgEQAOgDANAIQANAIAEAQQADAOgIANg");
	this.shape_2.setTransform(2.5,25.1,0.653,0.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").ss(2).p("AkTClIEelGIEQAA");
	this.shape_3.setTransform(21.7,13,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,45.7,29.6);


(lib.元件49_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AAmAAQAAAPgLAMQgMALgPAAQgOAAgLgLQgMgMAAgPQAAgOAMgLQALgMAOAAQAPAAAMAMQALALAAAOg");
	this.shape.setTransform(41.1,2.4,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AgZAaQgLgLAAgPQAAgPALgLQALgLAOABQAPgBAMALQAKALABAPQgBAPgKALQgMAMgPgBQgOABgLgMg");
	this.shape_1.setTransform(41.1,2.4,0.653,0.653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").ss(2).p("AAgAUQgIANgQADQgOAEgNgJQgNgIgEgPQgDgOAIgNQAJgNAPgEQAOgDANAIQANAIAEAQQADAOgIANg");
	this.shape_2.setTransform(2.5,25.1,0.653,0.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").ss(2).p("AkTClIEelGIEQAA");
	this.shape_3.setTransform(21.7,13,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,45.7,29.6);


(lib.元件49_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AAmAAQAAAPgLAMQgMALgPAAQgOAAgLgLQgMgMAAgPQAAgOAMgLQALgMAOAAQAPAAAMAMQALALAAAOg");
	this.shape.setTransform(41.1,2.4,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AgZAaQgLgLAAgPQAAgPALgLQALgLAOABQAPgBAMALQAKALABAPQgBAPgKALQgMAMgPgBQgOABgLgMg");
	this.shape_1.setTransform(41.1,2.4,0.653,0.653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").ss(2).p("AAgAUQgIANgQADQgOAEgNgJQgNgIgEgPQgDgOAIgNQAJgNAPgEQAOgDANAIQANAIAEAQQADAOgIANg");
	this.shape_2.setTransform(2.5,25.1,0.653,0.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").ss(2).p("AkTClIEelGIEQAA");
	this.shape_3.setTransform(21.7,13,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1,45.7,29.6);


(lib.元件48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("ACRoaIAAMOIkiEj");
	this.shape.setTransform(12.3,35.2,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("AAXAOQgGAKgLACQgKADgKgGQgJgGgCgLQgDgKAGgKQAGgJALgCQAKgDAJAGQAKAGACALQADAKgGAJg");
	this.shape_1.setTransform(1.8,71.3,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,23.8,77.7);


(lib.元件48_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("ACRoaIAAMOIkiEj");
	this.shape.setTransform(12.3,35.2,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("AAXAOQgGAKgLACQgKADgKgGQgJgGgCgLQgDgKAGgKQAGgJALgCQAKgDAJAGQAKAGACALQADAKgGAJg");
	this.shape_1.setTransform(1.8,71.3,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,23.8,77.7);


(lib.元件48_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("ACRoaIAAMOIkiEj");
	this.shape.setTransform(12.3,35.2,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("AAXAOQgGAKgLACQgKADgKgGQgJgGgCgLQgDgKAGgKQAGgJALgCQAKgDAJAGQAKAGACALQADAKgGAJg");
	this.shape_1.setTransform(1.8,71.3,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,23.8,77.7);


(lib.元件47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EghZgE8IgBJ0MBC6AAA");
	this.shape.setTransform(139.7,20.7,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("AgFAaQAKADAKgGQAJgGACgLQADgKgGgKQgGgJgLgDQgKgCgKAGQgJAGgCALQgDAKAGAJQAGAKALACg");
	this.shape_1.setTransform(281.1,41.2,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.9,45);


(lib.元件47_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EghZgE8IgBJ0MBC6AAA");
	this.shape.setTransform(139.7,20.7,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("AgFAaQAKADAKgGQAJgGACgLQADgKgGgKQgGgJgLgDQgKgCgKAGQgJAGgCALQgDAKAGAJQAGAKALACg");
	this.shape_1.setTransform(281.1,41.2,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.9,45);


(lib.元件47_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EghZgE8IgBJ0MBC6AAA");
	this.shape.setTransform(139.7,20.7,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("AgFAaQAKADAKgGQAJgGACgLQADgKgGgKQgGgJgLgDQgKgCgKAGQgJAGgCALQgDAKAGAJQAGAKALACg");
	this.shape_1.setTransform(281.1,41.2,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,284.9,45);


(lib.元件46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AAAgpIhVBTICrAAg");
	this.shape.setTransform(101.9,6,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AhVAqIBVhTIBWBTg");
	this.shape_1.setTransform(101.9,6,0.653,0.653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("ANeBSIiQiiI2ZAAIiTCi");
	this.shape_2.setTransform(56.3,5.3,0.653,0.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_3.setTransform(7.4,5.3,0.653,0.653);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_4.setTransform(11.3,5.3,0.653,0.653);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_5.setTransform(15.1,5.3,0.653,0.653);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_6.setTransform(72.9,5.3,0.653,0.653);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_7.setTransform(80.6,5.3,0.653,0.653);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_8.setTransform(76.8,5.3,0.653,0.653);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_9.setTransform(84.5,5.3,0.653,0.653);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_10.setTransform(88.4,5.3,0.653,0.653);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_11.setTransform(92.2,5.3,0.653,0.653);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_12.setTransform(96.1,5.3,0.653,0.653);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_13.setTransform(38.3,5.3,0.653,0.653);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_14.setTransform(46,5.3,0.653,0.653);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_15.setTransform(42.1,5.3,0.653,0.653);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_16.setTransform(53.7,5.3,0.653,0.653);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_17.setTransform(49.8,5.3,0.653,0.653);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_18.setTransform(57.5,5.3,0.653,0.653);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_19.setTransform(61.4,5.3,0.653,0.653);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_20.setTransform(65.2,5.3,0.653,0.653);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_21.setTransform(69.1,5.3,0.653,0.653);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_22.setTransform(19,5.3,0.653,0.653);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_23.setTransform(22.8,5.3,0.653,0.653);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_24.setTransform(26.7,5.3,0.653,0.653);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_25.setTransform(30.6,5.3,0.653,0.653);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_26.setTransform(34.4,5.3,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,114.7,12.7);


(lib.元件46_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AAAgpIhVBTICrAAg");
	this.shape.setTransform(101.9,6,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AhVAqIBVhTIBWBTg");
	this.shape_1.setTransform(101.9,6,0.653,0.653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("ANeBSIiQiiI2ZAAIiTCi");
	this.shape_2.setTransform(56.3,5.3,0.653,0.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_3.setTransform(7.4,5.3,0.653,0.653);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_4.setTransform(11.3,5.3,0.653,0.653);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_5.setTransform(15.1,5.3,0.653,0.653);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_6.setTransform(72.9,5.3,0.653,0.653);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_7.setTransform(80.6,5.3,0.653,0.653);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_8.setTransform(76.8,5.3,0.653,0.653);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_9.setTransform(84.5,5.3,0.653,0.653);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_10.setTransform(88.4,5.3,0.653,0.653);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_11.setTransform(92.2,5.3,0.653,0.653);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_12.setTransform(96.1,5.3,0.653,0.653);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_13.setTransform(38.3,5.3,0.653,0.653);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_14.setTransform(46,5.3,0.653,0.653);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_15.setTransform(42.1,5.3,0.653,0.653);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_16.setTransform(53.7,5.3,0.653,0.653);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_17.setTransform(49.8,5.3,0.653,0.653);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_18.setTransform(57.5,5.3,0.653,0.653);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_19.setTransform(61.4,5.3,0.653,0.653);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_20.setTransform(65.2,5.3,0.653,0.653);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_21.setTransform(69.1,5.3,0.653,0.653);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_22.setTransform(19,5.3,0.653,0.653);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_23.setTransform(22.8,5.3,0.653,0.653);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_24.setTransform(26.7,5.3,0.653,0.653);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_25.setTransform(30.6,5.3,0.653,0.653);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_26.setTransform(34.4,5.3,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,114.7,12.7);


(lib.元件46_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AAAgpIhVBTICrAAg");
	this.shape.setTransform(101.9,6,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AhVAqIBVhTIBWBTg");
	this.shape_1.setTransform(101.9,6,0.653,0.653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("ANeBSIiQiiI2ZAAIiTCi");
	this.shape_2.setTransform(56.3,5.3,0.653,0.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_3.setTransform(7.4,5.3,0.653,0.653);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_4.setTransform(11.3,5.3,0.653,0.653);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_5.setTransform(15.1,5.3,0.653,0.653);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_6.setTransform(72.9,5.3,0.653,0.653);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_7.setTransform(80.6,5.3,0.653,0.653);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_8.setTransform(76.8,5.3,0.653,0.653);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_9.setTransform(84.5,5.3,0.653,0.653);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_10.setTransform(88.4,5.3,0.653,0.653);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_11.setTransform(92.2,5.3,0.653,0.653);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_12.setTransform(96.1,5.3,0.653,0.653);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_13.setTransform(38.3,5.3,0.653,0.653);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_14.setTransform(46,5.3,0.653,0.653);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_15.setTransform(42.1,5.3,0.653,0.653);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_16.setTransform(53.7,5.3,0.653,0.653);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_17.setTransform(49.8,5.3,0.653,0.653);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_18.setTransform(57.5,5.3,0.653,0.653);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_19.setTransform(61.4,5.3,0.653,0.653);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_20.setTransform(65.2,5.3,0.653,0.653);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_21.setTransform(69.1,5.3,0.653,0.653);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_22.setTransform(19,5.3,0.653,0.653);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_23.setTransform(22.8,5.3,0.653,0.653);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_24.setTransform(26.7,5.3,0.653,0.653);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_25.setTransform(30.6,5.3,0.653,0.653);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("AgzA5IBnhx");
	this.shape_26.setTransform(34.4,5.3,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,114.7,12.7);


(lib.元件45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AAAA5IB1hxIjpAAg");
	this.shape.setTransform(16.4,6.3,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("Ah0g4IDpAAIh1Bxg");
	this.shape_1.setTransform(16.4,6.3,0.653,0.653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("AyUhvIDFDdIedAAIDIjd");
	this.shape_2.setTransform(76.6,7.3,0.653,0.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_3.setTransform(143.2,7.3,0.653,0.653);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_4.setTransform(138.7,7.3,0.653,0.653);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_5.setTransform(134.3,7.3,0.653,0.653);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_6.setTransform(49.4,7.3,0.653,0.653);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_7.setTransform(40.5,7.3,0.653,0.653);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_8.setTransform(44.9,7.3,0.653,0.653);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_9.setTransform(36,7.3,0.653,0.653);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_10.setTransform(31.5,7.3,0.653,0.653);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_11.setTransform(27.1,7.3,0.653,0.653);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_12.setTransform(22.6,7.3,0.653,0.653);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_13.setTransform(89.6,7.3,0.653,0.653);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_14.setTransform(80.7,7.3,0.653,0.653);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_15.setTransform(85.1,7.3,0.653,0.653);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_16.setTransform(71.7,7.3,0.653,0.653);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_17.setTransform(76.2,7.3,0.653,0.653);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_18.setTransform(67.3,7.3,0.653,0.653);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_19.setTransform(62.8,7.3,0.653,0.653);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_20.setTransform(58.3,7.3,0.653,0.653);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_21.setTransform(53.9,7.3,0.653,0.653);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_22.setTransform(129.8,7.3,0.653,0.653);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_23.setTransform(120.9,7.3,0.653,0.653);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_24.setTransform(125.3,7.3,0.653,0.653);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_25.setTransform(111.9,7.3,0.653,0.653);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_26.setTransform(116.4,7.3,0.653,0.653);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_27.setTransform(107.5,7.3,0.653,0.653);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_28.setTransform(103,7.3,0.653,0.653);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_29.setTransform(98.5,7.3,0.653,0.653);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_30.setTransform(94.1,7.3,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,155.3,16.5);


(lib.元件45_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AAAA5IB1hxIjpAAg");
	this.shape.setTransform(16.4,6.3,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("Ah0g4IDpAAIh1Bxg");
	this.shape_1.setTransform(16.4,6.3,0.653,0.653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("AyUhvIDFDdIedAAIDIjd");
	this.shape_2.setTransform(76.6,7.3,0.653,0.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_3.setTransform(143.2,7.3,0.653,0.653);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_4.setTransform(138.7,7.3,0.653,0.653);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_5.setTransform(134.3,7.3,0.653,0.653);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_6.setTransform(49.4,7.3,0.653,0.653);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_7.setTransform(40.5,7.3,0.653,0.653);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_8.setTransform(44.9,7.3,0.653,0.653);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_9.setTransform(36,7.3,0.653,0.653);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_10.setTransform(31.5,7.3,0.653,0.653);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_11.setTransform(27.1,7.3,0.653,0.653);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_12.setTransform(22.6,7.3,0.653,0.653);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_13.setTransform(89.6,7.3,0.653,0.653);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_14.setTransform(80.7,7.3,0.653,0.653);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_15.setTransform(85.1,7.3,0.653,0.653);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_16.setTransform(71.7,7.3,0.653,0.653);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_17.setTransform(76.2,7.3,0.653,0.653);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_18.setTransform(67.3,7.3,0.653,0.653);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_19.setTransform(62.8,7.3,0.653,0.653);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_20.setTransform(58.3,7.3,0.653,0.653);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_21.setTransform(53.9,7.3,0.653,0.653);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_22.setTransform(129.8,7.3,0.653,0.653);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_23.setTransform(120.9,7.3,0.653,0.653);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_24.setTransform(125.3,7.3,0.653,0.653);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_25.setTransform(111.9,7.3,0.653,0.653);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_26.setTransform(116.4,7.3,0.653,0.653);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_27.setTransform(107.5,7.3,0.653,0.653);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_28.setTransform(103,7.3,0.653,0.653);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_29.setTransform(98.5,7.3,0.653,0.653);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_30.setTransform(94.1,7.3,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,155.3,16.5);


(lib.元件45_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AAAA5IB1hxIjpAAg");
	this.shape.setTransform(16.4,6.3,0.653,0.653);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("Ah0g4IDpAAIh1Bxg");
	this.shape_1.setTransform(16.4,6.3,0.653,0.653);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("AyUhvIDFDdIedAAIDIjd");
	this.shape_2.setTransform(76.6,7.3,0.653,0.653);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_3.setTransform(143.2,7.3,0.653,0.653);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_4.setTransform(138.7,7.3,0.653,0.653);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_5.setTransform(134.3,7.3,0.653,0.653);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_6.setTransform(49.4,7.3,0.653,0.653);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_7.setTransform(40.5,7.3,0.653,0.653);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_8.setTransform(44.9,7.3,0.653,0.653);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_9.setTransform(36,7.3,0.653,0.653);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_10.setTransform(31.5,7.3,0.653,0.653);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_11.setTransform(27.1,7.3,0.653,0.653);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_12.setTransform(22.6,7.3,0.653,0.653);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_13.setTransform(89.6,7.3,0.653,0.653);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_14.setTransform(80.7,7.3,0.653,0.653);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_15.setTransform(85.1,7.3,0.653,0.653);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_16.setTransform(71.7,7.3,0.653,0.653);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_17.setTransform(76.2,7.3,0.653,0.653);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_18.setTransform(67.3,7.3,0.653,0.653);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_19.setTransform(62.8,7.3,0.653,0.653);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_20.setTransform(58.3,7.3,0.653,0.653);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_21.setTransform(53.9,7.3,0.653,0.653);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_22.setTransform(129.8,7.3,0.653,0.653);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_23.setTransform(120.9,7.3,0.653,0.653);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_24.setTransform(125.3,7.3,0.653,0.653);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_25.setTransform(111.9,7.3,0.653,0.653);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_26.setTransform(116.4,7.3,0.653,0.653);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_27.setTransform(107.5,7.3,0.653,0.653);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_28.setTransform(103,7.3,0.653,0.653);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_29.setTransform(98.5,7.3,0.653,0.653);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("ABHhNIiNCb");
	this.shape_30.setTransform(94.1,7.3,0.653,0.653);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,155.3,16.5);


(lib.元件41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-604.8,-654.8)).s().p("AweJRIi7pRITkv7IIbAEIK0MtI3DSmIl6Agg");
	this.shape.setTransform(124.2,102);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.3,204);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-442.2,-217.3)).s().p("AzLm7IdTqXIJEXlI/iLAg");
	this.shape.setTransform(122.8,110.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245.5,221.5);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-360.5,-750.4)).s().p("EgxpAO+IjFmVISOmiIAIklIZLsfMAg/AASIOOKeIOvTLg");
	this.shape.setTransform(322.6,116.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39, new cjs.Rectangle(-14.9,20.8,675,191.5), null);


(lib.元件28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AoDG+IQHt7");
	this.shape.setTransform(51.6,48.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,2.7,105.3,91.1);


(lib.元件28_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AoGHAIQNt/");
	this.shape.setTransform(51.9,48);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,2.2,105.9,91.6);


(lib.元件28_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AoBG7IQDt1");
	this.shape.setTransform(51.4,48.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,3.2,104.8,90.6);


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(3,1,1).p("AwXAAMAgvAAA");
	this.shape.setTransform(119.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").ss(1,1,1).p("Ay5AAMAlzAAA");
	this.shape_1.setTransform(121,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.5,244.1,4.1);


(lib.元件27_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(3,1,1).p("AwXAAMAgvAAA");
	this.shape.setTransform(119.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").ss(1,1,1).p("Ay5AAMAlzAAA");
	this.shape_1.setTransform(121,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.5,244.1,4.1);


(lib.元件27_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(3,1,1).p("AwXAAMAgvAAA");
	this.shape.setTransform(119.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").ss(1,1,1).p("Ay5AAMAlzAAA");
	this.shape_1.setTransform(121,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.5,244.1,4.1);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-210.7,-978.8)).s().p("AsLOCMAAAgh0QC8ACCwBuISrQ5IzvU8g");
	this.shape.setTransform(179.5,126.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件25, new cjs.Rectangle(101.5,0,156,253.4), null);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.setsdgs, null, new cjs.Matrix2D(1,0,0,1,-269.7,-94.6)).s().p("ArWEBIjNr8IHdmdIM3BmIIzWVIszE2g");
	this.shape.setTransform(93.2,92.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186.4,184.3);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhD6BYAMAAAiv/MCH1AAAMAAACv/g");
	mask.setTransform(4933.6,-673.8);

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(6971.9,-1227.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_1.setTransform(6923.5,-1227.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_2.setTransform(6875,-1227.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_3.setTransform(6826.6,-1227.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(6778.2,-1227.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(6729.7,-1227.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_6.setTransform(6681.3,-1227.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_7.setTransform(6632.8,-1227.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_8.setTransform(6584.4,-1227.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_9.setTransform(6536,-1227.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(6487.5,-1227.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(6439.1,-1227.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_12.setTransform(6390.6,-1227.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_13.setTransform(6342.2,-1227.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_14.setTransform(6293.8,-1227.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(6245.3,-1227.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(6196.9,-1227.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(6148.4,-1227.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(6100,-1227.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_19.setTransform(6051.5,-1227.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(6003.1,-1227.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(5954.7,-1227.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_22.setTransform(5906.3,-1227.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_23.setTransform(5857.8,-1227.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_24.setTransform(5809.4,-1227.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_25.setTransform(5760.9,-1227.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(5712.5,-1227.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(5664,-1227.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_28.setTransform(5615.6,-1227.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKGB48MEUOjx3");
	this.shape_29.setTransform(5567.2,-1227.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_30.setTransform(5518.7,-1227.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_31.setTransform(5470.3,-1227.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4585.3,-1237,782.9,784.5);


(lib.元件14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg3bBEKMAAAiITMBu3AAAMAAACITg");
	mask.setTransform(3093.7,2163.4);

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(2521.6,2670);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_1.setTransform(2473.1,2670);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_2.setTransform(2424.7,2670);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_3.setTransform(2376.3,2670);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(2327.8,2670);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(2279.4,2670);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_6.setTransform(2230.9,2670);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_7.setTransform(2182.5,2670);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_8.setTransform(2134,2670);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_9.setTransform(2085.6,2670);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(2037.2,2670);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(1988.7,2670);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_12.setTransform(1940.3,2670);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_13.setTransform(1891.8,2670);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_14.setTransform(1843.4,2670);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(1795,2670);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(1746.5,2670);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(1698.1,2670);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(1649.6,2670);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_19.setTransform(1601.2,2670);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(1552.8,2670);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(1504.3,2670);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_22.setTransform(1455.9,2670);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_23.setTransform(1407.5,2670);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_24.setTransform(1359,2670);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_25.setTransform(1310.6,2670);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(1262.1,2670);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(1213.7,2670);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_28.setTransform(1165.3,2670);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKGB48MEUOjx3");
	this.shape_29.setTransform(1116.8,2670);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_30.setTransform(1068.4,2670);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_31.setTransform(1019.9,2670);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2738.9,1895,667.6,704.6);


(lib.元件14_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgrtA6HMAAAh0NMBXbAAAMAAAB0Ng");
	mask.setTransform(3018,212);

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape.setTransform(2385.6,774);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_1.setTransform(2337.2,774);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_2.setTransform(2288.7,774);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_3.setTransform(2240.3,774);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_4.setTransform(2191.9,774);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_5.setTransform(2143.4,774);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_6.setTransform(2095,774);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_7.setTransform(2046.5,774);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_8.setTransform(1998.1,774);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_9.setTransform(1949.7,774);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_10.setTransform(1901.2,774);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_11.setTransform(1852.8,774);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_12.setTransform(1804.3,774);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_13.setTransform(1755.9,774);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_14.setTransform(1707.5,774);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_15.setTransform(1659,774);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_16.setTransform(1610.6,774);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_17.setTransform(1562.1,774);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_18.setTransform(1513.7,774);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_19.setTransform(1465.2,774);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_20.setTransform(1416.8,774);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_21.setTransform(1368.4,774);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_22.setTransform(1320,774);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_23.setTransform(1271.5,774);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_24.setTransform(1223.1,774);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#183851").p("EiKHB48MEUOjx3");
	this.shape_25.setTransform(1174.6,774);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_26.setTransform(1126.2,774);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#183851").p("EiKGB48MEUNjx3");
	this.shape_27.setTransform(1077.7,774);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_28.setTransform(1029.3,774);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#183851").p("EiKGB48MEUOjx3");
	this.shape_29.setTransform(980.9,774);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_30.setTransform(932.4,774);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#183851").p("EiKHB48MEUPjx3");
	this.shape_31.setTransform(884,774);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2738.2,-1,532.4,585);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALgBAOQABAPgLALQgLALgPgBQgOABgLgLg");
	this.shape.setTransform(3.7,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.3,7.3);


(lib.元件13_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALgBAOQABAPgLALQgLALgPgBQgOABgLgLg");
	this.shape.setTransform(3.7,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.3,7.3);


(lib.元件13_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALgBAOQABAPgLALQgLALgPgBQgOABgLgLg");
	this.shape.setTransform(3.7,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.3,7.3);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-424,-273.6)).s().p("AvsYWMAAAgiYIAPgHIPgurIIdAHIHNG+IgfJxMgdCAgzg");
	this.shape.setTransform(176.7,158.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(76.2,0,201.1,317.8), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-195.3,-135.1)).s().p("AmqH5IwKGGIAuvmIRwxoISIgHIJDVvIm+LAItyF9g");
	this.shape.setTransform(146.1,123.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,292.2,247.7), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AhCB3QgagZAAglQAAgbAOgTQAOgRAagHQgWgIgKgPQgKgOAAgVQAAgeAWgVQAWgVAkAAQAkAAAXAVQAWAWAAAeQAAAUgKAPQgKAOgVAIQAaAJAOASQANATAAAaQAAAjgaAZQgZAZgqAAQgpAAgZgZgAgoASQgQAQAAAXQAAAQAHAOQAHANAOAIQAOAHAOABQAZgBAQgQQARgPAAgZQAAgZgRgQQgRgRgYAAQgYAAgQARgAgghmQgNANAAASQAAATANANQANANATAAQAUAAANgMQANgNAAgTQAAgSgNgNQgNgNgUgBQgTAAgNANg");
	this.shape.setTransform(293.5,61.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("Ag/BzQgcgkAAhPQAAgxAKgfQALgeAUgQQAUgRAeAAQAXAAARAJQARAJALARQALARAHAaQAGAYAAApQAAAxgKAfQgKAfgVAQQgUARgfAAQgoAAgXgdgAglheQgSAZAABFQAABGAQAWQAQAYAXAAQAYAAAQgYQAQgXAAhFQAAhFgQgWQgQgYgYAAQgXAAgOAVg");
	this.shape_1.setTransform(270.1,61.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("Ag/BzQgcgkAAhPQAAgxAKgfQALgeAUgQQAUgRAeAAQAXAAARAJQARAJALARQALARAHAaQAGAYAAApQAAAxgKAfQgKAfgVAQQgUARgfAAQgoAAgXgdgAglheQgSAZAABFQAABGAQAWQAQAYAXAAQAYAAAQgYQAQgXAAhFQAAhFgQgWQgQgYgYAAQgXAAgOAVg");
	this.shape_2.setTransform(246.8,61.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("AAZCNIAAhEIh5AAIAAgfIB/i2IAcAAIAAC2IAmAAIAAAfIgmAAIAABEgAg+AqIBXAAIAAh/g");
	this.shape_3.setTransform(222.9,61.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("Ag3CwQAlgSAigZQAhgZAPgZQgPgogIglQgJgkAAgkQgPArgYAhIgEgDQASgoAPg3QAPg4ADgjIAhAUIgNAJIgSA5IBXAAIAUgUIAcAeIgyAAQgEAvgIAnQgHAogTArQAXAcAZANQAZAOATACIAAAGQgVAEgJAQQgYgOgPgPQgRgQgSgWQgZAZgeAUQgfATgsAOgAA0ABQALAnAOAYQAMgeAHglQAHgnACgpIhCAAQADAvAKAlgAi1CJQAvgGAkgIIAAhLIgYAAQgUAAgRAEIgOgNIBLAAIAAhEIgdAIQgNADgKAHIgRgdQARgEAUgdQAUgdAMgdIgbAAQgUAAgRAEIgOgNICPAAIAUgVIAZAeIhoAAIAZAPQgRAIgTAZQgVAagVATQAvgBA+gGQgIgUgSgZIAFgDQAaATAMAMQAMANAAANQAAANgGAFQgIAHgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgIgZIg8AJIAdAQIgNAJIAAAsIAgAAIAUgVIAZAeIhNAAIAABIQAbgEAygLIABAGIhnAdIgoANQgOAGgHAHg");
	this.shape_4.setTransform(191.5,61.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#183851").s().p("AhzAAQgXA2glAuIgFgGQArhGAWheIgnAAIgOADIgMgMIBBAAQAAg6gCgsIAlATIgOALIAABIIAUAAIARgRIAaAaIg/AAIAAAmQAeAQAKALQAKAKAAAHQAAAFgFAIQgFAJgDAAQgEAAgHgTQgKgYgQgOQAACkACAfIgZAKQAChCAAh0gAgGCSIAAgHQApAHAHgBQAIgCAAgLIAAiqIhKAAIgOAEIgNgNIC2AAIAUgUIAeAdIhsAAIAAC3QgCAYggALQAAgTgtgPgAhICJQArg5AZhNIAgAUIgPAHQglBGgsApgACLBnQgLgkglg6IAFgDQA7A6AGAOQAGAOAAAIQAAALgGAJQgGAJgCAAQgIAAgGgagAgciLICIAAIATgSIAcAbIicAAIgOADg");
	this.shape_5.setTransform(150.8,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#183851").s().p("AiyClQAggoALgnQALgmACgoIABhMQAAgxgBgwIAaAPICuAAIAOgRIAXAWIgMALQgCB2AGApQAFArAMAUQANAVAQAOIAQhEIAGACQgFApACAXQABAWAFAMQACAFgFAAQgGAAgTgKQgUgKgVgjQgWgigDg5QgDg4AAhiIi0AAQAAB/gDAhQgEAigNAjQgNAkgpArgAhuBtQA5gvAphFQgSgXgtgxIAFgDQAgAaAiAiQALgWAKgWQAJgWAGgUIAfAXIgOAGIgoBIQAgAhALAQQALAQAAANQAAAGgEAJQgEAJgDAAQgFAAgEgPQgKgXgigzQgoA/hCAtg");
	this.shape_6.setTransform(109.7,62.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#183851").s().p("Ag7CQIACgFQAjAFANAAQAMAAAAgKIAAiBIhbAAIgOANIgWgTQAOgHASgWQASgXAdg2Ig+AAQgUAAgRAFIgNgOIBzAAQAXgxACgQIAdATQgMAJgRAlICAAAIAVgVIAfAeIi3AAQgiBAghAoIBaAAQAAgvgBgWIAjARIgMALIAAApIBFAAIAUgUIAdAcIh2AAIAACIQABAagiAOQgCgTgxgSgAikCPQBJg2AlhDIAeAYQgNADgiAgQgkAjg1AhgACHB6QgQgghDg3IAFgEQBYA0AKAOQAKAOAAAMQAAAHgEAIQgEAGgDAAQgGAAgNgWg");
	this.shape_7.setTransform(68.7,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.6,39.2,258.3,45.6);


(lib.元件4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AhCB3QgagZAAglQAAgbAOgTQAOgRAagHQgWgIgKgPQgKgOAAgVQAAgeAWgVQAWgVAkAAQAkAAAXAVQAWAWAAAeQAAAUgKAPQgKAOgVAIQAaAJAOASQANATAAAaQAAAjgaAZQgZAZgqAAQgpAAgZgZgAgoASQgQAQAAAXQAAAQAHAOQAHANAOAIQAOAHAOABQAZgBAQgQQARgPAAgZQAAgZgRgQQgRgRgYAAQgYAAgQARgAgghmQgNANAAASQAAATANANQANANATAAQAUAAANgMQANgNAAgTQAAgSgNgNQgNgNgUgBQgTAAgNANg");
	this.shape.setTransform(293.5,61.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("Ag/BzQgcgkAAhPQAAgxAKgfQALgeAUgQQAUgRAeAAQAXAAARAJQARAJALARQALARAHAaQAGAYAAApQAAAxgKAfQgKAfgVAQQgUARgfAAQgoAAgXgdgAglheQgSAZAABFQAABGAQAWQAQAYAXAAQAYAAAQgYQAQgXAAhFQAAhFgQgWQgQgYgYAAQgXAAgOAVg");
	this.shape_1.setTransform(270.1,61.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("Ag/BzQgcgkAAhPQAAgxAKgfQALgeAUgQQAUgRAeAAQAXAAARAJQARAJALARQALARAHAaQAGAYAAApQAAAxgKAfQgKAfgVAQQgUARgfAAQgoAAgXgdgAglheQgSAZAABFQAABGAQAWQAQAYAXAAQAYAAAQgYQAQgXAAhFQAAhFgQgWQgQgYgYAAQgXAAgOAVg");
	this.shape_2.setTransform(246.8,61.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("Ag/B6QgZgWgDgkIAigEQAGAdAPANQAOANAVABQAXgBARgRQARgQAAgaQAAgXgQgPQgPgQgZgBQgIAAgPAFIAEgeIAFAAQAWAAARgLQASgLAAgZQAAgSgNgNQgNgNgTAAQgUAAgOANQgNANgEAZIgjgGQAHgjAWgTQAXgTAhAAQAWAAAUAKQATAKAKARQALARAAATQAAATgKAPQgKAOgTAKQAZAFAOARQANATAAAaQAAAlgbAaQgaAagpAAQglAAgYgWg");
	this.shape_3.setTransform(223.5,61.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("Ag3CwQAlgSAigZQAhgZAPgZQgPgogIglQgJgkAAgkQgPArgYAhIgEgDQASgoAPg3QAPg4ADgjIAhAUIgNAJIgSA5IBXAAIAUgUIAcAeIgyAAQgEAvgIAnQgHAogTArQAXAcAZANQAZAOATACIAAAGQgVAEgJAQQgYgOgPgPQgRgQgSgWQgZAZgeAUQgfATgsAOgAA0ABQALAnAOAYQAMgeAHglQAHgnACgpIhCAAQADAvAKAlgAi1CJQAvgGAkgIIAAhLIgYAAQgUAAgRAEIgOgNIBLAAIAAhEIgdAIQgNADgKAHIgRgdQARgEAUgdQAUgdAMgdIgbAAQgUAAgRAEIgOgNICPAAIAUgVIAZAeIhoAAIAZAPQgRAIgTAZQgVAagVATQAvgBA+gGQgIgUgSgZIAFgDQAaATAMAMQAMANAAANQAAANgGAFQgIAHgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgIgZIg8AJIAdAQIgNAJIAAAsIAgAAIAUgVIAZAeIhNAAIAABIQAbgEAygLIABAGIhnAdIgoANQgOAGgHAHg");
	this.shape_4.setTransform(191.5,61.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#183851").s().p("AhzAAQgXA2glAuIgFgGQArhGAWheIgnAAIgOADIgMgMIBBAAQAAg6gCgsIAlATIgOALIAABIIAUAAIARgRIAaAaIg/AAIAAAmQAeAQAKALQAKAKAAAHQAAAFgFAIQgFAJgDAAQgEAAgHgTQgKgYgQgOQAACkACAfIgZAKQAChCAAh0gAgGCSIAAgHQApAHAHgBQAIgCAAgLIAAiqIhKAAIgOAEIgNgNIC2AAIAUgUIAeAdIhsAAIAAC3QgCAYggALQAAgTgtgPgAhICJQArg5AZhNIAgAUIgPAHQglBGgsApgACLBnQgLgkglg6IAFgDQA7A6AGAOQAGAOAAAIQAAALgGAJQgGAJgCAAQgIAAgGgagAgciLICIAAIATgSIAcAbIicAAIgOADg");
	this.shape_5.setTransform(150.8,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#183851").s().p("AiyClQAggoALgnQALgmACgoIABhMQAAgxgBgwIAaAPICuAAIAOgRIAXAWIgMALQgCB2AGApQAFArAMAUQANAVAQAOIAQhEIAGACQgFApACAXQABAWAFAMQACAFgFAAQgGAAgTgKQgUgKgVgjQgWgigDg5QgDg4AAhiIi0AAQAAB/gDAhQgEAigNAjQgNAkgpArgAhuBtQA5gvAphFQgSgXgtgxIAFgDQAgAaAiAiQALgWAKgWQAJgWAGgUIAfAXIgOAGIgoBIQAgAhALAQQALAQAAANQAAAGgEAJQgEAJgDAAQgFAAgEgPQgKgXgigzQgoA/hCAtg");
	this.shape_6.setTransform(109.7,62.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#183851").s().p("Ag7CQIACgFQAjAFANAAQAMAAAAgKIAAiBIhbAAIgOANIgWgTQAOgHASgWQASgXAdg2Ig+AAQgUAAgRAFIgNgOIBzAAQAXgxACgQIAdATQgMAJgRAlICAAAIAVgVIAfAeIi3AAQgiBAghAoIBaAAQAAgvgBgWIAjARIgMALIAAApIBFAAIAUgUIAdAcIh2AAIAACIQABAagiAOQgCgTgxgSgAikCPQBJg2AlhDIAeAYQgNADgiAgQgkAjg1AhgACHB6QgQgghDg3IAFgEQBYA0AKAOQAKAOAAAMQAAAHgEAIQgEAGgDAAQgGAAgNgWg");
	this.shape_7.setTransform(68.7,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.6,39.2,258.3,45.6);


(lib.元件4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AhCB3QgagZAAglQAAgbAOgTQAOgRAagHQgWgIgKgPQgKgOAAgVQAAgeAWgVQAWgVAkAAQAkAAAXAVQAWAWAAAeQAAAUgKAPQgKAOgVAIQAaAJAOASQANATAAAaQAAAjgaAZQgZAZgqAAQgpAAgZgZgAgoASQgQAQAAAXQAAAQAHAOQAHANAOAIQAOAHAOABQAZgBAQgQQARgPAAgZQAAgZgRgQQgRgRgYAAQgYAAgQARgAgghmQgNANAAASQAAATANANQANANATAAQAUAAANgMQANgNAAgTQAAgSgNgNQgNgNgUgBQgTAAgNANg");
	this.shape.setTransform(293.5,61.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("Ag/BzQgcgkAAhPQAAgxAKgfQALgeAUgQQAUgRAeAAQAXAAARAJQARAJALARQALARAHAaQAGAYAAApQAAAxgKAfQgKAfgVAQQgUARgfAAQgoAAgXgdgAglheQgSAZAABFQAABGAQAWQAQAYAXAAQAYAAAQgYQAQgXAAhFQAAhFgQgWQgQgYgYAAQgXAAgOAVg");
	this.shape_1.setTransform(270.1,61.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("Ag/BzQgcgkAAhPQAAgxAKgfQALgeAUgQQAUgRAeAAQAXAAARAJQARAJALARQALARAHAaQAGAYAAApQAAAxgKAfQgKAfgVAQQgUARgfAAQgoAAgXgdgAglheQgSAZAABFQAABGAQAWQAQAYAXAAQAYAAAQgYQAQgXAAhFQAAhFgQgWQgQgYgYAAQgXAAgOAVg");
	this.shape_2.setTransform(246.8,61.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("AhcCNQgBgMAFgMQAHgSAQgTQAPgTAegYQAtglAQgVQAQgXAAgTQAAgVgPgOQgOgOgYAAQgYAAgPAPQgPAPAAAaIgkgDQAEgoAYgUQAYgWAnABQAoAAAYAWQAYAWAAAhQAAARgHARQgHAQgQASQgQARgmAgQgeAagJAJQgIAKgGAJICJAAIAAAhg");
	this.shape_3.setTransform(223.1,61.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("Ag3CwQAlgSAigZQAhgZAPgZQgPgogIglQgJgkAAgkQgPArgYAhIgEgDQASgoAPg3QAPg4ADgjIAhAUIgNAJIgSA5IBXAAIAUgUIAcAeIgyAAQgEAvgIAnQgHAogTArQAXAcAZANQAZAOATACIAAAGQgVAEgJAQQgYgOgPgPQgRgQgSgWQgZAZgeAUQgfATgsAOgAA0ABQALAnAOAYQAMgeAHglQAHgnACgpIhCAAQADAvAKAlgAi1CJQAvgGAkgIIAAhLIgYAAQgUAAgRAEIgOgNIBLAAIAAhEIgdAIQgNADgKAHIgRgdQARgEAUgdQAUgdAMgdIgbAAQgUAAgRAEIgOgNICPAAIAUgVIAZAeIhoAAIAZAPQgRAIgTAZQgVAagVATQAvgBA+gGQgIgUgSgZIAFgDQAaATAMAMQAMANAAANQAAANgGAFQgIAHgBAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAIgIgZIg8AJIAdAQIgNAJIAAAsIAgAAIAUgVIAZAeIhNAAIAABIQAbgEAygLIABAGIhnAdIgoANQgOAGgHAHg");
	this.shape_4.setTransform(191.5,61.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#183851").s().p("AhzAAQgXA2glAuIgFgGQArhGAWheIgnAAIgOADIgMgMIBBAAQAAg6gCgsIAlATIgOALIAABIIAUAAIARgRIAaAaIg/AAIAAAmQAeAQAKALQAKAKAAAHQAAAFgFAIQgFAJgDAAQgEAAgHgTQgKgYgQgOQAACkACAfIgZAKQAChCAAh0gAgGCSIAAgHQApAHAHgBQAIgCAAgLIAAiqIhKAAIgOAEIgNgNIC2AAIAUgUIAeAdIhsAAIAAC3QgCAYggALQAAgTgtgPgAhICJQArg5AZhNIAgAUIgPAHQglBGgsApgACLBnQgLgkglg6IAFgDQA7A6AGAOQAGAOAAAIQAAALgGAJQgGAJgCAAQgIAAgGgagAgciLICIAAIATgSIAcAbIicAAIgOADg");
	this.shape_5.setTransform(150.8,61.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#183851").s().p("AiyClQAggoALgnQALgmACgoIABhMQAAgxgBgwIAaAPICuAAIAOgRIAXAWIgMALQgCB2AGApQAFArAMAUQANAVAQAOIAQhEIAGACQgFApACAXQABAWAFAMQACAFgFAAQgGAAgTgKQgUgKgVgjQgWgigDg5QgDg4AAhiIi0AAQAAB/gDAhQgEAigNAjQgNAkgpArgAhuBtQA5gvAphFQgSgXgtgxIAFgDQAgAaAiAiQALgWAKgWQAJgWAGgUIAfAXIgOAGIgoBIQAgAhALAQQALAQAAANQAAAGgEAJQgEAJgDAAQgFAAgEgPQgKgXgigzQgoA/hCAtg");
	this.shape_6.setTransform(109.7,62.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#183851").s().p("Ag7CQIACgFQAjAFANAAQAMAAAAgKIAAiBIhbAAIgOANIgWgTQAOgHASgWQASgXAdg2Ig+AAQgUAAgRAFIgNgOIBzAAQAXgxACgQIAdATQgMAJgRAlICAAAIAVgVIAfAeIi3AAQgiBAghAoIBaAAQAAgvgBgWIAjARIgMALIAAApIBFAAIAUgUIAdAcIh2AAIAACIQABAagiAOQgCgTgxgSgAikCPQBJg2AlhDIAeAYQgNADgiAgQgkAjg1AhgACHB6QgQgghDg3IAFgEQBYA0AKAOQAKAOAAAMQAAAHgEAIQgEAGgDAAQgGAAgNgWg");
	this.shape_7.setTransform(68.7,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(48.6,39.2,258.3,45.6);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AjTH1IAAhQIlUAAIAABQIgrAAIAAmZIGqAAIAAGZgAonF7IFUAAIAAj1IlUAAgAHpHRQDRhxAphBQAxg+gEikIAAiuIArAAIAAC1QACBPgLA5QAhAYBEBBQCABuAtAxIgXAcQgigchDg7QhyhngugvQgMApgVAbQgsBJjeBxgAUDHHQFIh4gJkNIAAgpIk/AAIAAgpIH9AAIAAjbIkrAAQgvBcg+BNIgegVQB7iwBGjCIAnAGQgrB6glA0IEeAAIAAjfIArAAIAADfIF/AAIAAAqIl/AAIAADbIG6AAIAAApIliAAIAAEuQgEBeBrgFIBTAAQB1AFAIhLQAAg7AJhJIAmAAQAABPgJA9QgJBtiVgFIhcAAQiSAFAEiFIAAkxIjsAAIgDApQAJEkliCCgAClC/IAYgXICBCYICakBIlVAAIAAgqIGAAAIAAAiQhACBhsCiQBIBJAdAnIgeAWgAxGGJIBQgNIAAl4IAqAAIAAFyIB9gLIAAnbIifAAIAAk4IE4AAIAAE4IhyAAIAADAICLAAIAAAqIiLAAIAADrICkgZIAAApIm8A9gAvDiWIDiAAIAAjsIjiAAgAPREKIAAnOIlYAAIAAHOIgrAAIAAn1ICaAAIAjiKIj4AAIAAgrII1AAIAAArIkUAAIgPBIIgUBCIDrAAIAAH1gAqzAhQCzg4BrhMQhSg/g3huQgkBDg7A/IgcgaQCHifBDitIAmANQgaBSgdAbIFJAAIAAAiQhSCgh0BXQBfBKCqAmIgHAoQi2grhohXQhwBbi9A4gAoBkwQA5BvBPBIQBphZBJh+IkpAAgEgjoAAAIAAgpIP4AAIAAApgAEOjKIAhgUIBKCsIgnANgABVhMQCmivBSj1IAnAHIgZBJIC5D9IgeAVIisjwQhFCsiUChg");
	this.shape.setTransform(231.2,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,-4.6,456.2,100.2);


(lib.元件3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AjEE0IAAiCIAjAAIAACAQgEA/BGgEIC+AAQBQAAAIgtQAEgKADgYQAEgYAAgSIAgAAQAAAogHAqQgQBGhsAAIjBAAIgHAAQhfAAAEhYgAmfFxQBKheAqhPIAfALQgsBZhPBagAEHDaIAUgTQA0A4BRBnIgZASQhIhXg4hHgAg6CqIATgTIBtBpIgUATgAmNCqQBahrgHisIAAibIGlAAQgHgRgEhIQgDgVAAgQIAkgFQAAAbADAkQADA2ADAOIELAAIAAAjIkHAAQAVCNAnBdQA+hOA0hvIAbAMQgyB3hOBWQAUAkAbAeQAZAmAgAAQAdADAPg0QALgqAIg8IAiAFQgEAkgSBHQgPBKg7AAQgyAAgmg1QgXgfgPgiQgeAuhfBEIgSgYQBMg8A1g5QgxhZgXinImDAAIAAB7QAHCzhqB0gAjLBtIAAisID4AAIAACsgAioBKICyAAIAAhmIiyAAgAjnh9IAAgjIE0AAIAAAjgADMlbIARgYIBzBQIgRAYg");
	this.shape.setTransform(417.4,72.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AjPGCQD8iTAYiwIjjAAIAAgjIDkAAQACgdAAjDIivAAIAAgjICwAAQADhOAAhjIAgAAIAACxIDTAAIAAEDIBhAAIAAAjIkmAAQBADSDfBqIgMAbQjlhuhHjPIADgaIgLAAIAIAaQggC4kECLgABoAcIC0AAIAAjgIiwAAQAAC7gEAlgAkNGcIAAs3IAjAAIAAM3gABhBZIgIgaIALAAIgDAaIAAAAgAmfAcQAghrAdiRIAeAGQgRBzgpCOgAjdjmIAUgSIBjB5IgZASg");
	this.shape_1.setTransform(323,74.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("AmfF8ICBiEIAAknIh6AAIAAgjICdAAIAAFHQBBBsC5AAIGhAAIAAAjImhAAQi8AAhShyQgDALh2BxgABdFFIAAjuQhPBpi4BYIgQgZQDOhsBJhYIjZAAIAAjgIDZAAIAAhWIkKAAIAAgkIEKAAIAAhuIAkAAIAABuIEKAAIAAAkIkKAAIAABWIDZAAIAADgIjZAAIAAEKgACBAYIC2AAIAAibIi2AAgAhZAYIC2AAIAAibIi2AAgAEDDHIh5hQIARgdQBrBEB6BUIgRAZQgjgUhJgwgAlkliIAUgTICFCfIgZASg");
	this.shape_2.setTransform(228.7,73);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("AhdF+QCfhTBdhhQh/iQgijVIAAAcQACFDitC8IgXgRQCii5AAk+IAAinIheAAIAAgjIG1AAIAAAbIhXDCICOAAIAAAbQgyCphxB8QBQBWCHBJIgMAaQiUhLhLhYQhiBjikBVgAAAj6QApERCKCdQBph1AtiRIiOAAIAAgcIBWjBIkRAAgAkNGSIAAoRQggCZhYCUIgagRQBlioApivIiAAAIAAgiICEAAIAAi8IAjAAIAAC8IB5AAIAAAiIh5AAIAAB4IAMgJIB0ByIgSAYIhuhtIAAgUIgLAJIALALIgLgLIALgJIAAAUIAAHAg");
	this.shape_3.setTransform(134.3,74.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("AhLGXIhtAAIAAgjIBsAAQBRAHgGhDIAAhOImcAAIAAggIGcAAIAAg1IEDhOIpBAAIAAgjIKHAAIAAAgIkmBoIAAAeIF8AAIAAAgIl8AAIAABPQAGBehsAAIgHAAgAkZgcIAAijII6AAIAACjgAj2g/IH0AAIAAhdIn0AAgAmIkEIAAgjIGYAAIg7hkIAfgLIA7BvIFiAAIAAAjg");
	this.shape_4.setTransform(39.8,73.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,26.7,475.9,102.7);


(lib.元件3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AByIZIAAp1IGdAAIAAH8QAEB0h1gEIgqAAQgjgFgYAAIAAguQAZAAAoAFIAiAAQBJAFgFhKIAAh0IlAAAIAADwgACgD7IFAAAIAAiDIlAAAgACgBKIFAAAIAAh4IlAAAgAtQH1QB9hlAqhQQAphTAFipIAAiJIijAAIAAgpIKtAAIAAApIj1AAIAAHGQAABBBKAAIAYAAQBZAFALhEQAFgSAEgxQAFgxAAgZIAuAAQAAAWgEAdQgFBNgJAXQgKBoiBgFIgbAAQh4AAAAhvIAAnGIi5AAIAACRQAOEgj7CogEggdAIEIBhmjIAsAHIhiGkgA4lIHIiXAAIAAguICXAAQBvAOgEhvIAAgHImKAAIAWkZIhaAAIAAgtIBcAAIAbkhIGTAAIgJEhIBWAAIAAAtIhWAAIgFDwIBJAAIAAApIhJAAIAAAHQAACQiJAAIgQgBgA8WFIIFcAAIAEjwIlKAAgA7/ArIFPAAIAEj0Ik9AAgAOnHwIh5AAQiQAFAFiLIAAlfIAuAAIAADaQDohaBog8IAWAiQiFBJjhBUIAABZQgEBgBkgFIByAAQB0AFAEhAQAEgNAFgjQAEgkAAgYIAqAAQAABCgJAuQgKBliLAAIgNAAgAT7HnIAAgtIH3AAIAAhAImpAAIAAgtIGpAAIAAhEIlvAAIAAkcIMRAAIAAEcIlvAAIAABEIGpAAIAAAtImpAAIAABAIH3AAIAAAtgAclDbIFFAAIAAhMIlFAAgAWtDbIFFAAIAAhMIlFAAgAclBiIFFAAIAAhJIlFAAgAWtBiIFFAAIAAhJIlFAAgEghzAG2IAAh7IiMAAIAAB7IgpAAIAAtYIDjAAIAANYgEgj/AESICMAAIAAqGIiMAAgAyoFxICwg4IAAlIIiVAAIAAgtICVAAIAAk0IieAAIAAgpIF0AAIAAApIinAAIAAE0ICVAAIAAAtIiVAAIAAFAIC3g2IAHAqImPB1gA6vCUIAggXIB8CKIgfAegA6diCIAZgeIB+CRIggAWgAOnglIh5AAQiQAEAFiTIAAlWIAuAAIAAD1QDIhRB7hJIAVAmQiJBOjPBPIAAA0QgEBqBkgFIByAAQBvAFAEhNQAOgkAAhEIAuAAQAAAYgEAnQgFAkgFAOQgJBtiJAAIgLAAgEgg4gC8IAXgfICaCdIgZAZgATthTIAAgpIQ8AAIAAApgA9/ixQBpiiA+jFIArAIQgTBHgbAwIGhAAIAAAuImuAAQguBlhIBrgAIQjWIngASIgHgrIAngHQBShFCfjYIAiAQQh1CzhuBaQAXgECkgFIC3gEIh6iGIAagZIDODqIgaAYgAVxi/IAAkQIM0AAIAAEQgAWfjtILYAAIAAhDIrYAAgAWfleILYAAIAAhIIrYAAgEggQgHRIAegeICUCTIgZAagArjl9IAAguIIyAAIAAAug");
	this.shape.setTransform(234.5,53.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469.1,107.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AZ3GBQDfhAgHhlIAAgTIh2AAIAAkJIHRAAIAAEJIiTAAIAABdQgDBDA9gHIBBAAQBCAHADgvQAAgLADgZIAAgrIAkAGIAAAjQgEAcAAAMQgEBNhkgDIhBAAQhhADAEhhIAAhfIiBAAIAAATQAACFj2A9gAcACpIGGAAIAAhQImGAAgAcAA2IGGAAIAAhSImGAAgAmYF9QEuigAzkBIldAAIAAgjIFhAAQARhzADhsIk6AAIAAgjIK3AAIAAAjIlaAAQgEBvgQBwIGpAAIAAAjImuAAQg0EblDCggAwGGQIhcAAIAAgjIBdAAQAxAAAPgMQAOgMAAgiIAAnwImHAAIAAgjIGHAAIAAi9IAkAAIAAC9IGAAAIAAAjImAAAIAAAfQAsB/BDBcQBohXBphhIATAYQhkBjhuBVQBpB2CgBaIgMAbQkmiZhYkJIAAGVQAAAygbAXQgRAVg2AAIgRgBgEgj9AF0IB3iKIAAkqIhvAAIAAgjICTAAIAAFOQA+BtCqAAIHEAAIAAAjInEAAQi3AAhFhzQgCAKhsB0gADzF7IhNAAQiOAEAEiSIAAjoIAkAAIAADkQgEB2BsgHIBGAAQCEAEAAhQQAHgxAAg8IAkAAQAAA6gHA5QgIBpiSAAIgJAAgAINFcIAAggICoAAIAAoqIAkAAIAAIqID6AAIAArZIAkAAIAAEwIEpAAIAAAjIkpAAIAAGGIFaAAIAAAggA1MENIF3jXIARAeIl8DTgAW6EAIBtgdIAAlzIhmAAIAAgjIBmAAIAAjqIAjAAIAADqIBYAAIAAAOIFhAAIASgYIBKhfIk+AAIBSBiIgZASIhNhhIAUgTIhhAAIAAgfID/AAIgjhXIAggLIAoBiID6AAIAAAfIh9AAIAYARQgFAOgOASQgrA8gWAKIDVAAIAAAfIpdAAIAAgKIhTAAIAAFqIBtggIAKAhIkBBFgA/TDzIAAokICWAAQAcg7AVgxIAgALQgEATgOAZQgWAtgFAIIEFAAIAADZImcAAIAAByIG1AAIAADZgA+wDTIGRAAIAAiZImRAAgA+wh7IF5AAIAAiPIl5AAgAzxhoIAXgWICYCeIgYATgEgjEgF2IAZgSIB2ChIgZARgAq+kcQg/gtgqgYIARgZQAnAXBTA+IAoAeIgTAZQgUgLgjgjg");
	this.shape.setTransform(232.5,23.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,-17.7,460.4,82.9);


(lib.元件2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AkdESQA1h5gCiRIAYAAIAAA0QAHBnAqArIAAjtIhyAAIAAgYIBnAAIAAhkIhRAAIAAgXIBRAAIAAhnIAVAAIAABnIBRAAIAAAXIhRAAIAABkIBYAAIAAAYIhJAAIAABjIBCAAIAAAVIhCAAIAACFIgDAAQAmAMBDAAIFAAAIAAAYIlAAAQijACgXiRQgEBNgnBagAA+DeIAAhoIiRAhIgEgWIAmgKIAAlPIgdAAIAAgYIDDAAIAAAYIgfAAIAAEzIAqgLIADAWIgtAKIAABugAgZBzIBXgUIAAhXIhXAAgAgZgMIBXAAIAAhaIhXAAgAgZh+IBXAAIAAhaIhXAAgABcDLQA6hSAhhYIhIi6IAXgEIA+CqQAeheALhtIh4AAIAAgWICRAAIAAAPQgMCDgqBjIA/CjIgVAHIg2iTQgeBQg5BPg");
	this.shape.setTransform(427.4,33.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("Ag2EAQgrAAgdgDIAAgYQAdADArAAQBBAEgHgvIAAi5Ij0AAIAkjoQD0gIC9gTIADAYQi8ATjkAHIggC6IDcAAIAAiTIAVAAIAACTIDlAAIAAAXIjlAAIAAC5QAFBDhKAAIgKAAgAkbDTQBchNA8hRIARANQg9BWhgBLgABzBDIANgOQAWARA2A2IBQBRIgQANQhUhRhFhGg");
	this.shape_1.setTransform(361.5,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("Aj4EVIAAm8IBFAAIAihYQACgKAFgIIAWADQgYBJgRAeIB1AAIAAG3IgZAAIAAg3IieAAIAAA8gAjfDCICeAAIAAibIieAAgAjfAPICeAAIAAieIieAAgACJENQhAAAgggCIAEgYQA4AFAhAAQBTADAAhaIAHkyIitAAQgbA5gkA0IgRgLQBEhpAoh8IAUAHQgPA4gXAsIC8AAIgIFGQAABxhjAAIgFgBgAARgaIARgPIBkCAIgQAMg");
	this.shape_2.setTransform(296.1,32.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("AkbECIBdhdIAAjIIhYAAIAAgYIBwAAIAADhQAYAkAtATIgNgKQBbhPAAhjIhuAAIAAgYIBuAAIAAgXIAAhvIhdAAIAAgYIBdAAIAAh3IAXAAIAAB3ICVAAIAAh5IAWAAIAAB5IBYAAIAAAYIhYAAIAACGIBpAAIAAAYIhpAAIAAC8IgWAAIAAi8IiVAAQAABshhBSQAuARBAAAIELAAIAAAYIkLAAQiPAAg1hOQgDAHhYBOgAheDgIABgBIgEgCgAAEgOIAAAXICVAAIAAiGIiVAAgAhhDdIAEACIgBABgAjwj2IARgMIBTBtIgRAMg");
	this.shape_3.setTransform(229.4,32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("AjqEXIAAl0IDiAAIAAE1QADA/hDgCQgpAAgVgDIAAgXQAXACAnAAQAtAFgGgsIAAhGIixAAIAACHgAjSB4ICxAAIAAhWIixAAgAjSALICxAAIAAhQIixAAgABcETIAAgYIA9AAQAhACAMgMQALgIAAgdIAAk1IAZAAIAAE1QAAAkgTASQgTARgrAAgABRCvIAAj5IAYAAIAAD5gAkdifIAAgYIFXAAQAzgwAugvIAOANQgzA6gjAYIDLAAIAAAYgAijkGIAPgQIBWBQIgRANg");
	this.shape_4.setTransform(163.8,33.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#183851").s().p("AgsEVIhFAAIAAgYIBDAAQAxACgDghIAAhrIjLAHIgrAFIgEgYQAqgCAGgEIDNhSIi4AHIgkAFIAAgXQAPgDAJAAQAEgCADAAQBRgnBig4IAKARQhjA/g6APIC6gHIB4gyIAJATIlKCJIFJgLIhTgrIAMgRICdBgIgJASIg2gfIigAFIAABsQACA2g8AAIgJAAgAkZDnQBlgjBUgpIAIASQhEAkh1AsgABbCuIAHgVIC4BPIgJASgAkGgNIAAhtID6AAIAAg7IjuAAIAAgYIDuAAIAAhHIAXAAIAABHIDwAAIAAAYIjwAAIAAA7ID6AAIAABrIgZAAIAAhTInZAAIAABVg");
	this.shape_5.setTransform(97.7,32.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#183851").s().p("ABOEZIAAjnQgzBpiSBOIgJgSQCLhOA+hlIilAAIAAgZICqAAIAAhUIAYAAIAABUICsAAIAAAZIinAAQA4BlB6BKIgKANQh8hCgxhqIAADlgAjpEPIgsAAIAAgYIAsAAQApAFgEgkIAAitIhRAaIgHgWIBYgbIAAiRIhRAAIAAgYIBRAAIAAiCIAYAAIAACCIBFAAIAAAYIhFAAIAACLIBDgUIAEAVIhHAWIAAC0QACA2g6AAIgFAAgAB7iMIAQgQIB4BxIgMAQgAhOgsQBJg6Awg2IARAQQg2A6hIA3gADriEIAAhMIkcAAIAABMIgYAAIAAhkIFMAAIAABkg");
	this.shape_6.setTransform(31.6,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,0.8,464.5,70.5);


(lib.元件2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AqDFnIAArKIAeAAIAALKgASBFkIAAllIFjAAIAAESQADBQhagDIhSgEIAAgdIBTACQA6ADgDgzIAAgqIklAAIAAB/gASgDHIElAAIAAhFIklAAgASgBkIElAAIAAhHIklAAgAF+FjIAAnHIAfAAIAAHHgAzJFjIAAmpIAfAAIAAGpgAfPFGQDVhiCFiSIAVAQQiECajdBkgAPHFgIAAlYQgVBwhUBrIgVgQQBbh8AjiEIh4AAIAAgfIB4AAIAAkUIAfAAIAAEUIBpAAIAAAfIhpAAIAABTIAKgKIBlBrIgRARIhehkIAAEsgAczFeIAAkkQgxB2iGBmIgPgVQCGhtA6hxIixAAIAAgfIC3AAIAAhMIAfAAIAABMICrAAIAAAfIirAAIAABOIALgPICXBxIgPAWIiThwIAADlgEgk9AFHQEDiJAsjdIksAAIAAgeIEvAAQAPhiADhdIkOAAIAAgfIJVAAIAAAfIkpAAQgDBfgPBgIFuAAIAAAeIlyAAQgtDzkVCKgA8OFGIhBAAQh6ADADh+IAAjHIAfAAIAADEQgEBlBdgFIA8AAQByACAAhEQAGgqAAgzIAeAAQAAAxgGAxQgGBbh+AAIgIAAgAoUExIAAgfID2AAIAAjIIjDAAIAAgeIDDAAIAAizIiYAAQgQA3goBRIgXgIQA2hyAfi0IAeAFQgNBQgSAyICTAAIAAiwIAfAAIAACwIDAAAIAAAfIjAAAIAACzICxAAIAAAeIixAAIAADIIDSAAIAAAfgAAiCUQEQiwCXjkImAAAIAAgeIKYAAIAAAeIj5AAQiYD3kfCzgAHYghIALgVQC4B0BeBIIgPAUQh0hRiehqgEAgLABIQCKhRB6hwIAUAUQh4B0iVBPgAr7AZQAbhcATh+IAdAFQgSBqggB1gA4igIQD4ieB+jAIAXAQIgSAeQB1CsDkCBIgLAVQjkh7h/izQh7CsjhCFgAeNhGIBSibIAYAKQgYA2g7BkgARXg9IAAgdIDMAAIAAg9Ii0AAIAAgbIC0AAIAAg/Ii9AAIAAgeIC9AAIAAhUIAfAAIAABUIDJAAIAAAeIjJAAIAAA/IC0AAIAAAbIi0AAIAAA9IDbAAIAAAdgAaOjNIAXgPIBQCOIgWAPgApWjHIAVgPIBJBqIgWAOgAcejlIAcgJIAtCEIgcAKgEAgLgCIQCNhbBlhhIAUATQiEB+hzBAgAP6iFIBAiNIAYAGQgVA6gsBWgANtjWQgOgigEgQIAXgKQANAXAfBKQALAaAEASIgcAJIgkhagAaCkgQCggHDZgLIAFAdQjUANiqAFg");
	this.shape.setTransform(236.6,35.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,473.3,71.7);


(lib.元件117 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件115();
	this.instance.parent = this;
	this.instance.setTransform(24.3,24.3,1,1,0,0,0,24.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.6,48.6);


(lib.元件116 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件114();
	this.instance.parent = this;
	this.instance.setTransform(24.3,24.3,1,1,0,0,0,24.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.6,48.6);


(lib.元件112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 127
	this.instance = new lib.元件127("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(37.4,140.6,1,1,0,0,0,38,27.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({x:89,y:159.8,alpha:1},8,cjs.Ease.get(1)).wait(112));

	// 元件 126
	this.instance_1 = new lib.元件126("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(81.6,87.5,1,1,0,0,0,39.4,40.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:133.2,y:106.7,alpha:1},8,cjs.Ease.get(1)).wait(115));

	// 元件 125
	this.instance_2 = new lib.元件125("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(52.2,25.1,1,1,0,0,0,30.5,31.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:103.8,y:44.3,alpha:1},8,cjs.Ease.get(1)).wait(113));

	// 元件 124
	this.instance_3 = new lib.元件124("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.8,60.8,1,1,0,0,0,40.8,29.4);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:45.8,y:80,alpha:1},8,cjs.Ease.get(1)).wait(117));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,31.4,51,58.9);


(lib.元件111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 123
	this.instance = new lib.元件123("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(342.1,172.3,1,1,0,0,0,149.1,180.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:246.1,y:183.5,alpha:1},8,cjs.Ease.get(1)).wait(90));

	// 元件 122
	this.instance_1 = new lib.元件122("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(176.9,234.9,1,1,0,0,0,17.2,30.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:80.9,y:246.1,alpha:1},8,cjs.Ease.get(1)).wait(91));

	// 元件 121
	this.instance_2 = new lib.元件121("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(139.6,231.9,1,1,0,0,0,25.8,23.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({x:43.6,y:243.1,alpha:1},8,cjs.Ease.get(1)).wait(93));

	// 元件 120
	this.instance_3 = new lib.元件120("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(132,197.7,1,1,0,0,0,34.2,22.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:36,y:208.9,alpha:1},8,cjs.Ease.get(1)).wait(94));

	// 元件 119
	this.instance_4 = new lib.元件119("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(175.2,179.6,1,1,0,0,0,28.7,26.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:79.2,y:190.8,alpha:1},8,cjs.Ease.get(1)).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146.5,152.7,57.4,53.9);


(lib.元件99 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件101();
	this.instance.parent = this;
	this.instance.setTransform(33.1,-522.5,1,1,0,0,0,404.6,627.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(2));

	// 图层 1
	this.instance_1 = new lib.元件100();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.4,16.7,1,1,0,0,0,25.4,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,12.3,51.9,33.7);


(lib.元件87 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件82();
	this.instance.parent = this;
	this.instance.setTransform(23.8,23.8,1,1,0,0,0,23.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},28).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.6,47.5);


(lib.元件83 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件79();
	this.instance.parent = this;
	this.instance.setTransform(23.8,23.8,1,1,0,0,0,23.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.6,47.5);


(lib.元件67 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 56
	this.instance = new lib.元件56("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(312.6,430.2,1,1,0,0,0,91.1,87.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({x:262.6,y:372.2,alpha:1},8,cjs.Ease.get(1)).wait(138));

	// 元件 55
	this.instance_1 = new lib.元件55("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(411.6,340.8,1,1,0,0,0,130.7,126.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:361.5,y:282.8,alpha:1},8,cjs.Ease.get(1)).wait(142));

	// 元件 58
	this.instance_2 = new lib.元件58("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(537.8,470.5,1,1,0,0,0,125.8,116.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:487.8,y:412.4,alpha:1},8,cjs.Ease.get(1)).wait(140));

	// 元件 54
	this.instance_3 = new lib.元件54("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(550.2,252.8,1,1,0,0,0,67.8,77.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:500.2,y:194.8,alpha:1},8,cjs.Ease.get(1)).wait(142));

	// 元件 65
	this.instance_4 = new lib.元件65("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(323.1,322.7,1,1,0,0,0,273,264.6);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:273,y:264.6,alpha:1},8,cjs.Ease.get(1)).wait(144));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.1,58.1,546,529.1);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("Ay/TAQn4n3AArJQAArIH4n3QH3n4LIAAQLIAAH4H4QH4H3AALIQAALJn4H3Qn4H4rIAAQrIAAn3n4g");
	var mask_graphics_14 = new cjs.Graphics().p("A6IaJQq1q1AAvUQAAvTK1q2QK1q0PTAAQPUAAK1K0QK1K2AAPTQAAPUq1K1Qq1K1vUAAQvTAAq1q1g");
	var mask_graphics_15 = new cjs.Graphics().p("EggVAgVQtYtZAAy8QAAy7NYtaQNatYS7AAQS8AANZNYQNZNaAAS7QAAS8tZNZQtZNZy8AAQy7AAtatZg");
	var mask_graphics_16 = new cjs.Graphics().p("EglkAljQvjvjAA2AQAA2APjvlQPlviV/AAQWBAAPjPiQPkPlAAWAQAAWAvkPjQvjPl2BAAQ1/AAvlvlg");
	var mask_graphics_17 = new cjs.Graphics().p("Egp3Ap2QxUxVAA4hQAA4gRUxWQRXxVYgAAQYhAARVRVQRWRWAAYgQAAYhxWRVQxVRW4hAAQ4gAAxXxWg");
	var mask_graphics_18 = new cjs.Graphics().p("EgtLAtLQytytAA6eQAA6dStyvQStysaeAAQaeAAStSsQSvSvgBadQABaeyvStQytSu6eAAQ6eAAytyug");
	var mask_graphics_19 = new cjs.Graphics().p("EgvkAvjQzszsAA73QAA72TszuQTuzsb2AAQb3AATsTsQTuTuAAb2QAAb3zuTsQzsTt73ABQ72gBzuztg");
	var mask_graphics_20 = new cjs.Graphics().p("Egw/Aw/Q0S0TAA8sQAA8sUS0TQUT0ScsAAQctAAUSUSQUTUTAAcsQAAcs0TUTQ0SUT8tAAQ8sAA0T0Tg");
	var mask_graphics_21 = new cjs.Graphics().p("EgxeAxdQ0e0fAA8+QAA8+Ue0gQUg0ec+AAQc/AAUeUeQUgUgAAc+QAAc+0gUfQ0eUg8/AAQ8+AA0g0gg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_14,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_15,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_16,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_17,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_18,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_19,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_20,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_21,x:367.7,y:218.1}).wait(77).to({graphics:null,x:0,y:0}).wait(36));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AkzEPIJnod");
	this.shape.setTransform(606.9,147.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").ss(1,1,1).p("AugMwIdB5f");
	this.shape_1.setTransform(642.4,104.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").ss(1,1,1).p("AkyEPIJmod");
	this.shape_2.setTransform(47.8,364.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").ss(1,1,1).p("AvKNVIE4kNIHwm1IRtvn");
	this.shape_3.setTransform(86,343.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[]},85).wait(36));

	// 元件 51
	this.instance = new lib.元件51("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(366.1,222.6,1,1,0,0,0,183.2,35.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({startPosition:0},7,cjs.Ease.get(1)).to({_off:true},86).wait(36));

	// 元件 50
	this.instance_1 = new lib.元件50("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.7,181.9,0.039,1,0,0,0,114.7,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({regY:0,scaleX:1,y:181.8},7,cjs.Ease.get(1)).to({_off:true},79).wait(36));

	// 元件 49
	this.instance_2 = new lib.元件49("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(198.6,193.3,1,1,0,0,0,21.4,14);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},6).to({_off:true},83).wait(36));

	// 图层 12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AlbBkIAAjHIK3AAIAADHg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AlbC7IAAl2IK3AAIAAF2g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AlbEFIAAoKIK3AAIAAIKg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AlbFCIAAqDIK3AAIAAKDg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AlbFxIAArhIK3AAIAALhg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AlbGTIAAslIK3AAIAAMlg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AlbGnIAAtNIK3AAIAANNg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AlbGuIAAtbIK3AAIAANbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:550.1,y:169.3}).wait(1).to({graphics:mask_1_graphics_1,x:549.7,y:182.5}).wait(1).to({graphics:mask_1_graphics_2,x:549.3,y:193.7}).wait(1).to({graphics:mask_1_graphics_3,x:549,y:202.8}).wait(1).to({graphics:mask_1_graphics_4,x:548.8,y:209.9}).wait(1).to({graphics:mask_1_graphics_5,x:548.7,y:215}).wait(1).to({graphics:mask_1_graphics_6,x:548.6,y:218}).wait(1).to({graphics:mask_1_graphics_7,x:548.5,y:219}).wait(91).to({graphics:null,x:0,y:0}).wait(36));

	// 元件 48
	this.instance_3 = new lib.元件48("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(542.6,225,1,1,0,0,0,10.9,38.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},98).wait(36));

	// 图层 11 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("ArvIPIOO2WIJSF6IuOWWg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AxiHUIOP2WIU2HvIp/WWg");
	var mask_2_graphics_2 = new cjs.Graphics().p("A2bGjIOP2WIeoJRImZWWg");
	var mask_2_graphics_3 = new cjs.Graphics().p("A6cF6IOP2WMAmqAKjIjeWWg");
	var mask_2_graphics_4 = new cjs.Graphics().p("A9jFbIOP2WMAs4ALhIhLWWg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EggAAFFIOP2WMAxVAMOIAdWWg");
	var mask_2_graphics_6 = new cjs.Graphics().p("Egh1AE3IOP2WMA0AAMpIBcWWg");
	var mask_2_graphics_7 = new cjs.Graphics().p("EgicAEzIOP2WMA05AMyIBxWWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:120.9,y:193.8}).wait(1).to({graphics:mask_2_graphics_1,x:157.9,y:199.6}).wait(1).to({graphics:mask_2_graphics_2,x:189.2,y:204.5}).wait(1).to({graphics:mask_2_graphics_3,x:214.9,y:208.6}).wait(1).to({graphics:mask_2_graphics_4,x:234.8,y:211.7}).wait(1).to({graphics:mask_2_graphics_5,x:250.5,y:214}).wait(1).to({graphics:mask_2_graphics_6,x:262.2,y:215.3}).wait(1).to({graphics:mask_2_graphics_7,x:266.1,y:215.8}).wait(91).to({graphics:null,x:0,y:0}).wait(36));

	// 元件 47
	this.instance_4 = new lib.元件47("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(328.8,233.8,1,1,0,0,0,141.5,21.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},98).wait(36));

	// 图层 13 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AqJB3IAAjtIUTAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:287.9,y:174.4}).wait(98).to({graphics:null,x:0,y:0}).wait(36));

	// 元件 46
	this.instance_5 = new lib.元件46("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(283.8,192.3,1,1,0,0,0,56.3,5.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({y:181.3},6,cjs.Ease.get(1)).to({_off:true},84).wait(36));

	// 图层 14 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_8 = new cjs.Graphics().p("As2B7IAAj1IZtAAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_4_graphics_8,x:445.6,y:270}).wait(90).to({graphics:null,x:0,y:0}).wait(36));

	// 元件 45
	this.instance_6 = new lib.元件45("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(446.3,251,1,1,0,0,0,76.7,7.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:265.6},6,cjs.Ease.get(1)).to({_off:true},84).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.3,211.3,9.8,45);


(lib.元件44_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("Ay/TAQn4n3AArJQAArIH4n3QH3n4LIAAQLIAAH4H4QH4H3AALIQAALJn4H3Qn4H4rIAAQrIAAn3n4g");
	var mask_graphics_14 = new cjs.Graphics().p("A6IaJQq1q1AAvUQAAvTK1q2QK1q0PTAAQPUAAK1K0QK1K2AAPTQAAPUq1K1Qq1K1vUAAQvTAAq1q1g");
	var mask_graphics_15 = new cjs.Graphics().p("EggVAgVQtYtZAAy8QAAy7NYtaQNatYS7AAQS8AANZNYQNZNaAAS7QAAS8tZNZQtZNZy8AAQy7AAtatZg");
	var mask_graphics_16 = new cjs.Graphics().p("EglkAljQvjvjAA2AQAA2APjvlQPlviV/AAQWBAAPjPiQPkPlAAWAQAAWAvkPjQvjPl2BAAQ1/AAvlvlg");
	var mask_graphics_17 = new cjs.Graphics().p("Egp3Ap2QxUxVAA4hQAA4gRUxWQRXxVYgAAQYhAARVRVQRWRWAAYgQAAYhxWRVQxVRW4hAAQ4gAAxXxWg");
	var mask_graphics_18 = new cjs.Graphics().p("EgtLAtLQytytAA6eQAA6dStyvQStysaeAAQaeAAStSsQSvSvgBadQABaeyvStQytSu6eAAQ6eAAytyug");
	var mask_graphics_19 = new cjs.Graphics().p("EgvkAvjQzszsAA73QAA72TszuQTuzsb2AAQb3AATsTsQTuTuAAb2QAAb3zuTsQzsTt73ABQ72gBzuztg");
	var mask_graphics_20 = new cjs.Graphics().p("Egw/Aw/Q0S0TAA8sQAA8sUS0TQUT0ScsAAQctAAUSUSQUTUTAAcsQAAcs0TUTQ0SUT8tAAQ8sAA0T0Tg");
	var mask_graphics_21 = new cjs.Graphics().p("EgxeAxdQ0e0fAA8+QAA8+Ue0gQUg0ec+AAQc/AAUeUeQUgUgAAc+QAAc+0gUfQ0eUg8/AAQ8+AA0g0gg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_14,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_15,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_16,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_17,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_18,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_19,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_20,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_21,x:367.7,y:218.1}).wait(91).to({graphics:null,x:0,y:0}).wait(22));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AkzEPIJnod");
	this.shape.setTransform(606.9,147.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").ss(1,1,1).p("AunM2IdE5hIALgK");
	this.shape_1.setTransform(643,104.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").ss(1,1,1).p("AkyEPIJmod");
	this.shape_2.setTransform(47.8,364.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").ss(1,1,1).p("AvPNaIFDkWIHwm2IRsvn");
	this.shape_3.setTransform(85.4,343.7);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[]},99).wait(22));

	// 元件 51
	this.instance = new lib.元件51_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(366.1,222.6,1,1,0,0,0,183.2,35.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({startPosition:0},7,cjs.Ease.get(1)).to({_off:true},100).wait(22));

	// 元件 50
	this.instance_1 = new lib.元件50_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.7,181.9,0.039,1,0,0,0,114.7,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({regY:0,scaleX:1,y:181.8},7,cjs.Ease.get(1)).to({_off:true},93).wait(22));

	// 元件 49
	this.instance_2 = new lib.元件49_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(198.6,193.3,1,1,0,0,0,21.4,14);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},6).to({_off:true},97).wait(22));

	// 图层 12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AlbBkIAAjHIK3AAIAADHg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AlbC7IAAl2IK3AAIAAF2g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AlbEFIAAoKIK3AAIAAIKg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AlbFCIAAqDIK3AAIAAKDg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AlbFxIAArhIK3AAIAALhg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AlbGTIAAslIK3AAIAAMlg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AlbGnIAAtNIK3AAIAANNg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AlbGuIAAtbIK3AAIAANbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:550.1,y:169.3}).wait(1).to({graphics:mask_1_graphics_1,x:549.7,y:182.5}).wait(1).to({graphics:mask_1_graphics_2,x:549.3,y:193.7}).wait(1).to({graphics:mask_1_graphics_3,x:549,y:202.8}).wait(1).to({graphics:mask_1_graphics_4,x:548.8,y:209.9}).wait(1).to({graphics:mask_1_graphics_5,x:548.7,y:215}).wait(1).to({graphics:mask_1_graphics_6,x:548.6,y:218}).wait(1).to({graphics:mask_1_graphics_7,x:548.5,y:219}).wait(105).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 48
	this.instance_3 = new lib.元件48_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(542.6,225,1,1,0,0,0,10.9,38.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},112).wait(22));

	// 图层 11 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("ArvIPIOO2WIJSF6IuOWWg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AxiHUIOP2WIU2HvIp/WWg");
	var mask_2_graphics_2 = new cjs.Graphics().p("A2bGjIOP2WIeoJRImZWWg");
	var mask_2_graphics_3 = new cjs.Graphics().p("A6cF6IOP2WMAmqAKjIjeWWg");
	var mask_2_graphics_4 = new cjs.Graphics().p("A9jFbIOP2WMAs4ALhIhLWWg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EggAAFFIOP2WMAxVAMOIAdWWg");
	var mask_2_graphics_6 = new cjs.Graphics().p("Egh1AE3IOP2WMA0AAMpIBcWWg");
	var mask_2_graphics_7 = new cjs.Graphics().p("EgicAEzIOP2WMA05AMyIBxWWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:120.9,y:193.8}).wait(1).to({graphics:mask_2_graphics_1,x:157.9,y:199.6}).wait(1).to({graphics:mask_2_graphics_2,x:189.2,y:204.5}).wait(1).to({graphics:mask_2_graphics_3,x:214.9,y:208.6}).wait(1).to({graphics:mask_2_graphics_4,x:234.8,y:211.7}).wait(1).to({graphics:mask_2_graphics_5,x:250.5,y:214}).wait(1).to({graphics:mask_2_graphics_6,x:262.2,y:215.3}).wait(1).to({graphics:mask_2_graphics_7,x:266.1,y:215.8}).wait(105).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 47
	this.instance_4 = new lib.元件47_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(328.8,233.8,1,1,0,0,0,141.5,21.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},112).wait(22));

	// 图层 13 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AqJB3IAAjtIUTAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:287.9,y:174.4}).wait(112).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 46
	this.instance_5 = new lib.元件46_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(283.8,192.3,1,1,0,0,0,56.3,5.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({y:181.3},6,cjs.Ease.get(1)).to({_off:true},98).wait(22));

	// 图层 14 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_8 = new cjs.Graphics().p("As2B7IAAj1IZtAAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_4_graphics_8,x:445.6,y:270}).wait(104).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 45
	this.instance_6 = new lib.元件45_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(446.3,251,1,1,0,0,0,76.7,7.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:265.6},6,cjs.Ease.get(1)).to({_off:true},98).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.3,211.3,9.8,45);


(lib.元件44_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("Ay/TAQn4n3AArJQAArIH4n3QH3n4LIAAQLIAAH4H4QH4H3AALIQAALJn4H3Qn4H4rIAAQrIAAn3n4g");
	var mask_graphics_14 = new cjs.Graphics().p("A6IaJQq1q1AAvUQAAvTK1q2QK1q0PTAAQPUAAK1K0QK1K2AAPTQAAPUq1K1Qq1K1vUAAQvTAAq1q1g");
	var mask_graphics_15 = new cjs.Graphics().p("EggVAgVQtYtZAAy8QAAy7NYtaQNatYS7AAQS8AANZNYQNZNaAAS7QAAS8tZNZQtZNZy8AAQy7AAtatZg");
	var mask_graphics_16 = new cjs.Graphics().p("EglkAljQvjvjAA2AQAA2APjvlQPlviV/AAQWBAAPjPiQPkPlAAWAQAAWAvkPjQvjPl2BAAQ1/AAvlvlg");
	var mask_graphics_17 = new cjs.Graphics().p("Egp3Ap2QxUxVAA4hQAA4gRUxWQRXxVYgAAQYhAARVRVQRWRWAAYgQAAYhxWRVQxVRW4hAAQ4gAAxXxWg");
	var mask_graphics_18 = new cjs.Graphics().p("EgtLAtLQytytAA6eQAA6dStyvQStysaeAAQaeAAStSsQSvSvgBadQABaeyvStQytSu6eAAQ6eAAytyug");
	var mask_graphics_19 = new cjs.Graphics().p("EgvkAvjQzszsAA73QAA72TszuQTuzsb2AAQb3AATsTsQTuTuAAb2QAAb3zuTsQzsTt73ABQ72gBzuztg");
	var mask_graphics_20 = new cjs.Graphics().p("Egw/Aw/Q0S0TAA8sQAA8sUS0TQUT0ScsAAQctAAUSUSQUTUTAAcsQAAcs0TUTQ0SUT8tAAQ8sAA0T0Tg");
	var mask_graphics_21 = new cjs.Graphics().p("EgxeAxdQ0e0fAA8+QAA8+Ue0gQUg0ec+AAQc/AAUeUeQUgUgAAc+QAAc+0gUfQ0eUg8/AAQ8+AA0g0gg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_14,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_15,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_16,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_17,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_18,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_19,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_20,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_21,x:367.7,y:218.1}).wait(91).to({graphics:null,x:0,y:0}).wait(22));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AkzEPIJnod");
	this.shape.setTransform(606.9,147.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#183851").ss(1,1,1).p("AuoM3IdR5t");
	this.shape_1.setTransform(643.2,104.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#183851").ss(1,1,1).p("AkyEPIJmod");
	this.shape_2.setTransform(47.8,364.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#183851").ss(1,1,1).p("AvQNaIFEkXIHwm1IRtvn");
	this.shape_3.setTransform(85.4,343.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[]},99).wait(22));

	// 元件 51
	this.instance = new lib.元件51_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(366.1,222.6,1,1,0,0,0,183.2,35.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({startPosition:0},7,cjs.Ease.get(1)).to({_off:true},100).wait(22));

	// 元件 50
	this.instance_1 = new lib.元件50_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.7,181.9,0.039,1,0,0,0,114.7,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({regY:0,scaleX:1,y:181.8},7,cjs.Ease.get(1)).to({_off:true},93).wait(22));

	// 元件 49
	this.instance_2 = new lib.元件49_2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(198.6,193.3,1,1,0,0,0,21.4,14);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},6).to({_off:true},97).wait(22));

	// 图层 12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AlbBkIAAjHIK3AAIAADHg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AlbC7IAAl2IK3AAIAAF2g");
	var mask_1_graphics_2 = new cjs.Graphics().p("AlbEFIAAoKIK3AAIAAIKg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AlbFCIAAqDIK3AAIAAKDg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AlbFxIAArhIK3AAIAALhg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AlbGTIAAslIK3AAIAAMlg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AlbGnIAAtNIK3AAIAANNg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AlbGuIAAtbIK3AAIAANbg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:550.1,y:169.3}).wait(1).to({graphics:mask_1_graphics_1,x:549.7,y:182.5}).wait(1).to({graphics:mask_1_graphics_2,x:549.3,y:193.7}).wait(1).to({graphics:mask_1_graphics_3,x:549,y:202.8}).wait(1).to({graphics:mask_1_graphics_4,x:548.8,y:209.9}).wait(1).to({graphics:mask_1_graphics_5,x:548.7,y:215}).wait(1).to({graphics:mask_1_graphics_6,x:548.6,y:218}).wait(1).to({graphics:mask_1_graphics_7,x:548.5,y:219}).wait(105).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 48
	this.instance_3 = new lib.元件48_2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(542.6,225,1,1,0,0,0,10.9,38.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},112).wait(22));

	// 图层 11 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("ArvIPIOO2WIJSF6IuOWWg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AxiHUIOP2WIU2HvIp/WWg");
	var mask_2_graphics_2 = new cjs.Graphics().p("A2bGjIOP2WIeoJRImZWWg");
	var mask_2_graphics_3 = new cjs.Graphics().p("A6cF6IOP2WMAmqAKjIjeWWg");
	var mask_2_graphics_4 = new cjs.Graphics().p("A9jFbIOP2WMAs4ALhIhLWWg");
	var mask_2_graphics_5 = new cjs.Graphics().p("EggAAFFIOP2WMAxVAMOIAdWWg");
	var mask_2_graphics_6 = new cjs.Graphics().p("Egh1AE3IOP2WMA0AAMpIBcWWg");
	var mask_2_graphics_7 = new cjs.Graphics().p("EgicAEzIOP2WMA05AMyIBxWWg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:120.9,y:193.8}).wait(1).to({graphics:mask_2_graphics_1,x:157.9,y:199.6}).wait(1).to({graphics:mask_2_graphics_2,x:189.2,y:204.5}).wait(1).to({graphics:mask_2_graphics_3,x:214.9,y:208.6}).wait(1).to({graphics:mask_2_graphics_4,x:234.8,y:211.7}).wait(1).to({graphics:mask_2_graphics_5,x:250.5,y:214}).wait(1).to({graphics:mask_2_graphics_6,x:262.2,y:215.3}).wait(1).to({graphics:mask_2_graphics_7,x:266.1,y:215.8}).wait(105).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 47
	this.instance_4 = new lib.元件47_2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(328.8,233.8,1,1,0,0,0,141.5,21.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},112).wait(22));

	// 图层 13 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AqJB3IAAjtIUTAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:287.9,y:174.4}).wait(112).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 46
	this.instance_5 = new lib.元件46_2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(283.8,192.3,1,1,0,0,0,56.3,5.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({y:181.3},6,cjs.Ease.get(1)).to({_off:true},98).wait(22));

	// 图层 14 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_8 = new cjs.Graphics().p("As2B7IAAj1IZtAAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_4_graphics_8,x:445.6,y:270}).wait(104).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 45
	this.instance_6 = new lib.元件45_2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(446.3,251,1,1,0,0,0,76.7,7.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:265.6},6,cjs.Ease.get(1)).to({_off:true},98).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.3,211.3,9.8,45);


(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件92("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.3,43.5,0.922,0.922,0,0,0,131.1,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,2.8,241.2,81.2);


(lib.元件43_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件92_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.3,43.5,0.922,0.922,0,0,0,131.1,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,2.8,241.2,81.2);


(lib.元件43_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件92_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.3,43.5,0.922,0.922,0,0,0,131.1,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,2.8,241.2,81.2);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件91("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66.5,43.5,0.922,0.922,0,0,0,69.5,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.8,127.8,81.2);


(lib.元件42_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件91_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66.5,43.5,0.922,0.922,0,0,0,69.5,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.8,127.8,81.2);


(lib.元件42_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件91_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66.5,43.5,0.922,0.922,0,0,0,69.5,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.8,127.8,81.2);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件89("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22,22.3,1,1,0,0,0,21.8,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0.5,43.7,43.7);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件88("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(23.3,23.7,1,1,0,0,0,21.8,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,1.9,43.7,43.7);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件98("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(16.2,16.4,1,1,0,0,0,15.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.6,31.5,31.5);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件97("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(19.3,18.2,1,1,0,0,0,15.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.6,2.4,31.4,31.5);


(lib.元件32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件96("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(21.8,20.6,1,1,0,0,0,15.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,4.8,31.4,31.5);


(lib.元件31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件95("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.3,11.6,1,1,0,0,0,15.7,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,-4.2,31.5,31.5);


(lib.元件30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件94("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(15.8,15.1,1,1,0,0,0,12.9,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.9,2.2,25.7,25.7);


(lib.元件29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件93("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(12.9,12.9,1,1,0,0,0,12.9,12.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,25.7);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_10 = new cjs.Graphics().p("At3ByIAAjjIbvAAIAADjg");
	var mask_graphics_11 = new cjs.Graphics().p("At3C7IAAl1IbvAAIAAF1g");
	var mask_graphics_12 = new cjs.Graphics().p("At3EEIAAoHIbvAAIAAIHg");
	var mask_graphics_13 = new cjs.Graphics().p("At3FNIAAqZIbvAAIAAKZg");
	var mask_graphics_14 = new cjs.Graphics().p("At3GWIAAsrIbvAAIAAMrg");
	var mask_graphics_15 = new cjs.Graphics().p("At3HfIAAu+IbvAAIAAO+g");
	var mask_graphics_16 = new cjs.Graphics().p("At3IoIAAxPIbvAAIAARPg");
	var mask_graphics_17 = new cjs.Graphics().p("At3JxIAAziIbvAAIAATig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:-42.7,y:112.5}).wait(1).to({graphics:mask_graphics_11,x:-42.7,y:105.1}).wait(1).to({graphics:mask_graphics_12,x:-42.7,y:97.7}).wait(1).to({graphics:mask_graphics_13,x:-42.7,y:90.2}).wait(1).to({graphics:mask_graphics_14,x:-42.7,y:82.8}).wait(1).to({graphics:mask_graphics_15,x:-42.7,y:75.4}).wait(1).to({graphics:mask_graphics_16,x:-42.7,y:67.9}).wait(1).to({graphics:mask_graphics_17,x:-42.7,y:60.5}).wait(65).to({graphics:null,x:0,y:0}).wait(23));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AH7HBIv1uB");
	this.shape.setTransform(-46.2,48.6);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:false},0).to({_off:true},72).wait(23));

	// 图层 1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_5 = new cjs.Graphics().p("AkFiQIChiJIFqGpIihCKg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AmygIIHtmZIF4FlIn6Heg");
	var mask_1_graphics_7 = new cjs.Graphics().p("ApEBqIMGp+IGDEqIseL+g");
	var mask_1_graphics_8 = new cjs.Graphics().p("Aq8DIIPss6IGMD7IwMPpg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AsZERISgvLIGSDUIzHShg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AtbFFIUfwzIGYC5I1MUlg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AuDFkIVsxyIGbCqI2cVzg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AuQFvIWFyHIGcCkI22WNg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_5,x:306.1,y:100.3}).wait(1).to({graphics:mask_1_graphics_6,x:326.2,y:87}).wait(1).to({graphics:mask_1_graphics_7,x:343.2,y:75.9}).wait(1).to({graphics:mask_1_graphics_8,x:357,y:66.7}).wait(1).to({graphics:mask_1_graphics_9,x:367.8,y:59.6}).wait(1).to({graphics:mask_1_graphics_10,x:375.5,y:54.5}).wait(1).to({graphics:mask_1_graphics_11,x:380.2,y:51.4}).wait(1).to({graphics:mask_1_graphics_12,x:381.7,y:50.4}).wait(70).to({graphics:null,x:0,y:0}).wait(23));

	// 元件 28
	this.instance = new lib.元件28("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(372,46.4,1,1,0,0,0,53.8,46.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},77).wait(23));

	// 图层 7 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_5 = new cjs.Graphics().p("AhtDgIAAm/IDbAAIAAG/g");
	var mask_2_graphics_6 = new cjs.Graphics().p("AndDQIgTmhIPhgOIAAG/g");
	var mask_2_graphics_7 = new cjs.Graphics().p("AsUDDIgjmJIZvgZIAAG/g");
	var mask_2_graphics_8 = new cjs.Graphics().p("AwTC3IgwlzMAiHgAjIAAG/g");
	var mask_2_graphics_9 = new cjs.Graphics().p("AzZCvIg7lkMAopgAqIAAG/g");
	var mask_2_graphics_10 = new cjs.Graphics().p("A1mCpIhClZMAtRgAvIAAG/g");
	var mask_2_graphics_11 = new cjs.Graphics().p("A27ClIhHlSMAwFgAyIAAG/g");
	var mask_2_graphics_12 = new cjs.Graphics().p("A3XCkIhIlQMAw/gAzIAAG/g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_2_graphics_5,x:302.8,y:94.5}).wait(1).to({graphics:mask_2_graphics_6,x:265.3,y:94.3}).wait(1).to({graphics:mask_2_graphics_7,x:233.6,y:94.2}).wait(1).to({graphics:mask_2_graphics_8,x:207.7,y:94.1}).wait(1).to({graphics:mask_2_graphics_9,x:187.5,y:94.1}).wait(1).to({graphics:mask_2_graphics_10,x:173.1,y:94}).wait(1).to({graphics:mask_2_graphics_11,x:164.5,y:94}).wait(1).to({graphics:mask_2_graphics_12,x:161.6,y:94}).wait(70).to({graphics:null,x:0,y:0}).wait(23));

	// 元件 27
	this.instance_1 = new lib.元件27("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.9,93.8,1.265,1,0,0,0,0.2,0.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},77).wait(23));

	// 元件 13
	this.instance_2 = new lib.元件13("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(314,92.6,14.045,14.045,0,0,0,3.6,3.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:3.7,regY:3.7,scaleX:1.11,scaleY:1.11,x:315.4,y:94,alpha:1},7,cjs.Ease.get(1)).to({_off:true},75).wait(23));

	// 元件 13
	this.instance_3 = new lib.元件13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.2,94,4.727,4.727,0,0,0,3.5,3.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({regX:3.7,scaleX:1.11,scaleY:1.11,x:4.1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},69).wait(23));

	// 图层 8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_11 = new cjs.Graphics().p("A3bGMIAAsXMAu3AAAIAAMXg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_3_graphics_11,x:163.7,y:51.3}).wait(71).to({graphics:null,x:0,y:0}).wait(23));

	// 元件 4
	this.instance_4 = new lib.元件4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(167,113.6,1,1,0,0,0,194.8,49.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({y:52.4},8,cjs.Ease.get(1)).to({y:50.8},3,cjs.Ease.get(1)).to({y:52.4},3,cjs.Ease.get(1)).to({_off:true},57).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(263.5,42,102.6,102.6);


(lib.元件26_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AkFiQIChiJIFqGpIihCKg");
	var mask_graphics_6 = new cjs.Graphics().p("AmygIIHtmZIF4FlIn6Heg");
	var mask_graphics_7 = new cjs.Graphics().p("ApEBqIMGp+IGDEqIseL+g");
	var mask_graphics_8 = new cjs.Graphics().p("Aq8DIIPss6IGMD7IwMPpg");
	var mask_graphics_9 = new cjs.Graphics().p("AsZERISgvLIGSDUIzHShg");
	var mask_graphics_10 = new cjs.Graphics().p("AtbFFIUfwzIGYC5I1MUlg");
	var mask_graphics_11 = new cjs.Graphics().p("AuDFkIVsxyIGbCqI2cVzg");
	var mask_graphics_12 = new cjs.Graphics().p("AuQFvIWFyHIGcCkI22WNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:306.1,y:100.3}).wait(1).to({graphics:mask_graphics_6,x:326.2,y:87}).wait(1).to({graphics:mask_graphics_7,x:343.2,y:75.9}).wait(1).to({graphics:mask_graphics_8,x:357,y:66.7}).wait(1).to({graphics:mask_graphics_9,x:367.8,y:59.6}).wait(1).to({graphics:mask_graphics_10,x:375.5,y:54.5}).wait(1).to({graphics:mask_graphics_11,x:380.2,y:51.4}).wait(1).to({graphics:mask_graphics_12,x:381.7,y:50.4}).wait(91).to({graphics:null,x:0,y:0}).wait(2));

	// 元件 28
	this.instance = new lib.元件28_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(372,46.4,1,1,0,0,0,53.8,46.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},98).wait(2));

	// 图层 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_5 = new cjs.Graphics().p("AhtDgIAAm/IDbAAIAAG/g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AndDQIgTmhIPhgOIAAG/g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AsUDDIgjmJIZvgZIAAG/g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AwTC3IgwlzMAiHgAjIAAG/g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AzZCvIg7lkMAopgAqIAAG/g");
	var mask_1_graphics_10 = new cjs.Graphics().p("A1mCpIhClZMAtRgAvIAAG/g");
	var mask_1_graphics_11 = new cjs.Graphics().p("A27ClIhHlSMAwFgAyIAAG/g");
	var mask_1_graphics_12 = new cjs.Graphics().p("A3XCkIhIlQMAw/gAzIAAG/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_5,x:302.8,y:94.5}).wait(1).to({graphics:mask_1_graphics_6,x:265.3,y:94.3}).wait(1).to({graphics:mask_1_graphics_7,x:233.6,y:94.2}).wait(1).to({graphics:mask_1_graphics_8,x:207.7,y:94.1}).wait(1).to({graphics:mask_1_graphics_9,x:187.5,y:94.1}).wait(1).to({graphics:mask_1_graphics_10,x:173.1,y:94}).wait(1).to({graphics:mask_1_graphics_11,x:164.5,y:94}).wait(1).to({graphics:mask_1_graphics_12,x:161.6,y:94}).wait(91).to({graphics:null,x:0,y:0}).wait(2));

	// 元件 27
	this.instance_1 = new lib.元件27_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.9,93.8,1.265,1,0,0,0,0.2,0.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},98).wait(2));

	// 元件 13
	this.instance_2 = new lib.元件13_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(314,92.6,14.045,14.045,0,0,0,3.6,3.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:3.7,regY:3.7,scaleX:1.11,scaleY:1.11,x:315.4,y:94,alpha:1},7,cjs.Ease.get(1)).to({_off:true},96).wait(2));

	// 元件 13
	this.instance_3 = new lib.元件13_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.2,94,4.727,4.727,0,0,0,3.5,3.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:3.7,scaleX:1.11,scaleY:1.11,x:4.1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},87).wait(2));

	// 图层 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_11 = new cjs.Graphics().p("A3bGMIAAsXMAu3AAAIAAMXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_2_graphics_11,x:163.7,y:51.3}).wait(92).to({graphics:null,x:0,y:0}).wait(2));

	// 元件 4
	this.instance_4 = new lib.元件4_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(167,113.6,1,1,0,0,0,194.8,49.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({y:52.4},8,cjs.Ease.get(1)).to({y:50.8},3,cjs.Ease.get(1)).to({y:52.4},3,cjs.Ease.get(1)).to({_off:true},78).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(263.5,42,102.6,102.6);


(lib.元件26_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_5 = new cjs.Graphics().p("AkFiQIChiJIFqGpIihCKg");
	var mask_graphics_6 = new cjs.Graphics().p("AmygIIHtmZIF4FlIn6Heg");
	var mask_graphics_7 = new cjs.Graphics().p("ApEBqIMGp+IGDEqIseL+g");
	var mask_graphics_8 = new cjs.Graphics().p("Aq8DIIPss6IGMD7IwMPpg");
	var mask_graphics_9 = new cjs.Graphics().p("AsZERISgvLIGSDUIzHShg");
	var mask_graphics_10 = new cjs.Graphics().p("AtbFFIUfwzIGYC5I1MUlg");
	var mask_graphics_11 = new cjs.Graphics().p("AuDFkIVsxyIGbCqI2cVzg");
	var mask_graphics_12 = new cjs.Graphics().p("AuQFvIWFyHIGcCkI22WNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:306.1,y:100.3}).wait(1).to({graphics:mask_graphics_6,x:326.2,y:87}).wait(1).to({graphics:mask_graphics_7,x:343.2,y:75.9}).wait(1).to({graphics:mask_graphics_8,x:357,y:66.7}).wait(1).to({graphics:mask_graphics_9,x:367.8,y:59.6}).wait(1).to({graphics:mask_graphics_10,x:375.5,y:54.5}).wait(1).to({graphics:mask_graphics_11,x:380.2,y:51.4}).wait(1).to({graphics:mask_graphics_12,x:381.7,y:50.4}).wait(71).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 28
	this.instance = new lib.元件28_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(372,46.4,1,1,0,0,0,53.8,46.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},78).wait(22));

	// 图层 7 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_5 = new cjs.Graphics().p("AhtDgIAAm/IDbAAIAAG/g");
	var mask_1_graphics_6 = new cjs.Graphics().p("AndDQIgTmhIPhgOIAAG/g");
	var mask_1_graphics_7 = new cjs.Graphics().p("AsUDDIgjmJIZvgZIAAG/g");
	var mask_1_graphics_8 = new cjs.Graphics().p("AwTC3IgwlzMAiHgAjIAAG/g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AzZCvIg7lkMAopgAqIAAG/g");
	var mask_1_graphics_10 = new cjs.Graphics().p("A1mCpIhClZMAtRgAvIAAG/g");
	var mask_1_graphics_11 = new cjs.Graphics().p("A27ClIhHlSMAwFgAyIAAG/g");
	var mask_1_graphics_12 = new cjs.Graphics().p("A3XCkIhIlQMAw/gAzIAAG/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_5,x:302.8,y:94.5}).wait(1).to({graphics:mask_1_graphics_6,x:265.3,y:94.3}).wait(1).to({graphics:mask_1_graphics_7,x:233.6,y:94.2}).wait(1).to({graphics:mask_1_graphics_8,x:207.7,y:94.1}).wait(1).to({graphics:mask_1_graphics_9,x:187.5,y:94.1}).wait(1).to({graphics:mask_1_graphics_10,x:173.1,y:94}).wait(1).to({graphics:mask_1_graphics_11,x:164.5,y:94}).wait(1).to({graphics:mask_1_graphics_12,x:161.6,y:94}).wait(71).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 27
	this.instance_1 = new lib.元件27_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.9,93.8,1.265,1,0,0,0,0.2,0.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},78).wait(22));

	// 元件 13
	this.instance_2 = new lib.元件13_2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(314,92.6,14.045,14.045,0,0,0,3.6,3.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:3.7,regY:3.7,scaleX:1.11,scaleY:1.11,x:315.4,y:94,alpha:1},7,cjs.Ease.get(1)).to({_off:true},76).wait(22));

	// 元件 13
	this.instance_3 = new lib.元件13_2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.2,94,4.727,4.727,0,0,0,3.5,3.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:3.7,scaleX:1.11,scaleY:1.11,x:4.1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},67).wait(22));

	// 图层 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_11 = new cjs.Graphics().p("A3bGMIAAsXMAu3AAAIAAMXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_2_graphics_11,x:163.7,y:51.3}).wait(72).to({graphics:null,x:0,y:0}).wait(22));

	// 元件 4
	this.instance_4 = new lib.元件4_2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(167,113.6,1,1,0,0,0,194.8,49.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({y:52.4},8,cjs.Ease.get(1)).to({y:50.8},3,cjs.Ease.get(1)).to({y:52.4},3,cjs.Ease.get(1)).to({_off:true},58).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(263.5,42,102.6,102.6);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 111
	this.instance = new lib.元件111("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(1537.7,181.4,0.9,0.9,0,0,0,198.3,184.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},108).wait(22));

	// 元件 14
	this.instance_1 = new lib.元件14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(800,562,0.252,0.252,0,0,0,1635.1,774);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:774.2,x:575,y:595.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},103).wait(22));

	// 元件 112
	this.instance_2 = new lib.元件112("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(820.4,210.3,1,1,0,0,0,89.2,102.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({_off:true},104).wait(22));

	// <Clip Group>
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-299.3,180.7,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({x:-62.5,y:98.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},100).wait(22));

	// 元件 109
	this.instance_4 = new lib.元件109();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1603.1,1110.2,1,1,0,0,0,141.3,123);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:1567.9,y:1155,alpha:1},7,cjs.Ease.get(1)).to({_off:true},93).wait(22));

	// 图层 2
	this.instance_5 = new lib.Clipdggfgdfg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1620.1,1213.7,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({x:1518.5,y:1171.3},7,cjs.Ease.get(1)).to({_off:true},96).wait(22));

	// 元件 110
	this.instance_6 = new lib.元件110();
	this.instance_6.parent = this;
	this.instance_6.setTransform(710.3,981.9,1,1,0,0,0,135.6,132.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({x:787.1,y:956.3,alpha:1},7).to({_off:true},97).wait(22));

	// <Clip Group>_1
	this.instance_7 = new lib.ClipGroup_1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1254.4,1391.2,0.28,0.28,0,0,0,1634.9,774.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({x:1444.8,y:1261.6,alpha:1},7,cjs.Ease.get(1)).to({_off:true},101).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1543.1,55,198.2,198.6);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 34
	this.instance = new lib.元件34("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(117.5,165,1,1,0,0,0,15.1,16.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:155.9,alpha:1},6,cjs.Ease.get(1)).wait(107));

	// 元件 33
	this.instance_1 = new lib.元件33("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(75.7,150.5,1,1,0,0,0,16.4,16.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:114.1,alpha:1},6,cjs.Ease.get(1)).wait(109));

	// 元件 32
	this.instance_2 = new lib.元件32("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(93.1,112.4,1,1,0,0,0,17.6,16.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:131.5,alpha:1},6,cjs.Ease.get(1)).wait(106));

	// 元件 31
	this.instance_3 = new lib.元件31("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(165.2,87.2,1,1,0,0,0,17,12.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:203.6,alpha:1},6,cjs.Ease.get(1)).wait(110));

	// 元件 30
	this.instance_4 = new lib.元件30("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(127.6,78.8,1,1,0,0,0,15.5,15);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:166,alpha:1},6,cjs.Ease.get(1)).wait(111));

	// 元件 29
	this.instance_5 = new lib.元件29("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(89.5,87.6,1,1,0,0,0,17.6,14.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({x:127.9,alpha:1},6,cjs.Ease.get(1)).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115,65.9,25.7,25.7);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件86("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(57.2,45.1,1,1,0,0,0,57.2,63.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.6,65.7,115.7);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件85("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(70,68.1,1,1,0,0,0,80.8,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-17.9,161.6,172);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件84("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(139.1,136.1,1,1,0,0,0,156,144);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(113.5,-7.5,181.6,287.6);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件80("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(149.1,147.5,1,1,0,0,0,142.1,149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.2,-2,192.9,298.9);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件81("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(102.7,126.1,1,1,0,0,0,94.7,114.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8,59.9,133.3,180.9);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件90("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(60.3,44,0.922,0.922,0,0,0,60.3,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,3.3,110.7,81.2);


(lib.元件15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件90_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(60.3,44,0.922,0.922,0,0,0,60.3,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,3.3,110.7,81.2);


(lib.元件15_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件90_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(60.3,44,0.922,0.922,0,0,0,60.3,44.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.7,3.3,110.7,81.2);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AjjDSQCWg2gEh8IAAgSIiSAAIAAgSIDnAAIAAhkIiHAAQgVAqgdAkIgNgLQA4hPAghZIASADQgUA4gRAXICBAAIAAhlIAUAAIAABlICvAAIAAATIivAAIAABkIDKAAIAAASIiiAAIAACKQgCArAxgCIAmAAQA2ACADgjQAAgaAEghIASAAQAAAjgEAcQgEAyhFgCIgqAAQhCACACg8IAAiMIhrAAIgBATQAECFiiA8g");
	this.shape.setTransform(70.4,42.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AgpDhIg9AAIAAgTIA8AAQAtAEgDglIAAgsIjlAAIAAgRIDlAAIAAgdICPgsIlAAAIAAgTIFnAAIAAASIikA5IAAARIDUAAIAAARIjUAAIAAAsQAEA1g7AAIgEgBgAicgPIAAhbIE8AAIAABbgAiIgjIEVAAIAAgzIkVAAgAjZiQIAAgTIDhAAIgfg4IARgGIAgA+IDEAAIAAATg");
	this.shape_1.setTransform(132.4,42.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("ACUDjIAAjzIhYAAQAABagMAwQgKAugoA7IgOgIQAjg3AKgtQALgrAAhhIAAiZQBdgDBPgQIADAQQhAARhbADIAAB6ICrAAIAAATIhAAAIAADzgAiMDZIgvAAIADgTIArAAQAgACgCgkIAAhuIhtAAIAAgTIBtAAIAAg9IAUAAIAAA9IBlAAIAAATIhlAAIAABwQACAzgwAAIgDAAgAjmCmQAgghAhg0IAPAGQgeA1gkAkgAhCBbIANgKIA7BFIgKANgAjgggIAAgRICKAAQAEgIASgdQARgfAJgNIAOAHQgJAWgeA0IgDAAIAAAAIAAAEIABAAIAAAAIAAAAIAAAAIAAAAIAAAAIACgEIBOAAIAAARgAhCgtIAAgEIAAAAIADAAIgCAEIAAAAIAAAAIAAAAIAAAAIAAAAIgBAAgAi1h4IANgKIApBCIgPAKgAjUiLIAAgTIBxAAIgbg9IAPgGIAeBDIBVAAIAAATg");
	this.shape_2.setTransform(194.6,43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("Ah9DTQB7gigFg4IAAgLIhAAAIAAiQID+AAIAACQIhRAAIAAA0QgBAlAhgFIAkAAQAkAFACgbIACgTIAAgYIATAEIAAATIgCAVQgCArg3gCIgkAAQg1ACACg1IAAg1IhHAAIAAALQAABJiGAhgAgyBdIDVAAIAAgsIjVAAgAgyAdIDVAAIAAgtIjVAAgAjlCMIA7gPIAAjMIg3AAIAAgTIA3AAIAAiAIAUAAIAACAIAxAAIAAAIIDAAAIAKgOIAqg0IivAAIg1AAIAAgRICLAAIgTgwIASgFIAVA1ICKAAIAAARIhFAAIANAJQgDAJgHAJQgXAhgNAGIB1AAIAAARIlLAAIAAgGIAAgLIADAAIgDAAIAAALIguAAIAADHIA8gSIAFASIiNAmgAhlhPIAAgLIAAALIgDAAgAgriRIALgLIAsA2IgMAKg");
	this.shape_3.setTransform(256.9,43.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("Ai4DDQBegpgGg/IAAgmIATAAIAAAmQAGBNhrAsgABNDSIAAibIAUAAIAACbgAABgZIABgCIgCAAIABACQhLBOiUAuIgGgQQCOgvBEg/IiZAAIAAi4IFXAAIAAC4IiaAAQBFBHCOAlIgGASQiUgnhKhVgAALgsICNAAIAAhBIiNAAgAiXgsICPAAIAAhBIiPAAgAALiBICNAAIAAhBIiNAAgAiXiBICPAAIAAhBIiPAAgAABgZIgBgCIACAAIgBACIAAAAg");
	this.shape_4.setTransform(319,44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape},{t:this.shape_1}]},3).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2}]},3).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2},{t:this.shape_3}]},3).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2},{t:this.shape_3},{t:this.shape_4}]},3).to({state:[]},62).wait(17));

	// 图层 3
	this.instance = new lib.元件52("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.6,45.3,1,1,0,0,0,0,18.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(3).to({x:109.2},0).wait(3).to({x:164.8},0).wait(3).to({x:228.4},0).wait(3).to({x:292.8},0).wait(3).to({x:345.6},0).to({_off:true},3).wait(76));

	// 图层 1
	this.instance_1 = new lib.元件44("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.8,33,1,1,0,0,0,380.9,208.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},98).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,9.9,368.2,74.4);


(lib.元件12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("ACtDaIAAglIjWAAIAAAlIgTAAIAAi6IB0AAIAAhZIiaAAIAAgTICaAAIAAhgQgrABhXAAIAAgSQCXgDCAgMIAAAUQhBAIhBACIAABiICbAAIAAATIibAAIAABZIB1AAIAAC6gAgpCiIDWAAIAAhvIjWAAgAjKDVIA/izIARAGIg+CwgAjlhWIAJgOIBkBIIgKANgAjCjMIAJgNIBXBDIgLAOg");
	this.shape.setTransform(70.3,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AgTA5QATgVAAgtIAAgFIgJAAIAAg9IAdAAIAABEQAAA9gnAWg");
	this.shape_1.setTransform(121,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("AhWDUQC7hOBWiIIAPAGQgiA8g5AzIBuBcIgKANIhwheQhBA1hxAwgAiuDKQAKgJgCAAIAAjrIhAAAIAAgTIBTAAIAADvIA2gxIAKAOIg/A1IgCABQgGAHgJAIgAhSBtQBlgzBBhAIiEAEIgGACQgHABgIAAIgDgRIAOgFIgBABQA3g5AkgxIh5AAIAAgUICuAAIgnhKIAPgGIAnBHIgOAJIgBABIAAgBIABAAIgBAAIAAABIABgBICRAAIAAAUIizAAQgiA1g3A0ICEgEQAcghAcgsIAOAHQhKCNimBOgAjFjJIALgKIBMBUIgOAKg");
	this.shape_2.setTransform(194.6,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("AhyDWQCLhSANhhIh9AAIAAgTIB9AAQACgRAAhrIhhAAIAAgUIBhAAQACgrAAg2IASAAIAABhIB1AAIAACQIA2AAIAAATIikAAQAkB0B8A7IgHAPQiAg9gmh0IABgNIgGAAIAFANQgRBniRBNgAA6AQIBjAAIAAh8IhhAAQAABngCAVgAiVDkIAAnHIAUAAIAAHHgAA2AwIgFgNIAGAAIgBANIAAAAgAjmAQQASg8AQhQIARADQgKBAgXBOgAh6h/IALgKIA3BDIgOAJg");
	this.shape_3.setTransform(256.8,43.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("AgrDOQgjAAgYgCIAAgTQAYACAiAAQA0AEgFgnIAAiVIjFAAIAdi8QDFgFCZgQIACATQiYAQi3AGIgaCVICxAAIAAh3IARAAIAAB3IC5AAIAAATIi5AAIAACVQAEA3g8AAIgHgBgAjlCqQBLg+AwhBIAOAKQgxBFhOA9gABdA1IAKgKQASANAsAsIBBBBIgOAKQhDhBg4g5g");
	this.shape_4.setTransform(319,44.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape},{t:this.shape_1}]},3).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2}]},3).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2},{t:this.shape_3}]},3).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2},{t:this.shape_3},{t:this.shape_4}]},3).to({state:[]},76).wait(3));

	// 图层 3
	this.instance = new lib.元件52_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.6,45.3,1,1,0,0,0,0,18.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(3).to({x:109.2},0).wait(3).to({x:164.8},0).wait(3).to({x:228.4},0).wait(3).to({x:292.8},0).wait(3).to({x:345.6},0).to({_off:true},3).wait(76));

	// 图层 1
	this.instance_1 = new lib.元件44_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.8,33,1,1,0,0,0,380.9,208.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},112).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,9.9,368.2,74.4);


(lib.元件12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AhVC+QA2grARghQARgkABhIIAAg4IhDAAIAAgSIEhAAIAAASIhoAAIAAC/QAAAcAgAAIAKAAQAlACAFgdQACgIACgUIACggIATAAQAAAKgCAMQgCAggDAKQgFAsg3gCIgKAAQg0AAAAgvIAAi/IhOAAIAAA8QAGB6hpBIgAjnCGIBLgXIAAiLIg/AAIAAgTIA/AAIAAiDIhDAAIAAgRICeAAIAAARIhHAAIAACDIBAAAIAAATIhAAAIAACHIBNgWIAEARIipAxgAgni3IAAgTIDuAAIAAATg");
	this.shape.setTransform(70.4,45.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AgTA5QATgVAAgtIAAgFIgJAAIAAg9IAdAAIAABEQAAA9gnAWg");
	this.shape_1.setTransform(121,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("AjUDRIAAgTIDMAAIAAhgIijAAIAAgTICjAAIAAhZIiQAAIAAgUIExAAIAAAUIiOAAIAABZICjAAIAAATIijAAIAABgIDJAAIAAATgAjngRQCfhVBOhqIAOAKIgCAFQgDAGgEADQBHBYCWBLIgKAOQiRhGhNhfQhOBfiSBKg");
	this.shape_2.setTransform(194.7,41.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("AgJDNIAAkiIATAAIAAEigAjnBJQCthxBgiRIj0AAIAAgUIGnAAIAAAUIigAAQhgCei4BygAAvgrIAIgNQB1BKA9AtIgKAOQhLg1hlhDg");
	this.shape_3.setTransform(256.8,45.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("AjADOIAAmbIGBAAIAAFWQAEBFhNgEIgcAAIgkgBIAAgUQAQAAAUACIAcAAQA5AEgDgyIAAlDIlbAAIAAGIgAhiBuIAAiSIDFAAIAACSgAhOBbICdAAIAAhsIidAAgAiHhkIAAgTIEOAAIAAATg");
	this.shape_4.setTransform(319,44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape},{t:this.shape_1}]},3).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2}]},3).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2},{t:this.shape_3}]},3).to({state:[{t:this.shape},{t:this.shape_1},{t:this.shape_2},{t:this.shape_3},{t:this.shape_4}]},3).to({state:[]},76).wait(3));

	// 图层 3
	this.instance = new lib.元件52_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.6,45.3,1,1,0,0,0,0,18.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).wait(3).to({x:109.2},0).wait(3).to({x:164.8},0).wait(3).to({x:228.4},0).wait(3).to({x:292.8},0).wait(3).to({x:345.6},0).to({_off:true},3).wait(76));

	// 图层 1
	this.instance_1 = new lib.元件44_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.8,33,1,1,0,0,0,380.9,208.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},112).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,9.9,368.2,74.4);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 78
	this.instance = new lib.元件78("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66.8,123.1,1,1,0,0,0,12.2,12.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:125.8,y:189.1,alpha:1},9,cjs.Ease.get(1)).wait(128));

	// 元件 77
	this.instance_1 = new lib.元件77("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(35.6,97.3,1,1,0,0,0,12.2,12.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:94.6,y:163.3,alpha:1},9,cjs.Ease.get(1)).wait(126));

	// 元件 76
	this.instance_2 = new lib.元件76("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(64.3,69,1,1,0,0,0,14.1,14.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:123.3,y:135,alpha:1},9,cjs.Ease.get(1)).wait(123));

	// 元件 75
	this.instance_3 = new lib.元件75("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(136.6,69,1,1,0,0,0,14.1,14.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:195.6,y:135,alpha:1},9,cjs.Ease.get(1)).wait(127));

	// 元件 74
	this.instance_4 = new lib.元件74("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(104.8,49.9,1,1,0,0,0,14.1,14.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({x:163.8,y:115.9,alpha:1},9,cjs.Ease.get(1)).wait(125));

	// 元件 73
	this.instance_5 = new lib.元件73("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(64.3,40.9,1,1,0,0,0,14.1,14.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({x:123.3,y:106.9,alpha:1},9,cjs.Ease.get(1)).wait(124));

	// 元件 72
	this.instance_6 = new lib.元件72("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.7,57.5,1,1,0,0,0,12.2,12.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({x:58.3,y:123.5,alpha:1},9,cjs.Ease.get(1)).wait(127));

	// 元件 71
	this.instance_7 = new lib.元件71("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-27.9,5,1,1,0,0,0,12.2,12.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({x:31.1,y:71,alpha:1},9,cjs.Ease.get(1)).wait(123));

	// 元件 70
	this.instance_8 = new lib.元件70("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(10.1,-13.7,1,1,0,0,0,12.2,12.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({x:69.1,y:52.3,alpha:1},9,cjs.Ease.get(1)).wait(126));

	// 元件 69
	this.instance_9 = new lib.元件69("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(18.3,-36.7,1,1,0,0,0,12.2,12.2);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({x:77.3,y:29.3,alpha:1},9,cjs.Ease.get(1)).wait(125));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(54.6,110.9,24.3,24.3);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 107
	this.instance = new lib.元件107();
	this.instance.parent = this;
	this.instance.setTransform(112.6,165.9,1,1,0,0,0,17.6,14.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:75,y:160.3,alpha:1},8,cjs.Ease.get(1)).wait(122));

	// 元件 106
	this.instance_1 = new lib.元件106();
	this.instance_1.parent = this;
	this.instance_1.setTransform(105.5,104.8,1,1,0,0,0,12.7,14.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({x:67.9,y:99.2,alpha:1},8,cjs.Ease.get(1)).wait(119));

	// 元件 105
	this.instance_2 = new lib.元件105();
	this.instance_2.parent = this;
	this.instance_2.setTransform(67.3,74.7,1,1,0,0,0,19.7,19.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:29.7,y:69.1,alpha:1},8,cjs.Ease.get(1)).wait(124));

	// 元件 104
	this.instance_3 = new lib.元件104();
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.1,49.5,1,1,0,0,0,24.9,24.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:77.5,y:43.9,alpha:1},8,cjs.Ease.get(1)).wait(123));

	// 元件 103
	this.instance_4 = new lib.元件103();
	this.instance_4.parent = this;
	this.instance_4.setTransform(185.2,109,1,1,0,0,0,74,73.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({x:147.6,y:103.4,alpha:1},8,cjs.Ease.get(1)).wait(118));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(47.6,55.3,39.3,38.8);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(628.9,-130.1,1,1,0,0,0,234.5,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:376.9},6,cjs.Ease.get(1)).to({x:386.9},6,cjs.Ease.get(1)).wait(130));

	// 图层 2
	this.instance_1 = new lib.元件2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(630.6,-24.2,1,1,0,0,0,236.6,35.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:378.6},6,cjs.Ease.get(1)).to({x:388.6},6,cjs.Ease.get(1)).wait(127));

	// 图层 4
	this.instance_2 = new lib.元件43("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(519.8,71.8,1,1,0,0,0,117.8,38);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({x:503.8,alpha:1},7,cjs.Ease.get(0.99)).to({startPosition:0},3).wait(114));

	// 图层 3
	this.instance_3 = new lib.元件42("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(573.5,71.8,1,1,0,0,0,64,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:322,alpha:1},7,cjs.Ease.get(0.99)).to({x:318},3).to({x:322},3).wait(115));

	// 图层 1
	this.instance_4 = new lib.元件15("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(582.4,71.8,1,1,0,0,0,55.3,38);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:202.8,alpha:1},7,cjs.Ease.get(0.99)).to({x:198.8},3).to({x:202.8},3).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(397.5,-188.3,456.2,100.2);


(lib.元件7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件3_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(628.9,-130.1,1,1,0,0,0,234.5,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:376.9},6,cjs.Ease.get(1)).to({x:386.9},6,cjs.Ease.get(1)).wait(130));

	// 图层 2
	this.instance_1 = new lib.元件2_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(630.6,-24.2,1,1,0,0,0,236.6,35.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:378.6},6,cjs.Ease.get(1)).to({x:388.6},6,cjs.Ease.get(1)).wait(127));

	// 图层 4
	this.instance_2 = new lib.元件43_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(519.8,71.8,1,1,0,0,0,117.8,38);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({x:503.8,alpha:1},7,cjs.Ease.get(0.99)).to({startPosition:0},3).wait(114));

	// 图层 3
	this.instance_3 = new lib.元件42_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(573.5,71.8,1,1,0,0,0,64,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:322,alpha:1},7,cjs.Ease.get(0.99)).to({x:318},3).to({x:322},3).wait(115));

	// 图层 1
	this.instance_4 = new lib.元件15_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(582.4,71.8,1,1,0,0,0,55.3,38);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:202.8,alpha:1},7,cjs.Ease.get(0.99)).to({x:198.8},3).to({x:202.8},3).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(387.4,-157,475.9,102.7);


(lib.元件7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件3_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(628.9,-130.1,1,1,0,0,0,234.5,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:376.9},6,cjs.Ease.get(1)).to({x:386.9},6,cjs.Ease.get(1)).wait(130));

	// 图层 2
	this.instance_1 = new lib.元件2_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(630.6,-24.2,1,1,0,0,0,236.6,35.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:378.6},6,cjs.Ease.get(1)).to({x:388.6},6,cjs.Ease.get(1)).wait(127));

	// 图层 4
	this.instance_2 = new lib.元件43_2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(519.8,71.8,1,1,0,0,0,117.8,38);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({x:503.8,alpha:1},7,cjs.Ease.get(0.99)).to({startPosition:0},3).wait(114));

	// 图层 3
	this.instance_3 = new lib.元件42_2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(573.5,71.8,1,1,0,0,0,64,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:322,alpha:1},7,cjs.Ease.get(0.99)).to({x:318},3).to({x:322},3).wait(115));

	// 图层 1
	this.instance_4 = new lib.元件15_2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(582.4,71.8,1,1,0,0,0,55.3,38);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:202.8,alpha:1},7,cjs.Ease.get(0.99)).to({x:198.8},3).to({x:202.8},3).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(394.4,-183.7,469.1,107.4);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件116();
	this.instance.parent = this;
	this.instance.setTransform(616.8,161.8,1,1,0,0,0,24.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:204},29,cjs.Ease.get(1)).to({_off:true},1).wait(109));

	// 图层 6
	this.instance_1 = new lib.元件117();
	this.instance_1.parent = this;
	this.instance_1.setTransform(878.8,163.5,1,1,0,0,0,24.3,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:466},29,cjs.Ease.get(1)).to({_off:true},1).wait(109));

	// 图层 4
	this.instance_2 = new lib.元件118("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(729.6,121.6,1,1,0,0,0,333.3,104.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:316.8},29,cjs.Ease.get(1)).to({_off:true},107).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(396.3,16.9,666.7,209.5);


(lib.元件5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件83();
	this.instance.parent = this;
	this.instance.setTransform(608.9,158.7,1,1,0,0,0,23.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:214.5},29,cjs.Ease.get(1)).to({_off:true},1).wait(109));

	// 图层 6
	this.instance_1 = new lib.元件87();
	this.instance_1.parent = this;
	this.instance_1.setTransform(867.3,158.7,1,1,0,0,0,23.8,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:472.9},29,cjs.Ease.get(1)).to({_off:true},1).wait(109));

	// 图层 4
	this.instance_2 = new lib.元件102();
	this.instance_2.parent = this;
	this.instance_2.setTransform(741.9,132.5,1,1,0,0,0,321.1,121.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:347.5},29,cjs.Ease.get(1)).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(420.8,10.8,642.3,243.4);


(lib.元件68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 11
	this.instance = new lib.元件11("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(135.9,165.2,1,1,0,0,0,111.3,110.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(129));

	// 元件 24
	this.instance_1 = new lib.元件24("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(247.7,31.6,1,1,0,0,0,93.2,92.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({x:269.7,y:94.6,alpha:1},8,cjs.Ease.get(0.99)).wait(123));

	// 元件 40
	this.instance_2 = new lib.元件40("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(371.3,110.2,1,1,0,0,0,122.8,110.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({x:393.3,y:173.3,alpha:1},8,cjs.Ease.get(0.99)).wait(126));

	// 元件 60
	this.instance_3 = new lib.元件60("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(165.5,97.3,1,1,0,0,0,191.5,150.3);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:191.5,y:150.3,alpha:1},8,cjs.Ease.get(0.99)).wait(129));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-53,381.9,300.6);


(lib.元件66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 57
	this.instance = new lib.元件57("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(97.7,857.7,1,1,0,0,0,111.7,201.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:111.7,alpha:1},8,cjs.Ease.get(1)).to({_off:true},25).wait(24).to({_off:false},0).to({_off:true},8).wait(10));

	// 元件 63
	this.instance_1 = new lib.元件63("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(552.7,64.5,1,1,0,0,0,168.4,64.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({alpha:1},8).to({_off:true},46).wait(24).to({_off:false},0).to({_off:true},8).wait(10));

	// 元件 41
	this.instance_2 = new lib.元件41("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,850.1,1,1,70,0,0,124.2,102);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({regX:124.3,regY:102.1,scaleX:1,scaleY:1,rotation:40,guide:{path:[0.1,850.1,1.5,850.8,2.8,851.4,18.4,859.7,33.1,869.9,80,902.4,100,941.2,101.4,942.1,102.7,942.9,106.1,944.9,110.2,946.8,122.4,952.5,135.9,954.5]}},6).to({regX:124.4,rotation:-0.1,guide:{path:[136.1,954.6,136.9,954.7,137.8,954.8,184,961.1,227.1,924.2,253.6,900.2,286.7,872.6]}},6).to({regX:124.2,regY:102,scaleX:1,scaleY:1,rotation:0,guide:{path:[286.8,872.6,306.5,856.1,328.6,838.3,438.8,749.8,604.7,654.6]}},13,cjs.Ease.get(1)).to({_off:true},23).wait(24).to({_off:false},0).to({_off:true},8).wait(10));

	// 图层 18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AqxdxMAAAg7hIVjAAMAAAA7hg");
	var mask_graphics_15 = new cjs.Graphics().p("AsodyMAAAg7jIZRAAMAAAA7jg");
	var mask_graphics_16 = new cjs.Graphics().p("AugdxMAAAg7hIdAAAMAAAA7hg");
	var mask_graphics_17 = new cjs.Graphics().p("AwXdxMAAAg7hMAgvAAAMAAAA7hg");
	var mask_graphics_18 = new cjs.Graphics().p("AyOdyMAAAg7jMAkdAAAMAAAA7jg");
	var mask_graphics_19 = new cjs.Graphics().p("A0FdyMAAAg7jMAoLAAAMAAAA7jg");
	var mask_graphics_20 = new cjs.Graphics().p("A18dxMAAAg7iMAr5AAAMAAAA7ig");
	var mask_graphics_21 = new cjs.Graphics().p("A3zdyMAAAg7jMAvnAAAMAAAA7jg");
	var mask_graphics_22 = new cjs.Graphics().p("A5qdyMAAAg7jMAzVAAAMAAAA7jg");
	var mask_graphics_23 = new cjs.Graphics().p("A7hdxMAAAg7hMA3DAAAMAAAA7hg");
	var mask_graphics_24 = new cjs.Graphics().p("A9YdxMAAAg7hMA6xAAAMAAAA7hg");
	var mask_graphics_25 = new cjs.Graphics().p("A/QdxMAAAg7hMA+hAAAMAAAA7hg");
	var mask_graphics_26 = new cjs.Graphics().p("EghHAdxMAAAg7iMBCOAAAMAAAA7ig");
	var mask_graphics_27 = new cjs.Graphics().p("Egi+AdxMAAAg7hMBF9AAAMAAAA7hg");
	var mask_graphics_28 = new cjs.Graphics().p("Egk1AdyMAAAg7jMBJrAAAMAAAA7jg");
	var mask_graphics_29 = new cjs.Graphics().p("EgmsAdyMAAAg7jMBNZAAAMAAAA7jg");
	var mask_graphics_30 = new cjs.Graphics().p("EgojAdyMAAAg7jMBRHAAAMAAAA7jg");
	var mask_graphics_31 = new cjs.Graphics().p("EgqaAdxMAAAg7hMBU1AAAMAAAA7hg");
	var mask_graphics_32 = new cjs.Graphics().p("EgsRAdyMAAAg7jMBYjAAAMAAAA7jg");
	var mask_graphics_33 = new cjs.Graphics().p("EguIAdxMAAAg7hMBcRAAAMAAAA7hg");
	var mask_graphics_34 = new cjs.Graphics().p("Egv/AdxMAAAg7hMBf/AAAMAAAA7hg");
	var mask_graphics_35 = new cjs.Graphics().p("Egx2AdxMAAAg7hMBjuAAAMAAAA7hg");
	var mask_graphics_36 = new cjs.Graphics().p("EgzuAdxMAAAg7iMBndAAAMAAAA7ig");
	var mask_graphics_37 = new cjs.Graphics().p("Eg1lAdxMAAAg7hMBrLAAAMAAAA7hg");
	var mask_graphics_38 = new cjs.Graphics().p("Eg3cAdyMAAAg7jMBu5AAAMAAAA7jg");
	var mask_graphics_39 = new cjs.Graphics().p("Eg5TAdyMAAAg7jMBynAAAMAAAA7jg");
	var mask_graphics_86 = new cjs.Graphics().p("Eg5TAdyMAAAg7jMBynAAAMAAAA7jg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:-79,y:874.2}).wait(1).to({graphics:mask_graphics_15,x:-65.3,y:874.1}).wait(1).to({graphics:mask_graphics_16,x:-51.6,y:874}).wait(1).to({graphics:mask_graphics_17,x:-37.9,y:873.9}).wait(1).to({graphics:mask_graphics_18,x:-24.2,y:873.9}).wait(1).to({graphics:mask_graphics_19,x:-10.5,y:873.8}).wait(1).to({graphics:mask_graphics_20,x:3.2,y:873.7}).wait(1).to({graphics:mask_graphics_21,x:16.9,y:873.6}).wait(1).to({graphics:mask_graphics_22,x:30.6,y:873.5}).wait(1).to({graphics:mask_graphics_23,x:44.3,y:873.5}).wait(1).to({graphics:mask_graphics_24,x:58,y:873.4}).wait(1).to({graphics:mask_graphics_25,x:71.7,y:873.3}).wait(1).to({graphics:mask_graphics_26,x:85.4,y:873.2}).wait(1).to({graphics:mask_graphics_27,x:99.1,y:873.1}).wait(1).to({graphics:mask_graphics_28,x:112.8,y:873.1}).wait(1).to({graphics:mask_graphics_29,x:126.5,y:873}).wait(1).to({graphics:mask_graphics_30,x:140.2,y:872.9}).wait(1).to({graphics:mask_graphics_31,x:153.9,y:872.8}).wait(1).to({graphics:mask_graphics_32,x:167.5,y:872.7}).wait(1).to({graphics:mask_graphics_33,x:181.2,y:872.7}).wait(1).to({graphics:mask_graphics_34,x:194.9,y:872.6}).wait(1).to({graphics:mask_graphics_35,x:208.6,y:872.5}).wait(1).to({graphics:mask_graphics_36,x:222.3,y:872.4}).wait(1).to({graphics:mask_graphics_37,x:236,y:872.3}).wait(1).to({graphics:mask_graphics_38,x:249.7,y:872.3}).wait(1).to({graphics:mask_graphics_39,x:263.4,y:872.2}).wait(23).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_86,x:263.4,y:872.2}).wait(8).to({graphics:null,x:0,y:0}).wait(10));

	// 元件 64
	this.instance_3 = new lib.元件64("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(269.4,828.7,1,1,0,0,0,269.4,145.1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({_off:true},48).wait(24).to({_off:false},0).to({_off:true},8).wait(10));

	// 元件 62
	this.instance_4 = new lib.元件62("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(382.3,580.8,1,1,0,0,0,221.6,89.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({y:652.8,alpha:1},8,cjs.Ease.get(1)).to({_off:true},43).wait(24).to({_off:false},0).to({_off:true},8).wait(10));

	// 元件 61
	this.instance_5 = new lib.元件61("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(380.6,468.2,1.51,1.51,0,0,0,353.7,224.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({regX:353.8,regY:224.4,scaleX:1,scaleY:1,y:468,alpha:1},8,cjs.Ease.get(1)).to({_off:true},49).wait(24).to({_off:false},0).to({_off:true},8).wait(10));

	// 元件 65
	this.instance_6 = new lib.元件67("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(510.7,941.5,1,1,0,0,0,306.7,264.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},62).wait(24).to({_off:false,startPosition:86},0).to({_off:true},8).wait(10));

	// 元件 60
	this.instance_7 = new lib.元件68("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(257.9,150.3,1,1,0,0,0,257.9,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},62).wait(24).to({_off:false,startPosition:86},0).to({_off:true},8).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-53,825,1317.1);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件35("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(23.3,23.3,1,1,0,0,0,23.3,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,1.9,43.7,43.7);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件36("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(22.1,22.1,1,1,0,0,0,22.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,0.5,43.7,43.7);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1144.6,1021.7,1,1,0,0,0,188,48.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({_off:true},56).wait(42));

	// 图层 4
	this.instance_1 = new lib.元件7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1140.1,601.2,1.113,1.113,0,0,0,375.1,56.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({_off:true},74).wait(42));

	// 图层 5
	this.instance_2 = new lib.元件26("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1162.6,106.1,1,1,0,0,0,180.8,48.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},82).wait(42));

	// 图层 6
	this.instance_3 = new lib.元件5("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1130.1,803.3,1,1,0,0,0,326.5,107.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},94).wait(42));

	// 图层 1
	this.instance_4 = new lib.元件22("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(951.4,707.8,1,1,0,0,0,951.4,707.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({_off:true},68).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1199.9,713,666.7,209.5);


(lib.元件22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 59
	this.instance = new lib.元件59();
	this.instance.parent = this;
	this.instance.setTransform(1584.4,1125.8,1,1,0,0,0,80.4,90.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({x:1525.2,y:1103.4},7,cjs.Ease.get(1)).wait(87));

	// 元件 25
	this.instance_1 = new lib.元件25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(698,1059.6,1,1,0,0,0,128.8,126.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:794,y:1013.2},7,cjs.Ease.get(1)).wait(95));

	// 元件 8
	this.instance_2 = new lib.元件8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(751.2,229.8,1,1,0,0,0,138.6,158.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:829.6},7,cjs.Ease.get(1)).wait(91));

	// 元件 9
	this.instance_3 = new lib.元件9("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1481.6,306.8,1,1,0,0,0,124,127.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(100));

	// 元件 6
	this.instance_4 = new lib.元件6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(945.4,194.9,1,1,0,0,0,146.1,123.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({x:961.4,alpha:1},9).wait(87));

	// 元件 14
	this.instance_5 = new lib.元件14_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(292,641.9,0.28,0.28,0,0,0,1634.8,774);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:458,y:621.1,alpha:1},7,cjs.Ease.get(1)).wait(97));

	// <Clip Group>
	this.instance_6 = new lib.ClipGroup_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-221.5,115.6,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({x:-28.6,y:139.8,alpha:1},7,cjs.Ease.get(1)).wait(94));

	// 图层 2
	this.instance_7 = new lib.ClipGroupsdfsfsdsdfs();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1629,1125.8,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off:false},0).to({x:1558.6,y:1106.6,alpha:1},7,cjs.Ease.get(1)).wait(92));

	// <Clip Group>_1
	this.instance_8 = new lib.ClipGroup_1_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1571.4,1299.4,0.28,0.28,0,0,0,1634.9,774.4);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:1444.8,y:1261.6,alpha:1},7,cjs.Ease.get(1)).wait(97));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(601.4,136.3,1496.4,1017.1);


(lib.元件22_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 21
	this.instance = new lib.元件21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(806.7,238.6,1,1,0,0,0,114.2,93.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(86).to({startPosition:111},0).to({x:624.3,y:267.4,startPosition:116},5,cjs.Ease.get(1)).wait(33));

	// 元件 17
	this.instance_1 = new lib.元件17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(726.3,460.2,1,1,0,0,0,168.9,146.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:837.6,y:457,alpha:1},7,cjs.Ease.get(1)).wait(84).to({startPosition:0},0).to({x:655.2,y:485.8},5,cjs.Ease.get(1)).wait(33));

	// 元件 14
	this.instance_2 = new lib.元件14_2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(292,641.9,0.28,0.28,0,0,0,1634.8,774);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:458,y:621.1,alpha:1},7,cjs.Ease.get(1)).wait(87).to({startPosition:0},0).to({x:275.6,y:649.9},5,cjs.Ease.get(1)).wait(33));

	// 元件 16
	this.instance_3 = new lib.元件16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1588.5,-16,1,1,0,0,0,97.7,116.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({x:1473.3,y:116.8,alpha:1},7,cjs.Ease.get(1)).wait(76).to({startPosition:0},0).to({x:1646.1,y:-46.4},5,cjs.Ease.get(1)).wait(33));

	// <Clip Group>
	this.instance_4 = new lib.ClipGroup_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1619.1,31.9,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({x:1433.5,y:154.2,alpha:1},7,cjs.Ease.get(1)).wait(79).to({x:1606.3,y:-9},5,cjs.Ease.get(1)).wait(33));

	// 元件 18
	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(688.1,1109,1,1,0,0,0,130.7,146.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:784.1,y:1097,alpha:1},7,cjs.Ease.get(1)).wait(78).to({startPosition:0},0).to({x:668.9,y:1142.3},5,cjs.Ease.get(1)).wait(33));

	// 图层 2
	this.instance_6 = new lib.ClipGroupsdfsf();
	this.instance_6.parent = this;
	this.instance_6.setTransform(633.9,1058.1,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({x:703.5,alpha:1},7,cjs.Ease.get(1)).wait(82).to({x:604.2,y:1075.7},5,cjs.Ease.get(1)).wait(33));

	// 元件 20
	this.instance_7 = new lib.元件20("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1587.9,1203.5,1,1,0,0,0,60,51.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({x:1511.1,y:1214.7,alpha:1},7,cjs.Ease.get(1)).wait(81).to({startPosition:0},0).to({x:1665.4,y:1265.9},5,cjs.Ease.get(1)).wait(33));

	// 元件 19
	this.instance_8 = new lib.元件19("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1534.6,1195.9,1,1,0,0,0,95.9,92.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).to({x:1456.2,alpha:1},7,cjs.Ease.get(1)).wait(84).to({startPosition:0},0).to({x:1610.5,y:1247.1},5,cjs.Ease.get(1)).wait(33));

	// <Clip Group>_1
	this.instance_9 = new lib.ClipGroup_1_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1443.2,1445.6,0.28,0.28,0,0,0,1634.9,774.4);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:1444.8,y:1261.6,alpha:1},7,cjs.Ease.get(1)).wait(87).to({x:1599.1,y:1312.8},5,cjs.Ease.get(1)).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(601.2,424,1300.3,1238.6);


(lib.元件5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件37();
	this.instance.parent = this;
	this.instance.setTransform(873.8,165,1,1,0,0,0,22.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:464.2,y:164.7},29,cjs.Ease.get(1)).to({_off:true},1).wait(88).to({_off:false},0).to({x:373,alpha:0},14,cjs.Ease.get(1)).wait(7));

	// 图层 2
	this.instance_1 = new lib.元件38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(613.7,165.2,1,1,0,0,0,23.3,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:204.1,y:164.9},29,cjs.Ease.get(1)).to({_off:true},1).wait(88).to({_off:false},0).to({x:112.9,alpha:0},14,cjs.Ease.get(1)).wait(7));

	// 图层 1
	this.instance_2 = new lib.元件39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(736.1,107.2,1,1,0,0,0,326.5,107.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:326.5},29,cjs.Ease.get(1)).wait(89).to({x:235.3,alpha:0},14,cjs.Ease.get(1)).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(394.7,20.8,675,191.5);


(lib.元件23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件12_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1144.6,1021.7,1,1,0,0,0,188,48.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({_off:true},77).wait(35));

	// 图层 4
	this.instance_1 = new lib.元件7_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1140.1,601.2,1.113,1.113,0,0,0,375.1,56.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({_off:true},95).wait(35));

	// 图层 5
	this.instance_2 = new lib.元件26_1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1262.4,106.1,1,1,0,0,0,180.8,48.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({_off:true},103).wait(35));

	// 图层 6
	this.instance_3 = new lib.元件5_1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1130.1,803.3,1,1,0,0,0,326.5,107.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},115).wait(35));

	// 图层 1
	this.instance_4 = new lib.元件22_1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(951.4,707.8,1,1,0,0,0,951.4,707.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({_off:true},89).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1224.4,706.9,642.3,243.4);


(lib.元件23_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件12_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1144.6,1021.7,1,1,0,0,0,188,48.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).wait(112));

	// 图层 4
	this.instance_1 = new lib.元件7_2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1140.1,601.2,1.113,1.113,0,0,0,375.1,56.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).wait(130));

	// 图层 5
	this.instance_2 = new lib.元件26_2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(975.4,106.1,1,1,0,0,0,180.8,48.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(138));

	// 图层 6
	this.instance_3 = new lib.元件5_2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1130.1,803.3,1,1,0,0,0,326.5,107.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

	// 图层 1
	this.instance_4 = new lib.元件22_2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(951.4,707.8,1,1,0,0,0,951.4,707.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).wait(124));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1198.2,716.9,675,191.6);


// stage content:
(lib.meituan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_61 = function() {
		this.stop();
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		//this.button_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		//function fl_ClickToGoToAndPlayFromFrame_6()
		//{
			//this.play();
		//}
		
		//this.button_4.addEventListener("touchmove", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		var that=this;
		$("body").bind("touchmove",function(){
			that.play();
			console.log(999);
			$("body").unbind("touchmove");
			});
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			//e.preventDefault();
			//console.log(666);
			
		}
		//this.button_4.removeEventListener("touchmove");
	}
	this.frame_154 = function() {
		this.stop();
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		//this.button_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		//function fl_ClickToGoToAndPlayFromFrame_6()
		//{
			//this.play();
		//}
		var that=this;
		$("body").bind("touchmove",function(){
			that.play();
			console.log(999);
			$("body").unbind("touchmove");
			});
		//this.button_4.removeEventListener("touchmove");
	}
	this.frame_261 = function() {
		this.stop();
		/* 单击以转到帧并播放
		单击指定的元件实例会将播放头移动到时间轴中的指定帧并继续从该帧回放。
		可在主时间轴或影片剪辑时间轴上使用。
		
		说明:
		1. 单击元件实例时，用希望播放头移动到的帧编号替换以下代码中的数字 5。
		2. EaselJS 中的帧编号从 0 开始而不是从 1 开始
		*/
		
		//this.button_5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		//function fl_ClickToGoToAndPlayFromFrame_6()
		//{
			//this.play();
		//}
		var that=this;
		$("body").bind("touchmove",function(){
			that.play();
			console.log(999);
			$("body").unbind("touchmove");
			});
		//this.button_4.removeEventListener("touchmove");
	}
	this.frame_358 = function() {
		this.stop();
		//this.button_4.addEventListener("touchmove", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		var that=this;
		$("body").bind("touchmove",function(){
			that.stop();
			$("#animation_container").addClass("hide");
			$(".information").addClass("show");
			$("#ending").addClass("shaw");
			//$(".inf-02").addClass("aa01");
			//$(".inf-03").addClass("aa02");
			//$(".inf-04").addClass("aa03");
			//$(".inf-05").addClass("bb");
			console.log(999);
			$("body").unbind("touchmove");
			});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(93).call(this.frame_154).wait(107).call(this.frame_261).wait(97).call(this.frame_358).wait(2));

	// 按钮
	this.button_4 = new lib.元件99();
	this.button_4.parent = this;
	this.button_4.setTransform(375,1167.2,1,1,0,0,0,25.4,16.7);
	this.button_4.alpha = 0;
	this.button_4._off = true;
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.元件99(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(41).to({_off:false},0).to({y:1143.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},14).wait(72).to({_off:false,y:1167.2,alpha:0},0).to({y:1143.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},14).wait(86).to({_off:false,y:1167.2,alpha:0},0).to({y:1143.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},14).wait(76).to({_off:false,y:1167.2,alpha:0},0).to({y:1143.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},14).wait(1));

	// 图层 15
	this.instance = new lib.元件23("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(184.7,647.8,1,1,0,0,0,951.4,707.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(266).to({_off:false},0).wait(94));

	// 图层 14
	this.instance_1 = new lib.元件23_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(184.9,647.7,1,1,0,0,0,951.4,707.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(159).to({_off:false},0).wait(102).to({startPosition:102},0).to({y:106.9,alpha:0,startPosition:111},9,cjs.Ease.get(1)).to({_off:true},4).wait(86));

	// 图层 1
	this.instance_2 = new lib.元件23_2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(184.7,647.2,1,1,0,0,0,951.4,707.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(68).to({_off:false},0).wait(86).to({startPosition:86},0).to({y:0.8,alpha:0,startPosition:94},8,cjs.Ease.get(1)).to({_off:true},1).wait(197));

	// 图层 2
	this.instance_3 = new lib.元件66("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(408.7,603,1,1,0,0,0,408.7,603);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(62).to({startPosition:86},0).to({y:-189,alpha:0,startPosition:92},8,cjs.Ease.get(1)).to({_off:true},1).wait(289));

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E7EB").s().p("Eg6lBeOMAAAi8bMB1LAAAMAAAC8bg");
	this.shape.setTransform(375,603);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	// 图层 10
	this.instance_4 = new lib.BB();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(350.1,550,825,1317.1);
// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_35wegsew.png", id:"_35wegsew"},
		{src:"images/asfasfa.png", id:"asfasfa"},
		{src:"images/BB.jpg", id:"BB"},
		{src:"images/efzfafa.png", id:"efzfafa"},
		{src:"images/etsdgset.png", id:"etsdgset"},
		{src:"images/setsdgs.png", id:"setsdgs"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;