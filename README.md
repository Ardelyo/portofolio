# 🎨 Portofolio Ardellio Satria Anindito

<div align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.23.24-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<br />

<div align="center">
  <h3>✨ Portofolio Premium dengan Desain Horizontal Scrolling ✨</h3>
  <p><i>Dibuat ulang setiap tahun dengan desain yang selalu baru dan segar</i></p>
</div>

---

## 📖 Tentang Proyek Ini

Ini adalah **website portofolio pribadi** yang saya buat untuk menampilkan karya, proyek, dan tulisan saya. Yang unik dari portofolio ini adalah:

- 🔄 **Dibuat ulang setiap tahun** - Setiap akhir tahun, saya mendesain ulang portofolio dengan konsep yang benar-benar baru
- 🎭 **Desain yang selalu berbeda** - Tidak ada dua versi yang sama, setiap tahun punya karakteristik uniknya sendiri
- 🚀 **Teknologi modern** - Menggunakan teknologi web terkini untuk pengalaman terbaik
- 🌐 **Dua bahasa** - Mendukung Bahasa Indonesia dan Bahasa Inggris

### 🎯 Konsep Desain Tahun Ini

Portofolio tahun ini menggunakan konsep **"Novelist Theme"** dengan karakteristik:

- **Horizontal Scrolling** - Navigasi dengan scroll vertikal yang menggerakkan konten secara horizontal
- **Monochromatic** - Palet warna hitam-putih yang elegan dan timeless
- **Typography-focused** - Fokus pada tipografi yang indah dan mudah dibaca
- **Smooth Animations** - Animasi halus menggunakan Framer Motion
- **Custom Cursor** - Kursor kustom yang interaktif (khusus desktop)
- **Minimalist & Premium** - Desain minimalis tapi terasa mewah dan profesional

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|-----------|----------|
| **React 19** | Library JavaScript untuk membangun user interface |
| **TypeScript** | Menambahkan type safety pada JavaScript |
| **Vite** | Build tool yang super cepat untuk development |
| **Framer Motion** | Library animasi untuk membuat gerakan yang smooth |
| **Lucide React** | Icon library yang modern dan ringan |

---

## 🚀 Cara Menjalankan Proyek

### Prasyarat

Pastikan kamu sudah menginstal:
- **Node.js** (versi 16 atau lebih baru)
- **npm** atau **yarn**

### Langkah-langkah

1. **Clone atau download proyek ini**
   ```bash
   git clone <repository-url>
   cd portofolio
   ```

2. **Install semua dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka di browser**
   - Biasanya akan berjalan di `http://localhost:5173`
   - Vite akan otomatis membuka browser untuk kamu

### Perintah Lainnya

```bash
# Build untuk production
npm run build

# Preview hasil build
npm run preview
```

---

## 📁 Struktur Proyek

```
portofolio/
├── components/           # Komponen-komponen React
│   ├── Hero.tsx         # Bagian pembuka/landing
│   ├── About.tsx        # Bagian tentang saya
│   ├── Projects.tsx     # Showcase proyek-proyek
│   ├── Writings.tsx     # Showcase tulisan/artikel
│   ├── Footer.tsx       # Bagian footer
│   ├── DetailOverlay.tsx # Modal detail proyek/tulisan
│   └── LanguageSwitch.tsx # Tombol ganti bahasa
├── App.tsx              # Komponen utama aplikasi
├── LanguageContext.tsx  # Context untuk multi-bahasa
├── constants.ts         # Data konten (proyek, tulisan, dll)
├── types.ts             # TypeScript type definitions
├── index.tsx            # Entry point aplikasi
├── index.html           # HTML template
├── vite.config.ts       # Konfigurasi Vite
└── package.json         # Dependencies dan scripts
```

---

## ✨ Fitur-fitur Utama

### 🎨 Horizontal Scrolling
- Scroll vertikal menggerakkan konten horizontal
- Smooth animation dengan physics-based motion
- Progress bar di bawah untuk indikator posisi

