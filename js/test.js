var num=0,result=0,numshow="0"; 
var operate=0; //�ж�����״̬�ı�־ 
var calcul=0; //�жϼ���״̬�ı�־ 
var quit=0; //��ֹ�ظ������ı�־ 
function command(num){ 
var str=String(document.calculator.numScreen.value); //��õ�ǰ��ʾ���� 
str=(str!="0") ? ((operate==0) ? str : "") : ""; //�����ǰֵ����"0"����״̬Ϊ0���򷵻ص�ǰֵ�����򷵻ؿ�ֵ; 
str=str + String(num); //����ǰֵ׷���ַ� 
document.calculator.numScreen.value=str; //ˢ����ʾ 
operate=0; //��������״̬ 
quit=0; //���÷�ֹ�ظ������ı�־ 
} 
function dzero(){ 
var str=String(document.calculator.numScreen.value); 
str=(str!="0") ? ((operate==0) ? str + "00" : "0") : "0"; //�����ǰֵ����"0"����״̬Ϊ0���򷵻ص�str+"00"�����򷵻�"0"; 
document.calculator.numScreen.value=str; 
operate=0; 
} 
function dot(){ 
var str=String(document.calculator.numScreen.value); 
str=(str!="0") ? ((operate==0) ? str : "0") : "0"; //�����ǰֵ����"0"����״̬Ϊ0���򷵻ص�ǰֵ�����򷵻�"0"; 
for(i=0; i<=str.length;i++){ //�ж��Ƿ��Ѿ���һ����� 
if(str.substr(i,1)==".") return false; //��������ٲ��� 
} 
str=str + "."; 
document.calculator.numScreen.value=str; 
operate=0; 
} 
function del(){ //�˸� 
var str=String(document.calculator.numScreen.value); 
str=(str!="0") ? str : ""; 
str=str.substr(0,str.length-1); 
str=(str!="") ? str : "0"; 
document.calculator.numScreen.value=str; 
} 
function clearscreen(){ //������� 
num=0; 
result=0; 
numshow="0"; 
document.calculator.numScreen.value="0"; 
} 
function plus(){ //�ӷ� 
calculate(); //���ü��㺯�� 
operate=1; //��������״̬ 
calcul=1; //���ļ���״̬Ϊ�� 
} 
function minus(){ //���� 
calculate(); 
operate=1; 
calcul=2; 
} 
function times(){ //�˷� 
calculate(); 
operate=1; 
calcul=3; 
} 
function divide(){ //���� 
calculate(); 
operate=1; 
calcul=4; 
} 
function persent(){ //���� 
calculate(); 
operate=1; 
calcul=5; 
} 
function equal(){ 
calculate(); //���� 
operate=1; 
num=0; 
result=0; 
numshow="0"; 
} 
// 
function calculate(){ 
numshow=Number(document.calculator.numScreen.value); 
if(num!=0 && quit!=1){ //�ж�ǰһ���������Ƿ�Ϊ���Լ����ظ�������״̬ 
switch(calcul){ //�ж�Ҫ����״̬ 
case 1:result=num+numshow;break; //����"+" 
case 2:result=num-numshow;break; //����"-" 
case 3:result=num*numshow;break; 
case 4:if(numshow!=0){result=num/numshow;}else{document.getElementById("note").innerHTML="����������Ϊ�㣡"; setTimeout(clearnote,4000)} break; 
case 5:result=num%numshow;break; 
} 
quit=1; //�����ظ����� 
} 
else{ 
result=numshow; 
} 
numshow=String(result); 
document.calculator.numScreen.value=numshow; 
num=result; //�洢��ǰֵ 
} 
function clearnote(){ //�����ʾ 
document.getElementById("note").innerHTML=""; 
} 

    var i=0;
    setInterval('changeColor()',500);
        function changeColor(){
            var div=document.getElementById('div99'); //���divԪ��
            var colorArr=['#8A2BE2','#DEB887','#7FFF00','#008B8B','#FF1493']; //������ɫ��
            if(i==colorArr.length){ 
                    i=0;
                }else{
                    div.style.backgroundColor=colorArr[1]; //ѭ����ɫ
                }
            }