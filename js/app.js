'use strict';

var React = require( 'react' );
var Component = require( './views/Component' );


window.app = {
  init: function () {

   	React.render(
    	<Component/>,
    	document.getElementById( 'app' )
  	);
  }
};

window.app.init();
