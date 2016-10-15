/**
 * Created by Administrator on 2016/6/20.
 */
//获取对象
function $id(id) {
    return document.getElementById(id);
}
//首页轮播
var screen = $id("banner-screen")
var ul = screen.children[0];
var circle = screen.children[1];
var left = screen.children[2];
var right = screen.children[3];
//图片的宽
var imgwidth = ul.children[0].offsetWidth;
//图片的真实数量
var imgcount = ul.children.length;

//点击li改变颜色
for (var i = 0; i < imgcount; i++) {
    var li = circle.children[i];
    //记录当前的索引
    li.index = i;
    //先取消所有颜色
    li.onclick = function () {
        if (index == imgcount) {
            ul.style.left = 0;
        }
        for (var i = 0; i < imgcount; i++) {
            li = circle.children[i];
            li.removeAttribute("class")
        }
        this.className = "current";

        //改变图片位置
        animate(ul, {"left": -this.index * imgwidth});
        //同步所有索引
        index = olindex = this.index;
    }
}
;
//方向键的显示隐藏
screen.onmouseover = function () {
    left.style.display = "block";
    right.style.display = "block";
    clearInterval(auto);
}
screen.onmouseout = function () {
    left.style.display = "none";
    right.style.display = "none";
    auto = setInterval(function () {
        right.click();
    }, 5000)
}
//记录点击序号的引索
var olindex = 0;
//下一张
//记录图片的引索
var index = 0;
right.onclick = function () {
    if (index == imgcount) {
        //如果是最后一张,替换为第一张,index=0;
        index = 0;
        ul.style.left = 0;
    }
    index++;
    animate(ul, {"left": -index * imgwidth});
    //遍历所有序号,清除高亮,当前序号点亮
    for (var i = 0; i < imgcount; i++) {
        var li = circle.children[i];
        li.removeAttribute("class");
    }
    if (olindex == imgcount - 1) {
        olindex = 0;
    }
    else {
        olindex++;
    }
    circle.children[olindex].setAttribute("class", "current");
}
//上一张
left.onclick = function () {
    if (index == 0) {
        //如果是第一张,替换为最后一张,index=count
        index = imgcount;
        ul.style.left = -index * imgwidth + "px";
    }
    index--;
    animate(ul, {"left": -index * imgwidth});
    //遍历所有序号,清除高亮,当前序号点亮
    for (var i = 0; i < imgcount; i++) {
        var li = circle.children[i];
        li.removeAttribute("class")
    }
    if (olindex == 0) {
        olindex = imgcount - 1;
    }
    else {
        olindex--;
    }
    circle.children[olindex].setAttribute("class", "current");
}
//无缝滚动
//克隆第一张至ul最后
var cloneli = ul.children[0].cloneNode(true);
ul.appendChild(cloneli);
//自动
var auto = setInterval(function () {
    right.click();
}, 5000)






//声明标题//product


var goin=$id("goin")
var unit=$id("unit")
var approve=$id("approve-text")
var statement = $id("statement-w")
var statementTitle = $id("statement-title");



var company=$id("company");
var honor=$id("honor");
var technology=$id("technology");

var newsTitle=$id("newsTitle")

var newsAll=$id("newsAll")
var newone=newsAll.children[0];
var newtwo =newsAll.children[1];
var newthree=newsAll.children[2];
newone.style.position="absolute";
newthree.style.position="absolute";
newtwo.style.position="absolute";
newone.style.top="250px";
newtwo.style.top="250px";
newthree.style.top="250px";
newthree.style.right="0";
newtwo.style.right="50%";
newtwo.style.marginRight="-185px";
newone.style.opacity=0;
newtwo.style.opacity=0;
newthree.style.opacity=0;



