var Controller = {}



Controller.registerElements = function( parent, el,list ){
  var keys = Object.keys(list);
  if( !parent.elements ) parent.elements = {};
  for (var i = keys.length - 1; i >= 0; i--) {
    var key = keys[i];
    var domEl = el.querySelector( list[key] );
    if(!domEl) console.error(" Class ", list[key], " not found");
    else parent.elements[key] = domEl;
  };
}

Controller.removeClasses = function( parent, klass, className ){
  var all = parent.querySelectorAll( klass );
  for (var i = all.length - 1; i >= 0; i--) {
    all[i].classList.remove( className );
  };
}


module.exports = Controller;