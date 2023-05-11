import { app, BrowserWindow } from 'electron';

function handleRestartApp() {
  app.relaunch();
  app.quit();
}

async function handleSetTitle(event, title) {
  const webContents = event.sender;
  const win = BrowserWindow.fromWebContents(webContents);
  win.setTitle(title);
  return title;
}

export default {
  addHandlers: (ipcMain) => {
    ipcMain.handle('system:restartApp', handleRestartApp);
    ipcMain.handle('system:setTitle', handleSetTitle);
  },
};
