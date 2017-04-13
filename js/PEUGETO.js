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
(lib.rsdgsdg = function() {
	this.initialize(img.rsdgsdg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,554,103);
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
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAWBBFcQr+liqFqFQ2S2SAA/jQAA/iWS2TQKFqFL+lhIAUgJMAAACLJIgUgJg");
	mask.setTransform(1341.6,724.6);
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EAZJBJWIBAg4EAKABJWIQJuJEARlBJWIIkngEACcBJWIXt0xEgMsBJWMAm1giBEgFIBJWIfR7ZEgSGBHdMAsPgmwEgZZBHOMAzigtJEgaIBBPMA0RgtyEgaIA6nMA0RgtzEgaIAz/MA0RgtzEgaIAtXMA0RgtyEgaIAmuMA0RgtxEgaIAgGMA0RgtxA6IZeMA0RgtxA6I7jMA0RgtyA6I06MA0RgtyA6IuSMA0RgtyA6InqMA0RgtyA6IhCMA0RgtyA6IFlMA0RgtxA6IMOMA0RgtyA6IS2MA0Rgtx");
	this.shape.setTransform(1317.2,718.2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroupsdfsfsdsdfs, new cjs.Rectangle(1198.7,279.3,285.8,890.7), null);


(lib.ClipGroupsdfsf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgW+hGGQM7FjKwKyQWSWSAAffQAAfg2SWSQqwKxs7Fkg");
	mask.setTransform(2008.1,740.6);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("Egb3hG5IEjj/Egb3hARIMIqnEgb3BK5MA3wgw1A74rPMA3xgw2A74knMA3xgw2A74CAMA3xgw1A74IpMA3xgw2A74PRMA3xgw2A74V5MA3xgw1A74chMA3xgw1Egb3AjJMA3wgw1Egb3ApxMA3wgw1Egb3AwZMA3wgw1Egb3A3BMA3wgw2Egb3A9pMA3wgw1Egb3BERMA3wgw1A74x3MA3xgw3A744fMA3xgw3Egb4glvMAqZglJA74/HMAx9grxEgb3g5pITsxPEgb3gzAIbQ34Egb3gsYMAi0geg");
	this.shape.setTransform(2039.4,754.7);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroupsdfsf, new cjs.Rectangle(1861,291.9,294.2,897.5), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgpZBLKMAAAiWTQDogWDsAAQPXAAOCF7QNiFwKdKdQKdKcFvNjQF7OCAAPWQAAPXl7OCQlvNjqdKcQqdKetiFuQuCF8vXAAQjsAAjogWg");
	mask.setTransform(4860.5,1159.4);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EgqGhMpIC7ijEgqGhGBIKfpLEgqGg/ZISDvzEgqGAQIMBUNhJuEgqGAWwMBUNhJuEgqGAdYMBUNhJuEgqGAkAMBUNhJuEgqGAqpMBUNhJvEgqGAxRMBUNhJvEgqFA35MBUMhJuEgqFA+hMBUMhJuEgqFgKYMBOlhE0EgqFgRAMBHAg+MEgqGgXoMA/dg3kEgqGgeQMA35gw8EgqGgk4MAwUgqUEgqGgrgMAoxgjsEgqGgyIMAhMgdEEgqGg4wIZo2cEgqFgDvMBUMhJwEgqGAC4MBUNhJvEgqGAJgMBUNhJuEgqFBFJMBUMhJuEgqFBLxMBUMhJvEgILBPNMAySgsCEgPvBPNMA52gyqEgXUBPNMBBbg5SEge4BPNMBI/g/6EgmcBPNMBQjhGi");
	this.shape.setTransform(4864.5,1163.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(4595.5,676.2,530.1,966.4), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egq/BCnQqWkYojnIMAAAh0HQHdmPI1kHQBSgnBVgkIABAAMA6vAAAIABAAQBUAkBTAnQL9FmJcJbQKcKcFvNjQF8ODAAPWQAAPXl8OBQlvNjqcKdQqdKdtjFvQuCF8vWAAQvXAAuCl8g");
	mask.setTransform(4869.8,955.5);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EhB9gRyMBORhEjEhB9AIuMBsihfCEhB9ACGMBk9hYaEhB9gEiMBdZhRyEhB9gLKMBV1hLKEhB9gYbMBGsg96EhB9gfDMA/Jg3SEhB9glrMA3kgwqEhB9gsTMAwAgqCEhB9gy7MAocgjaEhB9g5jMAg3gcyEhB9hAMIZT2JEhB+AcmMCDQhy6EhB9AV+MB7qhsSEhB9APWMB0GhlqEhB+A3HMCD9hziEhB+A9wMCD9hzjEhB+BRoMCD9hziEg/yBWVMCBxhxnEg4NBWVMB6Mhq/EgwpBWVMByohkWEgpEBWVMBrDhdvEghgBWVMBjfhXGEgZ8BWVMBb7hQfEgDPBWVMBFOg8nEgKzBWVMBMyhDPEgSXBWVMBUWhJ3EhB+BLAMCD9hzjEhB+BEYMCD9hzjEhB+AwfMCD9hziEhB+AjPMCD9hziEhB+Ap3MCD9hzi");
	this.shape.setTransform(4896.3,962.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(4473.8,491.3,792.1,928.5), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egr5A/lMAAAhmRIOY44MBJbB/Jg");
	mask.setTransform(-503,-503.9);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("Egt8guyIVbywEgt8goKIVbywEgt8g1aIVbywEAtQBILIAtgoEAlrBILIISnQEAeGBILIP3t5EAWiBILIXb0gEAO+BILIe/7JEgPTBILMAv4gp7EgHvBILMAoUgjTEgAKBILMAgvgcrEgW3BILMA3cgwkEAHZBILIfn7rEgt8AnXMAzvgtUEgt8AgvMAzvgtUEgt8AaHMAzvgtUEgt8ATeMAzvgtTEgt8A0oMA/Qg3aEgt8At/MA3sgwxEgt8A7QMBCBg51EgtlBILMBBqg5gEgmABILMA6Fgy4Egt8BB4MBCBg51EgecBILMA5lgybEgt8gURMAhegdUEgt8gNpMAhegdUEgt8gHBMAhegdTEgt8gAZMAhegdTEgt8AM2MAvagpgEgt8AGOMAn2gi4Egt8ghiIW+0HEgt8ga6Iei6v");
	this.shape.setTransform(-494.2,-543.8);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(-783.9,-910.9,561.9,813.9), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiFA7DMBELh2FMAAAB2Fg");
	mask.setTransform(1672.8,-2805.4);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EAYCBEtINHrfEAfmBEtIFjk3EABUBEtMAj1gfYEAI5BEtIcQ4vEAQdBEtIUsyHEgkhBEtMBJqhAgEgc8BEtMBCFg54EgN0BEtMAy9gsoEgVYBEtMA6hgzQEgGPBEtMArYgmAEglIA+nMBKRhBCEglIA3/MBKRhBBEglIAxXMBKRhBCEglIAkGMBKRhBBEglIAdfMBKRhBCEglIAW2MBKQhBBEglIAQOMBKQhBBEglIAqvMBKRhBCEglIAJmMBKQhBBEglIAC+MBKQhBCEglIgDpMBKRhBD");
	this.shape.setTransform(1653.3,-2831.4);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(1454.6,-3183.3,436.4,755.9), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtaAyxMA6mhlgMAgPA3zMAAAAttg");
	mask.setTransform(1596.8,460.5);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EBAdA9VIO6tDEBIBA9VIHVmbEApvA9VMAlogg8EA44A9VIWezsEAxUA9VIeD6UEgLOA9VMBakhPTEgDqA9VMBTAhIrEAD5A9VMBLdhCDEALeA9VMBD4g7cEATCA9VMA8Vg00EAamA9VMA0xguMEAiLA9VMAtMgnkEg4oA9VMCH+h3EEhANA9VMCMEh6pEhHxA9VMCMEh6pEhPWA9VMCMEh6pEgxEA9VMCAahwcEgpgA9VMB42hp0Egh8A9VMBxShjMEgaXA9VMBpthcjEgSzA9VMBiJhV7");
	this.shape.setTransform(1379.6,392.9);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(1306.2,135.6,581.3,649.7), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgJHA0qQtjlvqdqdQqdqdlvtjQl7uBAAvXQAAvXF7uCQCwmfD1lyMBh9AAAMAAAA2KIgBAAMAAAA2cIgOAHQinBXivBKQuCF7vXAAQvXAAuBl7g");
	mask.setTransform(1579,815.9);

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EBTsBWjMBDQg65EBMHBWjMBK1hBhEBEjBWjMBSZhIKEA8+BWjMBZ+hOyEA1aBWjMBhihVaEiW8BWjMDFqitFEAPkBWjMCHYh2iEAXIBWjMB/0hv6EAt2BWjMBpGhcBEAmRBWjMBwrhipEAetBWjMB4PhpSEglZBWjMC8Vik7Egd1BWjMC0xieTEgWRBWjMCtNiXrEgOtBWjMClpiRCEgHIBWjMCeEiKaEAAbBWjMCWhiDyEAIABWjMCO8h9KEgs+BWjMDD6irjEhS0BWjMDFqitFEhLPBWjMDFpitFEg0iBWjMDFqitFEg8HBWjMDFqitFEhDrBWjMDFqitFEhaYBWjMDFqitFEhh9BWjMDFqitFEiPXBWjMDFqitFEiHzBWjMDFqitFEiAOBWjMDFpitEEh4qBWjMDFpitEEhxGBWjMDFqitEEhphBWjMDFpitE");
	this.shape.setTransform(966.4,994.5);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

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
	this.shape.graphics.f().s("#183851").p("EgQEBPLMA0MgttEgIfBPLMAsngnEEgA7BPLMAlDggcEAGoBPLIdg50EAONBPLIV7zMEAVxBPLIOXskEAdWBPLIGyl8EgfNBPMMBDUg6+EgXoBPMMA7wg0VEgkHBM3MBIOg/REgkHBGPMBIOg/REgkHA/nMBIOg/REgkHA4+MBIOg/PEgkHAyWMBIOg/PEgkHAruMBIOg/PEgkHAlGMBIOg/PEgkHAeeMBIOg/QEgkHAX1MBIOg/PEgkHARNMBIOg/PEgkHAKlMBIOg/PEgkHAD9MBIOg/QEgkHgCqMBIOg/REgkHgJSMBIOg/REgkHgP6MBIOg/R");
	this.shape.setTransform(1416.1,613.1);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clipdggfgdfg, new cjs.Rectangle(1198.7,240.5,428.6,871.5), null);


(lib.元件129 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-381.3,-290.2)).s().p("ABZHKIACgIIgDALIhIghImBkkIBBiHIATgEIAHACIgWgFIgEAHIi5AsIgohCIBKk7IInCDIiKjtIA5hXID6giIEJE7IgmCaIg1AkIgCAjIlEiZIApBGIiIDWIAZAOIBXB9IB1kjIC6BOIgUE0Ig2DLIicASg");
	this.shape.setTransform(53,56.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件129, new cjs.Rectangle(0,0,106.1,112.7), null);


(lib.元件128 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.rsdgsdg();
	this.instance.parent = this;
	this.instance.setTransform(-4,-8,0.918,0.918);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-8,508.6,94.6);


(lib.元件123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-462.5,-287.3)).s().p("AldF2IgMgQIgCADIgagZIBDj5Ig4gYIAGhcIA1gkIA3jhIKOsLMAAAAhbg");
	this.shape.setTransform(39,214.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,107.7,78,214);


(lib.元件118 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(0.583,0,0,1,-90.1,-831.6)).s().p("AmBDkIAAnHIMDAAIAAHHg");
	this.shape.setTransform(147.1,186.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(0.59,0,0,1,-369.7,-830.8)).s().p("Am/DsIAAnXIK2AAIDJBJIh6EzIjuAvIgyAsg");
	this.shape_1.setTransform(558.7,185.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-405.9,-749.7)).s().p("A83QXIAAnIIsEAAIAAnYIBWgfIA0nKMAlGgKkIbdCYILZWKIDxAzInrAAIq3AAIAAHYg");
	this.shape_2.setTransform(370.5,104.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108.5,0,524.1,209.5);


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


(lib.元件112 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 124
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img._35wegsew, null, new cjs.Matrix2D(1,0,0,1,-142.8,-166.2)).s().p("AoTHoIDUiiIFwANIAaAxIAQAEIgyhFIiPkOICPlfIjsBAIhwmFICKjAIFAg5ICXCzIAAFFIh9AhIAFgBIHCEaIA0E+IkZDUIk4hUICKC8IgpCiIisB7IkJAJgAqsBiIAAo2IB/gXIEtCNIBSDlIi+Dbg");
	this.shape.setTransform(104.1,99.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.7,12.4,136.9,174.7);


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
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-569.4,-458.1)).s().p("AkbD6IhIkWIAAgcIhGhHIAliiIE2krIHhiSIAXALIAAWJIkwApg");
	this.shape.setTransform(42.8,73.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件103, new cjs.Rectangle(0.2,0,85.3,147.1), null);


(lib.元件102 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(0.564,0,0,1,-81.1,-839.1)).s().p("AGeEPIkRgeQizjHjLCdIiwgTIAAnCINDAAIAAIdg");
	this.shape.setTransform(113.6,191.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(0.432,0,0,1,-256.1,-843.4)).s().p("AjQFGIAAqLIGhAAIAAKLg");
	this.shape_1.setTransform(502.1,195.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-360.4,-768.3)).s().p("A2LPUIAAofItEAAIAAqcIPyq7MAsAgEUIKtG5IAASmImiAAIAAKMIGiAAIAACCgA2PPUIAAgBIAEABg");
	this.shape_2.setTransform(297.4,120.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件102, new cjs.Rectangle(71.8,0,451.2,241.4), null);


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

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#003366","rgba(0,51,102,0)"],[0,1],0.7,-13.9,0.7,7.5).s().p("Aj9A8ID+jFID9DEIAABOIj9jEIj+DFg");
	this.shape.setTransform(25.4,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#003366","rgba(0,51,102,0)"],[0,1],0.7,-13.9,0.7,7.5).s().p("Aj9A8ID+jFID9DEIAABOIj9jEIj+DFg");
	this.shape_1.setTransform(25.4,23.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{y:23.6}},{t:this.shape,p:{y:40.4}}]}).to({state:[{t:this.shape_1,p:{y:19.1}},{t:this.shape,p:{y:35.4}}]},5).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,9.8,50.8,44.3);


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
	this.shape.graphics.bf(img.asfasfa, null, new cjs.Matrix2D(1,0,0,1,-477,-941.4)).s().p("EgYJApVIyg6BMBVTg4pMAAABSqg");
	this.shape.setTransform(273,275.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11.2,546,529.1);


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
	this.shape.graphics.bf(img.asfasfa, null, new cjs.Matrix2D(1,0,0,1,-192,-150.3)).s().p("A91KAMAAAgheMA7qAAAMgLcAu9g");
	this.shape.setTransform(191,134.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-16,381.9,300.6);


(lib.元件59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-625.2,-1029.4)).s().p("AlVFUIgRvNILJjaIAEACIAAakIgEABg");
	this.shape.setTransform(35.9,85.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件59, new cjs.Rectangle(0,0.2,71.8,170.5), null);


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
	this.shape.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(0.47,0,0,1,-58.2,-828.1)).s().p("Al4C1IAAlpILxAAIAAFpg");
	this.shape.setTransform(128.9,194.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(0.329,0,0,1,-192.1,-825.5)).s().p("AhuDPIAAmdIDdAAIAAGdg");
	this.shape_1.setTransform(522.9,191.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.efzfafa, null, new cjs.Matrix2D(1,0,0,1,-352.2,-750.4)).s().p("A3CO+IAAlrIrzAAIAAmnIBpglIAHklIZLsfMAg/AASIJxHMIAAOuIggAAIAABQIjfAAIAAGfg");
	this.shape_2.setTransform(314.2,116.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39, new cjs.Rectangle(91.2,20.8,446,191.5), null);


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
	mask.graphics.p("EhDdBYAMAAAiv/MCG7AAAMAAACv/g");
	mask.setTransform(4938.6,-673.8);

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EA8eA1GIALgKEA05A1GIHwmyEAtVA1GIPUtaEAlwA1GIW50CEAeMA1GIed6rEAWoA1GMAmBghSEAPDA1GMAtlgn6EAHfA1GMA1JguiEgAFA1GMA8tg1KEgHpA1GMBERg7yEgPOA1GMBL2hCaEgWyA1GMBTahJCEgeWA1GMBa+hPqEgl7A1GMBijhWSEgtfA1GMBqHhc7Eg1EA1GMBxshjjEg8oA1GMB5QhqL");
	this.shape.setTransform(4982.3,-793.3);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4593.2,-1134.1,777.3,681.6);


