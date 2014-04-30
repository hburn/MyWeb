// JavaScript Document
var _cv=document.getElementById("cv");
_context=_cv.getContext("2d");
_context.strokeRect(0,0,800,600);
_context.fillStyle="black";
_context.strokeStyle="black";

_context.font="normal bold 36px cursive";
_context.fillText("C",20,110);
_context.fillText("M",15,160);
_context.fillText("P",22,210);
_context.fillText("T",570,590);
_context.fillText("I",610,590);
_context.fillText("M",650,590);
_context.fillText("E",690,590);

_context.beginPath();
_context.lineTo(50,20);
_context.lineTo(50,550);
_context.lineTo(750,550);
_context.stroke();
_context.closePath();

_context.fillRect(50,547,3,3);

_context.fillRect(50,499,4,2);
_context.fillRect(50,449,4,2);
_context.fillRect(50,399,4,2);
_context.fillRect(50,349,4,2);
_context.fillRect(50,299,4,2);
_context.fillRect(50,249,4,2);
_context.fillRect(50,199,4,2);
_context.fillRect(50,149,4,2);
_context.fillRect(50,99,4,2);
_context.fillRect(50,49,4,2);

_context.fillRect(99,546,2,4);
_context.fillRect(129,546,2,4);
_context.fillRect(159,546,2,4);
_context.fillRect(189,546,2,4);
_context.fillRect(219,546,2,4);
_context.fillRect(249,546,2,4);
_context.fillRect(279,546,2,4);
_context.fillRect(309,546,2,4);
_context.fillRect(339,546,2,4);
_context.fillRect(369,546,2,4);
_context.fillRect(399,546,2,4);
_context.fillRect(429,546,2,4);
_context.fillRect(459,546,2,4);
_context.fillRect(489,546,2,4);
_context.fillRect(519,546,2,4);
_context.fillRect(549,546,2,4);
_context.fillRect(579,546,2,4);
_context.fillRect(609,546,2,4);
_context.fillRect(639,546,2,4);
_context.fillRect(669,546,2,4);


function drawTable(){
	var i=0;
	window.setInterval(function(){_context.clearRect(54,50,646,496);drawTwenty(i++);},100);
}

function drawTwenty(i){
	_context.beginPath();
	_context.lineTo(100,550-cmp[i-19]*5);
	_context.lineTo(130,550-cmp[i-18]*5);
	_context.lineTo(160,550-cmp[i-17]*5);
	_context.lineTo(190,550-cmp[i-16]*5);
	_context.lineTo(220,550-cmp[i-15]*5);
	_context.lineTo(250,550-cmp[i-14]*5);
	_context.lineTo(280,550-cmp[i-13]*5);
	_context.lineTo(310,550-cmp[i-12]*5);
	_context.lineTo(340,550-cmp[i-11]*5);
	_context.lineTo(370,550-cmp[i-10]*5);
	_context.lineTo(400,550-cmp[i-9]*5);
	_context.lineTo(430,550-cmp[i-8]*5);
	_context.lineTo(460,550-cmp[i-7]*5);
	_context.lineTo(490,550-cmp[i-6]*5);
	_context.lineTo(520,550-cmp[i-5]*5);
	_context.lineTo(550,550-cmp[i-4]*5);
	_context.lineTo(580,550-cmp[i-3]*5);
	_context.lineTo(610,550-cmp[i-2]*5);
	_context.lineTo(640,550-cmp[i-1]*5);
	_context.lineTo(670,550-cmp[i]*5);
	_context.stroke();
	_context.closePath();
}
drawTable();
//alert(mssg);