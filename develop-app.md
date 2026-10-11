PRODUCT REQUIREMENTS DOCUMENT

Produk: Bantuin
Versi: 2.0
Status: MVP Development

DESKRIPSI PRODUK

Bantuin adalah web yang membantu pengguna yang masih kesulitan menggunakan teknologi.

Pengguna dapat mencari tutorial seperti cara mengirim PDF, upload file, menggunakan WhatsApp, atau membuat email. Setelah memilih tutorial, pengguna akan mengikuti panduan secara langkah demi langkah sampai selesai.

MASALAH

Banyak pengguna masih bingung saat melakukan aktivitas digital sederhana.

Masalah yang sering terjadi:

Tidak tahu harus mulai dari mana.
Tidak tahu tombol yang harus ditekan.
Tutorial di internet terlalu panjang.
Bahasa tutorial terlalu sulit dipahami.
Pengguna bingung ketika melakukan kesalahan.
SOLUSI

Bantuin menyederhanakan tutorial menjadi langkah kecil.

Alur utama:

User mencari kebutuhan
↓
Memilih tutorial
↓
Memilih perangkat
↓
Mengikuti langkah satu per satu
↓
Melihat progress
↓
Mendapat bantuan jika bingung
↓
Tutorial selesai

TARGET PENGGUNA

Pengguna yang masih memiliki kemampuan digital dasar atau sering kesulitan menggunakan teknologi.

Contoh kebutuhan:

Cara kirim PDF
Cara upload file
Cara menggunakan WhatsApp
Cara membuat email
Cara download file

TUJUAN PRODUK

Membantu pengguna menyelesaikan aktivitas digital dengan cara yang lebih mudah dipahami.

Tujuan portfolio:

Menunjukkan kemampuan dalam:

Frontend development
Component architecture
Responsive design
State management
User experience
Accessibility
TypeScript

FITUR UTAMA

A. HOME PAGE

Route: /

Menampilkan:

Navbar
Hero section
Search tutorial
Kategori tutorial
Tutorial populer

Hero text:

"Bingung cara melakukan sesuatu di HP?"

"Cari caranya. Ikuti langkahnya."

B. SEARCH TUTORIAL

User dapat mencari tutorial menggunakan kata kunci.

Contoh:

"kirim PDF"
"upload file"
"buat email"

Sistem menampilkan tutorial yang sesuai.

C. TUTORIAL STEP-BY-STEP

Route:

/tutorial/[slug]

Tutorial menampilkan satu langkah dalam satu waktu.

Contoh:

Tutorial:
Cara Mengirim PDF lewat WhatsApp

Step 2 dari 5

"Buka WhatsApp dan pilih percakapan orang yang ingin kamu kirimi file."

Tersedia:

Gambar panduan
Progress bar
Tombol kembali
Tombol selanjutnya

D. DEVICE SELECTOR

Sebelum memulai tutorial, user memilih perangkat:

Android
iPhone
Laptop

Tutorial dapat menampilkan panduan sesuai perangkat yang dipilih.

E. PROGRESS

User dapat melihat progress tutorial.

Status:

Belum dimulai
Sedang dikerjakan
Selesai

Route:

/progress

Menampilkan:

Tutorial yang sedang dikerjakan
Tutorial yang sudah selesai
Persentase progress

F. SAYA MASIH BINGUNG

Tersedia tombol:

"Saya Masih Bingung"

Saat ditekan, tampilkan pilihan:

Saya tidak menemukan tombolnya
Saya tidak tahu harus klik apa
Saya salah melakukan langkah

Sistem menampilkan bantuan sederhana sesuai masalah yang dipilih.

G. ACCESSIBILITY

Fitur:

Ukuran teks:
Normal
Besar
Sangat besar

Kontras:
Normal
Tinggi

Motion:
Normal
Reduced motion

Website harus mendukung:

Keyboard navigation
Focus state
Semantic HTML
Responsive design

H. ADMIN SEDERHANA

Route:

/admin

Fitur:

Melihat daftar tutorial
Tambah tutorial
Edit tutorial
Hapus tutorial

