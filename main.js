// ===== main.js =====
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});


const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js') // optional
    }
  });

  win.loadFile('src/index.html');  // open our UI
}

app.whenReady().then(createWindow);

// macOS boilerplate: re-create window when dock icon is clicked
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// quit when all windows closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
