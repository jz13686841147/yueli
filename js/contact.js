
$(function () {
    $(".intro").slideDown(1000);
    $(".intro").fadeIn(3000);
    $(".cont_list").slideDown(3000);
    $(".cont_list").fadeIn(5000);
    $(".feedback").slideDown(10000);
});


<!--�ֲ�ͼ B-->
//׼������  ��ȡ����
var zhaop = document.getElementById("zhaop");
var screen = zhaop.children[0];
var prev = zhaop.children[1];
var next=zhaop.children[2]
//
var ul = screen.children[0];
//ͼƬ�Ŀ��
var imgWidth = screen.offsetWidth;
//�����ͷ��ʱ���¼����  -- ͼƬ������
var index = 0;

//��¼�ж�����ͼƬ---��ʵͼƬ�ĸ���
var count = ul.children.length;
//3 �����ͷ�л�ͼƬ
//3.1 ��ʾ��ͷ
zhaop.onmouseover = function () {
    prev.style.display = "block";
    next.style.display = "block";
    //5.2 ���ŵ�box�ϣ�ֹͣ�Զ����ŵĶ�ʱ��
    clearInterval(timerId);
};

zhaop.onmouseout = function () {
    prev.style.display = "none";
    next.style.display = "none";
    //5.3 ����뿪box  ������ʱ���������Զ�����
    timerId = setInterval(function () {
        next.click();
    }, 4000);
};
//��һ��
next.onclick = function () {
    //�����ǰ�����һ��ͼƬ(��¡�ĵ�һ��ͼƬ), ��index = 0 ����͵͵����ul�л�����һ��ͼƬ
    if(index === count) {
        index = 0;
        ul.style.left = "0px";
    }
    index++;
    animation(ul, -index * imgWidth);
};
//��һ��
prev.onclick = function () {
    //����ǵ�һ��ͼƬ�Ļ�����index=��¡��ͼƬ��������͵͵���л������һ��
    if(index === 0) {
        index = count;
        ul.style.left = -index * imgWidth + "px";
    }
    index--;
    animation(ul, -index * imgWidth);
};


//4 �޷����  -- �޸���һ�ź���һ�ŵĴ���
//4.1 �ѵ�һ��ͼƬ��Ӧ��li��¡��׷�ӵ�ul�����
var firstLi = ul.children[0];
var cloneLi = firstLi.cloneNode(true);
//׷�ӵ�ul�����
ul.appendChild(cloneLi);

//5 �Զ�����
//5.1 ������ʱ��
var timerId = setInterval(function () {
    //�л���һ��ͼƬ
    //�൱�� �ֶ������һ�°�ť
    next.click();
},4000);

<!--�ֲ�ͼ E-->