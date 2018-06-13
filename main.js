const electron = require("electron");

const {
  app,
  BrowserWindow
} = electron;



app.on('ready', function() {

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800

  }); 


  mainWindow.loadURL(`file://${__dirname}/index.html`);
  //  mainWindow.webContents.openDevTools({
  //    mode: 'right'
  //  });
});
