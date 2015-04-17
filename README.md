# superpowers-jquery-plugin
Jquery plugin for Superpowers, the extensible HTML5 2D+3D game engine.

Use jquery as usual : 

```javascript
$(function($) {

  $('Selector').text("Hi there!"); 
  $('Selector').css('background','red'); 
  
  $('Selector').click( function() {
    Sup.log($(this).attr('id')); 
  });
  
});
```
