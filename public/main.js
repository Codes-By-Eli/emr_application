const { app, BrowserWindow } = require('electron');
const { shell } = require('electron');
const isDev = require("electron-is-dev");
const path = require('path');
const url = require("url");

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
  /*
  var python = require('child_process').spawn('py', ['./backend/app.py']);
  python.stdout.on('data', function (data) {
    console.log("data: ", data.toString('utf8'));
  });
  python.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`); // when error
  });
  */
  
  let backend;
  backend = path.join(__dirname, '..', '..' ,'backend', 'app.exe')
  //backend = "../backend/app.exe"
  console.log(backend);
  var execfile = require('child_process').execFile;
  execfile(
  backend,
  {
    windowsHide: false,
  },
  (err, stdout, stderr) => {
    if (err) {
    console.log(err);
    }
    if (stdout) {
    console.log(stdout);
    }
    if (stderr) {
    console.log(stderr);
    }
  }
  )
  
  /*
  const { exec } = require('child_process');
  exec(`taskkill /f /t /im app.exe`, (err, stdout, stderr) => {
  if (err) {
    console.log(err)
  return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  });
  */
  //this is for opening links within the browser
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  //load the index.html from a url
  const appURL = app.isPackaged
        ? url.format({
            pathname: path.join(__dirname, "index.html"),
            protocol: "file:",
            slashes: true,
        })
        : "http://localhost:3000";
    win.loadURL(appURL);

    if (!app.isPackaged) {
        win.webContents.openDevTools();
    }
    else
    {
      //win.webContents.openDevTools();
    }



  // Open the DevTools.
  //win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  
  const { exec } = require('child_process');
  exec(`taskkill /f /t /im app.exe`, (err, stdout, stderr) => {
  if (err) {
    console.log(err)
  return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
  });
  
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
