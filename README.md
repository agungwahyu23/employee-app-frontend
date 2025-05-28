# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Cara Menjalankan Proyek

1. **Install dependencies**  
    Jalankan perintah berikut di terminal:
    ```bash
    npm install
    ```

2. **Menjalankan aplikasi**  
    Untuk menjalankan aplikasi dalam mode pengembangan:
    ```bash
    npm run dev
    ```

3. **Build untuk produksi**  
    Untuk membuat build produksi:
    ```bash
    npm run build
    ```

4. **Preview build produksi**  
    Untuk melihat hasil build produksi secara lokal:
    ```bash
    npm run preview
    ```

## Struktur Folder

- `src/` — Kode sumber aplikasi React
- `public/` — File statis
- `vite.config.js` — Konfigurasi Vite

## Referensi

- [Dokumentasi Vite](https://vitejs.dev/)
- [Dokumentasi React](https://react.dev/)