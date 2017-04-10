var isInited = false; //初始化状态 
var shareConfig = {
	channel: 385,
		content: '4月健康餐——X008食谱，坐享轻松之路',
		href: '',
		imageURL: 'https://h5.xingyuanauto.com/Dongbiao/DbMeit/img/xiaotu.png',
		title: '东风标致X008 SUV三重钜惠豪华盛宴',
		success: null
}; //配置参数
function ready(callback) { 
  function init (bridge) { 
    if (isInited) return; 
    try { 
      bridge.init(); 
      isInited = true; 
    } catch (e) { 
      console.log('init failed'); 
    } 
  } 
  // 如果有WebViewJavascriptBridge 这个全局变量， 
  // 则直接初始化它 
  if (window.WebViewJavascriptBridge) { 
    init(WebViewJavascriptBridge); 
    callback(WebViewJavascriptBridge); 
    return; 
  } 
  
  // 否则添加监听事件再初始化 
  document.addEventListener('WebViewJavascriptBridgeReady', function () { 
    init(WebViewJavascriptBridge); 
    callback(WebViewJavascriptBridge); 
  }, false); 
} 
//设置分享 
function setShare(shareConfig){ 
  ready(function (bridge) { 
    bridge.callHandler('callNativeMethod', { 
      "moduleName": "platform", 
      "methodName": "shareCommon", 
      "data": { 
        "channel": shareConfig.channel,//频道十进制值相加 
        "content": shareConfig.content,//分享内容 兼容android 该字段必须有内容 
        "content_-1": shareConfig.content, 
        "content_1": true, 
        "detailURL": shareConfig.href,//分享的详情链接 
        "imageURL": shareConfig.imageURL,//分享的缩略图链接 
        "title": shareConfig.title//分享的标题 
      } 
    }, function (res) { 
      shareConfig.success && shareConfig.success(res); 
    }); 
  }); 
   
setShare(shareConfig);//调用设置分享的方法 
