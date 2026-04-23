# Bagus Utomo — Personal Website

Website personal Muhamad Bagus Utomo. Dark luxury aesthetic dengan gold accents.

---

## 🚀 Setup & Install

### 1. Pindahkan folder ini ke dalam project VSCode kamu

Struktur folder sudah sesuai dengan project Next.js yang ada di `bagus-utomo/`.

### 2. Install dependencies

```bash
npm install
```

### 3. Jalankan development server

```bash
npm run dev
```

Buka browser ke `http://localhost:3000`

### 4. Deploy ke Vercel

```bash
# Install Vercel CLI (kalau belum)
npm i -g vercel

# Login & deploy
vercel
```

Atau drag-and-drop folder ke dashboard vercel.com

---

## 📁 Struktur File

```
bagus-utomo/
├── app/
│   ├── globals.css          ← Design system, CSS variables, animations
│   ├── layout.tsx           ← Root layout + metadata SEO
│   ├── page.tsx             ← Main page (assembly semua section)
│   ├── components/
│   │   ├── Navbar.tsx       ← Navigasi desktop + mobile hamburger
│   │   ├── Footer.tsx       ← Footer dengan social links
│   │   └── QuoteBanner.tsx  ← Marquee banner gold
│   └── sections/
│       ├── Hero.tsx         ← Hero utama dengan animated stats
│       ├── About.tsx        ← Tentang Bagus + foto
│       ├── Journey.tsx      ← Timeline perjalanan hidup
│       ├── Mentoring.tsx    ← Program mentoring + CTA
│       ├── Testimonials.tsx ← Scrolling testimonials
│       ├── Kerjasama.tsx    ← Opsi kerjasama
│       └── Kontak.tsx       ← Form kontak → WhatsApp
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── postcss.config.js
```

---

## ✏️ Yang Perlu Kamu Update

### 1. Nomor WhatsApp
Cari dan replace semua `62XXXXXXXXXX` dengan nomor WA Bagus (format: 628xxxxxxxxxx):

- `app/sections/Mentoring.tsx` — line ~90
- `app/sections/Kerjasama.tsx` — line ~80
- `app/sections/Kontak.tsx` — line ~60 & ~140
- `app/components/Footer.tsx` — beberapa tempat

### 2. Foto Bagus
Di `app/sections/About.tsx`, cari komentar `{/* Replace this div's content with <img> when photo is ready */}`.

Ganti section tersebut dengan:
```tsx
<img
  src="/bagus-keluarga.jpg"
  alt="Muhamad Bagus Utomo"
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
/>
```

Lalu taruh file foto di folder `public/foto-bagus.jpg`

### 3. Foto Hero (opsional)
Di `app/sections/Hero.tsx`, background saat ini adalah gradient hitam. Kalau mau tambah foto:
```tsx
// Ganti div background dengan:
background: `linear-gradient(to right, rgba(10,10,10,0.9) 40%, transparent), url('/hero-bg.jpg') center/cover`
```

### 4. Testimonial nyata
Di `app/sections/Testimonials.tsx`, ganti array `testimonials` dengan testimonial asli dari mentee.

### 5. Jumlah mentee di Hero Stats
Di `app/sections/Hero.tsx`, cari array stats dan update angka `100+` sesuai data nyata.

---

## 🎨 Warna & Design System

Semua warna ada di `app/globals.css`:

```css
--black: #0a0a0a      ← Background utama
--black-2: #111111    ← Background alternate
--black-3: #1a1a1a    ← Card/element background
--gold: #c9a84c       ← Accent utama
--gold-light: #e8c97a ← Gold hover state
--white: #f5f0e8      ← Text utama (warm white)
--white-dim: rgba(245,240,232,0.6) ← Text secondary
```

Font:
- **Playfair Display** — Heading, serif, editorial
- **DM Sans** — Body, nav, buttons
- **Bebas Neue** — Stats, large numbers, banner

---

## 📱 Responsive

Website sudah responsive untuk:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px–1200px)
- ✅ Mobile (< 768px) — hamburger menu + stacked layout

---

## 🔧 Customisasi Lanjutan

### Tambah section baru
1. Buat file baru di `app/sections/NamaSection.tsx`
2. Import di `app/page.tsx`
3. Tambahkan `id="nama-section"` pada `<section>`
4. Tambahkan link di `Navbar.tsx` array `navLinks`

### Ganti font
Edit `app/globals.css` di baris `@import url(...)` — ganti dengan Google Font lain.

---

Pertanyaan? DM @bil.xander 🔥
