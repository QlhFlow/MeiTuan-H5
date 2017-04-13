
(function ($){
	var url = "https://fld.xingyuanauto.com/public/index.php/port/Aes/wx_token";
	$.post(url,function(msg){
		if(msg.start == 0){ 
          return alert(msg.message);
        }
			var title ='四月健康餐 看完诱惑满满'; // 分享标题
            var link ='https://h5.xingyuanauto.com/Dongbiao/DbMeit/index.html';
            var desc = '东风标致X008 SUV三重钜惠豪华盛宴'; // 分享描述
            var imgUrl = 'https://h5.xingyuanauto.com/Dongbiao/DbMeit/img/xiaotu.jpg';
		
		    var wx_appId = msg.appId; 
			var wx_timestamp = msg.timestamp;
			var wx_nonceStr = msg.nonceStr;
			var wx_signature = msg.signature;
            wx.config({
                debug: false,
                appId: wx_appId,
                timestamp: wx_timestamp,
                nonceStr: wx_nonceStr,
                signature: wx_signature,
                jsApiList: [
                    // 所有要调用的 API 都要加到这个列表中
                    'onMenuShareTimeline',//分享到朋友圈
                    'onMenuShareAppMessage',//分享给朋友
                    'onMenuShareQQ',//分享到QQ
					'onMenuShareQZone',//分享到QQ空间
                    'onMenuShareWeibo'//分享到腾讯微博
                ]
            }); 
		   wx.ready(function () {

                wx.onMenuShareTimeline({
                    title:title, // 分享标题
                    link: link, // 分享链接
                    desc: desc, // 分享描述
                    imgUrl:imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
				
				wx.onMenuShareAppMessage({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
				
				wx.onMenuShareQQ({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
				
				wx.onMenuShareQZone({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: imgUrl, // 分享图标
					success: function () { 
					   // 用户确认分享后执行的回调函数
					},
					cancel: function () { 
						// 用户取消分享后执行的回调函数
					}
				});
				
                wx.onMenuShareWeibo({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

            });
			
	},'json')
       

})(jQuery);