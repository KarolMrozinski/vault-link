<div align="center">

# ⚡ VaultLink UI

**A high-performance, local-first bookmark & web resource manager inspired by Samsung One UI 9.5.**

[![Electron](https://img.shields.io/badge/Electron-28.0+-47A248?style=for-the-badge&logo=electron&logoColor=white)](https://electronjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-18.x+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![UI Design](https://img.shields.io/badge/UI-One_UI_9.5-007AFF?style=for-the-badge)](https://samsung.com)
[![License](https://img.shields.io/badge/License-MIT-green.style=for-the-badge)](LICENSE)

[Features](#-features) • [Architecture](#-architecture--technologies) • [Quick Start](#-quick-start) • [Data Structure](#-data-storage-location)

---

</div>

## ⚡ About The Project

**VaultLink UI** is a privacy-focused, desktop bookmark and resource management app built with **Electron**. It provides instant access to web links, documentation, and video resources without relying on cloud services.

Unlike traditional cloud bookmark managers, **VaultLink UI operates directly on your local file system**. Each link, folder, and system configuration is saved as an independent, isolated `.json` file, ensuring complete data ownership and zero telemetry.

---

## ✨ Features

* 🎨 **One UI 9.5 Aesthetic**: Premium dark-mode interface built with modern CSS variables, fluid typography, and Samsung-inspired components.
* 📂 **Local-First Architecture (Zero-Cloud)**: All bookmarks and folder structures are automatically synchronized to a dedicated local directory (`Documents/MojeLinki_Baza`). Your data remains accessible even offline.
* ⚡ **Instant Hover Live Preview**: Hovering over any card triggers an isolated, zero-latency `<webview>` live preview engine in the top-right corner.
* 🚫 **Anti-Duplicate Shield**: Built-in URL normalization engine that prevents duplicate bookmark entries.
* 🎬 **Media Preview Auto-Resolver**: Automatically detects video resources (e.g., YouTube) and extracts HD video posters with multimedia playback overlays.
* 📦 **Database Backup (.vault)**: Export and import your entire library (bookmarks, folders, and trash) to a single `.vault` backup file.
* 🗑️ **Trash Manager & Drag-and-Drop**: Organize cards into folders or drag them to the Trash zone with full recovery support.

---

## 🛠 Architecture & Technologies

VaultLink UI follows strict Electron security practices:

* **Electron.js**: Core desktop application container.
* **Context Isolation & Preload Bridge**: Complete separation of the `Renderer Process` from Node.js system APIs via a secure `contextBridge` (`preload.js`).
* **IPC (Inter-Process Communication)**: Asynchronous I/O file operations.
* **HTML5 / CSS3 / ES6+ JavaScript**: Native frontend implementation for maximum frame rate and responsiveness.
* **FontAwesome 6**: Unified icon system.

---

## 🚀 Quick Start

### Prerequisites

* [Node.js](https://nodejs.org/) (LTS version recommended).

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/VaultLink-UI.git
   cd VaultLink-UI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
VaultLink-UI/
├── main.js        # Electron Main Process (Window lifecycle & filesystem I/O)
├── preload.js     # Secure IPC bridge (ContextBridge)
├── index.html     # User Interface (One UI 9.5 Layout + Frontend Logic)
├── package.json   # Project manifest & Node.js dependencies
├── .gitignore     # Git repository exclusion rules
└── README.md      # Project documentation
```

---

## 💾 Data Storage Location

Upon first launch, VaultLink UI automatically generates the local storage hierarchy on your machine:

* **Windows**: `C:\Users\<Username>\Documents\MojeLinki_Baza\`
* **macOS**: `/Users/<Username>/Documents/MojeLinki_Baza/`
* **Linux**: `/home/<Username>/Documents/MojeLinki_Baza/`

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.