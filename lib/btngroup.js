var Events = require('events').EventEmitter;
var delegate = require('clay-delegate');



function Buttons( el){
	var _this = this;
	this.el = el;
	
	delegate.bind( this.el, '.btn', 'click',  function(e){ 
		_this.emit( "SELECT", e.target.dataset.tipo )
	});

}

Buttons.prototype = Object.create( Events.prototype );



module.exports = Buttons