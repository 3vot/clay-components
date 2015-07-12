var Events = require('events').EventEmitter;


function Dropdown( el, list, additionalItems ){
	var _this = this;
	this.list = list;
	this.el = el;
	this.menu = this.el.querySelector(".dropdown-menu");
	this.button = this.el.querySelector(".main-button");
	this.additionalItems = additionalItems;

	this.updateList(list);

	this.el.onclick = function(e){
		if( e.target.tagName == "A" ){
			_this.menu.style.display = "none";
			_this.button.innerHTML = e.target.innerHTML;
			return _this.emit("SELECT", e.target.innerHTML);
		}

		if( _this.menu.style.display == "none" || !_this.menu.style.display ) _this.menu.style.display = "block";
		else _this.menu.style.display = "none";
	

	}

}

Dropdown.prototype = Object.create( Events.prototype );

Dropdown.prototype.updateList = function(list){
	this.list = list;
	var finalList = this.additionalItems.concat( this.list )
	var src = ""
	for (var i = finalList.length - 1; i >= 0; i--) {
		src += '<li><a>' + finalList[i] + '</li></a>';
	};
	this.menu.innerHTML += src;
	return this;
}


module.exports = Dropdown