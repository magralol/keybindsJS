/*---------------------------------To do----------------------------------*/
//*Come up with a cool and good sounding Name
//*Corect the english spelling widthin the comments
//*Check if ctrl,alt,shift is pressed and if its requerd to do the actions! |----- Poseble solution, check addBind function and run function ----|
//*Figure out how to use parameters in the callback call
//*Add event listner for Mouse clicks
//*Validate keybinding so you dont have 2 off the same key
//*Add more keys and keycodes to the keycodes array
//*Create and test a remove keybind function

//Array off the Keybindings the user have added
var keybinds = [];

// Keycodes keys most be writen in upercase or else the binding wont work!
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

// init function most allways be run on page load, to add the document eventlistner!
function init(/*kbArray*/){
    /*if(typeof kbArray === "Array"){
        keybinds = kbArray;   
    }*/
    
    document.addEventListener("keydown", run);
    //document.addEventListener("mousedown", run); <----- Expermintal
}

/* Function for adding keybindes to the keybinds array. shift, ctrl,alt dusent do any thing at the moment*/
/* insted of sepratrly shift,ctrl,alt put in a string for mode, exeple "alt" or "shift-alt" */
/*function addKeybind(key,callback,shift,ctrl,alt){
    var key = key.toUpperCase();
    
    if(!typeof callback === "function"){
        console.error("Callback parameter most be a function");
    }
    
    for(var i = 0; i<keycodes.length; i++){
        
        if(key === keycodes[i].key){
            keybinds.push({"key":key,"callback":callback,"shift":shift,"ctrl":ctrl,"alt":alt,"keycode":keycodes[i].keycode});   
        }
    }
    
}*/

function addKeybind(key,modifier,callback){
    var key = key.toUpperCase();
    
    if(!typeof callback === "function"){
        console.error("Callback parameter most be a function");
    }
    
    for(var i = 0; i<keycodes.length; i++){
        
        if(key === keycodes[i].key){
            keybinds.push({"key":key,"modifier":modifier,"callback":callback,"keycode":keycodes[i].keycode});   
        }
    }
    
}

/*Build this function*/
function removeKeybind(){
    
}

/* Return All keybindings of a specified key */
function getKeybinding(key){
    var key = key.toUpperCase();
    var keybinding = [];
    
    for(var i = 0; i<keybinds.length; i++){
        if(key === keybinds[i].key){
            keybinding.push(keybinds[i]);
        }
    }
    
    if(keybinding.length < 2){
        return keybinding[0];
    }else {
        return keybinding;
    }
    
}

/* Returns all the keybindings witch the user have stored */
function getAllKeybinds(){
    if(keybinds.length < 2){
        return keybinds[0];
    }else {
        return keybinds;
    }
}


/*Work in progress, Curently not working as intended*/
function getKeycode(key){
    var key = key.toUpperCase();
    
    for(var i = 0; i<keycodes.length; i++){
        if(key = keycodes[i].key){
            return keycodes[i].keycode;
        }
    }
}

/*Work in progress, Curently not working as intended*/
function getKey(keycode){
    for(var i = 0; i<keycodes.length; i++){
        if(keycode = keycodes[i].keycode){
            return keycodes[i].key;
        }
    }
}

/* Log the pressed key and its keycode to the console */
function logKeys(){
    document.addEventListener("keydown", function(e){
            for(var i = 0; i<keycodes.length; i++){
                if(e.keyCode === keycodes[i].keycode){
                    console.log("Key: "+keycodes[i].key + " Key code: " + e.keyCode);
                    if(e.ctrlKey){
                        console.log("+ Ctrl");
                    }else if(e.shiftKey){
                         console.log("+ Shift");
                    }else if(e.altKey){
                        console.log("+ Alt");
                    }
                }
            }
    });
}

/* The function that runes when ever a key is pressed and runs the keybinding callback stored withing the keybinds array */
function run(e){
    e.preventDefault();
    
    for(var i = 0; i<keybinds.length; i++){
        if(e.keyCode == keybinds[i].keycode){
            //keybinds[i].callback();
            //Set switch case here for mode
            
            //console.log("Modifier... " + keybinds[i].modifier);
            /*
            switch(keybinds[i].modifier) {
                case "shift":
                    if(e.shiftKey && keybinds[i].modifier === "shift"){
                        console.error("Shift");
                        keybinds[i].callback();
                    }
                    break;
                case "alt":
                    if(e.altKey){
                        console.error("Alt");
                        keybinds[i].callback();
                    }
                    break;
                case "ctrl":
                    if(e.ctrlKey){
                        console.error("Ctrl");
                        keybinds[i].callback();
                    }
                    break;
                case "none":
                     if(keybinds[i].modifier === "none"){
                        console.error("none");
                        keybinds[i].callback(); 
                    }
                    break;
            }*/
            
            if(e.shiftKey && keybinds[i].modifier == "shift"){
                        console.error("Shift");
                        keybinds[i].callback();
            }else if(e.ctrlKey && keybinds[i].modifier == "shift"){
                        console.error("Shift");
                        keybinds[i].callback();
            }else if(e.altKey && keybinds[i].modifier == "shift"){
                        console.error("Shift");
                        keybinds[i].callback();
            }
            else{
                keybinds[i].callback();
            }
            
        }
    }
    //console.log(e.keyCode);
}