### 🌍 Multi-bahasa
- Bahasa Indonesia & Bahasa Inggris
- Toggle mudah dengan tombol di pojok kanan atas
- Semua konten diterjemahkan

### 🖱️ Custom Cursor (Desktop)
- Kursor kustom yang mengikuti mouse
- Berubah saat hover pada elemen yang bisa diklik
- Otomatis dinonaktifkan di perangkat mobile

### 📱 Responsive Design
- Tampil sempurna di desktop, tablet, dan mobile
- Optimasi khusus untuk perangkat sentuh
- Menggunakan `dvh` untuk mobile viewport yang akurat

### 🎭 Detail Overlay
- Klik proyek atau tulisan untuk melihat detail lengkap
- Modal fullscreen dengan animasi smooth
- Menampilkan gambar, deskripsi, teknologi, dan link

### ⚡ Performance
- Fast refresh saat development
- Optimized bundle untuk production
- Lazy loading untuk gambar dan konten

---

## 🎨 Kustomisasi Konten

Untuk mengubah konten portofolio, edit file `constants.ts`:

```typescript
// Tambah/edit proyek
export const projects: Project[] = [
  {
    id: 1,
    title: "Nama Proyek",
    description: "Deskripsi singkat",
    longDescription: "Deskripsi panjang...",
    image: "URL gambar",
    technologies: ["React", "TypeScript"],
    link: "https://...",
    github: "https://github.com/..."
  }
];

// Tambah/edit tulisan
export const writings: Writing[] = [
  {
    id: 1,
    title: "Judul Tulisan",
    excerpt: "Ringkasan...",
    content: "Konten lengkap...",
    date: "2025-01-01",
    readTime: "5 min",
    link: "https://..."
  }
];
```

---

## 🎯 Filosofi Desain Tahunan

Setiap tahun, saya mendesain ulang portofolio ini dengan pendekatan:

1. **Refleksi** - Melihat kembali apa yang berhasil dan tidak dari tahun sebelumnya
2. **Eksplorasi** - Mencoba trend desain baru dan teknologi terkini
3. **Eksperimen** - Mengimplementasikan ide-ide kreatif yang belum pernah dicoba
4. **Evolusi** - Meningkatkan skill dan mencoba hal-hal di luar zona nyaman

### 🗓️ Riwayat Versi

| Tahun | Tema | Teknologi Utama |
|-------|------|-----------------|
| 2025 | Novelist - Horizontal Scrolling | React 19, Framer Motion |
| 2024 | *(Versi sebelumnya)* | - |
| 2023 | *(Versi sebelumnya)* | - |

> **Note**: Setiap versi disimpan di branch terpisah untuk dokumentasi

---

## 🤝 Kontribusi

Meskipun ini adalah portofolio pribadi, saya terbuka untuk:
- 🐛 Laporan bug
- 💡 Saran perbaikan
- 🎨 Ide desain
- 📝 Koreksi typo atau terjemahan

Silakan buat **Issue** atau **Pull Request** jika ada yang ingin dikontribusikan!

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pribadi. Kamu bebas untuk:
- ✅ Melihat kode untuk belajar
- ✅ Menggunakan sebagai referensi
- ✅ Fork untuk proyek pribadi

Tapi mohon untuk:
- ❌ Tidak mengcopy mentah-mentah untuk portofolio kamu
- ❌ Tidak menggunakan konten pribadi saya (foto, teks, proyek)

---

## 📬 Kontak

Jika ada pertanyaan atau ingin berdiskusi tentang proyek ini:

- 🌐 Website: [Lihat di portofolio](https://...)
- 💼 LinkedIn: [Ardellio Satria Anindito](https://...)
- 📧 Email: [your-email@example.com](mailto:your-email@example.com)
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)

---

<div align="center">
  <p><b>Dibuat dengan ❤️ dan ☕ oleh Ardellio Satria Anindito</b></p>
  <p><i>Versi 2025 - Novelist Theme</i></p>
  <p>⭐ Jika kamu suka proyek ini, berikan star ya! ⭐</p>
</div>
