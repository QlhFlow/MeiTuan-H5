//动画开始播放音乐
//  musicStar.load();
//  musicStar.src="video/Echo.mp3";
//  musicStar.play();
    $(".open").click(function(){
//      musicStar.pause();
        $(this).css("display","none");
        $(".clock").css("display","block");
        $('.btn-music').removeClass('open-music');
    });
    $(".clock").click(function(){
//      musicStar.play();
        $(this).css("display","none");
        $(".open").css("display","block");
        $('.btn-music').addClass('open-music');
    });