var Keybinds = (function () {
    function Keybinds() {
        this.keycodes = [{ "key": "1", "keycode": 49 }, { "key": "2", "keycode": 50 }, { "key": "3", "keycode": 51 }, { "key": "4", "keycode": 52 }, { "key": "5", "keycode": 53 }, { "key": "6", "keycode": 54 }, { "key": "7", "keycode": 55 }, { "key": "8", "keycode": 56 }, { "key": "9", "keycode": 57 }, { "key": "0", "keycode": 48 }, { "key": "A", "keycode": 65 }, { "key": "B", "keycode": 66 }, { "key": "C", "keycode": 67 }, { "key": "D", "keycode": 68 }, { "key": "E", "keycode": 69 }, { "key": "F", "keycode": 70 }, { "key": "G", "keycode": 71 }, { "key": "H", "keycode": 72 }, { "key": "I", "keycode": 73 }, { "key": "J", "keycode": 74 }, { "key": "K", "keycode": 75 }, { "key": "L", "keycode": 76 }, { "key": "M", "keycode": 77 }, { "key": "N", "keycode": 78 }, { "key": "O", "keycode": 79 }, { "key": "P", "keycode": 80 }, { "key": "Q", "keycode": 81 }, { "key": "R", "keycode": 82 }, { "key": "S", "keycode": 83 }, { "key": "T", "keycode": 84 }, { "key": "U", "keycode": 85 }, { "key": "V", "keycode": 86 }, { "key": "W", "keycode": 87 }, { "key": "X", "keycode": 88 }, { "key": "Y", "keycode": 89 }, { "key": "Z", "keycode": 90 }, { "key": "UPARROW", "keycode": 38 }, { "key": "DOWNARROW", "keycode": 40 }, { "key": "LEFTARROW", "keycode": 37 }, { "key": "RIGHTARROW", "keycode": 39 }, { "key": "SPACE", "keycode": 32 }];
    }
    Keybinds.prototype.init = function (element, callback) {
        document.addEventListener("keydown", function (e) {
            this.event = e;
            callback();
        });
    };
    Keybinds.prototype.bind = function (key, modifyer, callback) {
        event.preventDefault();
        //console.log(event.keyCode);
        //console.log(" ");
        //check get keycode against key
        //then make switchcase for all modifyers
        //then in eatch switch case check if modifier is pressed when key is pressed
        //the run callback
        //console.log(event);
        /*
            TODO Fix so lone modifyer is not triggerd when there is a dubble modifyer
            See under ctrl case for fix. do that for all singel ones.
        */
        if (event.keyCode == this.getKeycode(key)) {
            switch (modifyer) {
                case "none":
                    if (event.shiftKey || event.altKey || event.ctrlKey) {
                    }
                    else {
                        console.log("none");
                    }
                    break;
                case "shift":
                    if (event.shiftKey) {
                        console.log("shift");
                    }
                    break;
                case "alt":
                    if (event.altKey) {
                        console.log("alt");
                    }
                    break;
                case "ctrl":
                    if (event.shiftKey || event.altKey) {
                    }
                    else if (event.ctrlKey) {
                        console.log("ctrl");
                    }
                    break;
                case "shift-ctrl":
                    if (event.shiftKey && event.ctrlKey) {
                        console.log("shift-ctrl");
                    }
                    break;
                case "shift-alt":
                    if (event.shiftKey && event.altKey) {
                        console.log("shift-alt");
                    }
                    break;
                case "ctrl-alt":
                    if (event.ctrlKey && event.altKey) {
                        console.log("ctrl-alt");
                    }
                    break;
                case "shift-ctrl-alt":
                    if (event.shiftKey && event.ctrlKey && event.altKey) {
                        console.log("shift-ctrl-alt");
                    }
                    break;
                default:
                    console.error(modifyer + " is not a valid modifyer configuration. Read the API form more information.");
            }
        }
    };
    Keybinds.prototype.getKeycode = function (key) {
        var key = key.toUpperCase();
        for (var i = 0; i < this.keycodes.length; i++) {
            if (key == this.keycodes[i].key) {
                return this.keycodes[i].keycode;
            }
        }
    };
    Keybinds.prototype.getKey = function (keycode) {
        for (var i = 0; i < this.keycodes.length; i++) {
            if (keycode == this.keycodes[i].keycode) {
                return this.keycodes[i].key;
            }
        }
    };
    Keybinds.prototype.addCostumKey = function (keyname, keycode) {
        var key = key.toUpperCase();
        this.keycodes.push({ "key": key, "keycode": keycode });
    };
    Keybinds.prototype.logKeys = function () {
    };
    return Keybinds;
})();
