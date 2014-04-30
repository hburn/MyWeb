// JavaScript Document
//跨浏览器事件添加删除
var EventUtil = {
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
};
//侧栏打开关闭
var _sideNavPart1=document.getElementById("sideNavPart1");
var _sideNavPart2=document.getElementById("sideNavPart2");
var _sideNavPart3=document.getElementById("sideNavPart3");
var _sideNavBreak2=document.getElementById("sideNavBreak2");
var _sideNavTop=document.getElementById("sideNavTop");
var _sideNavBottom=document.getElementById("sideNavBottom");
function disappear(element){
	element.style.cssText="display:none"
}
function appear(element){
	element.style.cssText="display:block"
}	
function sideNavDisappear(){
	disappear(_sideNavPart1);
	disappear(_sideNavPart2);
	disappear(_sideNavPart3);
	disappear(_sideNavBreak2);
	_sideNavBottom.style.cssText="background:#FF7300 url(../image/alibaba.png) 50px -171px;";
}
function sideNavAppear(){
	appear(_sideNavPart1);
	appear(_sideNavPart2);
	appear(_sideNavPart3);
	appear(_sideNavBreak2);
	_sideNavBottom.style.cssText="background:#FF7300 url(../image/alibaba.png) 50px -146px;";
}
function sideNavCloseOpen(){
if(_sideNavPart1.style.display!="none")
{
	sideNavDisappear();
}
else
{
	sideNavAppear();
}
}
EventUtil.addHandler(_sideNavTop,"click",sideNavCloseOpen);
EventUtil.addHandler(_sideNavBottom,"click",sideNavCloseOpen);

//根据屏幕宽度控制侧栏打开关闭
_aliSideNav=document.getElementById("aliSideNav");
function rePlaceSideNav(){
	var _pageWidth = window.innerWidth,//跨浏览器获取视口长宽
	_pageHeight = window.innerHeight;
	
if (typeof _pageWidth != "number"){
	if (document.compatMode == "CSS1Compat"){
		_pageWidth = document.documentElement.clientWidth;
		_pageHeight = document.documentElement.clientHeight;
	} else {
		_pageWidth = document.body.clientWidth;
		_pageHeight = document.body.clientHeight;
	}
}
	if(_pageWidth<1260){
		sideNavDisappear();
		_aliSideNav.style.left=(_pageWidth-200)+"px";
	}
	else{
		sideNavAppear();
		_aliSideNav.style.left=((_pageWidth-1000)/2+1010)+"px";
	}
}
EventUtil.addHandler(window,"resize",rePlaceSideNav);
EventUtil.addHandler(window,"load",rePlaceSideNav);
//侧栏响应
function getElementTop(element){//获得元素距页面顶端距离
	var _actualTop = element.offsetTop;
	var _current = element.offsetParent;
  
	while (_current !== null){        
		_actualTop += _current.offsetTop;
		_current = _current.offsetParent;
	}
  
	return _actualTop;
}
//getWH();
//document.getElementById("firstScreen").style.height=(_pageHeight-210)+"px";
var _scrollTop;//滚动上方的高度
var _aliBlocks = new Array();
_aliBlocks[0] = document.getElementById("firstF");
_aliBlocks[1] = document.getElementById("secondF");
_aliBlocks[2] = document.getElementById("thirdF");
_aliBlocks[3] = document.getElementById("fourthF");
_aliBlocks[4] = document.getElementById("fifthF");
_aliBlocks[5] = document.getElementById("sixthF");
_aliBlocks[6] = document.getElementById("seventhF");
_aliBlocks[7] = document.getElementById("eighthF");
_aliBlocks[8] = document.getElementById("ninethF");
_aliBlocks[9] = document.getElementById("tenthF");
_aliBlocks[10] = document.getElementById("eleventhF");
_aliBlocks[11] = document.getElementById("twelvethF");
_aliBlocks[12] = document.getElementById("thirteenthF");
_aliBlocks[13] = document.getElementById("fourteenthF");
_aliBlocks[14] = document.getElementById("fifteenthF");
_aliBlocks[15] = document.getElementById("sixteenthF");
_aliBlocks[16] = document.getElementById("seventeenthF");
_aliBlocks[17] = document.getElementById("eighteenthF");
_aliBlocks[18] = document.getElementById("nineteenthF");
var _aliHeight= new Array();
for(var i=0;i<19;i++)
{
	_aliHeight[i]=getElementTop(_aliBlocks[i]);
}
function selectF(){
	_scrollTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
	if(_scrollTop==0){
		_aliSideNav.style.display="none";
	}
	else{
		_aliSideNav.style.display="block";
	}
	for(var i=0;i<19;i++)
	{
		if(((_aliHeight[i]<=_scrollTop)&&(_aliHeight[i+1]>_scrollTop))||((_aliHeight[i]<=_scrollTop)&&(_aliHeight[i+1]==null)))
		{
			_selectedF=document.getElementById("side"+(i+1));
			_selectedF.setAttribute("class","selected");
		}
		else
		{
			document.getElementById("side"+(i+1)).removeAttribute("class","selected");
		}
	}
}
EventUtil.addHandler(window,"scroll",selectF);