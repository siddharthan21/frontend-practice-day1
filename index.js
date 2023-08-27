$(".hide").click(function (e) { 
    e.preventDefault();
    if($(".header-item").css("display")==="none"){
        $(".ab").css("animation-name","slo")
    $(".header-item").css("display","flex")
    }
    else{
        $(".ab").css("animation-name","hidee")
        setTimeout(function(){
            $(".header-item").css("display","none")
        $(".ab").css("animation-name","none")
        },700);
    }
});