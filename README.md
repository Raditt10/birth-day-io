# Birth-Day.IO

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**Birth-Day.IO** adalah aplikasi web sederhana namun bermakna yang memungkinkan pengguna membuat halaman ucapan ulang tahun yang dipersonalisasi. Aplikasi ini menghasilkan tautan unik yang berisi hitung mundur (countdown) menuju tanggal ulang tahun, dan akan menampilkan kartu ucapan spesial beserta animasi ketika waktu yang ditentukan telah tiba.

## 📌 Deskripsi Project
Project ini dibuat untuk memberikan cara yang unik dan digital dalam merayakan ulang tahun teman, keluarga, atau pasangan.
* **Generate Link:** Pengguna memasukkan nama, tanggal ulang tahun, dan pesan ucapan.
* **Countdown Mode:** Jika tautan dibuka sebelum tanggal ulang tahun, halaman akan menampilkan hitung mundur waktu secara real-time.
* **Celebration Mode:** Tepat pada waktunya, halaman akan berubah menampilkan pesan ucapan yang telah dibuat.

## 🛠️ Tech Stack
Teknologi yang digunakan dalam pengembangan aplikasi ini:

* **Frontend Framework:** React.js
* **Routing:** React Router DOM (untuk manajemen navigasi antar halaman)
* **Styling:** CSS3 (Custom styling & responsive design)
* **Build Tool:** Create React App (CRA)
* **Deployment:** Netlify (Terintegrasi dengan `netlify.toml`)

## 🚀 Fitur Utama
* **Pembuat Tautan Kustom**: Form input untuk membuat link unik berdasarkan parameter URL.
* **Hitung Mundur Real-time**: Timer presisi yang menghitung hari, jam, menit, dan detik.
* **Auto-Redirect**: Logika otomatis yang memeriksa apakah waktu ulang tahun sudah tiba untuk mengganti tampilan dari countdown ke ucapan.
* **Tampilan Responsif**: Desain yang menyesuaikan dengan layar desktop maupun smartphone.
* **Interaktif**: Efek visual sederhana untuk memeriahkan ucapan.

## 📸 Preview Aplikasi

| Halaman Generate | Halaman Countdown | Halaman Ucapan (Wish) |
| :---: | :---: | :---: |
| ![Generate Link](screenshots/generate.png) | ![Countdown Timer](screenshots/countdown.png) | ![Wish Card](screenshots/wishPage.png) |

## 📁 Struktur Folder
Gambaran struktur direktori utama project ini:

```text
birth-day-io/
├── public/
│   ├── index.html         # HTML Entry point
│   ├── manifest.json      # Konfigurasi PWA
│   └── _redirects         # Konfigurasi redirect Netlify (SPA support)
├── src/
│   ├── App.js             # Komponen utama
│   ├── RouterBirthday.jsx # Konfigurasi routing aplikasi
│   ├── Generate.jsx       # Halaman form pembuatan link
│   ├── Countdown.jsx      # Halaman hitung mundur
│   ├── Wish.jsx           # Halaman kartu ucapan akhir
│   ├── Birthday.jsx       # Logika pembungkus (Wrapper)
│   ├── App.css            # Style global aplikasi
│   └── index.js           # Entry point React
├── screenshots/           # Aset gambar untuk dokumentasi
├── netlify.toml           # Konfigurasi deployment Netlify
└── package.json           # Daftar dependensi project

```

## ⚙️ Instalasi & Setup

Ikuti langkah berikut untuk menjalankan project di komputer lokal:

### Prasyarat

* Node.js & NPM terinstall di komputer Anda.

### Langkah Instalasi

1. **Clone Repository**
```bash
git clone [https://github.com/Raditt10/birth-day-io.git](https://github.com/Raditt10/birth-day-io.git)
cd birth-day-io

```


2. **Instal Dependensi**
```bash
npm install
# atau jika menggunakan pnpm
pnpm install

```


3. **Jalankan Aplikasi**
```bash
npm start

```


Aplikasi akan berjalan di `http://localhost:3000`.

## 🌐 Cara Penggunaan (Generate Link)

1. Buka halaman utama (Route `/`).
2. Isi **Nama** orang yang berulang tahun.
3. Pilih **Tanggal Lahir**.
4. Tuliskan **Pesan/Ucapan** spesial Anda.
5. Klik tombol **Generate Link**.
6. Salin URL yang muncul dan kirimkan kepada orang tersebut!

## ☁️ Deployment (Netlify)

Project ini sudah dikonfigurasi untuk deployment mudah ke Netlify.

1. Pastikan file `netlify.toml` dan `public/_redirects` ada (penting untuk menangani *client-side routing* pada React).
2. Hubungkan repository GitHub Anda ke Netlify.
3. Deploy site.

## 🤝 Kontribusi

Jika Anda memiliki ide fitur baru atau perbaikan tampilan:

1. Fork repository ini.
2. Buat branch baru.
3. Commit perubahan Anda.
4. Push ke branch tersebut.
5. Buat Pull Request.

## 📄 Lisensi

Project ini dilisensikan di bawah **MIT License**.

---

*Dibuat dengan ❤️ oleh [Raditt10]*

```

```
