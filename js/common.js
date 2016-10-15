/**
 * Created by Arcance on 2016/6/10 0010.
 */

//���������������� innertext
//��dom�����innerText��ȡֵ
function getInnerText(element) {
    //�������

    //�жϵ�ǰ������Ƿ�֧��innerText
    if(typeof element.innerText  === "string") {
        return element.innerText;
    }else{
        return element.textContent;
    }
}
//����dom�����innerText
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

//��ȡid��ǩ
function my$(id){
    return document.getElementById(id);
}


//��ȡ��һ����Ԫ�أ�   ������������������
function getFirstElementChid(element) {
    if(element.firstElementChild) {
        return element.firstElementChild
    } else {
        //��ȡ��һ���ӽڵ�
        var node = element.firstChild;
        //����һ��firstChild��û�У������null��
        while (node && node.nodeType !== 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

//��ȡ��һ���ֵ�Ԫ�أ�    ������������������
function getNextElementSibling(element) {
    if(element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        //��ȡ��һ���ֵܽڵ�
        var node = element.nextSibling;
        //����û����һ���ֵܽڵ㣬���null
        //��������һ���ֵܽڵ㣬����ֵܽڵ���Ԫ�ؽڵ�
        while (node && node.nodeType !== 1) {
            node = node.nextSibling;
        }
        return node;
    }
}

//��ȡ��һ���ֵ�Ԫ�أ�    ������������
function getPreviousElementSibling(element) {
    if(element.previousElementSibling) {
        return element.previousElementSibling;
    } else {
        //��ȡ��һ���ֵܽڵ�
        var node = element.previousSibling;
        //��������һ���ֵܽڵ㣬����ֵ���Ԫ�ؽڵ�
        while (node && node.nodeType !== 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

//��ȡ���һ����Ԫ�أ�      ������������
function getLastElementChild(element) {
    if(element.lastElementChild) {
        return element.lastElementChild
    } else {
        //��ȡ���һ���ӽڵ�
        var node = element.lastChild;
        //���������һ���ڵ㣬������ڵ���Ԫ�ؽڵ�
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
    //��target���������
    getTarget: function (e) {
        return e.target || e.srcElement;
    },
    //��ֹ�¼�ð�ݣ����������
    stopPropagation: function (e) {
        if(e.stopPropagation) {
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
    },
    //ȡ���������ݵ�ִ�У����������
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
            //����ڴ��ڵ�λ�� + ҳ�������ȥ�ľ���
            var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            return e.clientX + scrollLeft;
        }
    },
    getPageY: function (e) {
        if(e.pageY) {
            return e.pageY
        }else{
            //����ڴ��ڵ�λ�� + ҳ�������ȥ�ľ���
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            return e.clientY + scrollTop;
        }
    }
};

//����
//�����ķ�ʽ�޸��������ʽ���Ե�ֵ
function animate(element, attrs) {
    //�����ʱ��
    if (element.timerId) {
        clearInterval(element.timerId);
    }
    element.timerId = setInterval(function () {
        //�����������Զ�����Ŀ��ֵ
        var stop = true
        //��������
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
                //����ie
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
                //��1������δ����Ŀ��ֵ
                stop = false;
            }
        }
        if (stop) {
            clearInterval(element.timerId);
        }
    }, 30);


}


//��ȡ��������ʽ��ֵ
function getStyle(element, attr) {
    //�������
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }
}

//��ù���ȥ�ľ��� ���������
function getScroll(){
    var scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    var scrollLeft=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
    return {scrollTop:scrollTop,scrollLeft:scrollLeft};
}
