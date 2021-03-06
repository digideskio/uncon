var config = {};

/**
 * Which hardware to use - valid values:
 * 'arduino' for Arduino
 * 'raspi' for Raspberry Pi
 */
config.hardware = 'arduino';
//config.hardware = 'raspi';

config.instance = {
    // This is the URL to the SugarCRM REST API you will be using
    // You will want to use an IP address if accessing remotely from
    // a Raspberry Pi device.
    serverUrl: "http://10.9.5.140/Mango/ent/sugarcrm/rest/v10",
    platform: "mobile",
    timeout: 30
};

config.users = {
    admin: {username: 'admin', password: 'a'},
    jim: {username: 'jim', password: 'jim'}
};

// Change port to match the serial connection to your Arduino,
// discover this using the command `gort scan serial`
config.arduinoPort = '/dev/tty.usbmodem1451';
// /dev/tty.usbmodem1411 - left usb on macbook
// /dev/tty.usbmodem1451 - right usb on macbook

module.exports = config;
