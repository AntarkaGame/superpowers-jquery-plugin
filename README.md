# superpowers-jquery-plugin

> This package is deprecated and detected as potentially insecurised. PLEASE DONT USE! 

Jquery plugin for Superpowers, [the extensible HTML5 2D+3D game engine](https://sparklinlabs.com/).

# Documentation

### Use jquery as usual : 

```javascript
// When the DOM is ready 
$(function($) {

  // Selector = #yourID ou .yourClass etc.
  $('Selector').text("Hi there!"); 
  $('Selector').css('background','red'); 
  
  $('Selector').click( function() {
    Sup.log($(this).attr('id')); 
  });
  
});
```

### Maybe add a Jquery plugin (exemple with rightClick implementation)

```javascript
(function( $ ) {
  $.fn.rightClick = function(method) {
    $(this).bind('contextmenu rightclick', function(e){
      e.preventDefault();
      method();
      return false;
    });
  };
})( jQuery );
```

# Installation 

[Download the latest release](https://github.com/fraxken/superpowers-jquery-plugin/archive/master.zip), unzip it, rename the folder to Jquery, move it inside app/plugins/fraxken/ then restart your server.

# TypeScript definition source : 
https://github.com/borisyankov/DefinitelyTyped/tree/master/jquery
