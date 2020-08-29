/* eslint-disable import/no-extraneous-dependencies */
import { app, BrowserWindow } from 'electron';
import { resolve } from 'path';
import { format } from 'url';

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    show: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000');
  } else {
    mainWindow.loadURL(
      format({
        pathname: resolve(__dirname, 'renderer', 'index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }

  mainWindow.maximize();
  mainWindow.show();
};

app.on('ready', createWindow);
app.allowRendererProcessReuse = true;
