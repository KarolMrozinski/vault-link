<div align="center">

  <br />
  <h1 align="center"><b>VaultLink UI</b></h1>
  <p align="center">
    <b>A high-performance, local-first bookmark & web resource management system.</b>
    <br />
    Inspired by Samsung One UI 9.5 Desktop Design Language.
  </p>

  <p align="center">
    <a href="https://electronjs.org">
      <img src="https://img.shields.io/badge/Electron-28.0+-47A248?style=for-the-badge&logo=electron&logoColor=white" alt="Electron" />
    </a>
    <a href="https://nodejs.org">
      <img src="https://img.shields.io/badge/Node.js-18.x+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    </a>
    <a href="https://developer.mozilla.org">
      <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    </a>
    <a href="https://samsung.com">
      <img src="https://img.shields.io/badge/UI_UX-One_UI_9.5-007AFF?style=for-the-badge" alt="One UI 9.5" />
    </a>
    <a href="LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
    </a>
  </p>

  <br />

  <a href="#-key-features">Key Features</a> •
  <a href="#-architecture--tech-stack">Architecture</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-data-persistence">Data Storage</a> •
  <a href="#-license">License</a>

  <br />
  <br />

</div>

---

## ⚡ Overview

**VaultLink UI** is an ultra-fast, privacy-centric desktop application for organizing, previewing, and managing bookmarks, media streams, and web documentation. 

Unlike traditional cloud-based bookmark managers, VaultLink UI utilizes a **Zero-Cloud, File-System First Architecture**. Every bookmark, folder, and configuration state is persisted natively on your local drive as isolated JSON files.

---

## ✨ Key Features

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🎨 One UI 9.5 Desktop Experience</h3>
      <p>Polished dark mode aesthetic with glassmorphism accents, fluid hover states, and intuitive drag-and-drop file organization.</p>
    </td>
    <td width="50%" valign="top">
      <h3>🔒 Local-First Storage</h3>
      <p>Zero cloud reliance, zero tracking. All your data lives locally inside <code>Documents/MojeLinki_Baza</code> as clean JSON objects.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>⚡ Instant Hover Live Preview</h3>
      <p>Non-blocking native <code>&lt;webview&gt;</code> engine renders live web pages in real-time in the top-right view pane with zero latency.</p>
    </td>
    <td width="50%" valign="top">
      <h3>🛡️ Smart URL Normalization</h3>
      <p>Built-in anti-duplicate detection normalizes incoming links to prevent accidental double saves automatically.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🎬 Intelligent Media Resolver</h3>
      <p>Auto-detects platforms like YouTube & Vimeo to extract high-definition poster thumbnails and media metadata on the fly.</p>
    </td>
    <td width="50%" valign="top">
      <h3>📦 Portable Vault Backups</h3>
      <p>Export your full bookmark hierarchy into a single portable <code>.vault</code> file for quick migration across environments.</p>
    </td>
  </tr>
</table>

---

## 🏗️ Architecture & Tech Stack

VaultLink UI implements modern Electron security standards, isolating the rendering environment from backend Node.js APIs via a secure context bridge.

```
┌────────────────────────────────────────────────────────┐
│                   VaultLink UI App                     │
├──────────────────────────┬─────────────────────────────┤
│   Renderer Process       │      Main Process           │
│  (HTML5 / CSS3 / ES6)    │       (Node.js / fs)        │
│                          │                             │
│  - One UI 9.5 Dashboard  │  - Native File Operations   │
│  - Hover Live Preview    │  - Disk IPC Handlers        │
│  - Drag & Drop System    │  - App Lifecycle Control    │
└─────────────▲────────────┴──────────────▲──────────────┘
              │                           │
              └──────► Preload Bridge ────┘
                      (contextBridge)
```

* **Frontend**: HTML5, CSS3 Custom Properties, Vanilla JavaScript (ES6+), FontAwesome 6
* **Desktop Core**: Electron v28.0+
* **IPC Security**: Context Isolation Enabled (`preload.js`), Node Integration Disabled in Renderer

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0.0 or higher) installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/VaultLink-UI.git
   cd VaultLink-UI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Launch the application:**
   ```bash
   npm start
   ```

---

## 📁 Repository Structure

```
VaultLink-UI/
├── main.js        # Main Electron Process (Window & I/O management)
├── preload.js     # Secure ContextBridge API wrapper
├── index.html     # Single-page UI & Application Engine
├── package.json   # Node.js configuration & dependencies
├── .gitignore     # Git exclusion parameters
└── README.md      # Repository Documentation
```

---

## 💾 Data Persistence

Upon first launch, VaultLink UI initializes a native storage folder on your local file system:

| OS | Default Storage Path |
| :--- | :--- |
| **Windows** | `C:\Users\<Username>\Documents\MojeLinki_Baza\` |
| **macOS** | `/Users/<Username>/Documents/MojeLinki_Baza/` |
| **Linux** | `/home/<Username>/Documents/MojeLinki_Baza/` |

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for full details.