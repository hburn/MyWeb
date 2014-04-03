// JavaScript Document

function clock()
{
	var _now=new Date();
	var _newYear=new Date(_now.getUTCFullYear()+1,0,1,0,0,0);
	function left()//										剩余天数
	{
		return Math.ceil((_newYear.getTime()-_now.getTime())/(3600*24*1000));
	}
	var _content=document.getElementById("content");
	var _string1="今天是 "+_now.getUTCFullYear()+"年"+(_now.getUTCMonth()+1)+"月"+_now.getUTCDay()+"日";
	var _string2="现在是北京时间 "+(_now.getUTCHours()+8)%24+":"+_now.getUTCMinutes()+":"+_now.getUTCSeconds();
	var _string3=_now.getUTCFullYear()+"年"+"还剩"+left()+"天";
	_content.innerHTML="";//								清空文本区内容
	var fragment=document.createDocumentFragment();
	var _p1=document.createElement("P");
	var _text1=document.createTextNode(_string1);
	_p1.appendChild(_text1);
	var _p2=document.createElement("P");
	var _text2=document.createTextNode(_string2);
	_p2.appendChild(_text2);
	var _p3=document.createElement("P");
	var _text3=document.createTextNode(_string3);
	_p3.appendChild(_text3);
	fragment.appendChild(_p1);
	fragment.appendChild(_p2);
	fragment.appendChild(_p3);
	_content.appendChild(fragment);//						文本区写入HTML
	var _hour=document.getElementById("hour");
	var _minute=document.getElementById("minute");
	var _second=document.getElementById("second");
	routateIt(_hour,((_now.getUTCHours()+8)%12+(_now.getUTCMinutes()*60+_now.getUTCSeconds())/3600)*30);
	routateIt(_minute,(_now.getUTCMinutes()+_now.getUTCSeconds()/60)*6);
	routateIt(_second,_now.getUTCSeconds()*6);//			计算旋转角度
	function routateIt(element,degrees){//					写入style属性
		element.style.cssText=("-moz-transform:rotate("+degrees+"deg);-webkit-transform:rotate("+degrees+"deg);transform:rotate("+degrees+"deg);");
	}
}
window.setInterval(clock, 1000);//							1s刷新写入一次