(lib.元件14_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("Eg0SgoWIGNlcEg0SghuINxsEEg0SAMqMBCvg6cEg0SgbGIVWysEg0SgUeIc65UEg0SgN2MAkegf8Eg0SgHNMAsDgmlEg0SgAlMAzngtNEg0SAGCMA7Lgz0Eg0SATSMBKThBEEg0SAZ7MBR4hHtEg0SAgjMBZchOVEg0SAnLMBhBhU9Eg0SAtzMBolhbl");
	this.shape.setTransform(3070.8,2189.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2735.1,1895,671.4,588.2);


(lib.元件14_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").p("EgpggQqIWezrEgpggXSIO6tDEgpggd7IHVmaEgpgAduMBLchCDEgpgAXGMBD4g7bEgpgAQeMA8Tg0zEgpgAJ1MA0vguKEgpgADNMAtLgniEgpggDaMAlngg7EgpggKCIeD6TEgpgAkWMBTBhIr");
	this.shape.setTransform(3003.9,232.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2737.2,-1,533.4,467.3);


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
	this.shape.graphics.bf(img.etsdgset, null, new cjs.Matrix2D(1,0,0,1,-423.8,-273.6)).s().p("AvqYWIgEgFMAAAgiOIAEgFIAPgHIPgurIIdAHIHNG+IgfJxMgdCAgzg");
	this.shape.setTransform(176.5,158.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(75.8,0,201.5,317.8), null);


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
	this.shape.graphics.f("#183851").s().p("AuOCsIgbgfQAYggAFgiQAHgkAAhPIAAh7IEXAAIAACdQAABpAEAQQACAJAFAAQAGAAABgIQAFgYABglIAhAPQgFAugEAZQgNAlgbAAQgogCgLg0QgGglAAhjIAAhkIi0AAIAABeQAAA7gGArQgOA2geAsIgJgKgAA1CVIhQAKIhSALIgGgwQAggEAkgCIAAgrIg/AAIAAgzIA/AAIAAgfIAyAAIAAAfIA3AAIAAAzIg3AAIAAAlIBDgJQgBADAAAIIgCAKQAdgSAYgXQgWgogJgvIgFAIIgGAKQgFgFgKgOIgKAEIgMAFQgIgLgEgLIhpAKIgXABIgRglQASgMAdg2IgrAAIAAgwICsAAIAAAwIhOAAIglA3IAzgBIALgCIgHgPIgJgOIAkgSIAUAgIAOAXQAcgxAMhPIAwAIIgGAcIgFAVIBsAAIAAAxIgWAAQgJBfglA/QAiAfAjARQgPARgRAbQgngXgbgdQgiAggtAXIgRgegACVApQAVgwAIhDIg5AAQAJBTATAggAnhCyIAAiUQgQAlgSAgQgCgRgGgdIgDgVQAcgvAOgzIgoAAIAAgwIArAAIAAhAIAsAAIAABAIAkAAIAAAwIgkAAIAAArQALAFAWAMIAMAHIgWApIgNgJIgKgGIAACXgAloCWIgEgVIAjABQAWAAAAgUIAAiCIhdAAIAAgvIDsAAIAAAvIhdAAIAACcQAAAkguADIgzABIgGgagAzRCiQAAgHgJghQAdADASAAQAXACAAgXIAAhKIiNAAIAAgwIAxhFIhIAAIAAgwIBkAAQAOgXAJgXIA8AGQgDALgNAVIgEAIIC7AAIAAAwIjXAAIgiA0IgOASIBNAAIAAg0IA4AAIAAA0IB2AAIAAAvIh2AAIAABVQAAA2g2AEQgZACgjAAQgCgDgBgKgARdBGQACg5A3gUQgogXgDgtQAIhWBcgFQBcAGAKBWQgEAsgoAXQA2ATADA9QgEBVhtAEQhvgDgFhZgASTBGQAFAwA5AEQA3gDAFguQgCg6g8gCQg5AFgDA0gAShhOQABAxAvACQAsgCACguQgDgqgtgEQgrAEgDAngANMAAQADijBsgDQBwAAAACmQgBCfhtADQhxAAAAiigAO7h5Qg3ADgCB2QgBB9A8gEQA6ADgCh8QACh5g4AAIgEAAgAI6AAQADijBrgDQBxAAAACmQgCCfhtADQhwAAAAiigAKoh5Qg3ADgBB2QgCB9A8gEQA6ADgBh8QABh5g4AAIgEAAgA1BB9QApgoAtguIArAiQgrAwgyAoQgPgUgVgQgAGoCeIAAhKIiPAAIAAgjICajXIAnAAIAADMIArAAIAAAuIgrAAIAABKgAFVAmIBTAAIAAh2gAv9CTQgwgqgdgXIAiglQAxAlAoAiIglAnIgJgIgAj3AVIArgQQAXA4AVA8IgsARQgWg/gVg2gAmhB3QAUglAahQIAsANQgYBGgXA1QgXgNgUgGgAr3A+QgoAygZAYIgSgSQgLgOgGgGQAcgaArg1IgXgfQgXgjgOgRIAlgcIAVAcQAWAbAJAOQAZgmASglIAqAYQgZAzgdApQAYAgAkA2IgrAgQgXglgZglgAmChwIAAgwIDQAAIAAAwg");
	this.shape.setTransform(185.1,61.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.5,43.2,269.3,36.5);


(lib.元件4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AuMCsIgbgfQAZggAEgiQAIgkgBhPIAAh7IEXAAIAACdQAABpAFAQQACAJAEAAQAGAAABgIQAFgYABglIAhAPQgEAugFAZQgNAlgbAAQgogCgLg0QgGglAAhjIAAhkIi0AAIAABeQAAA7gGArQgOA2geAsIgJgKgAA4CVIhRAKIhSALIgFgwQAfgEAkgCIAAgrIg/AAIAAgzIA/AAIAAgfIAyAAIAAAfIA3AAIAAAzIg3AAIAAAlIBDgJQgBADAAAIIgCAKQAegSAXgXQgWgogJgvIgEAIIgHAKQgEgFgLgOIgJAEIgNAFQgHgLgFgLIhpAKIgXABIgRglQASgMAeg2IgsAAIAAgwICsAAIAAAwIhNAAIgmA3IAzgBIALgCIgHgPIgIgOIAkgSIAUAgIANAXQAcgxANhPIAvAIIgGAcIgFAVIBsAAIAAAxIgVAAQgKBfglA/QAiAfAjARQgPARgRAbQgmgXgcgdQgiAggtAXIgQgegACXApQAVgwAIhDIg5AAQAJBTATAggAnfCyIAAiUQgQAlgSAgQgBgRgHgdIgDgVQAcgvAOgzIgoAAIAAgwIArAAIAAhAIAtAAIAABAIAjAAIAAAwIgjAAIAAArQALAFAVAMIAMAHIgVApIgOgJIgJgGIAACXgAllCWIgFgVIAjABQAWAAAAgUIAAiCIhdAAIAAgvIDsAAIAAAvIhcAAIAACcQgBAkgtADIg0ABIgFgagAzPCiQAAgHgJghQAdADATAAQAWACAAgXIAAhKIiNAAIAAgwIAxhFIhIAAIAAgwIBkAAQAOgXAJgXIA8AGQgDALgMAVIgFAIIC8AAIAAAwIjYAAIgiA0IgNASIBMAAIAAg0IA4AAIAAA0IB3AAIAAAvIh3AAIAABVQAAA2g2AEQgZACgjAAQgCgDgBgKgARbBGQACg5A3gUQgogXgDgtQAIhWBcgFQBcAGAJBWQgDAsgoAXQA2ATADA9QgEBVhuAEQhvgDgEhZgASRBGQAEAwA5AEQA3gDAGguQgCg6g8gCQg5AFgDA0gASfhOQABAxAuACQAtgCABguQgCgqgtgEQgsAEgCAngANKAAQADijBrgDQBxAAAACmQgBCfhuADQhwAAAAiigAO4h5Qg2ADgCB2QgCB9A8gEQA7ADgCh8QABh5g3AAIgFAAgAI3AAQAEijBrgDQBxAAgBCmQgBCfhtADQhxAAAAiigAKmh5Qg3ADgCB2QgBB9A8gEQA6ADgCh8QACh5g4AAIgEAAgAElBMIA0gMQAHA2AyABQA/ACgBg7QgFgug5gBIgmAAIAAgsIAaAAQA7AAADgxQgCgogtgCQgsADgKAwIg0gMQAWhTBSgCQBjACADBXQAAAvgyAUQA9AXACA0QgHBdhqAEQhfgBgRhVgA0/B9QAqgoAsguIArAiQgrAwgyAoQgPgUgVgQgAv7CTQgvgqgdgXIAhglQAxAlAoAiIglAnIgJgIgAj1AVIArgQQAXA4AWA8IgtARQgVg/gWg2gAmfB3QAVglAZhQIAsANQgXBGgYA1QgWgNgVgGgAr1A+QgoAygZAYIgSgSQgKgOgHgGQAcgaArg1IgXgfQgXgjgOgRIAlgcIAWAcQAVAbAJAOQAZgmATglIApAYQgZAzgdApQAYAgAkA2IgrAgQgXglgZglgAl/hwIAAgwIDPAAIAAAwg");
	this.shape.setTransform(184.9,61.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.5,43.2,268.8,36.5);


(lib.元件4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AuLCsIgbgfQAYggAFgiQAHgkAAhPIAAh7IEXAAIAACdQAABpAEAQQACAJAFAAQAGAAABgIQAFgYABglIAhAPQgFAugEAZQgNAlgbAAQgogCgLg0QgGglAAhjIAAhkIi0AAIAABeQAAA7gGArQgOA2geAsIgJgKgAA4CVIhQAKIhSALIgGgwQAggEAkgCIAAgrIg/AAIAAgzIA/AAIAAgfIAyAAIAAAfIA3AAIAAAzIg3AAIAAAlIBDgJQgBADAAAIIgCAKQAdgSAYgXQgWgogJgvIgFAIIgGAKQgFgFgKgOIgKAEIgMAFQgIgLgEgLIhpAKIgXABIgRglQASgMAdg2IgrAAIAAgwICsAAIAAAwIhOAAIglA3IAzgBIALgCIgHgPIgJgOIAkgSIAUAgIAOAXQAcgxAMhPIAwAIIgGAcIgFAVIBsAAIAAAxIgWAAQgJBfglA/QAiAfAjARQgPARgRAbQgngXgbgdQgiAggtAXIgRgegACYApQAVgwAIhDIg5AAQAJBTATAggAneCyIAAiUQgQAlgSAgQgCgRgGgdIgDgVQAcgvAOgzIgoAAIAAgwIArAAIAAhAIAsAAIAABAIAkAAIAAAwIgkAAIAAArQALAFAWAMIAMAHIgWApIgNgJIgKgGIAACXgAllCWIgEgVIAjABQAWAAAAgUIAAiCIhdAAIAAgvIDsAAIAAAvIhdAAIAACcQAAAkguADIgzABIgGgagAzOCiQAAgHgJghQAdADASAAQAXACAAgXIAAhKIiNAAIAAgwIAxhFIhIAAIAAgwIBkAAQAOgXAJgXIA8AGQgDALgNAVIgEAIIC7AAIAAAwIjXAAIgiA0IgOASIBNAAIAAg0IA4AAIAAA0IB2AAIAAAvIh2AAIAABVQAAA2g2AEQgZACgjAAQgCgDgBgKgARaBGQACg5A3gUQgogXgDgtQAIhWBcgFQBcAGAKBWQgEAsgoAXQA2ATADA9QgEBVhtAEQhvgDgFhZgASQBGQAFAwA5AEQA3gDAFguQgCg6g8gCQg5AFgDA0gASehOQABAxAvACQAsgCACguQgDgqgtgEQgrAEgDAngANJAAQADijBsgDQBwAAAACmQgBCfhtADQhxAAAAiigAO4h5Qg3ADgCB2QgBB9A8gEQA6ADgCh8QACh5g4AAIgEAAgAI3AAQADijBrgDQBxAAAACmQgCCfhtADQhwAAAAiigAKlh5Qg3ADgBB2QgCB9A8gEQA6ADgBh8QABh5g4AAIgEAAgA0+B9QApgoAtguIArAiQgrAwgyAoQgPgUgVgQgAEkCcIAAgfQAjhABEgxQBEgvgDglQAAgug4AAQgrABgOAzIgxgVQAdhPBUAAQBfAFAGBWQAIA9hWA3Qg2AogXAgICYAAIAAArgAv6CTQgwgqgdgXIAiglQAxAlAoAiIglAnIgJgIgAj0AVIArgQQAXA4AVA8IgsARQgWg/gVg2gAmeB3QAUglAahQIAsANQgYBGgXA1QgXgNgUgGgAr0A+QgoAygZAYIgSgSQgLgOgGgGQAcgaArg1IgXgfQgXgjgOgRIAlgcIAVAcQAWAbAJAOQAZgmASglIAqAYQgZAzgdApQAYAgAkA2IgrAgQgXglgZglgAl/hwIAAgwIDQAAIAAAwg");
	this.shape.setTransform(184.8,61.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.5,43.2,268.7,36.5);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AY2GJQAGAAABAAIAAlTQg+AjhbAdIgLggQEbhfCqiaIATAXQgKARgIACQCOBxEGBXIgMAcQhXgVhFgnIAADIInpAAIAACHQABgEBbgSQB6gYAOgEIAHAiIjxA0IgFACQgFAFgRAAgAZiDWIHIAAIAAg4InIAAgAZiB6IHIAAIAAhAInIAAgEAgmAAWQiLgzhUhJQhTBMiEAwIDWAAIgkg7IAbgMIAsBHIC9AAIAAAAgAbaEmIAGgiIC2AyQBygfCAgoIAGAdQhuAnhgARID5BAIgGAhgAOQGlIAAjkImTAAIAAgkIGTAAIAAh6IAlAAIAAB6IGTAAIAAAkImTAAIAADkgAv1GeIhxAAIAAgkIBwAAQBVAHgHhFIAAhRImpAAIAAgfIGpAAIAAg3IELhRIpUAAIAAgkIKcAAIAAAhIkvBrIAAAgIGIAAIAAAfImIAAIAABSQAHBhhwAAIgIAAgAiXGeIAAgkIBnAAQA+ADAQgTQAVgMAAgpQAAgpgJgdQh+BZlTBIIgGgiQFOhJB9hQQgNgYgSgZQiuBcjfAhIgGgfQDOglCzhPQgZgTgigQQi+A5iBASIAAgiQDrgmCuhAIk1AAIAAggIJQAAIAAAgIjnAAQgqAchEAQQBAAiAdA2QALgGAsgPQCQg5BFggIAMAbQhCAkhiAkQBSB7C2A4IgLAgQjJhChTiGIhFAcQAZAoAAA/QAAA6gjAXQgUAYhOAAgA+ZGTQhBAAgsgEIAAgjQAtADA/AAQBjAHgLhHIAAkWIlvAAIA3ldQFvgLEbgcIAGAjQkcAdlWAKIgxEXIFLAAIAAjdIAhAAIAADdIFXAAIAAAjIlXAAIAAEWQAHBlhxAAIgOgBgEgjyAFQQCLh0Bah5IAaATQhcCBiQBxgA6aB4IATgVQAhAaBSBRIB4B5IgZATQh+h5hnhpgAKoBAIAAkjQhFBZhUBAIgSgZQCxiTBriuIAcANQg0Bbg0A+IAAE+gAFfAuIAAhcIrAAAIAABZIghAAIAAh9IMFAAIAACAgASzAcIhyAAQh/AFAEh4IAAg3QgjAShkAdQggAKgcAEIgFgiQBxgeBXgeIAAj1IAkAAIAADsQClhACOheIASAeQijBqiiA2IAAA+QgEBYBfgFIBqAAQBtAFAAhEQAEgPADgiQAEgkAAgTIAhAAQAAA0gIA6QgHBdh8AAIgKgBgAWvgmQDyhRCBhzIkCAAIgJAGIByBIIgSAaIh2hIQgYAeg0AeIgOgVQBmhaAshKIAbARQgFAOgMAQQgEAHgEADIBcAAIAAiaIAkAAIAABFICSAAIAAAfIiSAAIAAA2ICPAAIAAAeQh3CMkeBegAzJgjIAAinIJNAAIAACngAylhHIIEAAIAAhfIoEAAgEAhUgB8IhMguQgqAXhUAeIgMgZQAIgJALgEQAzgSApgRQg/gcg2gkIAMgbQAUAIASAKQA+AhAgAVQBWg0Azg7IkhAAIAAghIFJAAIAAAbQg4BWhdAyQAvAYBiA2QAeATAOALIgNAaIiAhEgAkliAIAAiEIJMAAIAACEgAkFijIIHAAIAAg9IoHAAgA07kRIAAgkIGkAAIg8hnIAfgMIA+BzIFsAAIAAAkgAmXkyIAAgkIGTAAIghhGIAcgMIAoBSIF6AAIAAAkg");
	this.shape.setTransform(229.8,75.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,32.9,458.2,85);


(lib.元件3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AZFGMQAHAAABABIAAlWQg/AjhcAdIgKggQEdhgCsicIATAYQgKASgIABQCPBxEIBZIgMAcQhXgWhHgnIAADKIntAAIAACIQABgDBcgSQB7gZAOgEIAIAiIj0A1IgFACQgFAFgRAAgAZyDYIHNAAIAAg5InNAAgAZyB7IHNAAIAAhBInNAAgEAg6AAWQiMgzhVhKQhTBNiFAwIDXAAIgkg7IAbgMIAtBHIC+AAIAAAAgAhGGXQBph5Agh0QAjhwAEj0Ih9AAIAAgkIB9AAIADjNIAlAAIgDDNIDiAAIgKH5QAABuh2gEQhGAAgdgEIAAgkQAgAEA/AAQBVAEAAhDIAKncIi9AAQgED7gmB3QgfB5hzB5gAbsEpIAGgiIC3AyQB0gfCAgpIAHAeQhwAnhhARID8BBIgGAhgA6nGpIAAjfIjVAAIAAgkIDVAAIAAioIitAAIAAgkICtAAIAAitIi/AAIAAghIDgAAQA3hRA9hmIAcAMQgdA+hPBtICiAAIAAAhIjCAAIAACtICpAAIAAAkIipAAIAACoIDYAAIAAAkIjYAAIAADfgApqGmIAAhFImSAAIAABFIgmAAIAAleIDcAAIAAioIkkAAIAAgkIEkAAIAAi0QhQAEikAAIAAgkQEcgEDxgWIAAAjQh7AQh5ADIAAC4IEjAAIAAAkIkjAAIAACoIDcAAIAAFegAv8E9IGSAAIAAjRImSAAgAIGGHQFSi9gHmBIkzAAIAAgkIEzAAIAHjRIAlAAIgIDRIGUAAIgOHGQAACaixgHQgVAAg6gEIhMAAIAEgkIBDAAQA+ADAVAAQCQAIAAh1IALmjIlvAAQAEGaliC/gA0sGcIB3lRIAhAMIh2FLgEgkIAE9IGfgOIAAAgImfAOgAhREgIlEAaIgKgcIAQgKQBSiUBAi4IixAAIAAglIGjAAIAAAlIjQAAQg1CfhYCrIENgVIhXjKIAhgLIB0EbIgcAMgEgjOADOIAAlvQgLAZgbAdIgUgTQB4iSA0icIAiAHIgIAbQgLAhgUAeICtAAIAAAeIhMB6IBsAAIAAGBgEgggACpIBnAAIAAiIIhnAAgEgitACpIBoAAIAAiIIhoAAgEggggAGIBnAAIAAiMIhnAAgEgitgAGIBoAAIAAiMIhoAAgEgi7gCzICWAAIBMhzIiUAAQgkBAgqAzgAW9gnQD1hRCCh0IkEAAIgKAGIB0BIIgSAaIh4hIQgZAfgzAeIgPgVQBohbAshMIAbASQgGAPgLAPIgIAKIBcAAIAAiaIAlAAIAABEICUAAIAAAhIiUAAIAAA1ICQAAIAAAfQh3CNkiBfgA1fiWIASgaIC8CGIgSAZgEAhogB9IhMgvQgqAYhVAeIgMgZQAIgKAKgDQA0gTAqgRQhAgcg2glIAMgbIAmASQA/AiAhAUQBWgzAzg8IkjAAIAAghIFMAAIAAAaQg5BYheAzQAwAXBjA3QAeATAOALIgNAbIiChFgA0elyIASgZICkB+IgUAZgA80maIAagSIBeCQIgWATgAmDkqIAAgkIFUAAIAAAkg");
	this.shape.setTransform(233.2,74.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,31.2,462.6,85.8);


(lib.元件3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AZsGcIAHABIAAlkQhCAkhfAfIgLghQEphkCzijIAUAYQgKAUgJABQCVB2ETBcIgMAeQhbgXhKgpIAADSIoCAAIAACOQACgDBfgTQCBgaAPgEIAIAjIj+A3IgGADQgFAEgSAAgAaZDhIHhAAIAAg8InhAAgAaZCAIHhAAIAAhEInhAAgEAh1AAWQiSg1hYhMQhXBQiLAxIDgAAIglg9IAcgMIAuBJIDHAAIAAAAgAcYE1IAGgkIDAA1QB4ghCGgqIAHAfQh0AphmARIEHBEIgGAjgAmcG7IAAoJIFWAAIAAGlQAEBghhgEIgjAAQgdgEgUAAIAAgmQAVAAAhAFIAcAAQA9ADgEg9IAAhgIkJAAIAADHgAl1DOIEJAAIAAhtIkJAAgAl1A7IEJAAIAAhjIkJAAgAyWGdQBnhTAjhDQAjhEADiNIAAhxIiHAAIAAgiII4AAIAAAiIjMAAIAAF4QABA2A9AAIAUAAQBJAEAJg4QAFgQADgnQAEgqAAgUIAnAAQAAASgFAYQgDBAgIATQgIBVhrgDIgWAAQhjAAAAhcIAAl4IiZAAIAAB4QALDvjPCLgEghtAGqIBQlcIAlAGIhRFcgA7MGsIh9AAIAAgmIB9AAQBcALgDhbIAAgGIlHAAIATjpIhLAAIAAgmIBMAAIAWjuIFOAAIgHDuIBHAAIAAAmIhHAAIgEDHIA8AAIAAAiIg8AAIAAAGQAAB2hxAAIgOAAgA+TEOIEgAAIADjHIkRAAgA+AAhIEVAAIADjJIkHAAgAELGZIhkAAQh3AEAEhzIAAkjIAmAAIAAC0QDBhKBVgxIASAcQhuA8i6BGIAABJQgDBQBSgEIBgAAQBfAEADg1QAEgLAEgdQADgeAAgUIAjAAQAAA4gIAmQgIBTh0AAIgKAAgAIDGRIAAglIGgAAIAAg1IlgAAIAAgmIFgAAIAAg3IkwAAIAAjrIKKAAIAADrIkwAAIAAA3IFhAAIAAAmIlhAAIAAA1IGhAAIAAAlgAPNC0IEOAAIAAg/IkOAAgAKVC0IEOAAIAAg/IkOAAgAPNBPIEOAAIAAg8IkOAAgAKVBPIEOAAIAAg8IkOAAgEgi1AFpIAAhmIhzAAIAABmIgjAAIAArEIC8AAIAALEgEgkoADhIBzAAIAAoXIhzAAgA2zEvICSguIAAkPIh7AAIAAglIB7AAIAAkAIiDAAIAAghIE0AAIAAAhIiKAAIAAEAIB7AAIAAAlIh7AAIAAEJICXgtIAGAjIlKBggA8+B4IAagSIBnByIgaAYgA8vhtIAUgZIBpB4IgaASgAXdgpQEAhUCHh6IkPAAIgKAIIB4BKIgTAcIh8hLQgZAfg3AhIgPgXQBrhfAuhPIAdATQgFAPgNARQgEAHgEADIBgAAIAAihIAnAAIAABHICaAAIAAAiIiaAAIAAA4ICVAAIAAAfQh8CUkuBjgAELggIhkAAQh3ADAEh6IAAkbIAmAAIAADLQCmhDBlg9IASAgQhyBAirBCIAAAqQgDBZBSgEIBgAAQBbADADg/QAMgeAAg5IAmAAQAAAVgDAfQgFAfgDAMQgIBahxAAIgKAAgEgiEgCeIATgZICACCIgWAVgEAilgCCIhPgxQgsAZhYAfIgNgaQAIgKALgEQA2gTArgSQhDgdg4gnIAMgbQAWAIATAKQBCAjAhAVQBag1A2g/IkwAAIAAgiIFaAAIAAAbQg8BbhhA1QAxAZBoA5QAfAUAPAMIgPAbIiGhHgAH3hGIAAgiIOBAAIAAAigA/riUQBYiHAzijIAjAHQgQA7gWAoIFaAAIAAAmIllAAQgmBTg8BZgAhFizImNAPIgGgkIAhgFQBDg6CEizIAcAOQhgCUhcBLQATgECHgEICYgEIhkhvIAVgUICqDCIgVAUgAJkigIAAjhIKnAAIAADhgAKLjGIJbAAIAAg4IpbAAgAKLkkIJbAAIAAg8IpbAAgEghigGDIAZgYIB5B5IgUAWgAw8k+IAAgmIHSAAIAAAmg");
	this.shape.setTransform(232.7,67.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,22.5,476,89.3);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("Ad7DvQCKgogEg+IAAgMIhJAAIAAilIEgAAIAAClIhbAAIAAA5QgCAqAmgEIAoAAQApAEACgdQAAgHACgQIAAgaIAXAEIAAAVIgDAZQgCAwg/gCIgoAAQg8ACACg8IAAg7IhPAAIAAALQAABTiZAmgAfQBpIDyAAIAAgyIjyAAgAfQAiIDyAAIAAgzIjyAAgA0REBIAAguIiQAAIAAAuIgWAAIAAjrIC9AAIAADrgA2hDAICQAAIAAiTIiQAAgA4SEBIAAguIiOAAIAAAuIgXAAIAAjrIC7AAIAADrgA6gDAICOAAIAAiTIiOAAgEgjpAD/IAAjtIGyAAIAACrQAAAhgRANQgQASgqAAIg+gDIAAgVIA+AAQAhAAALgHQAJgLAAgWIAAiXImGAAIAADZgAxUD+IAAlOQgcBJgoAyIgQgMQBThuA3iuIAVAGQgdBagXAxIAAFqgAKeDsQC7hjAfifIjYAAIAAgWIDbAAQALhHAChDIjEAAIAAgWIGwAAIAAAWIjXAAQgBBFgLBFIEIAAIAAAWIkMAAQgfCvjJBjgAEuD5Ig5AAIAAgXIA5AAQAfAAAJgHQAIgHAAgWIAAkzIjzAAIAAgWIDzAAIAAh1IAXAAIAAB1IDuAAIAAAWIjuAAIAAAUQAbBOAqA5QBAg2BCg8IALAPQg+A9hEA1QBBBJBjA4IgHAQQi3hfg2ikIAAD7QAAAfgRAOQgLAOgiAAIgJAAgAnUDnIBJhWIAAi5IhEAAIAAgVIBbAAIAADPQAmBEBqAAIEXAAIAAAVIkXAAQhyAAgrhHQgBAGhDBIgAQyDrIgwAAQhXACAChaIAAiQIAWAAIAACOQgCBJBDgEIArAAQBTACAAgyQADgeAAglIAWAAQABAkgFAjQgEBChcAAIgFgBgATPDYIAAgUIBpAAIAAlYIAVAAIAAFYICdAAIAAnEIAVAAIAAC9IC5AAIAAAWIi5AAIAADxIDXAAIAAAUgAwWDYIAAgUIDLAAQAWg3BAjdIAVAHQgyCsgkBhICUAAIAAAUgEgiDAC8IAAhnIDmAAIAABngEghtAClIC6AAIAAg5Ii6AAgABjCnIDpiGIALATIjsCDgAcGCfIBDgSIAAjmIg/AAIAAgVIA/AAIAAiSIAWAAIAACSIA2AAIAAAIIDbAAIAMgPIAug7IjFAAIAzA9IgQALIgwg8IANgMIg9AAIAAgTICfAAIgWg2IAUgHIAYA9ICcAAIAAATIhOAAIAPAKQgDAKgJALQgbAlgNAGICEAAIAAAUIl3AAIAAgHIg0AAIAADgIBEgTIAGAUIigArgAvUhHIAVgDIA/DgIgVADgAkcCXIAAlTIBdAAIAfhEIAUAHQgDAMgJAPQgNAcgDAGICiAAIAACGIkAAAIAABGIEOAAIAACHgAkGCDID5AAIAAhfIj5AAgAkGhMIDqAAIAAhYIjqAAgACchAIAOgOIBfBiIgQALgEgi7gAaIAAhkIFZAAIAABkgEgilgAwIEtAAIAAg4IktAAgA6DgyIAAimIFVAAIAACmgA5thIIEoAAIAAh9IkoAAgAv+h1IAAgWIFQAAIAAAWgAmyjoIAQgLIBJBkIgPALgAH5iwQgngcgbgPIALgPQAYAOA1AnIAYASIgMAPQgMgGgWgWgAt2j5IARgHIAqBoIgSAEgEgkMgCrIAAgUIEAAAIgeg6IARgHIAiBBIDjAAIAAAUg");
	this.shape.setTransform(231.7,41.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16.1,463.3,51.4);


(lib.元件2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AgkEBQCnhiARh2IiYAAIAAgWICYAAQABgUABiCIh2AAIAAgWIB2AAQACg1AAhCIAVAAIAAB3ICNAAIAACsIBAAAIAAAWIjEAAQAsCNCUBGIgIASQiZhKgviKQgVB8itBcgACrATIB3AAIAAiWIh1AAQAAB9gCAZgAhOESIAAokIAYAAIAAIkgEggBAD+QDdhQA4iFIiYAAQgOAUgTAMIBXBHIgMAPIhZhHQgXAXgjAXIgMgOQBihKAzhXIARALQgHATgWAcIgCACICeAAIAAASQg7CZjqBUgAqgEQIAAkCQg4B6h4BcIgNgNQB8hkA/h7IieAAIAAgYICgAAIAAhuIiMAAIAAgVICMAAIAAhvIAWAAIAABvICfAAIAAAVIifAAIAABuIC0AAIAAAYIiyAAQBACEB5BTIgMARQh3hRg4iBIAAECgAyDDgQgrAEhoACIgDADQgIACgLAAIgGgWQAMgBAAABQAmgyBLh6IhrAFIgSACIgGgRQAKgIADAAQAxhJAyheIilAAQgmBSg7BSIBegBQAeg1AOglIAVALQhNCghSBpICAgCIglheIAVgIIA7CfIgTAHIgTguIiPAHIgYACIgDgTQALgDABgDQAegeBQiGIhGADIgZAAQgDACgIgGIgLAIIgDgXQAFAAADgCIgBABQAxhAA2hoIhpAAIAAgYIDqAAQAmgtAug7IARANQgwBCgdAZICYAAIAAAYIheAAQgqBWg5BRIBlgEQAVgiAcg4IASAMQhECLheB/IBCgCIBCgDIgqhbIASgIIBECfIgSAIgAcDELIAAlpIDcAAIAAEtQACA8hBgCQgoAAgUgDIAAgXQAWADAmAAQArAFgEgrIAAhEIitAAIAACDgAcaBxICtAAIAAhTIitAAgAcaAGICtAAIAAhMIitAAgAR+ELIAAm+ICmAAQAIgNAVguIASgkIASAFQgaBDgPAXIESAAIAAFwQACBKhRgCIhJAAIAAgYIBGAAQA9ACgCg2IAAlVImhAAIAAGngA5lEFIBIjXIAVAEIhJDXgEAhBAEHIAAgXIA6AAQAhACALgMQALgIAAgbIAAksIAXAAIAAEsQAAAigRASQgTAQgpAAgAKyEFQgqAAgdgEIAAgWQAdACApAAQBAAFgHgvIAAizIjtAAIAjjhQDtgHC3gSIAEAWQi3ATjdAHIggC0IDWAAIAAiPIAVAAIAACPIDeAAIAAAWIjeAAIAACzQAFBChJAAIgJAAgEgheAD8QgxAAgXgEIAAgWQAbADAtgBQBAAEgChKIAClDIiIAAQgaA8grAwIgQgIQBAhYAlh2IAVAEQgMAvgRAjICYAAIgDFaQACBbhSAAIgFAAgAHTDZQBZhLA6hNIARALQg8BUhdBJgANWBNIANgMQAVAPA1A1IBNBOIgPANQhShOhDhFgAvWDgIAAm0ICEAAIAAGVIgYAAIAAgfIhVAAIAAA+gAu/CKIBVAAIAAlGIhVAAgEgjUACoIAAj9IB9AAIAADPIhoAAIAAAugEgi/ABjIBQAAIAAigIhQAAgEAg2ACmIAAjxIAXAAIAADxgAT2CTIAAjOIDgAAIAADOgAUOB9ICxAAIAAihIixAAgAiuATQAUhIAUhgIAUAEQgLBNgcBegA/8gEQDBhGBEhuIiYAAQgIAOgRANIBRA4IgMAQIhRg7QgUAVghAWIgLgPQBbhIAthWIASAIQgKAbgfAhICmAAIAAASQhHCAjUBKgA57hfIAOgPIBlBVIgPAMgAgtiZIANgMIBBBQIgRANgA5ejvIAMgQIBhBUIgPAPgAbSieIAAgYIFNAAQAyguAtguIANANQgxA5ghAWIDEAAIAAAYgA2ikBIAPgMIBLBXIgRANgAdIkCIAPgQIBSBPIgQALg");
	this.shape.setTransform(229.7,38);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,10.6,460.1,54.9);


(lib.元件2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AS9FdIAAleIFbAAIAAENQADBOhYgDIhQgDIAAgeIBRADQA5ADgDgyIAAgpIkgAAIAAB8gATaDEIEgAAIAAhEIkgAAgATaBiIEgAAIAAhGIkgAAgACLFBQDBguA/gkQhbgnhBhHIARgQQBBBCBcArQA0guAMhOIj6AAIAAkWID9AAIAAhSIlAAAIAAgeIKbAAIAAAeIk9AAIAABSID6AAIAAFCIgeAAIAAgsIjgAAQgLBeg6AoQCeA5D6ANIAAAaQkQgJibhBQhLAvjDAwgAH+AaQAAAbgDAQIDfAAIAAhdIjcAAgAEBBFIDcAAQADgRAAgaIAAgyIjfAAgAH+g2IDcAAIAAhgIjcAAgAEBg2IDfAAIAAhgIjfAAgA4/FTQAuhLAyhcIAXAKQgwBcgwBLgA/JD8IAVgQIBVBhIgUAQgEgjaAFdIAAncQgkBwg6BJIgVgPQBqiaBDjnIAcAFQgZBdgiBPIAAICgAfnFAQDQhhCDiOIAUAPQiBCYjZBigAQHFaIAAlTQgVBvhTBoIgUgPQBYh6AkiCIh2AAIAAgdIB2AAIAAkPIAdAAIAAEPIBnAAIAAAdIhnAAIAABSIAKgKIBjBqIgRAQIhchiIAAEngAdOFXIAAkdQgxBziDBjIgPgUQCDhqA5hwIitAAIAAgdIC0AAIAAhMIAdAAIAABMICoAAIAAAdIioAAIAABNIALgPICVBvIgQAVIiQhtIAADggAwPC7IAVgPQAvBBA3BbIgVAOIhmibgA1cDgQgMgZgCgSIAXgJQASAlAmBfIAHAXIgcAKQgLgfghhSgAzAC5IAWgKIAnBIQAbAyAKAVIgaAKIhIiPgA8kESQg1hUgPi/IjEAAIAAELICZhyIAOAUIinB6IgVAWIgVgPQASgOgDAAIAAoiQDOgJDMgbIAFAeIgQAAQhjAPg7AFQADCAAJBUIC/AAIAAAgIi/AAQAPC7AxBOQATAiAeAAQAYAAAMglQAMgnAHhAIAeAAQgHAdADgJQgMBDgCAWQgUA9gwAAQgwgDgagzgEggsgDmIAADFIDEAAQgJhTgDiAQiKAMguACgAs+E8IAAgeIFHAAIAAgpIkVAAIAAgdIEVAAIAAgsIjuAAIAAi4IH9AAIAAC4IjuAAIAAAsIEUAAIAAAdIkUAAIAAApIFGAAIAAAegAnWCOIDTAAIAAgxIjTAAgArKCOIDTAAIAAgxIjTAAgAnWA/IDTAAIAAguIjTAAgArKA/IDTAAIAAguIjTAAgA1kCBQBwhaAZhMIhUg8IANgYIBRA6QARg1ADhPIhyAAIAAgdIByAAIADh8IAeAAIgDB8IClAAIAABOQAAC4AQArQAOAdAPAAQASADAHgiQAIg3AHg2IAeAAQgJBOgKAoQgKA0gpAAQgmAAgQgxQgWghABjMIAAgxIiHAAQgDBPgUBGIBpBMIgKAWIhphMQghBUh0BVgA33COIg7gCIAAgbIA6AAQA2ADgDgwIAAhuIh+AYIgEgcICCgYIAAh9Ih2AAIAAgdIB2AAIAAh8IAbAAIAAB8IBqAAIAAAdIhqAAIAAB5IBrgSIAEAdIhvARIAAB0QACBJhJAAIgGgBgEAghABGQCHhOB4huIAUATQh3ByiRBOgAtHg2IAAgaILAAAIAAAagAemhGIBQiXIAXAKQgYA1g5BjgASUg7IAAgeIDIAAIAAg6IixAAIAAgbICxAAIAAg9Ii6AAIAAgeIC6AAIAAhTIAeAAIAABTIDFAAIAAAeIjFAAIAAA9ICwAAIAAAbIiwAAIAAA6IDXAAIAAAegAasjJIAVgPIBPCMIgVAOgAc5jgIAbgJIAsCBIgbAKgEAghgCGQCKhYBjhgIAUAUQiCB6hxBAgAQ4iCIA+iLIAYAGQgUA5grBVgAOujRQgOgigDgQIAWgKQANAXAeBKQALAYAEASIgbAJIgkhYgAryh8IAAiwIIWAAIAACwgArTiZIHYAAIAAgtInYAAgArTjjIHYAAIAAgvInYAAgAagkaQCdgGDVgMIAEAdQjQALimAHg");
	this.shape.setTransform(231.9,37.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,2.2,476.4,69.8);


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


(lib.元件111 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 123
	this.instance = new lib.元件123("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(246.1,112.4,1,1,0,0,0,149.1,180.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({y:195.4},5,cjs.Ease.get(1)).to({y:183.5},11,cjs.Ease.get(1)).wait(82));

	// 图层 2
	this.instance_1 = new lib.元件129();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54.8,178.3,1,1,0,0,0,53,56.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({y:234.7},4).to({y:220.3},11).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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
	this.instance_1.setTransform(25.4,25.7,1,1,0,0,0,25.4,16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,18.8,50.8,44.3);


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
	this.instance.setTransform(262.6,445.8,1,1,0,0,0,91.1,87.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({y:361},4,cjs.Ease.get(1)).to({y:370.6},11,cjs.Ease.get(1)).wait(123));

	// 元件 55
	this.instance_1 = new lib.元件55("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(361.5,356.4,1,1,0,0,0,130.7,126.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:271.6},4,cjs.Ease.get(1)).to({y:281.2},11,cjs.Ease.get(1)).wait(125));

	// 元件 58
	this.instance_2 = new lib.元件58("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(487.8,486,1,1,0,0,0,125.8,116.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({y:401.2},4,cjs.Ease.get(1)).to({y:410.8},11,cjs.Ease.get(1)).wait(127));

	// 元件 54
	this.instance_3 = new lib.元件54("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(500.2,268.4,1,1,0,0,0,67.8,77.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({y:183.6},4,cjs.Ease.get(1)).to({y:193.2},11,cjs.Ease.get(1)).wait(129));

	// 元件 65
	this.instance_4 = new lib.元件65("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(273,338.2,1,1,0,0,0,273,264.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:253.4},4,cjs.Ease.get(1)).to({y:263},11,cjs.Ease.get(1)).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,84.8,546,529.1);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("Ay/TAQn4n3AArJQAArIH4n3QH3n4LIAAQLIAAH4H4QH4H3AALIQAALJn4H3Qn4H4rIAAQrIAAn3n4g");
	var mask_graphics_10 = new cjs.Graphics().p("A8TcTQrvruAAwlQAAwkLvrwQLurtQlgBQQlABLuLtQLwLwAAQkQAAQlrwLuQruLwwlgBQwlABrurwg");
	var mask_graphics_11 = new cjs.Graphics().p("Egj7Aj7Qu4u4AA1DQAA1CO4u5QO5u4VCAAQVDAAO4O4QO5O5AAVCQAAVDu5O4Qu4O51DAAQ1CAAu5u5g");
	var mask_graphics_12 = new cjs.Graphics().p("Egp3Ap2QxUxVAA4hQAA4gRUxWQRXxVYgAAQYhAARVRVQRWRWAAYgQAAYhxWRVQxVRW4hAAQ4gAAxXxWg");
	var mask_graphics_13 = new cjs.Graphics().p("EguFAuFQzFzGAA6/QAA6/TFzHQTGzDa/AAQbAAATFTDQTGTHAAa/QAAa/zGTGQzFTF7AABQ6/gBzGzFg");
	var mask_graphics_14 = new cjs.Graphics().p("EgwoAwnQ0I0IAA8fQAA8fUI0JQUK0HcegBQcfABUIUHQUKUJAAcfQAAcf0KUIQ0IUK8fgBQ8eAB0K0Kg");
	var mask_graphics_15 = new cjs.Graphics().p("EgxeAxdQ0e0fAA8+QAA8+Ue0gQUg0ec+AAQc/AAUeUeQUgUgAAc+QAAc+0gUfQ0eUg8/AAQ8+AA0g0gg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_10,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_11,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_12,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_13,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_14,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_15,x:367.7,y:218.1}).wait(78).to({graphics:null,x:0,y:0}).wait(41));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},84).wait(41));

	// 元件 51
	this.instance = new lib.元件51("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(366.1,222.6,1,1,0,0,0,183.2,35.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({startPosition:0},7,cjs.Ease.get(1)).to({_off:true},81).wait(41));

	// 元件 50
	this.instance_1 = new lib.元件50("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.7,181.9,0.039,1,0,0,0,114.7,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({regY:0,scaleX:1,y:181.8},7,cjs.Ease.get(1)).to({_off:true},74).wait(41));

	// 元件 49
	this.instance_2 = new lib.元件49("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(198.6,193.3,1,1,0,0,0,21.4,14);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},6).to({_off:true},78).wait(41));

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

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:550.1,y:169.3}).wait(1).to({graphics:mask_1_graphics_1,x:549.7,y:182.5}).wait(1).to({graphics:mask_1_graphics_2,x:549.3,y:193.7}).wait(1).to({graphics:mask_1_graphics_3,x:549,y:202.8}).wait(1).to({graphics:mask_1_graphics_4,x:548.8,y:209.9}).wait(1).to({graphics:mask_1_graphics_5,x:548.7,y:215}).wait(1).to({graphics:mask_1_graphics_6,x:548.6,y:218}).wait(1).to({graphics:mask_1_graphics_7,x:548.5,y:219}).wait(86).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 48
	this.instance_3 = new lib.元件48("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(542.6,225,1,1,0,0,0,10.9,38.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},93).wait(41));

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

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:120.9,y:193.8}).wait(1).to({graphics:mask_2_graphics_1,x:157.9,y:199.6}).wait(1).to({graphics:mask_2_graphics_2,x:189.2,y:204.5}).wait(1).to({graphics:mask_2_graphics_3,x:214.9,y:208.6}).wait(1).to({graphics:mask_2_graphics_4,x:234.8,y:211.7}).wait(1).to({graphics:mask_2_graphics_5,x:250.5,y:214}).wait(1).to({graphics:mask_2_graphics_6,x:262.2,y:215.3}).wait(1).to({graphics:mask_2_graphics_7,x:266.1,y:215.8}).wait(86).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 47
	this.instance_4 = new lib.元件47("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(328.8,233.8,1,1,0,0,0,141.5,21.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},93).wait(41));

	// 图层 13 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AqJB3IAAjtIUTAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:287.9,y:174.4}).wait(93).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 46
	this.instance_5 = new lib.元件46("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(283.8,192.3,1,1,0,0,0,56.3,5.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({y:181.3},6,cjs.Ease.get(1)).to({_off:true},79).wait(41));

	// 图层 14 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_8 = new cjs.Graphics().p("As2B7IAAj1IZtAAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_4_graphics_8,x:445.6,y:270}).wait(85).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 45
	this.instance_6 = new lib.元件45("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(446.3,251,1,1,0,0,0,76.7,7.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:265.6},6,cjs.Ease.get(1)).to({_off:true},79).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.3,211.3,9.8,45);


(lib.元件44_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("Ay/TAQn4n3AArJQAArIH4n3QH3n4LIAAQLIAAH4H4QH4H3AALIQAALJn4H3Qn4H4rIAAQrIAAn3n4g");
	var mask_graphics_10 = new cjs.Graphics().p("A8TcTQrvruAAwlQAAwkLvrwQLurtQlgBQQlABLuLtQLwLwAAQkQAAQlrwLuQruLwwlgBQwlABrurwg");
	var mask_graphics_11 = new cjs.Graphics().p("Egj7Aj7Qu4u4AA1DQAA1CO4u5QO5u4VCAAQVDAAO4O4QO5O5AAVCQAAVDu5O4Qu4O51DAAQ1CAAu5u5g");
	var mask_graphics_12 = new cjs.Graphics().p("Egp3Ap2QxUxVAA4hQAA4gRUxWQRXxVYgAAQYhAARVRVQRWRWAAYgQAAYhxWRVQxVRW4hAAQ4gAAxXxWg");
	var mask_graphics_13 = new cjs.Graphics().p("EguFAuFQzFzGAA6/QAA6/TFzHQTGzDa/AAQbAAATFTDQTGTHAAa/QAAa/zGTGQzFTF7AABQ6/gBzGzFg");
	var mask_graphics_14 = new cjs.Graphics().p("EgwoAwnQ0I0IAA8fQAA8fUI0JQUK0HcegBQcfABUIUHQUKUJAAcfQAAcf0KUIQ0IUK8fgBQ8eAB0K0Kg");
	var mask_graphics_15 = new cjs.Graphics().p("EgxeAxdQ0e0fAA8+QAA8+Ue0gQUg0ec+AAQc/AAUeUeQUgUgAAc+QAAc+0gUfQ0eUg8/AAQ8+AA0g0gg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_10,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_11,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_12,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_13,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_14,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_15,x:367.7,y:218.1}).wait(78).to({graphics:null,x:0,y:0}).wait(41));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[]},84).wait(41));

	// 元件 51
	this.instance = new lib.元件51_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(366.1,222.6,1,1,0,0,0,183.2,35.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({startPosition:0},7,cjs.Ease.get(1)).to({_off:true},81).wait(41));

	// 元件 50
	this.instance_1 = new lib.元件50_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.7,181.9,0.039,1,0,0,0,114.7,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({regY:0,scaleX:1,y:181.8},7,cjs.Ease.get(1)).to({_off:true},74).wait(41));

	// 元件 49
	this.instance_2 = new lib.元件49_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(198.6,193.3,1,1,0,0,0,21.4,14);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},6).to({_off:true},78).wait(41));

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

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:550.1,y:169.3}).wait(1).to({graphics:mask_1_graphics_1,x:549.7,y:182.5}).wait(1).to({graphics:mask_1_graphics_2,x:549.3,y:193.7}).wait(1).to({graphics:mask_1_graphics_3,x:549,y:202.8}).wait(1).to({graphics:mask_1_graphics_4,x:548.8,y:209.9}).wait(1).to({graphics:mask_1_graphics_5,x:548.7,y:215}).wait(1).to({graphics:mask_1_graphics_6,x:548.6,y:218}).wait(1).to({graphics:mask_1_graphics_7,x:548.5,y:219}).wait(86).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 48
	this.instance_3 = new lib.元件48_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(542.6,225,1,1,0,0,0,10.9,38.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},93).wait(41));

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

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:120.9,y:193.8}).wait(1).to({graphics:mask_2_graphics_1,x:157.9,y:199.6}).wait(1).to({graphics:mask_2_graphics_2,x:189.2,y:204.5}).wait(1).to({graphics:mask_2_graphics_3,x:214.9,y:208.6}).wait(1).to({graphics:mask_2_graphics_4,x:234.8,y:211.7}).wait(1).to({graphics:mask_2_graphics_5,x:250.5,y:214}).wait(1).to({graphics:mask_2_graphics_6,x:262.2,y:215.3}).wait(1).to({graphics:mask_2_graphics_7,x:266.1,y:215.8}).wait(86).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 47
	this.instance_4 = new lib.元件47_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(328.8,233.8,1,1,0,0,0,141.5,21.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},93).wait(41));

	// 图层 13 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AqJB3IAAjtIUTAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:287.9,y:174.4}).wait(93).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 46
	this.instance_5 = new lib.元件46_1("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(283.8,192.3,1,1,0,0,0,56.3,5.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({y:181.3},6,cjs.Ease.get(1)).to({_off:true},79).wait(41));

	// 图层 14 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_8 = new cjs.Graphics().p("As2B7IAAj1IZtAAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_4_graphics_8,x:445.6,y:270}).wait(85).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 45
	this.instance_6 = new lib.元件45_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(446.3,251,1,1,0,0,0,76.7,7.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:265.6},6,cjs.Ease.get(1)).to({_off:true},79).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.3,211.3,9.8,45);


(lib.元件44_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 15 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("Ay/TAQn4n3AArJQAArIH4n3QH3n4LIAAQLIAAH4H4QH4H3AALIQAALJn4H3Qn4H4rIAAQrIAAn3n4g");
	var mask_graphics_10 = new cjs.Graphics().p("A8TcTQrvruAAwlQAAwkLvrwQLurtQlgBQQlABLuLtQLwLwAAQkQAAQlrwLuQruLwwlgBQwlABrurwg");
	var mask_graphics_11 = new cjs.Graphics().p("Egj7Aj7Qu4u4AA1DQAA1CO4u5QO5u4VCAAQVDAAO4O4QO5O5AAVCQAAVDu5O4Qu4O51DAAQ1CAAu5u5g");
	var mask_graphics_12 = new cjs.Graphics().p("Egp3Ap2QxUxVAA4hQAA4gRUxWQRXxVYgAAQYhAARVRVQRWRWAAYgQAAYhxWRVQxVRW4hAAQ4gAAxXxWg");
	var mask_graphics_13 = new cjs.Graphics().p("EguFAuFQzFzGAA6/QAA6/TFzHQTGzDa/AAQbAAATFTDQTGTHAAa/QAAa/zGTGQzFTF7AABQ6/gBzGzFg");
	var mask_graphics_14 = new cjs.Graphics().p("EgwoAwnQ0I0IAA8fQAA8fUI0JQUK0HcegBQcfABUIUHQUKUJAAcfQAAcf0KUIQ0IUK8fgBQ8eAB0K0Kg");
	var mask_graphics_15 = new cjs.Graphics().p("EgxeAxdQ0e0fAA8+QAA8+Ue0gQUg0ec+AAQc/AAUeUeQUgUgAAc+QAAc+0gUfQ0eUg8/AAQ8+AA0g0gg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_10,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_11,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_12,x:367.7,y:218}).wait(1).to({graphics:mask_graphics_13,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_14,x:367.7,y:218.1}).wait(1).to({graphics:mask_graphics_15,x:367.7,y:218.1}).wait(78).to({graphics:null,x:0,y:0}).wait(41));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},9).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[]},78).wait(41));

	// 元件 51
	this.instance = new lib.元件51_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(366.1,222.6,1,1,0,0,0,183.2,35.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({startPosition:0},7,cjs.Ease.get(1)).to({_off:true},81).wait(41));

	// 元件 50
	this.instance_1 = new lib.元件50_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(528.7,181.9,0.039,1,0,0,0,114.7,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({regY:0,scaleX:1,y:181.8},7,cjs.Ease.get(1)).to({_off:true},74).wait(41));

	// 元件 49
	this.instance_2 = new lib.元件49_2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(198.6,193.3,1,1,0,0,0,21.4,14);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({alpha:1},6).to({_off:true},78).wait(41));

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

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:550.1,y:169.3}).wait(1).to({graphics:mask_1_graphics_1,x:549.7,y:182.5}).wait(1).to({graphics:mask_1_graphics_2,x:549.3,y:193.7}).wait(1).to({graphics:mask_1_graphics_3,x:549,y:202.8}).wait(1).to({graphics:mask_1_graphics_4,x:548.8,y:209.9}).wait(1).to({graphics:mask_1_graphics_5,x:548.7,y:215}).wait(1).to({graphics:mask_1_graphics_6,x:548.6,y:218}).wait(1).to({graphics:mask_1_graphics_7,x:548.5,y:219}).wait(86).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 48
	this.instance_3 = new lib.元件48_2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(542.6,225,1,1,0,0,0,10.9,38.1);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},93).wait(41));

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

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:120.9,y:193.8}).wait(1).to({graphics:mask_2_graphics_1,x:157.9,y:199.6}).wait(1).to({graphics:mask_2_graphics_2,x:189.2,y:204.5}).wait(1).to({graphics:mask_2_graphics_3,x:214.9,y:208.6}).wait(1).to({graphics:mask_2_graphics_4,x:234.8,y:211.7}).wait(1).to({graphics:mask_2_graphics_5,x:250.5,y:214}).wait(1).to({graphics:mask_2_graphics_6,x:262.2,y:215.3}).wait(1).to({graphics:mask_2_graphics_7,x:266.1,y:215.8}).wait(86).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 47
	this.instance_4 = new lib.元件47_2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(328.8,233.8,1,1,0,0,0,141.5,21.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},93).wait(41));

	// 图层 13 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_0 = new cjs.Graphics().p("AqJB3IAAjtIUTAAIAADtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:mask_3_graphics_0,x:287.9,y:174.4}).wait(93).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 46
	this.instance_5 = new lib.元件46_2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(283.8,192.3,1,1,0,0,0,56.3,5.3);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({_off:false},0).to({y:181.3},6,cjs.Ease.get(1)).to({_off:true},79).wait(41));

	// 图层 14 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_8 = new cjs.Graphics().p("As2B7IAAj1IZtAAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_4_graphics_8,x:445.6,y:270}).wait(85).to({graphics:null,x:0,y:0}).wait(41));

	// 元件 45
	this.instance_6 = new lib.元件45_2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(446.3,251,1,1,0,0,0,76.7,7.3);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({y:265.6},6,cjs.Ease.get(1)).to({_off:true},79).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.3,211.3,9.8,45);


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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_graphics_10,x:-42.7,y:112.5}).wait(1).to({graphics:mask_graphics_11,x:-42.7,y:105.1}).wait(1).to({graphics:mask_graphics_12,x:-42.7,y:97.7}).wait(1).to({graphics:mask_graphics_13,x:-42.7,y:90.2}).wait(1).to({graphics:mask_graphics_14,x:-42.7,y:82.8}).wait(1).to({graphics:mask_graphics_15,x:-42.7,y:75.4}).wait(1).to({graphics:mask_graphics_16,x:-42.7,y:67.9}).wait(1).to({graphics:mask_graphics_17,x:-42.7,y:60.5}).wait(25).to({graphics:null,x:0,y:0}).wait(63));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#183851").ss(1,1,1).p("AH7HBIv1uB");
	this.shape.setTransform(-46.2,48.6);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:false},0).to({_off:true},32).wait(63));

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

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_5,x:306.1,y:100.3}).wait(1).to({graphics:mask_1_graphics_6,x:326.2,y:87}).wait(1).to({graphics:mask_1_graphics_7,x:343.2,y:75.9}).wait(1).to({graphics:mask_1_graphics_8,x:357,y:66.7}).wait(1).to({graphics:mask_1_graphics_9,x:367.8,y:59.6}).wait(1).to({graphics:mask_1_graphics_10,x:375.5,y:54.5}).wait(1).to({graphics:mask_1_graphics_11,x:380.2,y:51.4}).wait(1).to({graphics:mask_1_graphics_12,x:381.7,y:50.4}).wait(30).to({graphics:null,x:0,y:0}).wait(63));

	// 元件 28
	this.instance = new lib.元件28("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(372,46.4,1,1,0,0,0,53.8,46.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},37).wait(63));

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

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_2_graphics_5,x:302.8,y:94.5}).wait(1).to({graphics:mask_2_graphics_6,x:265.3,y:94.3}).wait(1).to({graphics:mask_2_graphics_7,x:233.6,y:94.2}).wait(1).to({graphics:mask_2_graphics_8,x:207.7,y:94.1}).wait(1).to({graphics:mask_2_graphics_9,x:187.5,y:94.1}).wait(1).to({graphics:mask_2_graphics_10,x:173.1,y:94}).wait(1).to({graphics:mask_2_graphics_11,x:164.5,y:94}).wait(1).to({graphics:mask_2_graphics_12,x:161.6,y:94}).wait(30).to({graphics:null,x:0,y:0}).wait(63));

	// 元件 27
	this.instance_1 = new lib.元件27("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.9,93.8,1.265,1,0,0,0,0.2,0.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},37).wait(63));

	// 元件 13
	this.instance_2 = new lib.元件13("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(314,92.6,14.045,14.045,0,0,0,3.6,3.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:3.7,regY:3.7,scaleX:1.11,scaleY:1.11,x:315.4,y:94,alpha:1},7,cjs.Ease.get(1)).to({_off:true},35).wait(63));

	// 元件 13
	this.instance_3 = new lib.元件13("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.2,94,4.727,4.727,0,0,0,3.5,3.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({regX:3.7,scaleX:1.11,scaleY:1.11,x:4.1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},29).wait(63));

	// 图层 8 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_11 = new cjs.Graphics().p("A3bGMIAAsXMAu3AAAIAAMXg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_3_graphics_11,x:163.7,y:51.3}).wait(31).to({graphics:null,x:0,y:0}).wait(63));

	// 元件 4
	this.instance_4 = new lib.元件4("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(167,113.6,1,1,0,0,0,194.8,49.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({y:52.4},8,cjs.Ease.get(1)).to({y:50.8},3,cjs.Ease.get(1)).to({y:52.4},3,cjs.Ease.get(1)).to({_off:true},17).wait(63));

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
	var mask_graphics_97 = new cjs.Graphics().p("AuQFvIWFyHIGcCkI22WNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:306.1,y:100.3}).wait(1).to({graphics:mask_graphics_6,x:326.2,y:87}).wait(1).to({graphics:mask_graphics_7,x:343.2,y:75.9}).wait(1).to({graphics:mask_graphics_8,x:357,y:66.7}).wait(1).to({graphics:mask_graphics_9,x:367.8,y:59.6}).wait(1).to({graphics:mask_graphics_10,x:375.5,y:54.5}).wait(1).to({graphics:mask_graphics_11,x:380.2,y:51.4}).wait(1).to({graphics:mask_graphics_12,x:381.7,y:50.4}).wait(25).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_graphics_97,x:381.7,y:50.4}).wait(8));

	// 元件 28
	this.instance = new lib.元件28_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(372,46.4,1,1,0,0,0,53.8,46.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},32).wait(60).to({_off:false},0).wait(8));

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
	var mask_1_graphics_97 = new cjs.Graphics().p("A3XCkIhIlQMAw/gAzIAAG/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_5,x:302.8,y:94.5}).wait(1).to({graphics:mask_1_graphics_6,x:265.3,y:94.3}).wait(1).to({graphics:mask_1_graphics_7,x:233.6,y:94.2}).wait(1).to({graphics:mask_1_graphics_8,x:207.7,y:94.1}).wait(1).to({graphics:mask_1_graphics_9,x:187.5,y:94.1}).wait(1).to({graphics:mask_1_graphics_10,x:173.1,y:94}).wait(1).to({graphics:mask_1_graphics_11,x:164.5,y:94}).wait(1).to({graphics:mask_1_graphics_12,x:161.6,y:94}).wait(25).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_1_graphics_97,x:161.6,y:94}).wait(8));

	// 元件 27
	this.instance_1 = new lib.元件27_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.9,93.8,1.265,1,0,0,0,0.2,0.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},32).wait(60).to({_off:false},0).wait(8));

	// 元件 13
	this.instance_2 = new lib.元件13_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(314,92.6,14.045,14.045,0,0,0,3.6,3.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:3.7,regY:3.7,scaleX:1.11,scaleY:1.11,x:315.4,y:94,alpha:1},7,cjs.Ease.get(1)).to({_off:true},30).wait(60).to({_off:false},0).wait(8));

	// 元件 13
	this.instance_3 = new lib.元件13_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.2,94,4.727,4.727,0,0,0,3.5,3.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:3.7,scaleX:1.11,scaleY:1.11,x:4.1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},21).wait(60).to({_off:false},0).wait(8));

	// 图层 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_11 = new cjs.Graphics().p("A3bGMIAAsXMAu3AAAIAAMXg");
	var mask_2_graphics_97 = new cjs.Graphics().p("A3bGMIAAsXMAu3AAAIAAMXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_2_graphics_11,x:163.7,y:51.3}).wait(26).to({graphics:null,x:0,y:0}).wait(60).to({graphics:mask_2_graphics_97,x:163.7,y:51.3}).wait(8));

	// 元件 4
	this.instance_4 = new lib.元件4_1("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(167,113.6,1,1,0,0,0,194.8,49.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({y:52.4},8,cjs.Ease.get(1)).to({y:50.8},3,cjs.Ease.get(1)).to({y:52.4},3,cjs.Ease.get(1)).to({_off:true},12).wait(60).to({_off:false},0).wait(8));

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
	var mask_graphics_81 = new cjs.Graphics().p("AuQFvIWFyHIGcCkI22WNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_graphics_5,x:306.1,y:100.3}).wait(1).to({graphics:mask_graphics_6,x:326.2,y:87}).wait(1).to({graphics:mask_graphics_7,x:343.2,y:75.9}).wait(1).to({graphics:mask_graphics_8,x:357,y:66.7}).wait(1).to({graphics:mask_graphics_9,x:367.8,y:59.6}).wait(1).to({graphics:mask_graphics_10,x:375.5,y:54.5}).wait(1).to({graphics:mask_graphics_11,x:380.2,y:51.4}).wait(1).to({graphics:mask_graphics_12,x:381.7,y:50.4}).wait(29).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_graphics_81,x:381.7,y:50.4}).wait(9).to({graphics:null,x:0,y:0}).wait(15));

	// 元件 28
	this.instance = new lib.元件28_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(372,46.4,1,1,0,0,0,53.8,46.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},36).wait(40).to({_off:false},0).to({_off:true},9).wait(15));

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
	var mask_1_graphics_81 = new cjs.Graphics().p("A3XCkIhIlQMAw/gAzIAAG/g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_1_graphics_5,x:302.8,y:94.5}).wait(1).to({graphics:mask_1_graphics_6,x:265.3,y:94.3}).wait(1).to({graphics:mask_1_graphics_7,x:233.6,y:94.2}).wait(1).to({graphics:mask_1_graphics_8,x:207.7,y:94.1}).wait(1).to({graphics:mask_1_graphics_9,x:187.5,y:94.1}).wait(1).to({graphics:mask_1_graphics_10,x:173.1,y:94}).wait(1).to({graphics:mask_1_graphics_11,x:164.5,y:94}).wait(1).to({graphics:mask_1_graphics_12,x:161.6,y:94}).wait(29).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_1_graphics_81,x:161.6,y:94}).wait(9).to({graphics:null,x:0,y:0}).wait(15));

	// 元件 27
	this.instance_1 = new lib.元件27_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.9,93.8,1.265,1,0,0,0,0.2,0.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},36).wait(40).to({_off:false},0).to({_off:true},9).wait(15));

	// 元件 13
	this.instance_2 = new lib.元件13_2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(314,92.6,14.045,14.045,0,0,0,3.6,3.6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:3.7,regY:3.7,scaleX:1.11,scaleY:1.11,x:315.4,y:94,alpha:1},7,cjs.Ease.get(1)).to({_off:true},34).wait(40).to({_off:false},0).to({_off:true},9).wait(15));

	// 元件 13
	this.instance_3 = new lib.元件13_2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.2,94,4.727,4.727,0,0,0,3.5,3.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({regX:3.7,scaleX:1.11,scaleY:1.11,x:4.1,alpha:1},7,cjs.Ease.get(1)).to({_off:true},25).wait(40).to({_off:false},0).to({_off:true},9).wait(15));

	// 图层 8 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_11 = new cjs.Graphics().p("A3bGMIAAsXMAu3AAAIAAMXg");
	var mask_2_graphics_81 = new cjs.Graphics().p("A3bGMIAAsXMAu3AAAIAAMXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_2_graphics_11,x:163.7,y:51.3}).wait(30).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_2_graphics_81,x:163.7,y:51.3}).wait(9).to({graphics:null,x:0,y:0}).wait(15));

	// 元件 4
	this.instance_4 = new lib.元件4_2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(167,113.6,1,1,0,0,0,194.8,49.1);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({y:52.4},8,cjs.Ease.get(1)).to({y:50.8},3,cjs.Ease.get(1)).to({y:52.4},3,cjs.Ease.get(1)).to({_off:true},16).wait(40).to({_off:false},0).to({_off:true},9).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(263.5,42,102.6,102.6);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 111
	this.instance = new lib.元件111("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(1537.7,181.4,0.9,0.9,0,0,0,198.3,184.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(146));

	// 元件 14
	this.instance_1 = new lib.元件14("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(575,544,0.252,0.252,0,0,0,1635.1,774.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:608,alpha:1},5,cjs.Ease.get(1)).to({y:595.2},11,cjs.Ease.get(1)).wait(132));

	// 元件 112
	this.instance_2 = new lib.元件112("synched",14,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(820.4,159.1,1,1,0,0,0,89.2,102.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({y:223.1,startPosition:19},7,cjs.Ease.get(1)).to({y:210.3,startPosition:30},13,cjs.Ease.get(1)).wait(128));

	// <Clip Group>
	this.instance_3 = new lib.ClipGroup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-62.5,47,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:111,alpha:1},7,cjs.Ease.get(1)).to({y:98.2},13,cjs.Ease.get(1)).wait(130));

	// 元件 109
	this.instance_4 = new lib.元件109();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1567.9,1196.6,1,1,0,0,0,141.3,123);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({y:1145.4},7,cjs.Ease.get(1)).to({y:1155},13,cjs.Ease.get(1)).wait(128));

	// 图层 2
	this.instance_5 = new lib.Clipdggfgdfg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1518.5,1212.9,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:1161.7,alpha:1},7,cjs.Ease.get(1)).to({y:1171.3},13,cjs.Ease.get(1)).wait(130));

	// 元件 110
	this.instance_6 = new lib.元件110();
	this.instance_6.parent = this;
	this.instance_6.setTransform(787.1,997.9,1,1,0,0,0,135.6,132.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({y:946.7},5,cjs.Ease.get(1)).to({y:956.3},11,cjs.Ease.get(1)).wait(130));

	// <Clip Group>_1
	this.instance_7 = new lib.ClipGroup_1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1444.8,1303.2,0.28,0.28,0,0,0,1634.9,774.4);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({y:1252,alpha:1},5,cjs.Ease.get(1)).to({y:1261.6},11,cjs.Ease.get(1)).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(766.6,13.8,755.4,1296.1);


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
	this.instance_1.setTransform(93.3,150.5,1,1,0,0,0,16.4,16.9);
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
	this.instance_5.setTransform(97.5,87.6,1,1,0,0,0,17.6,14.4);
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


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AjjDSQCWg2gEh8IAAgSIiSAAIAAgSIDnAAIAAhkIiHAAQgVAqgdAkIgNgLQA4hPAghZIASADQgUA4gRAXICBAAIAAhlIAUAAIAABlICvAAIAAATIivAAIAABkIDKAAIAAASIiiAAIAACKQgCArAxgCIAmAAQA2ACADgjQAAgaAEghIASAAQAAAjgEAcQgEAyhFgCIgqAAQhCACACg8IAAiMIhrAAIgBATQAECFiiA8g");
	this.shape.setTransform(70.4,42.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AELDhIg9AAIAAgTIA8AAQAuAEgFglIAAgsIjkAAIAAgRIDkAAIAAgdICQgsIlAAAIAAgTIFoAAIAAASIikA5IAAARIDTAAIAAARIjTAAIAAAsQAEA1g8AAIgEgBgAoaDSQCXg2gEh8IAAgSIiTAAIAAgSIDoAAIAAhkIiIAAQgVAqgcAjIgOgKQA4hQAghZIASAEQgTA3gRAYICBAAIAAhmIAUAAIAABmICvAAIAAATIivAAIAABkIDKAAIAAASIihAAIAACKQgDAqAxgBIAmAAQA2ABAEgiQAAgaADgiIASAAQAAAkgEAcQgEAyhEgCIgqAAQhDACACg9IAAiLIhrAAIgCATQAECFiiA7gACYgPIAAhbIE9AAIAABbgACsgjIEVAAIAAgzIkVAAgABbiQIAAgTIDiAAIggg4IARgGIAhA+IDEAAIAAATg");
	this.shape_1.setTransform(101.5,42.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("AL/DjIAAjzIhYAAQAABagLAwQgKAugqA7IgOgIQAlg3AJgtQAMgrAAhhIAAiZQBcgDBPgQIAEAQQhAARhcADIAAB6ICrAAIAAATIg/AAIAADzgAgsDhIg9AAIAAgUIA8AAQAtAEgDglIAAgsIjlAAIAAgRIDlAAIAAgdICPgsIlAAAIAAgTIFnAAIAAASIikA5IAAARIDUAAIAAARIjUAAIAAAtQAEA0g7AAIgEAAgAtRDRQCWg2gEh8IAAgSIiSAAIAAgSIDoAAIAAhkIiIAAQgWAqgcAkIgOgLQA4hPAghZIASADQgTA4gRAXICCAAIAAhlIAUAAIAABlICuAAIAAATIiuAAIAABkIDJAAIAAASIihAAIAACKQgCArAxgCIAmAAQA1ACAEgjQAAgaAEghIARAAQAAAjgEAcQgEAyhEgCIgqAAQhDACACg8IAAiMIhrAAIgCATQAECFihA8gAHeDZIgvAAIADgTIArAAQAhACgCgkIAAhuIhtAAIAAgTIBtAAIAAg9IAUAAIAAA9IBlAAIAAATIhlAAIAABwQACAzgwAAIgEAAgAGFCmQAgghAgg0IAPAGQgeA1gkAkgAIoBbIAOgKIA7BFIgKANgAifgQIAAhaIE8AAIAABagAiLgjIEVAAIAAg0IkVAAgAGLggIAAgRICKAAQAEgIARgdQARgfAJgNIAPAHQgKAWgdA0IBPAAIAAARgAG1h4IAOgKIAoBCIgOAKgAGWiLIAAgTIByAAIgbg9IAPgGIAdBDIBWAAIAAATgAjciRIAAgTIDhAAIgfg4IARgFIAgA9IDEAAIAAATg");
	this.shape_2.setTransform(132.7,43);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("AMlDTQB7gigEg4IAAgLIhBAAIAAiQIEAAAIAACQIhRAAIAAA0QgCAlAhgFIAkAAQAkAFADgbIACgTIAAgYIATAEIAAATIgCAVQgDArg3gCIgkAAQg0ACACg1IAAg1IhHAAIAAALQAABJiHAhgANxBdIDWAAIAAgsIjWAAgANxAdIDWAAIAAgtIjWAAgAHJDiIAAjzIhYAAQAABagMAwQgKAugpA7IgPgIQAlg3AJgtQAMgrAAhhIAAiZQBdgDBPgQIADAQQhAARhbADIAAB6ICrAAIAAATIhAAAIAADzgAljDgIg8AAIAAgUIA7AAQAuAEgEglIAAgsIjkAAIAAgRIDkAAIAAgdICQgsIlBAAIAAgTIFoAAIAAASIikA5IAAARIDUAAIAAARIjUAAIAAAtQAEA0g7AAIgFAAgAyIDQQCWg2gEh8IAAgSIiSAAIAAgSIDoAAIAAhkIiIAAQgVAqgdAkIgNgLQA4hPAfhZIASADQgTA4gRAXICCAAIAAhlIAUAAIAABlICuAAIAAATIiuAAIAABkIDJAAIAAASIihAAIAACKQgCArAxgCIAmAAQA1ACAEgjQAAgaAEghIASAAQgBAjgEAcQgDAyhFgCIgqAAQhDACACg8IAAiMIhrAAIgCATQAECFihA8gACoDYIgwAAIAEgTIAqAAQAhACgCgkIAAhuIhtAAIAAgTIBtAAIAAg9IAUAAIAAA9IBlAAIAAATIhlAAIAABwQACAzgwAAIgDAAgABOClQAgghAhg0IAOAGQgdA1glAkgADyBaIANgKIA8BFIgLANgAK+CMIA7gPIAAjMIg4AAIAAgTIA4AAIAAiAIAUAAIAACAIAwAAIAAAIIDCAAIAKgOIApg0IivAAIAtA2IgOAKIgqg1IALgLIg1AAIAAgRICLAAIgTgwIASgFIAWA1ICKAAIAAARIhGAAIAOAJQgDAJgHAJQgYAhgMAGIB1AAIAAARIlMAAIAAgGIguAAIAADHIA7gSIAGASIiOAmgAnVgRIAAhaIE9AAIAABagAnBgkIEVAAIAAg0IkVAAgABUghIAAgRICKAAQAEgIARgdQARgfAKgNIAOAHQgKAWgdA0IBPAAIAAARgAB+h5IAOgKIApBCIgPAKgABgiMIAAgTIBxAAIgbg9IAPgGIAdBDIBXAAIAAATgAoSiSIAAgTIDhAAIggg4IARgFIAhA9IDFAAIAAATg");
	this.shape_3.setTransform(163.8,43.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("AQhDTQBegpgGg/IAAgmIATAAIAAAmQAHBOhsArgAUoDiIAAibIATAAIAACbgAHvDSQB7gigFg4IAAgLIhAAAIAAiQID/AAIAACQIhRAAIAAA0QgBAlAhgFIAkAAQAkAFACgbIACgTIAAgYIATAEIAAATIgCAVQgCArg3gCIgkAAQg1ACACg1IAAg1IhHAAIAAALQAABJiHAhgAI6BcIDWAAIAAgsIjWAAgAI6AcIDWAAIAAgtIjWAAgACSDhIAAjzIhYAAQAABagMAwQgKAugoA7IgOgIQAkg3AJgtQALgrAAhhIAAiZQBdgDBPgQIAEAQQhAARhcADIAAB6ICrAAIAAATIhAAAIAADzgAqZDfIg9AAIAAgUIA8AAQAuAEgFglIAAgsIjkAAIAAgRIDkAAIAAgdICQgsIlAAAIAAgTIFoAAIAAASIikA5IAAARIDTAAIAAARIjTAAIAAAtQAEA0g8AAIgEAAgA2/DPQCXg2gEh8IAAgSIiTAAIAAgSIDoAAIAAhkIiIAAQgVAqgcAkIgOgLQA4hPAghZIASADQgTA4gRAXICBAAIAAhlIAUAAIAABlICvAAIAAATIivAAIAABkIDKAAIAAASIihAAIAACKQgDArAxgCIAmAAQA2ACAEgjQAAgaADghIASAAQAAAjgEAcQgEAyhEgCIgqAAQhDACACg8IAAiMIhrAAIgCATQAECFiiA8gAiODXIgvAAIADgTIArAAQAgACgCgkIAAhuIhtAAIAAgTIBtAAIAAg9IAVAAIAAA9IBkAAIAAATIhkAAIAABwQABAzgvAAIgEAAgAjoCkQAgghAhg0IAPAGQgeA1gkAkgAhEBZIAOgKIA6BFIgKANgAGHCLIA7gPIAAjMIg3AAIAAgTIA3AAIAAiAIAUAAIAACAIAxAAIAAAIIDBAAIAKgOIAqg0IiwAAIAtA2IgNAKIgrg1IALgLIg1AAIAAgRICMAAIgTgwIASgFIAVA1ICKAAIAAARIhFAAIANAJQgDAJgHAJQgXAhgNAGIB1AAIAAARIlMAAIAAgGIguAAIAADHIA8gSIAFASIiNAmgATbgJQhMBOiUAuIgGgQQCOgvBFg+IiZAAIAAi5IFXAAIAAC5IiZAAQBFBGCNAmIgFARQiVgnhKhVgATlgcICOAAIAAhBIiOAAgARCgcICPAAIAAhBIiPAAgATlhxICOAAIAAhBIiOAAgARChxICPAAIAAhBIiPAAgAsMgSIAAhaIE9AAIAABagAr4glIEVAAIAAg0IkVAAgAjhgiIAAgRICJAAQAEgIASgdQARgfAJgNIAOAHQgJAWgeA0IBOAAIAAARgAi3h6IAOgKIAoBCIgOAKgAjWiNIAAgUIByAAIgbg8IAOgGIAeBCIBVAAIAAAUgAtJiTIAAgTIDiAAIggg4IARgFIAhA9IDEAAIAAATg");
	this.shape_4.setTransform(194.8,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).wait(78));

	// 图层 3
	this.instance = new lib.元件52("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.6,45.3,1,1,0,0,0,0,18.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(2).to({x:109.2},0).wait(2).to({x:164.8},0).wait(2).to({x:228.4},0).wait(2).to({x:292.8},0).wait(2).to({x:345.6},0).to({_off:true},2).wait(76));

	// 图层 1
	this.instance_1 = new lib.元件44("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.8,33,1,1,0,0,0,380.9,208.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,9.9,368.2,74.4);


(lib.元件12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("ACtDaIAAglIjWAAIAAAlIgTAAIAAi6IB0AAIAAhZIiaAAIAAgTICaAAIAAhgQgrABhXAAIAAgSQCXgDCAgMIAAAUQhBAIhBACIAABiICbAAIAAATIibAAIAABZIB1AAIAAC6gAgpCiIDWAAIAAhvIjWAAgAjKDVIA/izIARAGIg+CwgAjlhWIAJgOIBkBIIgKANgAjCjMIAJgNIBXBDIgLAOg");
	this.shape.setTransform(70.3,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AFTDJQAUgVAAgvIAAgEIgKAAIAAg9IAdAAIAABDQAAA/gnAVgAAZDZIAAglIjWAAIAAAlIgTAAIAAi6IB1AAIAAhZIibAAIAAgTICbAAIAAhgQgrABhYAAIAAgTQCYgCCAgMIAAAUQhBAIhBACIAABiICbAAIAAATIibAAIAABZIB1AAIAAC6gAi9ChIDWAAIAAhvIjWAAgAleDUIA/izIASAGIg/CwgAl5hXIAKgOIBkBIIgKANgAlWjNIAJgNIBXBDIgKAOg");
	this.shape_1.setTransform(85.1,43.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("AIXDUQC8hOBWiIIAOAGQghA8g5AzIBuBcIgKANIhxheQhAA1hzAwgAiGDRQAUgVAAguIAAgFIgKAAIAAg9IAdAAIAABEQAAA+gnAVgAnADiIAAglIjXAAIAAAlIgTAAIAAi7IB1AAIAAhZIibAAIAAgTICbAAIAAhgQgrAChYAAIAAgTQCYgCCBgMIAAATQhCAIhBACIAABiICcAAIAAATIicAAIAABZIB2AAIAAC7gAqXCqIDXAAIAAhwIjXAAgAs4DcIA/izIASAGIg/CxgAG/DKQAJgJgCAAIAAjrIg/AAIAAgTIBTAAIAADvIA1gxIAKAOIg/A1IgBABQgGAHgKAIgAIbBtQBlgzBChAIiGAEIgGACQgGABgJAAIgDgRIAOgFIAAABQA2g5AmgxIh7AAIAAgUICvAAIgnhKIAPgGIAnBHIgNAJICQAAIAAAUIizAAQghA1g5A0ICFgEQAdghAbgsIAPAHQhKCNioBOgAtThPIAKgOIBkBIIgKAOgAGojJIAKgKIBMBUIgNAKgAswjEIAJgOIBXBEIgKANg");
	this.shape_2.setTransform(132.5,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("AMxDWQCMhSAOhhIh/AAIAAgTIB/AAQABgRAAhrIhhAAIAAgUIBiAAQABgrAAg2IASAAIAABhIB1AAIAACQIA2AAIAAATIijAAQAjB0B8A7IgGAPQiAg9gnh0QgRBniSBNgAPeAQIBkAAIAAh8IhiAAQAABngCAVgAMPDkIAAnHIATAAIAAHHgADgDTQC8hOBWiIIAPAGQgiA8g5AzIBuBcIgKANIhxheQhAA1hzAwgAm9DQQAUgVAAguIAAgFIgKAAIAAg9IAeAAIAABEQAAA+goAVgAr3DhIAAglIjXAAIAAAlIgTAAIAAi7IB1AAIAAhZIibAAIAAgTICbAAIAAhgQgrAChXAAIAAgTQCYgCCAgMIAAATQhBAIhCACIAABiICcAAIAAATIicAAIAABZIB2AAIAAC7gAvOCpIDXAAIAAhwIjXAAgAxvDbIBAizIARAGIg/CxgACIDJQAKgJgCAAIAAjrIhAAAIAAgTIBTAAIAADvIA2gxIAKAOIg/A1IgCABQgGAHgKAIgADkBsQBlgzBChAIiFAEIgHACQgGABgJAAIgDgRIAOgFIAAABQA3g5AlgxIh7AAIAAgUICwAAIgohKIAPgGIAnBHIgNAJICRAAIAAAUIizAAQgiA1g4A0ICFgEQAcghAbgsIAPAHQhKCNinBOgAK+AQQARg8AQhQIARADQgKBAgWBOgAyKhQIAKgOIBkBIIgKAOgAMph/IAMgKIA2BDIgOAJgABxjKIAKgKIBNBUIgOAKgAxnjFIAJgOIBXBEIgKANg");
	this.shape_3.setTransform(163.6,43.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("AH6DWQCNhSANhhIh/AAIAAgTIB/AAQABgRAAhrIhhAAIAAgUIBiAAQABgrAAg2IASAAIAABhIB1AAIAACQIA2AAIAAATIijAAQAkB0B7A7IgGAPQiAg9gnh0QgRBniRBNgAKnAQIBkAAIAAh8IhiAAQAABngCAVgAHYDkIAAnHIATAAIAAHHgAhWDTQC7hOBWiIIAPAGQgiA8g5AzIBuBcIgKANIhwheQhBA1hxAwgArzDQQATgVAAguIAAgFIgJAAIAAg9IAdAAIAABEQAAA+gnAVgAwtDhIAAglIjXAAIAAAlIgUAAIAAi7IB1AAIAAhZIibAAIAAgTICbAAIAAhgQgqAChYAAIAAgTQCYgCCAgMIAAATQhBAIhBACIAABiICbAAIAAATIibAAIAABZIB1AAIAAC7gA0ECpIDXAAIAAhwIjXAAgA2mDbIBAizIARAGIg/CxgASwDZQgjAAgYgCIAAgTQAYACAiAAQA1ADgFgnIAAiVIjGAAIAdi7QDGgFCZgQIACASQiYAQi4AHIgaCVICyAAIAAh3IARAAIAAB3IC5AAIAAASIi5AAIAACWQAEA2g9AAIgHAAgAiuDJQAKgJgCAAIAAjrIhAAAIAAgTIBTAAIAADvIA2gxIAKAOIg/A1IgCABQgGAHgJAIgAP2C1QBLg/AwhAIAOAKQgxBEhOA+gAU5BAIAKgKQASANAsArIBBBCIgOAKQhDhBg4g5gAhSBsQBlgzBBhAIiEAEIgGACQgHABgIAAIgDgRIAOgFIgBABQA3g5AkgxIh5AAIAAgUICuAAIgnhKIAPgGIAnBHIgOAJICRAAIAAAUIizAAQgiA1g3A0ICEgEQAcghAcgsIAOAHQhKCNimBOgAGHAQQARg8ARhQIAQADQgJBAgXBOgA3BhQIAKgOIBkBIIgKAOgAHyh/IAMgKIA2BDIgOAJgAjFjKIALgKIBMBUIgOAKgA2ejFIAKgOIBWBEIgKANg");
	this.shape_4.setTransform(194.6,43.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).wait(78));

	// 图层 3
	this.instance = new lib.元件52_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.6,45.3,1,1,0,0,0,0,18.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(2).to({x:109.2},0).wait(2).to({x:164.8},0).wait(2).to({x:228.4},0).wait(2).to({x:292.8},0).wait(2).to({x:345.6},0).to({_off:true},2).wait(76));

	// 图层 1
	this.instance_1 = new lib.元件44_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.8,33,1,1,0,0,0,380.9,208.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,9.9,368.2,74.4);


(lib.元件12_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183851").s().p("AhVC+QA2grARghQARgkABhIIAAg4IhDAAIAAgSIEhAAIAAASIhoAAIAAC/QAAAcAgAAIAKAAQAlACAFgdQACgIACgUIACggIATAAQAAAKgCAMQgCAggDAKQgFAsg3gCIgKAAQg0AAAAgvIAAi/IhOAAIAAA8QAGB6hpBIgAjnCGIBLgXIAAiLIg/AAIAAgTIA/AAIAAiDIhDAAIAAgRICeAAIAAARIhHAAIAACDIBAAAIAAATIhAAAIAACHIBNgWIAEARIipAxgAgni3IAAgTIDuAAIAAATg");
	this.shape.setTransform(70.4,45.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183851").s().p("AFTC6QAUgVAAguIAAgFIgKAAIAAg9IAdAAIAABEQAAA+gnAVgAjnC9QA1grASghQARgkAChIIAAg4IhFAAIAAgSIEhAAIAAASIhnAAIAAC/QAAAcAfAAIAKAAQAlACAFgdQADgIABgUIACggIAUAAQAAAKgCAMQgCAggEAKQgEAsg3gCIgLAAQgyAAAAgvIAAi/IhOAAIAAA8QAFB6hqBIgAl5CFIBLgXIAAiLIhAAAIAAgTIBAAAIAAiDIhEAAIAAgRICeAAIAAARIhHAAIAACDIBAAAIAAATIhAAAIAACHIBOgWIADARIipAxgAi5i4IAAgTIDtAAIAAATg");
	this.shape_1.setTransform(85.1,45.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183851").s().p("AiHDRQAUgVAAguIAAgFIgKAAIAAg9IAdAAIAABEQAAA+gnAVgArCDUQA1grASghQARgkAChIIAAg4IhFAAIAAgSIEiAAIAAASIhoAAIAAC/QAAAcAgAAIAKAAQAlACAFgdQADgIABgUIACggIAUAAQAAAKgCAMQgCAggEAKQgEAsg3gCIgLAAQgzAAAAgvIAAi/IhOAAIAAA8QAFB6hqBIgAGZC/IAAgTIDMAAIAAhgIikAAIAAgUICkAAIAAhZIiQAAIAAgTIExAAIAAATIiOAAIAABZICjAAIAAAUIijAAIAABgIDKAAIAAATgAtUCcIBLgXIAAiLIhAAAIAAgTIBAAAIAAiDIhEAAIAAgRICeAAIAAARIhHAAIAACDIBAAAIAAATIhAAAIAACHIBOgWIADARIipAxgAGGgjQCfhVBPhqIAOAKIgCAFQgDAGgFADQBHBYCWBLIgJAOQiRhGhOhfQhPBfiSBKgAqUihIAAgTIDuAAIAAATg");
	this.shape_2.setTransform(132.6,43.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183851").s().p("AOZDjIAAkiIAUAAIAAEigAm+DRQAUgVAAguIAAgFIgKAAIAAg9IAeAAIAABEQAAA+goAVgAv5DUQA1grASghQARgkAChIIAAg4IhFAAIAAgSIEiAAIAAASIhnAAIAAC/QgBAcAgAAIAKAAQAmACAEgdQADgIACgUIACggIATAAQAAAKgCAMQgCAggEAKQgEAsg3gCIgLAAQgzAAAAgvIAAi/IhOAAIAAA8QAGB6hqBIgABiC/IAAgTIDMAAIAAhgIikAAIAAgUICkAAIAAhZIiQAAIAAgTIExAAIAAATIiNAAIAABZICjAAIAAAUIijAAIAABgIDJAAIAAATgAyLCcIBLgXIAAiLIg/AAIAAgTIA/AAIAAiDIhEAAIAAgRICfAAIAAARIhHAAIAACDIA/AAIAAATIg/AAIAACHIBNgWIADARIipAxgAK7BfQCuhxBhiRIj2AAIAAgUIGoAAIAAAUIifAAQhhCei4BygAPTgVIAHgNQB2BKA8AtIgKAOQhKg1hlhDgABPgjQCfhVBPhqIAOAKIgCAFQgDAGgEADQBHBYCVBLIgJAOQiRhGhOhfQhPBfiSBKgAvLihIAAgTIDuAAIAAATg");
	this.shape_3.setTransform(163.7,43.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183851").s().p("AJ2DjIAAkiIATAAIAAEigArhDRQATgVAAguIAAgFIgJAAIAAg9IAdAAIAABEQAAA+gnAVgA0dDUQA1grASghQASgkABhIIAAg4IhFAAIAAgSIEjAAIAAASIhoAAIAAC/QAAAcAfAAIALAAQAlACAFgdQACgIACgUIACggIATAAQAAAKgCAMQgCAggEAKQgEAsg3gCIgLAAQgzAAAAgvIAAi/IhOAAIAAA8QAGB6hqBIgAQtDgIAAmcIGCAAIAAFXQAEBFhNgFIgcAAIgkgBIAAgTQAQAAAUABIAcAAQA5AEgDgyIAAlDIlcAAIAAGJgAjBC/IAAgTIDLAAIAAhgIiiAAIAAgUICiAAIAAhZIiPAAIAAgTIExAAIAAATIiOAAIAABZICjAAIAAAUIijAAIAABgIDJAAIAAATgA2vCcIBLgXIAAiLIg/AAIAAgTIA/AAIAAiDIhDAAIAAgRICeAAIAAARIhHAAIAACDIA/AAIAAATIg/AAIAACHIBNgWIAEARIiqAxgASLB/IAAiSIDGAAIAACSgASfBtICeAAIAAhtIieAAgAGXBfQCuhxBhiRIj2AAIAAgUIGpAAIAAAUIigAAQhhCei4BygAKvgVIAHgNQB2BKA8AtIgKAOQhKg1hlhDgAjUgjQCfhVBOhqIAOAKIgCAFQgDAGgEADQBHBYCWBLIgKAOQiRhGhNhfQhOBfiSBKgARmhSIAAgUIEPAAIAAAUgAzvihIAAgTIDvAAIAAATg");
	this.shape_4.setTransform(192.8,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},7).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).wait(78));

	// 图层 3
	this.instance = new lib.元件52_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(39.6,45.3,1,1,0,0,0,0,18.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(2).to({x:109.2},0).wait(2).to({x:164.8},0).wait(2).to({x:228.4},0).wait(2).to({x:292.8},0).wait(2).to({x:345.6},0).to({_off:true},2).wait(76));

	// 图层 1
	this.instance_1 = new lib.元件44_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(203.8,33,1,1,0,0,0,380.9,208.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(93));

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
	this.instance_7.setTransform(-9.5,5,1,1,0,0,0,12.2,12.2);
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

	// 元件 103
	this.instance = new lib.元件103();
	this.instance.parent = this;
	this.instance.setTransform(147.6,52.2,1,1,0,0,0,74,73.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:110.6},5,cjs.Ease.get(1)).to({y:103.4},9,cjs.Ease.get(1)).wait(112));

	// 元件 107
	this.instance_1 = new lib.元件107();
	this.instance_1.parent = this;
	this.instance_1.setTransform(112.6,165.9,1,1,0,0,0,17.6,14.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:75,y:160.3,alpha:1},8,cjs.Ease.get(1)).wait(114));

	// 元件 106
	this.instance_2 = new lib.元件106();
	this.instance_2.parent = this;
	this.instance_2.setTransform(105.5,104.8,1,1,0,0,0,12.7,14.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({x:67.9,y:99.2,alpha:1},8,cjs.Ease.get(1)).wait(111));

	// 元件 105
	this.instance_3 = new lib.元件105();
	this.instance_3.parent = this;
	this.instance_3.setTransform(67.3,74.7,1,1,0,0,0,19.7,19.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({x:29.7,y:69.1,alpha:1},8,cjs.Ease.get(1)).wait(116));

	// 元件 104
	this.instance_4 = new lib.元件104();
	this.instance_4.parent = this;
	this.instance_4.setTransform(115.1,49.5,1,1,0,0,0,24.9,24.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({x:77.5,y:43.9,alpha:1},8,cjs.Ease.get(1)).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(73.7,-21.3,85.2,147.1);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(465,-129.9,1.03,1.03,0,0,0,234.5,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:380.5},5,cjs.Ease.get(1)).to({x:388.3},13,cjs.Ease.get(1)).wait(146));

	// 图层 2
	this.instance_1 = new lib.元件2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(465.5,-20.9,1.03,1.03,0,0,0,236.6,35.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:381},5,cjs.Ease.get(1)).to({x:388.8},13,cjs.Ease.get(1)).wait(144));

	// 图层 6
	this.instance_2 = new lib.元件128("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(463.1,71.1,1,1,0,0,0,249.3,40);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:378.6},5,cjs.Ease.get(1)).to({x:386.4},13,cjs.Ease.get(1)).wait(141));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(224.2,-151.2,471.9,87.6);


(lib.元件7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件3_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(465.1,-129.5,1.036,1.036,0,0,0,234.5,53.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:379.9,alpha:1},6,cjs.Ease.get(1)).to({regX:234.6,x:382.7},3,cjs.Ease.get(1)).to({regX:234.5,x:387},11).wait(139));

	// 图层 2
	this.instance_1 = new lib.元件2_1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(468.8,-20,1.036,1.036,0,0,0,236.7,35.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:383.7,alpha:1},6,cjs.Ease.get(1)).to({x:390.8},14,cjs.Ease.get(1)).wait(137));

	// 图层 6
	this.instance_2 = new lib.元件128("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(461.4,72.1,1,1,0,0,0,249.3,40);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({x:376.3,alpha:1},6,cjs.Ease.get(1)).to({x:383.4},14,cjs.Ease.get(1)).wait(134));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(224,-152.7,479.4,88.9);


(lib.元件7_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件3_2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(476.8,-130.1,1,1,0,0,0,234.5,53.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:376.9},6,cjs.Ease.get(1)).to({x:386.9},12,cjs.Ease.get(1)).wait(141));

	// 图层 2
	this.instance_1 = new lib.元件2_2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(475.9,-24.2,1,1,0,0,0,236.6,35.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:378.6},6,cjs.Ease.get(1)).to({x:388.6},12,cjs.Ease.get(1)).wait(138));

	// 图层 6
	this.instance_2 = new lib.元件128("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(461.3,73,1,1,0,0,0,249.3,40);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:370.3},6,cjs.Ease.get(1)).to({x:383.3},12,cjs.Ease.get(1)).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(237,-161.2,476,89.3);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件116();
	this.instance.parent = this;
	this.instance.setTransform(360.8,161.8,1,1,0,0,0,24.3,24.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:204,alpha:1},16,cjs.Ease.get(1)).to({_off:true},1).wait(109));

	// 图层 6
	this.instance_1 = new lib.元件117();
	this.instance_1.parent = this;
	this.instance_1.setTransform(622.8,163.5,1,1,0,0,0,24.3,24.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:466,alpha:1},16,cjs.Ease.get(1)).to({_off:true},1).wait(109));

	// 图层 4
	this.instance_2 = new lib.元件118("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(473.6,121.6,1,1,0,0,0,333.3,104.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:316.8,alpha:1},16,cjs.Ease.get(1)).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(248.8,16.9,524.1,209.5);


(lib.元件5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.元件83();
	this.instance.parent = this;
	this.instance.setTransform(364.1,158.7,1,1,0,0,0,23.8,23.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:214.5,alpha:1},15,cjs.Ease.get(1)).to({_off:true},1).wait(109));

	// 图层 6
	this.instance_1 = new lib.元件87();
	this.instance_1.parent = this;
	this.instance_1.setTransform(622.5,158.7,1,1,0,0,0,23.8,23.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:472.9,alpha:1},15,cjs.Ease.get(1)).to({_off:true},1).wait(109));

	// 图层 4
	this.instance_2 = new lib.元件102();
	this.instance_2.parent = this;
	this.instance_2.setTransform(497.1,132.5,1,1,0,0,0,321.1,121.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:347.5,alpha:1},15,cjs.Ease.get(1)).wait(110));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(247.8,10.8,451.2,241.4);


