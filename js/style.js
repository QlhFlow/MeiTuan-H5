//动画开始播放音乐
    musicStar.load();
    musicStar.src="video/lll.mp3";
    musicStar.play();
    $(".open").click(function(){
        musicStar.pause();
        $(this).css("display","none");
        $(".clock").css("display","block");
        $('.btn-music').removeClass('open-music');
    });
    $(".clock").click(function(){
        musicStar.play();
        $(this).css("display","none");
        $(".open").css("display","block");
        $('.btn-music').addClass('open-music');
    });
    $('.inf-05').click(function(){
    	$('#information').css("top","-100%");
    	$("#ending").addClass('shew');
    	$("#animation_container").css("opacity","0");
    });
    $('#rule-icon').click(function(){
                    $('#actionRules').show();
                    $('#userInfo').hide();
                });
    $('#actionRules').unbind('click').bind('click',function(){
                    $('#actionRules').hide();
                    $("#userInfo").show();
                });
$(function(){
	var imgFile = [
    './img/loading.gif',
    './img/onetwothree.png',
    './img/musicclose.png',
    './img/musicopen.png',
    './images/_35wegsew.png',
    './images/asfasfa.png',
    './images/BB.jpg',
    './img/three.png',
    './images/efzfafa.png',
    './images/etsdgset.png',
    './images/setsdgs.png',
    './img/gogogo.jpg',
    './img/join.png',
    './img/write01.png',
    './img/write02.png',
    './img/write03.png',
    './images/stwetetw.png'
];
ImgLoadingByFile(imgFile);//canvas是动画页的DIV
});


var ending = document.getElementById("ending");
var information = document.getElementById("information");

ending.addEventListener('touchmove',function(e){
    	e.preventDefault();
        $("#ending").removeClass('shew');
        $("#information").css("top","0");
        $("#animation_container").css("opacity","0");     
 });
