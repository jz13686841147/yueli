/**
 * Created by jackln on 2016/6/17.
 */

//��ĳ��Ԫ�����ö���
function animation(element,target){
    //����ǰ�����Ԫ���������ԡ���ʱ��
    //�����ǰ��ʱ��timeId
    if(element.timeId){
        clearInterval(element.timeId);
    }
    var step=10;
    element.timeId=setInterval(function(){
        current=element.offsetLeft;

        //�жϵ�ǰֵ�Ƿ����Ŀ��ֵ���������ֹͣ�������ʱ��
        //��ǰλ�� <  Ŀ��λ��  + step
        //��ǰλ�� > Ŀ��λ��   -step
        if(current>target){
            step=-Math.abs(step);
        }

        //���Ŀ��ֵ����Сֵ�ľ������step������ƶ�
        if(Math.abs(current-target)>Math.abs(step)){
            current+=step;
            element.style.left=current+"px";
        }else{
            clearInterval( element.timeId);
            element.style.left=target+"px";
        }

    },5)
}

//�����ķ�ʽ�޸��������ʽ���Ե�ֵ
function animate(element, attrs,fn) {
    //�����ʱ��
    if(element.timerId) {
        clearInterval(element.timerId);
    }
    element.timerId = setInterval(function () {
        //���趨ʱ��Ӧ��ֹͣ��
        var stop = true;
        //����attrs���󣬻�ȡ��������
        for(var k in attrs) {
            //��ȡ��ʽ���� ��Ӧ��Ŀ��ֵ
            var target = attrs[k];
            var current = 0;
            var step = 0;
            //�ж��Ƿ���Ҫ�޸�͸���ȵ�����
            if(k === "opacity") {
                current = parseFloat( getStyle(element, k)) * 100 || 0;
                target = target * 100;
                step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[k] = current / 100;
                //����ie
                element.style["filter"] = "alpha(opacity="+  current +")";
            }else if(k === "zIndex") {
                element.style[k] = target;
            } else {
                //��ȡ������ʽ���Ե�ֵ�����ת������ʧ�ܣ�����Ϊ0
                current = parseInt(getStyle(element, k)) || 0;
                step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                //����������ʽ���Ե�ֵ
                element.style[k] = current + "px";
            }
            if(step !== 0) {
                //�����һ�����Ե�ֵû�е���target  ������Ϊfalse
                stop = false;
            }
        }
        //�����������ֵ������target  ֹͣ��ʱ��
        if(stop) {
            clearInterval(element.timerId);
        }
        //�ڶ���������ִ��fn����
        //�ж��Ƿ񴫵ݺ���
        if(fn){
            fn();
        }
    },30);
}






