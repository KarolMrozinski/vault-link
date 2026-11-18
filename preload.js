const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  readLinksFromDisk: () => ipcRenderer.invoke('read-links-from-disk'),
  saveItemToDisk: (payload) => ipcRenderer.invoke('save-item-to-disk', payload),
  moveToTrashDisk: (payload) => ipcRenderer.invoke('move-to-trash-disk', payload),
  restoreFromTrashDisk: (payload) => ipcRenderer.invoke('restore-from-trash-disk', payload),
  deletePermanentlyDisk: (payload) => ipcRenderer.invoke('delete-permanently-disk', payload),
  emptyTrashDisk: () => ipcRenderer.invoke('empty-trash-disk'),
  openExternalUrl: (url) => ipcRenderer.invoke('open-external-url', url)
});