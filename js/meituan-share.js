var isInited = false; //初始化状态
var shareConfig = {
    channel: '385',
    content: '东风标致X008 SUV三重钜惠豪华盛宴',
    href: 'https://h5.xingyuanauto.com/Dongbiao/DbMeit/index.html',
    imageURL: 'https://h5.xingyuanauto.com/Dongbiao/DbMeit/img/xiaotu.jpg',
    title: '四月健康餐 看完诱惑满满',
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
    if (window.WebViewJavascriptBridge) {
        init(WebViewJavascriptBridge);
        callback(WebViewJavascriptBridge);
        return;
    }
    document.addEventListener('WebViewJavascriptBridgeReady', function () {
        init(WebViewJavascriptBridge);
        callback(WebViewJavascriptBridge);
    }, false);
}
function setShare(shareConfig) {
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
}
setShare(shareConfig);//调用设置分享的方法



//美团分享
 KNB.configShare({ 
    title:"四月健康餐 看完诱惑满满", 
    desc:"东风标致X008 SUV三重钜惠豪华盛", 
    image:"https://h5.xingyuanauto.com/Dongbiao/DbMeit/img/xiaotu.jpg", 
    url:"https://h5.xingyuanauto.com/Dongbiao/DbMeit/index.html", 
    channel: [KNB.share.WECHAT_FRIENDS,KNB.share.WECHAT_TIMELINE], 
    handle: function(){ 
//    alert('分享按钮被点击了'); 
    }, 
    success: function(channel){ 
//    alert('分享成功'); 
    } 
  }); 
   
/* 
兼容性说明 
    点评App从8.0.6版本开始支持直接分享 
    点评App从8.1.2版本开始支持分享回调中返回渠道信息 
    美团从7.0版本开始正式支持基本分享配置 
        不支持直接分享 
        朋友圈文案直接读取title字段 
        分享回调中不包含渠道信息 
  
  
    建议分享图片尺寸 100X100~120X120, 大小不超过32K 
  
    为保证分享成功回调的执行，建议用户分享完成后返回当前app 
  
    分享渠道说明 (KNB.share.CHANNEL), CHANNEL 有以下选项 
        WECHAT_FRIENDS(微信好友), 
        WECHAT_TIMELINE（微信朋友圈）, 
        QQ（手机QQ）, 
        SMS（短信）, 
        WEIBO（新浪微博）, 
        QZONE, 
        EMAIL, 
        COPY 
    mt >= 7.0 
*/ 


KNB.share({ 
  title:"四月健康餐 看完诱惑满满", //标题 
  desc:"东风标致X008 SUV三重钜惠豪华盛",  // 分享描述 
  image:"https://h5.xingyuanauto.com/Dongbiao/DbMeit/img/xiaotu.jpg", //分享图标 
  url:"https://h5.xingyuanauto.com/Dongbiao/DbMeit/index.html", //分享链接 
  channel: [KNB.share.WECHAT_FRIENDS,KNB.share.WECHAT_TIMELINE], //分享渠道,当分享渠道只有一个时，触发直接分享 美团下暂不支持 
  success: function(channel){ 
//  alert('分享成功'); 
  } 
}); 
   
/* 
    mt >= 7.0 
    外卖和酒旅容器下无法调起handle，酒旅容器下无法调起分享成功回调 
    支持微信，根据传入channel设定分享到渠道的内容信息。如果为空，则作用到所有默认渠道 
*/
