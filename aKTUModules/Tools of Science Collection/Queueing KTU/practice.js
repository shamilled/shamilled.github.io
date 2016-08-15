var oDragTargets = [];
var oDragTarget = null;
var oDragItem = null;
var iClickOffsetX = 0;
var iClickOffsetY = 0;

function OnLoad(){
	SetupDragDrop();
}

function SetupDragDrop(){
	oDragTargets = [];
	
	var oList = document.getElementsByTagName("div");
	for(var i=0; i<olist.length; y="e.clientY" x="e.clientX" otarget="oDragTargets[i];" i="0;" top="y;" left="x;" position="absolute" zindex="1000;" e="window.event;" (odragitem="=null)" iclickoffsety="e.targetTouches[0].pageY" iclickoffsetx="e.targetTouches[0].pageX" opos="GetObjPos(e.target);" odragitem="o;" önmousedown="function(e){DragStart(oBox,e);return" obox.onmouseup="function(e){DragStop(oBox,e)};" obox.onmousemove="function(e){DragMove(oBox,e)};" obox.ontouchend="function(e){TouchEnd(e)};" obox.ontouchmove="function(e){TouchMove(e)};" obox.ontouchstart="function(e){TouchStart(e)};" (navigator.platform="="iPad"){" (o.classname="=" odragtargets[odragtargets.length]="GetObjPos(o);" o="oList[i];"> x && (oTarget.y + oTarget.h) > y){
			if (oDragTarget!=null && oDragTarget != oTarget.o) OnTargetOut();
			oDragTarget = oTarget.o;
			OnTargetOver();
			return;
		}
	}
	
	if (oDragTarget){
		OnTargetOut();
		oDragTarget = null;
	}
}

function TouchMove(e){
    e.preventDefault();
    var x = e.targetTouches[0].pageX - iClickOffsetX;
    var y = e.targetTouches[0].pageY - iClickOffsetY;
    oDragItem = e.targetTouches[0].target;
    HandleDragMove(x,y);
}

function DragStop(o,e){
	if (o.releaseCapture){
		o.releaseCapture();
	}else if (oDragItem){
		window.removeEventListener ("mousemove", DragMove2, true);
		window.removeEventListener ("mouseup",   DragStop2, true);
	}
	
	HandleDragStop();
}

function HandleDragStop(){
	if (oDragItem==null) return;

	if (oDragTarget){
		OnTargetOut();
		OnTargetDrop();
		oDragTarget = null;
	}
	
	oDragItem.style.zIndex = 1;
	oDragItem = null;
}

function TouchEnd(e){
	e.target.innerHTML = "TouchEnd";
	HandleDragStop();
}

function $(s){
	return document.getElementById(s);
}

function GetObjPos(obj){
	var x = 0;
	var y = 0;
	var o = obj;
	
	var w = obj.offsetWidth;
	var h = obj.offsetHeight;
	if (obj.offsetParent) {
		x = obj.offsetLeft
		y = obj.offsetTop
		while (obj = obj.offsetParent){
			x += obj.offsetLeft;
			y += obj.offsetTop;
		}
	}
	return {x:x, y:y, w:w, h:h, o:o};
}

//Drag and Drop Events
function OnTargetOver(){
	oDragTarget.style.border = "3px solid red";
}

function OnTargetOut(){
	oDragTarget.style.border = "";
}

function OnTargetDrop(){
	oDragItem.style.position="";
	oDragTarget.appendChild(oDragItem);
	if (navigator.platform=="iPad") MakeDragable(oDragItem);
}

</olist.length;>