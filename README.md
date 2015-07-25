# keybinds.JS

Easy to set up and use

```javascript
(function(){

  var kjs = new Keybinds();
  
  kjs.init(function(){
    kjs.bind("w","none", moveDirection("up"));
    kjs.bind("s","none", moveDirection("down"));
    kjs.bind("a","none", moveDirection("left"));
    kjs.bind("d","none", moveDirection("right"));
    
    kjs.bind("t","shift-ctrl", function(){
      console.log(getDirection());
    });
  });

})();
```
