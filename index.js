$(".hide").click(function (e) { 
    e.preventDefault();
    if($(".header-item").css("display")==="none"){
    $(".header-item").css("display","flex")
    }
    else{
    $(".header-item").css("display","none")
    }
});