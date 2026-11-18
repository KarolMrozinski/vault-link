const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const DATA_DIR = path.join(app.getPath('documents'), 'MojeLinki_Baza');
const TRASH_DIR = path.join(DATA_DIR, '.kosz');
const THUMB_DIR = path.join(DATA_DIR, '.thumbnails');

function ensureDirectoriesExist() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(TRASH_DIR)) fs.mkdirSync(TRASH_DIR, { recursive: true });
  if (!fs.existsSync(THUMB_DIR)) fs.mkdirSync(THUMB_DIR, { recursive: true });
}

function createWindow() {
  ensureDirectoriesExist();

  const win = new BrowserWindow({
    width: 1280,
    height: 850,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: true
    },
    title: "VaultLink UI"
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('read-links-from-disk', async () => {
  ensureDirectoriesExist();
  const result = { folders: [], links: [], trash: [] };

  try {
    const files = fs.readdirSync(DATA_DIR);
    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(DATA_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(content);

        if (parsed.type === 'folder') {
          result.folders.push(parsed.data);
        } else if (parsed.type === 'link') {
          result.links.push(parsed.data);
        }
      }
    }

    if (fs.existsSync(TRASH_DIR)) {
      const trashFiles = fs.readdirSync(TRASH_DIR);
      for (const file of trashFiles) {
        if (file.endsWith('.json')) {
          const filePath = path.join(TRASH_DIR, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          result.trash.push(JSON.parse(content));
        }
      }
    }
  } catch (err) {
    console.error("Błąd odczytu z dysku:", err);
  }

  return result;
});

ipcMain.handle('save-item-to-disk', async (event, payload) => {
  ensureDirectoriesExist();
  const { type, data } = payload;
  const fileName = `${type}_${data.id}.json`;
  const filePath = path.join(DATA_DIR, fileName);

  fs.writeFileSync(filePath, JSON.stringify({ type, data }, null, 2), 'utf-8');
  return true;
});

ipcMain.handle('move-to-trash-disk', async (event, payload) => {
  ensureDirectoriesExist();
  const { type, item } = payload;
  const fileName = `${type}_${item.id}.json`;
  const oldPath = path.join(DATA_DIR, fileName);
  const newPath = path.join(TRASH_DIR, fileName);

  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
  } else {
    fs.writeFileSync(newPath, JSON.stringify({ type, item }, null, 2), 'utf-8');
  }
  return true;
});

ipcMain.handle('restore-from-trash-disk', async (event, payload) => {
  ensureDirectoriesExist();
  const { type, item } = payload;
  const fileName = `${type}_${item.id}.json`;
  const trashPath = path.join(TRASH_DIR, fileName);
  const mainPath = path.join(DATA_DIR, fileName);

  if (fs.existsSync(trashPath)) {
    fs.renameSync(trashPath, mainPath);
  } else {
    fs.writeFileSync(mainPath, JSON.stringify({ type, data: item }, null, 2), 'utf-8');
  }
  return true;
});

ipcMain.handle('delete-permanently-disk', async (event, payload) => {
  ensureDirectoriesExist();
  const { type, item } = payload;
  const fileName = `${type}_${item.id}.json`;
  const trashPath = path.join(TRASH_DIR, fileName);

  if (fs.existsSync(trashPath)) {
    fs.unlinkSync(trashPath);
  }
  return true;
});

ipcMain.handle('empty-trash-disk', async () => {
  ensureDirectoriesExist();
  if (fs.existsSync(TRASH_DIR)) {
    const files = fs.readdirSync(TRASH_DIR);
    for (const file of files) {
      fs.unlinkSync(path.join(TRASH_DIR, file));
    }
  }
  return true;
});

ipcMain.handle('open-external-url', async (event, url) => {
  const { shell } = require('electron');
  shell.openExternal(url);
  return true;
});