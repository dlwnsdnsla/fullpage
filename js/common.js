$(function(){


      //헤더 scroll
$(window).scroll(function(){  
    var num = $(this).scrollTop();  
    if( num > 10 ){  
        $('#header').addClass('on')
    }
    else{
        $("#header").removeClass('on')
    }

});




$(window).scroll( function(){
    $('#content>.cont').each( function(i){
        
        var bottom_of_element = $(this).offset().top + $(this).outerHeight()/5;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1','margin-top':'0px'},700);
        }
        
    }); 
});










$(".bar").on("click",function(){
    $(".close").css("display","block");
    });



$(".bar").on("click",function(){
 $(".m_menu").stop().animate({right:"0"},200);
 $(".black_back").css("display","block");
});
$(".close").on("click",function(){
 $(".m_menu").stop().animate({right:"-334px"},200);
 $(".black_back").css("display","none")
 $(".close").css("display","none")
});    

$(".m_depth1>li").on("click",function(){
    $(this).find(".m_depth2").stop().slideToggle();
   }); 


// $(".depth1").on("mouseover focus",function(){
//     $(".box_bg").css("display","block");
//    });
//    $(".depth1").on("mouseleave blur",function(){
//     $(".box_bg").css("display","none");
//    });  






$('.depth1').on('mouseover focus', function(){
    $(".box_bg").css("display","block");
    $(".box_bg").stop().animate({height:"200px"},100);
    $(".depth2").stop().animate({top:"0px"},100);
    $("#header").css("border-bottom","1px solid rgb(189, 189, 189, 0.3)");
})
$('.depth1').on('mouseleave blur', function(){
    $(".box_bg").css("display","none");
    $(".box_bg").stop().animate({height:"0"},100);
    $(".depth2").stop().animate({top:"-50px"},100);
    $("#header").css("border-bottom","0px solid rgb(189, 189, 189, 0.3)");
})







})




