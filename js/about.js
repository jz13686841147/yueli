/**
 * Created by jackln on 2016/6/18.
 */
onload=function() {

    //放大隐藏二维码
    $(".top ul .weixin").mouseenter(function () {
        $(this).children(".bigWeixin").animate()
    });
    $(".top ul .weixin").mouseleave(function () {
        $(this).children(".bigWeixin").animate()
    });

    //二级菜单
    //鼠标移入
    $(".container>ul>li").mouseenter(function () {
        $(this).children(".minWrap").stop().slideDown();
        //$(this).children(".minWrap").animate({"height":"230px","opacity":"1"});
        $(this).children("a").addClass("current");
    });

    $(".container>ul>li").mouseleave(function () {
        $(this).children(".minWrap").stop().slideUp();
        $(this).children("a").removeClass("current");
    });

    //内容加载时移动
    $(".about-fi .inside-top .inside-top-title").animate({"left":"0px","opacity":"1"},1000);
    $(".about-fi .inside-top .inside-top-img").animate({"right":"0px","opacity":"1"},1000);
    $(".about-fi .intro").animate({"top":"0px","opacity":"1"},1000);


    //滚轮事件
    window.onscroll= function () {
        if(getScroll().scrollTop>1600){
            //移动企业文化
            $(".about-si .list-cul").animate({"top":"0px","opacity":"1"},1000);
            //移动理念
            $(".about-si .tab-btn a:eq(0)").animate({"top":"0px","opacity":"1"},500, function () {
                $(".about-si .tab-btn a:eq(1)").animate({"top":"0px","opacity":"1"},400, function () {
                    $(".about-si .tab-btn a:eq(2)").animate({"top":"0px","opacity":"1"},300);
                });
            });
        }
        if(getScroll().scrollTop>2200){
            //移动强项
            $(".about-strong-bottom").animate({"left":"0px","opacity":"1"},1000);
        }

        if(getScroll().scrollTop>2600){
            //移动荣誉
            $(".about-honor .honor-p").animate({"top":"0px","opacity":"1"},1000);
        }
    }



    //隐藏二维码
    $("#erweima").children("span").click(function () {
        $("#erweima").children("#weixin").animate({"height":"0"},500, function () {
            $("#erweima").animate({"width":0},500);
        })
    })



    //轮播图 1
    var ab_box = my$("ab_box");
    var ab_warp = ab_box.children[0];
    var ab_arrow = ab_box.children[1];
    var inrto_ul = ab_warp.children[0];
    var ab_prev = ab_arrow.children[0];
    var ab_next = ab_arrow.children[1];

    //每个li的宽度
    var ab_imgWidth = inrto_ul.children[0].offsetWidth+5;
    var ab_index = 0;
    var ab_count = inrto_ul.children.length;

    //点击上一张
    ab_prev.onclick = function () {
        if (ab_index == 0) {
            ab_index = ab_count ;
            inrto_ul.style.marginLeft = -ab_index * ab_imgWidth + "px";
        }
        ab_index--;
        animate(inrto_ul, {"marginLeft": -ab_index * ab_imgWidth});
    }
    //点击下一张
    ab_next.onclick = function () {
        if (ab_index == ab_count) {
            ab_index = 0;
            inrto_ul.style.marginLeft = "0px";
        }
        ab_index++;
        console.log(ab_index);
        animate(inrto_ul, {"marginLeft": -ab_index * ab_imgWidth});
    }
    //克隆前三张图片追加到ul后面
    for (var i = 0; i < ab_count-2; i++) {
        var cloneli = inrto_ul.children[i].cloneNode(true);
        inrto_ul.appendChild(cloneli);
    }


    //轮播图2
    var strong_box=my$("strong-box");
    var st_warp=strong_box.children[0];
    var st_arrow=strong_box.children[1];
    var st_ul=st_warp.children[0];
    var st_prev = st_arrow.children[0];
    var st_next = st_arrow.children[1];
    //每个li的宽度
    var st_imgWidth = st_ul.children[0].offsetWidth+20;
    var st_index = 0;
    var st_count = st_ul.children.length;

    //点击上一张
    st_prev.onclick = function () {
        if (st_index == 0) {
            st_index = st_count ;
            st_ul.style.marginLeft = -st_index * st_imgWidth + "px";
        }
        st_index--;
        animate(st_ul, {"marginLeft": -st_index * st_imgWidth});
    }
    //点击下一张
    st_next.onclick = function () {
        if (st_index == st_count) {
            st_index = 0 ;
            st_ul.style.marginLeft = -st_index * st_imgWidth + "px";
        }
        st_index++;
        animate(st_ul, {"marginLeft": -st_index * st_imgWidth});
    }

    //克隆前三张图片追加到ul后面
    for (var i = 0; i < st_count-1; i++) {
        var cloneli = st_ul.children[i].cloneNode(true);
        st_ul.appendChild(cloneli);
    }


    //图片滚动
    var scrollbox=my$("scrollbox");
    var scroll = my$("scroll");
    var bar = scroll.children[0];
    var barWidth = bar.offsetWidth;
    var slide=my$("slide");
    var scro_ul=slide.children[0];
    var datas = [
        {   //  1
            width:100,
            top:70,
            left:200,
            opacity:0.2,
            zIndex:2
        },
        {   // 2
            width:120,
            top:90,
            left:80,
            opacity:0.3,
            zIndex:3
        },
        {   // 3
            width:140,
            top:100,
            left:40,
            opacity:0.4,
            zIndex:4
        },
        {  // 4
            width:200,
            top:120,
            left:100,
            opacity:0.8,
            zIndex:3
        },
        {   // 5
            width:250,
            top:100,
            left:200,
            opacity:1,
            zIndex:4
        },
        {  // 6
            width:200,
            top:110,
            left:300,
            opacity:0.8,
            zIndex:5
        },
        {  // 5
            width:240,
            top:120,
            left:400,
            opacity:1,
            zIndex:6
        },
        {  // 6
            width:240,
            top:120,
            left:500,
            opacity:1,
            zIndex:6
        },
        {   // 8
            width:140,
            top:100,
            left:700,
            opacity:0.4,
            zIndex:4
        },
        {   //  9
            width:120,
            top:90,
            left:750,
            opacity:0.3,
            zIndex:3
        },
        {   //10
            width:100,
            top:70,
            left:800,
            opacity:0.2,
            zIndex:2
        }
    ];
    move();
    function move(){
        for (var i = 0; i < scro_ul.children.length; i++) {
            var li = scro_ul.children[i];
            animate(li,datas[i]);
        }
    }

    bar.onmousedown = function (e) {
        //spaceX 代表两段距离
        var sapceX = e.pageX - bar.offsetLeft;
        scrollbox.onmousemove = function (e) {
            //bar的位置
            var x = e.pageX - sapceX;
            //控制bar不越界
            x=x<0?0:x;
            x=x>scroll.offsetWidth-barWidth?scroll.offsetWidth-barWidth:x;
            bar.style.left=x+"px";
            //将数组中的第一个元素删除插入到数组最后
            var first=datas.shift();
            datas.push(first);
            move();
            console.log(datas);
        }
    }
    document.onmouseup=function(){
        scrollbox.onmousemove=null;
    }
    $(".container>ul>li").mouseenter(function () {
        $(this).children(".minWrap").stop().slideDown();
        //$(this).children(".minWrap").animate({"height":"230px","opacity":"1"});
        $(this).children("a").addClass("current");
    });

    $(".container>ul>li").mouseleave(function () {
        $(this).children(".minWrap").stop().slideUp();
        $(this).children("a").removeClass("current");
    });

//内容加载时移动
    $(".about-fi .inside-top .inside-top-title").animate({"left":"0px","opacity":"1"},1000);
    $(".about-fi .inside-top .inside-top-img").animate({"right":"0px","opacity":"1"},1000);
    $(".about-fi .intro").animate({"top":"0px","opacity":"1"},1000);

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
