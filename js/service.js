/*动画函数封装开始*/
/**
 * Created by jiaoshou on 2016/6/19.
 */
//动画的方式修改任意的样式属性的值

//获取计算后的样式的值
function getStyle(element, attr) {
    //能力检测
    if(window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    }else{
        return element.currentStyle[attr];
    }
}
/*动画函数封装结束*/

//图片放大
window.onload=function(){
    picZoom("videoPic");
    picZoom("picturesPic");
    picZoom("instructionPic");
    function picZoom(elementId){
        var bigPicWidth=$("#"+elementId).width();
        var bigPicHeight=$("#"+elementId).height();
        $("#"+elementId).mouseenter(function () {
            $(this).stop().animate({
                "width": bigPicWidth*1.2,
                "height": bigPicHeight*1.2,
                "marginLeft": -bigPicWidth / 10,
                "marginTop": -bigPicHeight / 10
            },1000);
        });
        $("#"+elementId).mouseleave(function () {
            $(this).stop().animate({
                "width": bigPicWidth,
                "height": bigPicHeight,
                "marginLeft": 0,
                "marginTop":0
            },500);
        })
    }
}
$(function () {
    $("#servicemore>div").mouseenter(function () {
        $(this).stop().animate({
            "height":540,
            "marginTop":-20
        },500)
    });
    $("#servicemore>div").mouseleave(function () {
        $(this).stop().animate({
            "height":505,
            "marginTop":0
        },500)
    })
})




/*微信推广*/
var wx = document.getElementById("wx");
wx.onmouseover=function(){
    var img = wx.children[0];
    img.style.display="block";
}
wx.onmouseout=function(){
    var img = wx.children[0];
    img.style.display="none";
}
/*微博推广*/
var wb = document.getElementById("wb");
wb.onmouseover=function(){
    var img = wb.children[0];
    img.style.display="block";
}
wb.onmouseout=function(){
    var img = wb.children[0];
    img.style.display="none";
}

/*鼠标放到li标签上，对应的s和div都得到显示，鼠标离开就隐藏*/
var s = document.getElementsByTagName("s");
for(var i=0;i< s.length;i++){
    var s1=s[i];
    s1.index="linkBody"+i;
    var isclick = true;
    s1.onclick= function () {
        getDiv(this.index);
    }
}
function getDiv(id){
    var link = document.getElementById(id);
    if(isclick){
        link.style.display="block";
        isclick=false;
    }else{
        link.style.display="none";
        isclick=true;
    }
}

//1.获取元素
var box = document.getElementById("box");
var xz = box.children[0];
var arr = box.children[1];
var ul = xz.children[0];
var ol = xz.children[1];
var arrLeft = arr.children[0];
var arrRight= arr.children[1];
var imgWidth = ul.children[0].offsetWidth;
//记录箭头的索引
var index = 0;
//记录序号点击对应的图片
var olIndex = 0;
//记录有多少张图片
var count = ul.children.length;
//1.动态生成ol中的序号
for(var i=0;i<ul.children.length;i++){
    var li = document.createElement("li");
    //将li追加到ol中
    ol.appendChild(li);
    li.innerText=i+1;
}
//让第一个li高亮显示
ol.children[0].className="current";
//2.点击序号，切换图片
for(var i=0;i<ol.children.length;i++){
    li = ol.children[i];
    //记录li对应的图片
    li.index=[i];
    li.onclick=function(){
        //控制li的高亮显示
        for(var i=0;i<ol.children.length;i++){
            li=ol.children[i];
            //移除类样式
            li.removeAttribute("class");
        }
        //控制当前的高亮显示
        this.className="current";
        //动画切换图片
        animation(ul,-this.index*imgWidth);
        //点击序号的时候，让索引同步
        index = olIndex = this.index;
    }
}
//鼠标放到box上面，左右键图标显示，离开后隐藏
box.onmouseover=function(){
    arr.style.display="block";
    //鼠标放上去的时候停止计时器
    clearInterval(timerId);
}
box.onmouseout=function(){
    arr.style.display="none";
    //鼠标离开的时候启用定时器
    timerId = setInterval(function () {
        //自动切换到下一个图片，就相当于是点击一下右键
        arrRight.click();
    },3000);
}
// 3.注册箭头的点击事件
//下一张
arrRight.onclick=function(){
    //当点击到最后一张的时候（克隆的哪一张），就将索引设置为0
    if(index ==count){
        index = 0;
        ul.style.left="0px";
    }
    index++;
    animation(ul,-index*imgWidth);
    //切换到下一个序号
    if(olIndex<count-1){
        olIndex++;
    }else{
        //如果是最后一张，让index=0，设置为第一项
        olIndex=0;
    }
    //清楚 ol中的所有的li高亮显示
    for(var i=0;i<ol.children.length;i++){
        li=ol.children[i];
        li.removeAttribute("class");
    }
    //让当前的li高亮显示
    ol.children[olIndex].className="current";
}
//上一张
//当点击到第一张的时候，就将索引设置为count，为克隆的那张图片的索引
arrLeft.onclick=function(){
    if(index == 0){
        index=count;
        ul.style.left=-index*imgWidth+"px";
    }
    index--;
    animation(ul,-index*imgWidth);
    //切换到上一张的序号
    if(olIndex>0){
        olIndex--;
    }else{
        // 如果是最后一张，就等于count-1,切换到最后一张
        olIndex=count-1;
    }
    //清楚所有的li高亮显示
    //清楚 ol中的所有的li高亮显示
    for(var i=0;i<ol.children.length;i++){
        li=ol.children[i];
        li.removeAttribute("class");
    }
    //让当前的li高亮显示
    ol.children[olIndex].className="current";
}
//4.无缝滚动
//将第一张图片克隆一张，放到最后一张，
var firstLi = ul.children[0];
var cloneLi = firstLi.cloneNode(true);
//将克隆的图片追加到ul的最后
ul.appendChild(cloneLi);
//当点击到最后一张的时候（克隆的哪一张），就将索引设置为0
//当点击到第一张的时候，就将索引设置为count，为克隆的那张图片的索引
//5.自动播放
//设置定时器
var timerId = setInterval(function () {
    //自动切换到下一个图片，就相当于是点击一下右键
    arrRight.click();
},3000);
//6.点击下一张，切换序号
//7.解决点击序号切换图片，之后再点击下一张，不同步的问题

//鼠标放到down.html的下载链接上会变色
var videoXC = document.getElementById("video-XC");
if(videoXC){
    videoXC.onmouseover=function(){
        this.children[0].style.background="lightgray";
    }
    videoXC.onmouseout=function(){
        this.children[0].style.background="#da194e";
    }
}
var videoXC1 = document.getElementById("video-XC1");
if(videoXC1){
    videoXC1.onmouseover=function(){
        this.children[0].style.background="lightgray";
    }
    videoXC1.onmouseout=function(){
        this.children[0].style.background="#da194e";
    }

}
var videoXC2 = document.getElementById("video-XC2");
if(videoXC2){
    videoXC2.onmouseover=function(){
        this.children[0].style.background="lightgray";
    }
    videoXC2.onmouseout=function(){
        this.children[0].style.background="#da194e";
    }
}