company.style.position="absolute";
technology.style.position="absolute";
honor.style.position="absolute";
company.style.left="-150px";
technology.style.right="-150px";
honor.style.right="50%";
honor.style.marginRight="-185px";
company.style.opacity=0;
honor.style.opacity=0;
technology.style.opacity=0;
window.onscroll = function () {
    if (getScroll().scrollTop >=400) {
        animate(statement, {"opacity": 1, "bottom": 0})
    }
    if (getScroll().scrollTop >= statement.offsetTop) {
        animate(statementTitle, {"opacity": 1, "top": 50});
    }
    if(getScroll().scrollTop >=unit.offsetTop){
        animate(approve,{"opacity":1,"top":100})
    }
    if(getScroll().scrollTop >=approve.parentNode.offsetTop){
        animate(company,{"opacity":1,"left":0})
        animate(honor,{"opacity":1})
        animate(technology,{"opacity":1,"right":0})
        animate(goin,{"opacity":1,"top":100})
    }
    if(getScroll().scrollTop >=goin.parentNode.offsetTop){
        animate(newsTitle,{"top":0,"opacity":1})

    }
    if(getScroll().scrollTop >=goin.parentNode.offsetTop+400){
        animate(newone,{"top":0,"opacity":1})
        setTimeout(function(){
            animate(newtwo,{"top":0,"opacity":1})
        },300)
        setTimeout(function(){
            animate(newthree,{"top":0,"opacity":1})
        },600)

    }
}
//learn more颜色
changeColor(company.children[0].children[3].children[0]);
backColor(company.children[0].children[3].children[0]);
changeColor(honor.children[0].children[3].children[0]);
backColor(honor.children[0].children[3].children[0]);
changeColor(technology.children[0].children[3].children[0]);
backColor(technology.children[0].children[3].children[0]);

function changeColor(element){
    element.onmouseover=function(){
        this.style.backgroundColor="#d82954"
        this.style.color="white"
    };
}
function backColor(element){
    element.onmouseout =function(){
        this.style.backgroundColor="white"
        this.style.color="#666"
    }
}


function getScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    return {
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
    };
}


$(function () {
    $(".product-set").mouseenter(function () {
        $(this).children().eq(1).slideUp(200)
        $(this).children().eq(2).slideDown(200)
    });
    $(".product-set").mouseleave(function () {
        $(this).children().eq(1).slideDown(200)
        $(this).children().eq(2).slideUp(200)
    });
   //合作伙伴
    $("#partner li").mouseenter(function () {
        $(this).css("opacity",0.8);
    });
    $("#partner li").mouseleave(function () {
        $(this).css("opacity",0.3);
    });
})
window.onload= function () {
    //周刊图片
    ChangeImg("weekly1");
    ChangeImg("weekly2");
    ChangeImg("weekly3");
    function ChangeImg(elementId){
        var cwidth=$("#"+elementId).width();
        var cheight=$("#"+elementId).height();
        $("#"+elementId).mouseenter(function () {
            $(this).stop().animate({
                "width": cwidth*1.2,
                "height": cheight*1.2,
                "marginLeft": -cwidth / 10,
                "marginTop": -cheight / 10
            },1000);
        });;
        $("#"+elementId).mouseleave(function () {
            $(this).stop().animate({
                "width": cwidth,
                "height": cheight,
                "marginLeft": 0,
                "marginTop": 0
            },500);
        });
    }
}

//动画的方式修改任意的样式属性的值
function animate(element, attrs) {
    //清除定时器
    if (element.timerId) {
        clearInterval(element.timerId);
    }
    element.timerId = setInterval(function () {
        //假设所有属性都到达目标值
        var stop = true
        //遍历属性
        for (var k in attrs) {
            var target = attrs[k];
            var current = 0;
            var step = 0;
            if (k == "opacity") {
                current = parseFloat(getStyle(element, k)) * 100|| 0;
                target = target * 100;
                step = (target - current) / 300;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[k] = current / 100;
                //兼容ie
                element.style["filter"] = "alpha(opacity=" + current + ")";
            }
            else if (k === "zIndex") {
                element.style[k] = target;
            }
            else {
                current = parseInt(getStyle(element, k)) || 0;

                step = (target - current) / 10;

                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[k] = current + "px";
            }

            if (step !== 0) {
                //有1个属性未到达目标值
                stop = false;
            }
        }
        if (stop) {
            clearInterval(element.timerId);
        }
    }, 30);


}


//获取计算后的样式的值
function getStyle(element, attr) {
    //能力检测
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }
}