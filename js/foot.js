/**
 * Created by Administrator on 2016/6/30.
 */

//head
    //二级菜单
    //鼠标移入
onload= function () {
    $(".container>ul>li").mouseenter(function () {
        $(this).children(".minWrap").stop().slideDown();
        //$(this).children(".minWrap").animate({"height":"230px","opacity":"1"});
        $(this).children("a").addClass("current");
    });

    $(".container>ul>li").mouseleave(function () {
        $(this).children(".minWrap").stop().slideUp();
        $(this).children("a").removeClass("current");
    });


}


//foot
//foot

var small=document.getElementById("small");
var wbbig =document.getElementById("wx_wb_big");
var big1=document.getElementById("big1");
var big2=document.getElementById("big2");

small.onmouseover=function(){

    wbbig.style.display="block";
    animate(wbbig,{"bottom":"170","right":"110"});
    animate(big1,{"width":100,"height":100});
    animate(big2,{"width":100,"height":100});
    this.style.zIndex=1;
}

small.onmouseout=function(){
    wbbig.style.display="none";
    animate(wbbig,{"bottom":"-20","right":"200"});
    animate(big1,{"width":0,"height":0});
    animate(big2,{"width":0,"height":0});
}
$(document).ready(function () {
    $(".pro_centent_1").hover(function () {
        $(this).find(".h-1").css("display", "block")
        $(this).find("a").stop(true, true).animate({"opacity": 1}, 800)
    }, function () {
        $(this).find(".h-1").css("display", "none")
        $(this).find("a").stop(true, true).animate({"opacity": 0}, 800)
    })
})