Tahap awal hanya menggunakan data dummy.

USER FLOW

HOME
↓
SEARCH
↓
PILIH TUTORIAL
↓
PILIH PERANGKAT
↓
STEP 1
↓
STEP BERIKUTNYA
↓
PROGRESS UPDATE
↓
SELESAI

Jika bingung:

TUTORIAL
↓
SAYA MASIH BINGUNG
↓
PILIH MASALAH
↓
BANTUAN DITAMPILKAN
↓
LANJUT TUTORIAL

STRUKTUR PROJECT

Gunakan struktur sederhana:

src/
├── app/
│ ├── page.tsx
│ ├── tutorial/
│ │ └── [slug]/
│ │ └── page.tsx
│ ├── progress/
│ │ └── page.tsx
│ └── admin/
│ └── page.tsx
│
├── components/
│ ├── ui/
│ ├── layout/
│ └── tutorial/
│
├── data/
│ └── tutorials.ts
│
├── types/
│ └── tutorial.ts
│
└── lib/
└── utils.ts

DATA TUTORIAL

Setiap tutorial memiliki:

id
title
slug
description
category
thumbnail
device
estimatedTime
steps

Setiap step memiliki:

stepNumber
title
instruction
image
help

TEKNOLOGI

Next.js
TypeScript
Tailwind CSS
shadcn/ui jika diperlukan

Untuk tahap awal:

Gunakan dummy data.
Tidak perlu backend.
Tidak perlu database.
Tidak perlu authentication.
Tidak perlu AI.

Fokus utama adalah frontend yang rapi dan fitur inti berfungsi.

STANDAR CODING

Gunakan TypeScript.

Jangan gunakan any.

Jangan menaruh semua logic dalam satu file.

Buat component reusable jika digunakan lebih dari satu tempat.

Gunakan nama file dan component yang jelas.

Gunakan Server Component secara default.

Gunakan Client Component hanya jika membutuhkan:

State
Event handler
Browser API

Jangan menggunakan use client tanpa alasan.

STANDAR UI DAN UX

UI harus:

Sederhana
Mudah dipahami
Tidak terlalu banyak informasi dalam satu layar
Memiliki tombol yang jelas
Memiliki ukuran teks yang nyaman
Responsive untuk mobile dan desktop

Setiap halaman harus mempertimbangkan:

Loading state
Empty state
Error state

Pesan error harus mudah dipahami.

Contoh:

"Tutorial gagal dimuat. Coba lagi."

Jangan hanya menampilkan:

"Error"

ACCESSIBILITY REQUIREMENTS

Gunakan:

Semantic HTML
Heading yang urut
Button asli untuk action
Label pada input
Focus state
Keyboard navigation
Alt text pada gambar informatif

Jangan menggunakan warna sebagai satu-satunya penanda informasi.

Dukung reduced motion.

PRIORITAS PENGEMBANGAN

Phase 1

Setup project
Struktur folder
Types
Dummy data

Phase 2

Navbar
Hero
Home page
Search
Kategori
Tutorial populer

Phase 3

Tutorial detail
Device selector
Step-by-step
Progress bar
Navigation

Phase 4

Saya Masih Bingung
Halaman progress
Accessibility settings

Phase 5

Admin sederhana
Responsive testing
Accessibility testing
Cleanup dan refactor

BATASAN MVP

Yang wajib selesai:

Home
Search
Tutorial
Step-by-step
Progress
Device selector
Saya Masih Bingung
Accessibility dasar
Admin UI

Yang belum dibuat:

Backend
Database
Login
Register
AI
API production

DEFINISI PRODUK SELESAI

Bantuin dianggap selesai untuk MVP jika pengguna dapat:

Mencari tutorial
Memilih tutorial
Memilih perangkat
Mengikuti tutorial langkah demi langkah
Melihat progress
Mendapat bantuan ketika bingung
Melihat tutorial yang sedang dikerjakan dan selesai
Menggunakan fitur accessibility dasar

Admin dapat melihat dan mengelola data tutorial dalam UI menggunakan dummy data.

END OF PRD