(lib.元件68 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 11
	this.instance = new lib.元件11("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(135.9,165.2,1,1,0,0,0,111.3,110.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).wait(140));

	// 元件 24
	this.instance_1 = new lib.元件24("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(269.7,58.6,1,1,0,0,0,93.2,92.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:110.6},4,cjs.Ease.get(1)).to({y:94.6},9,cjs.Ease.get(1)).wait(131));

	// 元件 40
	this.instance_2 = new lib.元件40("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(393.3,137.3,1,1,0,0,0,122.8,110.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({y:189.3},4,cjs.Ease.get(1)).to({y:173.3},9,cjs.Ease.get(1)).wait(133));

	// 元件 60
	this.instance_3 = new lib.元件60("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(191.5,75.9,1,1,0,0,0,191.5,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:166.3},4,cjs.Ease.get(1)).to({y:150.3},9,cjs.Ease.get(1)).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-90.4,381.9,300.6);


(lib.元件66 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 57
	this.instance = new lib.元件57("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(111.7,835.3,1,1,0,0,0,111.7,201.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({y:857.7,alpha:1},8,cjs.Ease.get(1)).to({_off:true},15).wait(43).to({_off:false},0).to({_off:true},8).wait(9));

	// 元件 63
	this.instance_1 = new lib.元件63("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(552.7,64.5,1,1,0,0,0,168.4,64.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({alpha:1},8).to({_off:true},28).wait(43).to({_off:false},0).to({_off:true},8).wait(9));

	// 元件 41
	this.instance_2 = new lib.元件41("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(286.8,872.6,0.998,0.998,-0.1,0,0,124.4,102.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({regX:124.2,regY:102,scaleX:1,scaleY:1,rotation:0,guide:{path:[286.8,872.6,306.5,856.1,328.6,838.3,438.8,749.8,604.7,654.6]},alpha:1},13,cjs.Ease.get(1)).to({_off:true},10).wait(43).to({_off:false},0).to({_off:true},8).wait(9));

	// 图层 18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_13 = new cjs.Graphics().p("AgJdxMAAAg7hIATAAMAAAA7hg");
	var mask_graphics_14 = new cjs.Graphics().p("AjAdyMAAAg7jIGBAAMAAAA7jg");
	var mask_graphics_15 = new cjs.Graphics().p("Al3dyMAAAg7jILvAAMAAAA7jg");
	var mask_graphics_16 = new cjs.Graphics().p("AoudxMAAAg7hIRdAAMAAAA7hg");
	var mask_graphics_17 = new cjs.Graphics().p("ArldxMAAAg7hIXLAAMAAAA7hg");
	var mask_graphics_18 = new cjs.Graphics().p("AucdyMAAAg7jIc5AAMAAAA7jg");
	var mask_graphics_19 = new cjs.Graphics().p("AxTdyMAAAg7jMAinAAAMAAAA7jg");
	var mask_graphics_20 = new cjs.Graphics().p("A0KdxMAAAg7hMAoVAAAMAAAA7hg");
	var mask_graphics_21 = new cjs.Graphics().p("A3BdxMAAAg7hMAuCAAAMAAAA7hg");
	var mask_graphics_22 = new cjs.Graphics().p("A54dyMAAAg7jMAzwAAAMAAAA7jg");
	var mask_graphics_23 = new cjs.Graphics().p("A8vdyMAAAg7jMA5fAAAMAAAA7jg");
	var mask_graphics_24 = new cjs.Graphics().p("A/mdyMAAAg7jMA/MAAAMAAAA7jg");
	var mask_graphics_25 = new cjs.Graphics().p("EgicAdxMAAAg7hMBE5AAAMAAAA7hg");
	var mask_graphics_26 = new cjs.Graphics().p("EglTAdyMAAAg7jMBKnAAAMAAAA7jg");
	var mask_graphics_27 = new cjs.Graphics().p("EgoKAdyMAAAg7jMBQVAAAMAAAA7jg");
	var mask_graphics_28 = new cjs.Graphics().p("EgrBAdyMAAAg7jMBWDAAAMAAAA7jg");
	var mask_graphics_29 = new cjs.Graphics().p("Egt4AdyMAAAg7iMBbxAAAMAAAA7ig");
	var mask_graphics_30 = new cjs.Graphics().p("EgwvAdyMAAAg7jMBhfAAAMAAAA7jg");
	var mask_graphics_31 = new cjs.Graphics().p("EgzmAdyMAAAg7jMBnNAAAMAAAA7jg");
	var mask_graphics_86 = new cjs.Graphics().p("EgzmAdyMAAAg7jMBnNAAAMAAAA7jg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(13).to({graphics:mask_graphics_13,x:1,y:874.2}).wait(1).to({graphics:mask_graphics_14,x:19.3,y:874.1}).wait(1).to({graphics:mask_graphics_15,x:37.6,y:874}).wait(1).to({graphics:mask_graphics_16,x:55.9,y:873.8}).wait(1).to({graphics:mask_graphics_17,x:74.2,y:873.7}).wait(1).to({graphics:mask_graphics_18,x:92.5,y:873.6}).wait(1).to({graphics:mask_graphics_19,x:110.8,y:873.5}).wait(1).to({graphics:mask_graphics_20,x:129.1,y:873.4}).wait(1).to({graphics:mask_graphics_21,x:147.4,y:873.3}).wait(1).to({graphics:mask_graphics_22,x:165.7,y:873.2}).wait(1).to({graphics:mask_graphics_23,x:184,y:873.1}).wait(1).to({graphics:mask_graphics_24,x:202.3,y:873}).wait(1).to({graphics:mask_graphics_25,x:220.5,y:872.8}).wait(1).to({graphics:mask_graphics_26,x:238.8,y:872.7}).wait(1).to({graphics:mask_graphics_27,x:257.1,y:872.6}).wait(1).to({graphics:mask_graphics_28,x:275.4,y:872.5}).wait(1).to({graphics:mask_graphics_29,x:293.7,y:872.4}).wait(1).to({graphics:mask_graphics_30,x:312,y:872.3}).wait(1).to({graphics:mask_graphics_31,x:330.3,y:872.2}).wait(12).to({graphics:null,x:0,y:0}).wait(43).to({graphics:mask_graphics_86,x:330.3,y:872.2}).wait(8).to({graphics:null,x:0,y:0}).wait(9));

	// 元件 64
	this.instance_3 = new lib.元件64("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(269.4,828.7,1,1,0,0,0,269.4,145.1);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({_off:true},30).wait(43).to({_off:false},0).to({_off:true},8).wait(9));

	// 元件 62
	this.instance_4 = new lib.元件62("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(382.3,580.8,1,1,0,0,0,221.6,89.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({y:652.8,alpha:1},8,cjs.Ease.get(1)).to({_off:true},25).wait(43).to({_off:false},0).to({_off:true},8).wait(9));

	// 元件 61
	this.instance_5 = new lib.元件61("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(374.1,468.3,1.044,1.044,0,0,0,353.7,224.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({_off:false},0).to({regX:353.8,regY:224.4,scaleX:1,scaleY:1,x:380.6,y:468,alpha:1},5,cjs.Ease.get(1)).to({_off:true},31).wait(43).to({_off:false},0).to({_off:true},8).wait(9));

	// 元件 65
	this.instance_6 = new lib.元件67("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(510.7,941.5,1,1,0,0,0,306.7,264.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},43).wait(43).to({_off:false,startPosition:86},0).to({_off:true},8).wait(9));

	// 元件 60
	this.instance_7 = new lib.元件68("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(257.9,150.3,1,1,0,0,0,257.9,150.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},43).wait(43).to({_off:false,startPosition:86},0).to({_off:true},8).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-90.4,750,1381.2);


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
	this.instance = new lib.元件12("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(1144.6,1021.7,1,1,0,0,0,188,48.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(98));

	// 图层 4
	this.instance_1 = new lib.元件7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1140.1,601.2,1.113,1.113,0,0,0,375.1,56.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(103));

	// 图层 5
	this.instance_2 = new lib.元件26("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1162.6,106.1,1,1,0,0,0,180.8,48.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(111));

	// 图层 6
	this.instance_3 = new lib.元件5("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1130.1,803.3,1,1,0,0,0,326.5,107.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(116));

	// 图层 1
	this.instance_4 = new lib.元件22("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(951.4,707.8,1,1,0,0,0,951.4,707.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1052.3,713,524.1,209.5);


(lib.元件22_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 9
	this.instance = new lib.元件9("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(1481.6,306.8,1,1,0,0,0,124,127.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(118));

	// <Clip Group>_1
	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1444.8,1172,0.28,0.28,0,0,0,1634.9,774.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:1284,alpha:1},6,cjs.Ease.get(1)).to({y:1261.6},12,cjs.Ease.get(1)).wait(103));

	// 元件 8
	this.instance_2 = new lib.元件8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(829.6,159.4,1,1,0,0,0,138.6,158.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:252.2},6,cjs.Ease.get(1)).to({y:229.8},12,cjs.Ease.get(1)).wait(97));

	// 元件 6
	this.instance_3 = new lib.元件6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(961.4,130.9,1,1,0,0,0,146.1,123.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({y:217.3},6,cjs.Ease.get(1)).to({y:194.9},11,cjs.Ease.get(1)).wait(100));

	// <Clip Group>
	this.instance_4 = new lib.ClipGroup_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-28.6,82.2,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({y:162.2,alpha:1},4,cjs.Ease.get(1)).to({y:139.8},12,cjs.Ease.get(1)).wait(103));

	// 元件 25
	this.instance_5 = new lib.元件25();
	this.instance_5.parent = this;
	this.instance_5.setTransform(794,1118.8,1,1,0,0,0,128.8,126.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({y:1000.4},4).to({y:1013.2},12).wait(103));

	// 元件 14
	this.instance_6 = new lib.元件14_1("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(458,726.7,0.28,0.28,0,0,0,1634.8,774);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:608.3,alpha:1},4).to({y:621.1},12).wait(105));

	// 元件 59
	this.instance_7 = new lib.元件59();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1525.2,1209,1,1,0,0,0,80.4,90.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({y:1090.6},6).to({y:1103.4},14).wait(97));

	// 图层 2
	this.instance_8 = new lib.ClipGroupsdfsfsdsdfs();
	this.instance_8.parent = this;
	this.instance_8.setTransform(1558.6,1212.2,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({y:1093.8,alpha:1},6).to({y:1106.6},14).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(765.6,38.4,751.2,1167.9);


(lib.元件22_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 元件 21
	this.instance = new lib.元件21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(806.7,238.6,1,1,0,0,0,114.2,93.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(105));

	// 元件 17
	this.instance_1 = new lib.元件17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(837.6,383.4,1,1,0,0,0,168.9,146.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:469.8},6,cjs.Ease.get(1)).to({y:457},11,cjs.Ease.get(1)).wait(91));

	// 元件 14
	this.instance_2 = new lib.元件14_2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(834,405.1,0.28,0.28,0,0,0,2976.8,265.8);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:491.5,alpha:1},6,cjs.Ease.get(1)).to({y:478.7},11,cjs.Ease.get(1)).wait(93));

	// 元件 16
	this.instance_3 = new lib.元件16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1473.3,43.2,1,1,0,0,0,97.7,116.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({y:129.6},4,cjs.Ease.get(1)).to({y:116.8},9,cjs.Ease.get(1)).wait(91));

	// <Clip Group>
	this.instance_4 = new lib.ClipGroup_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1433.5,80.6,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({y:167,alpha:1},4,cjs.Ease.get(1)).to({y:154.2},9,cjs.Ease.get(1)).wait(93));

	// 元件 18
	this.instance_5 = new lib.元件18("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(784.1,1209,1,1,0,0,0,130.7,146.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({y:1087.4},4,cjs.Ease.get(1)).to({y:1097},9,cjs.Ease.get(1)).wait(95));

	// 图层 2
	this.instance_6 = new lib.ClipGroupsdfsf();
	this.instance_6.parent = this;
	this.instance_6.setTransform(703.5,1170.1,0.28,0.28,0,0,0,1635.3,774.6);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:1048.5,alpha:1},4,cjs.Ease.get(1)).to({y:1058.1},9,cjs.Ease.get(1)).wait(97));

	// 元件 20
	this.instance_7 = new lib.元件20("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1511.1,1326.7,1,1,0,0,0,60,51.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({y:1205.1},5,cjs.Ease.get(1)).to({y:1214.7},11,cjs.Ease.get(1)).wait(88));

	// 元件 19
	this.instance_8 = new lib.元件19("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(1456.2,1307.9,1,1,0,0,0,95.9,92.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({y:1186.3},5,cjs.Ease.get(1)).to({y:1195.9},11,cjs.Ease.get(1)).wait(90));

	// <Clip Group>_1
	this.instance_9 = new lib.ClipGroup_1_3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1445.8,1375.5,0.28,0.28,0,0,0,1634.9,774.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({y:1253.9,alpha:1},5,cjs.Ease.get(1)).to({y:1263.5},11,cjs.Ease.get(1)).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(766.2,329.6,150.9,969.3);


(lib.元件5_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	this.instance = new lib.元件37();
	this.instance.parent = this;
	this.instance.setTransform(637,165,1,1,0,0,0,22.1,22.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:464.2,y:164.7,alpha:1},22,cjs.Ease.get(1)).to({_off:true},1).wait(138));
	this.instance_1 = new lib.元件38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(376.9,165.2,1,1,0,0,0,23.3,23.3);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:204.1,y:164.9,alpha:1},22,cjs.Ease.get(1)).to({_off:true},1).wait(138));
	this.instance_2 = new lib.元件39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(499.3,107.2,1,1,0,0,0,326.5,107.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:326.5,alpha:1},22,cjs.Ease.get(1)).wait(139));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(264,20.8,446,191.5);


(lib.元件23_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.instance = new lib.元件12_1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(1144.6,1021.7,1,1,0,0,0,188,48.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(113));
	this.instance_1 = new lib.元件7_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1140.1,601.2,1.113,1.113,0,0,0,375.1,56.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(118));
	this.instance_2 = new lib.元件26_1("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1262.4,106.1,1,1,0,0,0,180.8,48.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(126));
	this.instance_3 = new lib.元件5_1("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1130.1,803.3,1,1,0,0,0,326.5,107.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131));
	this.instance_4 = new lib.元件22_1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(951.4,707.8,1,1,0,0,0,951.4,707.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1051.4,706.9,451.2,241.4);


(lib.元件23_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.instance = new lib.元件12_2("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(1144.6,1021.7,1,1,0,0,0,188,48.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).wait(126));
	this.instance_1 = new lib.元件7_2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1140.1,601.2,1.113,1.113,0,0,0,375.1,56.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(130));

	this.instance_2 = new lib.元件26_2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(975.4,106.1,1,1,0,0,0,180.8,48.7);
	this.instance_2._off = true;
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).wait(138));

	this.instance_3 = new lib.元件5_2("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1130.1,803.3,1,1,0,0,0,326.5,107.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(143));

	this.instance_4 = new lib.元件22_2("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(951.4,707.8,1,1,0,0,0,951.4,707.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(131));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1067.6,716.9,446,191.6);


// stage content:
(lib.meituan342 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_42 = function() {
		this.stop();
		
		var that=this;
		$("body").bind("touchmove",function(){
			that.play();
			console.log(999);
			$("body").unbind("touchmove");
			});
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
		}
		
	}
	this.frame_95 = function() {
		this.stop();
		var that=this;
		$("body").bind("touchmove",function(){
			that.play();
			console.log(999);
			$("body").unbind("touchmove");
			});
		//this.button_4.removeEventListener("touchmove");
	}
	this.frame_142 = function() {
		this.stop();
		var that=this;
		$("body").bind("touchmove",function(){
			that.play();
			console.log(999);
			$("body").unbind("touchmove");
		});
	}
	this.frame_192 = function() {
		this.stop();
		//this.button_4.addEventListener("touchmove", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		var that=this;
		$("body").bind("touchmove",function(){
			that.stop();
			$("#animation_container").addClass("hide");
			$(".information").addClass("show");
			$("#ending").addClass("shaw");
			
			$(".inf-02").addClass("aa01");
			$(".inf-03").addClass("aa02");
			$(".inf-04").addClass("aa03");
			$(".inf-05").addClass("bb");
			$(".inf-06").addClass("aa03");
			$(".inf-text").addClass("text");
			var timer = null;
			timer = setTimeout(function(){
					$(".inf-05").addClass("join-click");
				clearTimeout(timer);
				timer=null;
				},2400);
			console.log(999);
			$("body").unbind("touchmove");
			});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(53).call(this.frame_95).wait(47).call(this.frame_142).wait(50).call(this.frame_192).wait(2));

	// 按钮
	this.button_4 = new lib.元件99();
	this.button_4.parent = this;
	this.button_4.setTransform(375,1167.2,1,1,0,0,0,25.4,16.7);
	this.button_4.alpha = 0;
	this.button_4._off = true;
	new cjs.ButtonHelper(this.button_4, 0, 1, 2, false, new lib.元件99(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_4).wait(25).to({_off:false},0).to({y:1143.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},11).wait(37).to({_off:false,y:1167.2,alpha:0},0).to({y:1143.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},9).wait(31).to({_off:false,y:1167.2,alpha:0},0).to({y:1143.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},9).wait(29).to({_off:false,y:1167.2,alpha:0},0).to({y:1143.2,alpha:1},7,cjs.Ease.get(1)).to({_off:true},14).wait(1));

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg6lBeOMAAAi8bMB1LAAAMAAAC8bg");
	mask.setTransform(375,603);

	// 图层 15
	this.instance = new lib.元件23("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(184.7,647.8,1,1,0,0,0,951.4,707.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147).to({_off:false},0).wait(47));

	// 图层 14
	this.instance_1 = new lib.元件23_1("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(184.9,647.7,1,1,0,0,0,951.4,707.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).wait(42).to({startPosition:102},0).to({y:106.9,alpha:0,startPosition:111},9,cjs.Ease.get(1)).to({_off:true},4).wait(39));

	// 图层 1
	this.instance_2 = new lib.元件23_2("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(184.7,647.2,1,1,0,0,0,951.4,707.8);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).wait(46).to({startPosition:86},0).to({y:0.8,alpha:0,startPosition:94},8,cjs.Ease.get(1)).to({_off:true},1).wait(90));

	// 图层 2
	this.instance_3 = new lib.元件66("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(408.7,603,1,1,0,0,0,408.7,603);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(43).to({startPosition:86},0).to({y:-189,alpha:0,startPosition:92},8,cjs.Ease.get(1)).to({_off:true},1).wait(142));

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E7EB").s().p("Eg6lBeOMAAAi8bMB1LAAAMAAAC8bg");
	this.shape.setTransform(375,603);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(194));

	// 图层 10
	this.instance_4 = new lib.BB();
	this.instance_4.parent = this;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(194));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,603,750,1206);
// library properties:
lib.properties = {
	width: 750,
	height: 1206,
	fps: 24,
	color: "#E1E7EB",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_35wegsew.png", id:"_35wegsew"},
		{src:"images/asfasfa.png", id:"asfasfa"},
		{src:"images/BB.jpg", id:"BB"},
		{src:"images/efzfafa.png", id:"efzfafa"},
		{src:"images/etsdgset.png", id:"etsdgset"},
		{src:"images/rsdgsdg.png", id:"rsdgsdg"},
		{src:"images/setsdgs.png", id:"setsdgs"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;