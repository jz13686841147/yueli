/**
 * Created by jackln on 2016/6/17.
 */

//给某个元素设置动画
function animation(element,target){
    //给当前点击的元素设置属性→定时器
    //清除当前定时器timeId
    if(element.timeId){
        clearInterval(element.timeId);
    }
    var step=10;
    element.timeId=setInterval(function(){
        current=element.offsetLeft;

        //判断当前值是否大于目标值如果大于则停止，清除定时器
        //当前位置 <  目标位置  + step
        //当前位置 > 目标位置   -step
        if(current>target){
            step=-Math.abs(step);
        }

        //如果目标值与最小值的距离大于step则继续移动
        if(Math.abs(current-target)>Math.abs(step)){
            current+=step;
            element.style.left=current+"px";
        }else{
            clearInterval( element.timeId);
            element.style.left=target+"px";
        }

    },5)
}

//动画的方式修改任意的样式属性的值
function animate(element, attrs,fn) {
    //清除定时器
    if(element.timerId) {
        clearInterval(element.timerId);
    }
    element.timerId = setInterval(function () {
        //假设定时器应该停止了
        var stop = true;
        //遍历attrs对象，获取所有属性
        for(var k in attrs) {
            //获取样式属性 对应的目标值
            var target = attrs[k];
            var current = 0;
            var step = 0;
            //判断是否是要修改透明度的属性
            if(k === "opacity") {
                current = parseFloat( getStyle(element, k)) * 100 || 0;
                target = target * 100;
                step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[k] = current / 100;
                //兼容ie
                element.style["filter"] = "alpha(opacity="+  current +")";
            }else if(k === "zIndex") {
                element.style[k] = target;
            } else {
                //获取任意样式属性的值，如果转换数字失败，返回为0
                current = parseInt(getStyle(element, k)) || 0;
                step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //设置任意样式属性的值
                element.style[k] = current + "px";
            }
            if(step !== 0) {
                //如果有一个属性的值没有到达target  ，设置为false
                stop = false;
            }
        }
        //如果所有属性值都到达target  停止定时器
        if(stop) {
            clearInterval(element.timerId);
        }
        //在动画结束后执行fn函数
        //判断是否传递函数
        if(fn){
            fn();
        }
    },30);
}






