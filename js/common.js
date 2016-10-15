/**
 * Created by Arcance on 2016/6/10 0010.
 */

//解决浏览器兼容问题 innertext
//获dom对象的innerText的取值
function getInnerText(element) {
    //能力检测

    //判断当前浏览器是否支持innerText
    if(typeof element.innerText  === "string") {
        return element.innerText;
    }else{
        return element.textContent;
    }
}
//设置dom对象的innerText
function setInnerText(element, content) {
    if(typeof element.innerText === "string") {
        element.innerText = content;
    }else{
        element.textContent = content;
    }
}


function $id(id) {
    return document.getElementById(id);
}

//获取id标签
function my$(id){
    return document.getElementById(id);
}


//获取第一个子元素；   解决浏览器兼容性问题
function getFirstElementChid(element) {
    if(element.firstElementChild) {
        return element.firstElementChild
    } else {
        //获取第一个子节点
        var node = element.firstChild;
        //若是一个firstChild都没有，会输出null。
        while (node && node.nodeType !== 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

//获取下一个兄弟元素；    解决浏览器兼容性问题
function getNextElementSibling(element) {
    if(element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        //获取下一个兄弟节点
        var node = element.nextSibling;
        //若是没有下一个兄弟节点，输出null
        //满足有下一个兄弟节点，这个兄弟节点是元素节点
        while (node && node.nodeType !== 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

//获取上一个兄弟元素；    解决浏览器问题
function getPreviousElementSibling(element) {
    if(element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        //获取上一个兄弟节点
        var node = element.previousSibling;
        //满足有上一个兄弟节点，这个兄弟是元素节点
        while (node && node.nodeType !== 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

//获取最后一个子元素；      解决浏览器问题
function getLastElementChild(element) {
    if(element.lastElementChild) {
        return element.lastElementChild
    } else {
        //获取最后一个子节点
        var node = element.lastChild;
        //满足有最后一个节点，且这个节点是元素节点
        while (node && node.nodeType !== 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

function getDate(date){
    if( !(date instanceof Date)) {
        return;
    }
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    month = month>10?month:"0"+month;
    day = day>10?day:"0"+day;
    hour = hour>10?hour:"0"+hour;
    min = min>10?min:"0"+min;
    sec = sec>10?sec:"0"+sec;
    return year+"-"+month+"-"+day+" "+hour+":"+min+":"+sec;
}





var  EventTools = {
    addEventListener: function (element, eventName, handler) {
        if(element.addEventListener) {
            element.addEventListener(eventName, handler, false);
        }else if(element.attachEvent) {
            element.attachEvent("on" + eventName, handler);
        }else{
            element["on" + eventName] = handler;
        }
    },
    removeEventListener: function (element, eventName, handler) {
        if(element.removeEventListener) {
            element.removeEventListener(eventName, handler, false);
        }else if(element.detachEvent) {
            element.detachEvent("on" + eventName, handler);
        }else{
            element["on" + eventName] = null;
        }
    },
    getEvent: function(e){
        return e||window.event;
    },
    //让target兼容浏览器
    getTarget: function (e) {
        return e.target || e.srcElement;
    },
    //阻止事件冒泡，兼容浏览器
    stopPropagation: function (e) {
        if(e.stopPropagation) {
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
    },
    //取消后续内容的执行，兼容浏览器
    preventDefault: function (e) {
        if(e.preventDefault) {
            e.preventDefault();
        }else{
            e.returnValue = false;
        }
    },
    getPageX: function (e) {
        if(e.pageX) {
            return e.pageX
        }else{
            //鼠标在窗口的位置 + 页面滚动出去的距离
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            return e.clientX + scrollLeft;
        }
    },
    getPageY: function (e) {
        if(e.pageY) {
            return e.pageY
        }else{
            //鼠标在窗口的位置 + 页面滚动出去的距离
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            return e.clientY + scrollTop;
        }
    }
};

//动画
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

//获得滚出去的距离 兼容浏览器
function getScroll(){
    var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    var scrollLeft=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
    return {scrollTop:scrollTop,scrollLeft:scrollLeft};
}
