
$(function () {
    $(".intro").slideDown(1000);
    $(".intro").fadeIn(3000);
    $(".cont_list").slideDown(3000);
    $(".cont_list").fadeIn(5000);
    $(".feedback").slideDown(10000);
});


<!--轮播图 B-->
//准备工作  获取对象
var zhaop = document.getElementById("zhaop");
var screen = zhaop.children[0];
var prev = zhaop.children[1];
var next=zhaop.children[2]
//
var ul = screen.children[0];
//图片的宽度
var imgWidth = screen.offsetWidth;
//点击箭头的时候记录索引  -- 图片的索引
var index = 0;

//记录有多少张图片---真实图片的个数
var count = ul.children.length;
//3 点击箭头切换图片
//3.1 显示箭头
zhaop.onmouseover = function () {
    prev.style.display = "block";
    next.style.display = "block";
    //5.2 鼠标放到box上，停止自动播放的定时器
    clearInterval(timerId);
};

zhaop.onmouseout = function () {
    prev.style.display = "none";
    next.style.display = "none";
    //5.3 鼠标离开box  开启定时器，继续自动播放
    timerId = setInterval(function () {
        next.click();
    }, 4000);
};
//下一张
next.onclick = function () {
    //如果当前是最后一张图片(克隆的第一张图片), 让index = 0 并且偷偷设置ul切换到第一张图片
    if(index === count) {
        index = 0;
        ul.style.left = "0px";
    }
    index++;
    animation(ul, -index * imgWidth);
};
//上一张
prev.onclick = function () {
    //如果是第一张图片的话，让index=克隆的图片的索引，偷偷的切换到最后一张
    if(index === 0) {
        index = count;
        ul.style.left = -index * imgWidth + "px";
    }
    index--;
    animation(ul, -index * imgWidth);
};


//4 无缝滚动  -- 修改上一张和下一张的代码
//4.1 把第一张图片对应的li克隆，追加到ul的最后
var firstLi = ul.children[0];
var cloneLi = firstLi.cloneNode(true);
//追加到ul的最后
ul.appendChild(cloneLi);

//5 自动播放
//5.1 开启定时器
var timerId = setInterval(function () {
    //切换下一张图片
    //相当于 手动点击了一下按钮
    next.click();
},4000);

<!--轮播图 E-->