<div align="center">

  <br />
  <img src="https://img.icons8.com/fluency/96/shield-alt.png" alt="VaultLink UI Logo" width="80" />
  <h1>VaultLink UI</h1>
  <p><strong>Nowoczesny, bezpieczny menedżer zakładek i zasobów webowych inspirowany Samsung One UI 9.5</strong></p>

  <p>
    <a href="#-główne-funkcje">Cechy</a> •
    <a href="#-architektura-i-technologie">Architektura</a> •
    <a href="#-instalacja-i-uruchomienie">Szybki Start</a> •
    <a href="#-struktura-danych">Struktura Danych</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Electron-28.0+-47848F?style=for-the-badge&logo=electron&logoColor=white" alt="Electron" />
    <img src="https://img.shields.io/badge/Node.js-18.x+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.JS" />
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS" />
    <img src="https://img.shields.io/badge/UI-OneUI%209.5-007AFF?style=for-the-badge" alt="OneUI" />
    <img src="https://img.shields.io/badge/License-MIT-green.style=for-the-badge" alt="License" />
  </p>

  <br />

  <!-- Tutaj możesz umieścić zrzut ekranu lub GIF z działającej aplikacji -->
  <img src="https://via.placeholder.com/1200x650/121212/007AFF?text=VaultLink+UI+-+One+UI+9.5+Desktop+Dashboard" alt="VaultLink UI Preview" width="100%" style="border-radius: 16px; box-shadow: 0 12px 32px rgba(0,0,0,0.5);" />

</div>

<br />

---

## ⚡ O Projekcie

**VaultLink UI** to wydajna, stacjonarna aplikacja desktopowa zbudowana w oparciu o framework **Electron**, stawiająca na 100% prywatności oraz natychmiastowy dostęp do ulubionych zakładek, materiałów wideo i dokumentacji.

W przeciwieństwie do tradycyjnych menedżerów zakładek w chmurze, **VaultLink UI operuje bezpośrednio na Twoim lokalnym systemie plików**, tworząc trwałe, odseparowane pliki `.json` dla każdego zasobu.

---

## ✨ Główne Funkcje

* 🎨 **One UI 9.5 Aesthetic**: Dopracowany, ciemny interfejs zgodny z najnowszymi wytycznymi stylistycznymi systemów mobilnych i desktopowych.
* 📂 **Lokalny System Zapisów (Zero-Cloud)**: Wszelkie linki i struktura folderów zapisują się automatycznie w dedykowanym katalogu `Dokumenty/MojeLinki_Baza`. Wyłączenie komputera nie powoduje utraty danych.
* ⚡ **Instant Hover Live Preview**: Najechanie myszką na kafel wywołuje dwuwarstwowy, zerolatencyjny silnik podglądu witryny w prawym górnym rogu z wykorzystaniem wyizolowanego procesu `<webview>`.
* 🚫 **Anti-Duplicate Shield**: Inteligentny mechanizm normalizacji adresów URL chroniący bazę przed powielaniem tych samych linków.
* 🎬 **Media Preview Auto-Resolver**: Automatyczne wykrywanie linków wideo (np. YouTube) i generowanie dedykowanych miniatur HD z nakładką multimedialną.
* 📦 **Eksport i Import (.vault)**: Tworzenie spójnych kopii zapasowych całej struktury bazy (linki, foldery, kosz) do jednego pliku z możliwością szybkiego przywrócenia na innym urządzeniu.
* 🗑️ **Trash Manager & Drag-and-Drop**: Wygodne organizowanie kafelków i folderów za pomocą gestów przeciągnij-i-upuść oraz bezpieczna strefa odzyskiwania elementów z Kosza.

---

## 🛠 Architektura i Technologie

Aplikacja została zaprojektowana z zachowaniem rygorystycznych standardów bezpieczeństwa Electrona:

* **Electron.js** – Główny kontener aplikacji desktopowej.
* **Context Isolation & Preload Bridge** – Odseparowanie warstwy widoku (`Renderer Process`) od zasobów Node.js (`Main Process`) za pomocą bezpiecznego mostka `contextBridge` (`preload.js`).
* **IPC (Inter-Process Communication)** – Asynchroniczne operacje I/O w systemie plików OS.
* **HTML5 / CSS3 (Custom Variables) / ES6+ JavaScript** – Czysty, bezframeworkowy kod frontendowy o najwyższej wydajności renderingu.
* **FontAwesome 6** – Spójny system ikonografii.

---

## 🚀 Instalacja i Uruchomienie

### Wymagania wstępne
* Zainstalowane środowisko [Node.js](https://nodejs.org/) (wersja LTS zalecana).

### Krok po kroku

1. **Sklonuj repozytorium:**
   ```bash
   git clone https://github.com/TwojNick/VaultLink-UI.git
   cd VaultLink-UI
   ```

2. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

3. **Uruchom aplikację:**
   ```bash
   npm start
   ```

---

## 📁 Struktura Projektu

```text
VaultLink-UI/
├── main.js        # Proces główny Electrona (zarządzanie oknami, system plików Node.js)
├── preload.js     # Bezpieczny mostek komunikacyjny IPC (ContextBridge)
├── index.html     # Interfejs użytkownika (One UI 9.5 Layout + Logika Frontendu)
├── package.json   # Konfiguracja projektu i zależności Node.js
└── README.md      # Dokumentacja projektu
```

---

## 💾 Lokalizacja Danych w Systemie

Podczas pierwszego uruchomienia aplikacja automatycznie tworzy strukturę katalogów na Twoim dysku:

* **Windows**: `C:\Users\<NazwaUżytkownika>\Documents\MojeLinki_Baza\`
* **macOS**: `/Users/<NazwaUżytkownika>/Documents/MojeLinki_Baza/`
* **Linux**: `/home/<NazwaUżytkownika>/Documents/MojeLinki_Baza/`

---

## 📜 Licencja

Projekt udostępniany na licencji **MIT**. Szczegóły znajdziesz w pliku `LICENSE`.

---

<div align="center">
  <p>Stworzone z pasją do wydajnego oprogramowania i minimalistycznego designu.</p>
</div>