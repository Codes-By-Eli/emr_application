const { app, BrowserWindow } = require('electron');
const { shell } = require('electron');

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.maximize();
  
  //this reloads the electron window everytime you make a save
  try {
    require('electron-reloader')(module)
  } catch (_) {}


  //this is for connecting to the backend with a single script
  var python = require('child_process').spawn('py', ['./backend/app.py']);
  python.stdout.on('data', function (data) {
    console.log("data: ", data.toString('utf8'));
  });
  python.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`); // when error
  });

  //this is for opening links within the browser
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  //load the index.html from a url
  win.loadURL('http://localhost:3000');

  // Open the DevTools.
  win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
