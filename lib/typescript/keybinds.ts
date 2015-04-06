class Keybinds {
    
    private keycodes: any[] = [{"key":"1","keycode":49},
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
    
    private event: any;
    private preventdefault: boolean = true;
    
    constructor(){}

    public init(callback: Function): void{
        document.addEventListener("keydown", function(e){
            this.event = e;
            callback();
        });
        
        /* for testing for mouse event*/
        document.addEventListener("click", function(e){
            /* 
                e.clientX and e.clientY for possion 
                e.target for the target element
                e.witch or e.button for witch button is pressed
                
            */
            this.event = e;
            callback();
        });
    }
    
    /* TODO Check for meta key, Make e Method for opting out off prevent defult behaviors*/
    public bind(key: String, modifyer: String, callback: Function): void{
        if(this.preventdefault) event.preventDefault();
        if(key === "any") callback(event.keyCode);
        if(event.keyCode == this.getKeycode(key)){
            switch(modifyer) {
                case "none":
                    if(!event.ctrlKey && !event.shiftKey && !event.altKey) callback(event.keyCode); //console.log("none");
                    break;
                case "shift":
                    if(!event.ctrlKey && event.shiftKey && !event.altKey) console.log("shift");
                    break;
                case "alt":
                    if(!event.ctrlKey && !event.shiftKey && event.altKey) console.log("alt");
                    break;
                case "ctrl":
                    if(event.ctrlKey && !event.shiftKey && !event.altKey) console.log("ctrl");
                    break;
                case "shift-ctrl":
                    if(event.ctrlKey && event.shiftKey && !event.altKey) console.log("shift-ctrl");
                    break;
                case "shift-alt":
                    if(!event.ctrlKey && event.shiftKey && event.altKey) console.log("shift-alt");
                    break;
                case "ctrl-alt":
                    if(event.ctrlKey && !event.shiftKey && event.altKey) console.log("ctrl-alt");
                    break;
                case "shift-ctrl-alt":
                   if(event.ctrlKey && !event.shiftKey && !event.altKey) console.log("shift-ctrl-alt");
                    break;
                default:
                    console.error(modifyer + " is not a valid modifyer configuration. Read the API form more information.");
            } 
        }
    }
    
    private mouseEventHandler(): void{
        console.log("A click event!");
    }
    
    public getKeycode(key: String): Number{
        var key: String = key.toUpperCase();

        for(var i = 0; i<this.keycodes.length; i++){
            if(key == this.keycodes[i].key){
                return this.keycodes[i].keycode;
            }
        }
    }

    public getKey(keycode: Number): String{
        for(var i = 0; i<this.keycodes.length; i++){
            if(keycode == this.keycodes[i].keycode){
                return this.keycodes[i].key;
            }
        }
    }

    public addCostumKey(keyname: String, keycode: Number): void{
        var key = key.toUpperCase();
        this.keycodes.push({"key":key,"keycode":keycode});
    }

    public logKeys(): void{
        
    }
    
    public setPreventDefault(status: boolean): void{ this.preventdefault = status;}
}