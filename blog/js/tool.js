function getScrollOffset() {
	if (window.pageXOffset) {
		return {
			x: window.pageXOffset,
			y: window.pageYOffset
		}
	} else {
		return {
			x: document.body.scrollLeft + document.documentElement.scrollLeft,
			y: document.body.scrollTop + document.documentElement.scrollTop
		}
	}
}

function getViewportOffset() {
	if (window.innerWidth) {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	} else {
		if (document.compatMode == 'BackCompat') {
			return {
				width: document.body.clientWidth,
				height: document.body.clientHeight
			}

		} else {
			return {
				width: document.documentElement.clientWidth,
				height: document.documentElement.clientHeight
			}
		}
	}
}

function getStyle(elem, prop) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(elem, null)[prop];
	} else {
		return elem.currentStyle[prop];
	}
}
function getstyle(elem, data, prop) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(elem, data)[prop];
	} else {
		return elem.currentStyle[prop];
	}
}

function addEvent (elem, type, Handle) {
	if(elem.addEventListener){
		elem.addEventListener('type', Handle, false);
	}else if(elem.attachEvent){
		elem.attachEvent("on" + type, function () {
			Handle.call(elem);
		});
	}else {
		elem.onlick['on' + type] = Handle;
	}
}
function cancelHandler (event){
	if(event.preventDefault){
		event.preventDefault();
	}else{
		event.returnValue = false;     //取消绑定
	}
}