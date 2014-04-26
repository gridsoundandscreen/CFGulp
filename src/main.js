CF.userMain = function() {

    var device = require('./device/main.js');
    var gui = require('./gui/main.js');

    CF.log(device.name);
    CF.log(gui.name);

};
