    /*---------------------------------To do----------------------------------*/
    //*Come up with a cool and good sounding Name
    //*Corect the english spelling widthin the comments
    //*Check if ctrl,alt,shift is pressed and if its requerd to do the actions! |----- Poseble solution, check addBind function and run function ----|
    //*Figure out how to use parameters in the callback call
    //*Add event listner for Mouse clicks
    //*Validate keybinding so you dont have 2 off the same key
    //*Add more keys and keycodes to the keycodes array
    //*Create and test a remove keybind function
    //*validate all input given by the user
    
    //variable for the event 
    var event;
    
    // Keycodes keys most be writen in upercase or else the binding wont work! allso look it lookslike a boot!
    var keycodes =[{"key":"1","keycode":49},
                   {"key":"2","keycode":50},
                   {"key":"3","keycode":51},
                   {"key":"4","keycode":52},
                   {"key":"5","keycode":53},
                   {"key":"6","keycode":54},
                   {"key":"7","keycode":55},
                   {"key":"8","keycode":56},
                   {"key":"9","keycode":57},
                   {"key":"0","keycode":48},
                   {"key":"A","keycode":65},
                   {"key":"B","keycode":66},
                   {"key":"C","keycode":67},
                   {"key":"D","keycode":68},
                   {"key":"E","keycode":69},
                   {"key":"F","keycode":70},
                   {"key":"G","keycode":71},
                   {"key":"H","keycode":72},
                   {"key":"I","keycode":73},
                   {"key":"J","keycode":74},
                   {"key":"K","keycode":75},
                   {"key":"L","keycode":76},
                   {"key":"M","keycode":77},
                   {"key":"N","keycode":78},
                   {"key":"O","keycode":79},
                   {"key":"P","keycode":80},
                   {"key":"Q","keycode":81},
                   {"key":"R","keycode":82},
                   {"key":"S","keycode":83},
                   {"key":"T","keycode":84},
                   {"key":"U","keycode":85},
                   {"key":"V","keycode":86},
                   {"key":"W","keycode":87},
                   {"key":"X","keycode":88},
                   {"key":"Y","keycode":89},
                   {"key":"Z","keycode":90},
                   {"key":"UPARROW","keycode":38},
                   {"key":"DOWNARROW","keycode":40},
                   {"key":"LEFTARROW","keycode":37},
                   {"key":"RIGHTARROW","keycode":39},
                   {"key":"SPACE","keycode":32}];

    var init = function (element,callback){

        //change to a querry selector!
        document.addEventListener("keydown", function(e){
            event = e;
            callback();
        });
    }
    
    var set = function (key,modifyer,callback){
        console.log(event.keyCode);
        console.log(" ");
    }

    /*TODO*/
    var getKeycode = function (key){
        var key = key.toUpperCase();

        for(var i = 0; i<keycodes.length; i++){
            if(key = keycodes[i].key){
                return keycodes[i].keycode;
            }
        }
    }
    
    /*TODO*/
    var getKey = function (keycode){
        for(var i = 0; i<keycodes.length; i++){
            if(keycode = keycodes[i].keycode){
                return keycodes[i].key;
            }
        }
    }

    /* Adds a custom key to the keycodes array, usefull when the user whants to add a key witch arent suported out of the box*/
    var addCostumKey = function (key,keycode){
        var key = key.toUpperCase();
        keycodes.push({"key":key,"keycode":keycode});
    }

    /* TODO */
    var logKeys = function (){
        
    }