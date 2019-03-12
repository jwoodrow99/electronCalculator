const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let window;

// Listen for app to be ready
app.on('ready', () => {
    // create new window
    window = new BrowserWindow({
        width: 310, //290 of content 10 of padding
        height: 400
    });

    // Menu.setApplicationMenu(null);

    // Load html into window
    window.loadURL(url.format({
        pathname: path.join(__dirname, 'window.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Build menu from template
    Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));
});

// Create Menu
const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q', // hot key set
                click(){
                    app.quit();
                }
            }
        ]
    }
];
