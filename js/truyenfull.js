$(document).ready(function(){
    $("#truyen-background").change(function(){
       var color = $(this).val();
       $('#body_chapter').css("background",color);
       //setcookie("truyen-background", color);
       $.cookie("truyen-background", color);

    });
    $("#font-chu").change(function(){
       var fontchu = $(this).val();
       $('.chapter-c').css("font-family",fontchu);
       //setcookie("truyen-background", color);
       $.cookie("font-chu", fontchu);

    });
    $("#size-chu").change(function(){
       var sizechu = $(this).val();
       $('.chapter-c').css("font-size",sizechu);
       //setcookie("truyen-background", color);
       $.cookie("size-chu", sizechu);

    });
    $("#line-height").change(function(){
       var lineheight = $(this).val();
       $('.chapter-c').css("line-height",lineheight);
       //setcookie("truyen-background", color);
       $.cookie("line-height", lineheight);

    });
    $('.toggle-nav-open').click(function(){
       $('#nav').slideToggle(500);
       $('.chapter').css('margin-top','10px');
    });
});