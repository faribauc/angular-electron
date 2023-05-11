import { ipcRenderer } from 'electron';

// Core
export function restartApp() {
  ipcRenderer.invoke('system:restartApp');
}

// General Purpose
export function setTitle(title) {
  ipcRenderer.invoke('system:setTitle', title);
}
