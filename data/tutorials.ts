import type { Tutorial } from "@/types/tutorial";

export const tutorials: Tutorial[] = [
  {
    id: "1",
    title: "Cara Mengirim PDF lewat WhatsApp",
    slug: "kirim-pdf-whatsapp",
    description:
      "Panduan langkah demi langkah untuk mengirim file PDF kepada kontak WhatsApp kamu.",
    category: "whatsapp",
    thumbnail: "/thumbnails/whatsapp-pdf.png",
    devices: ["android", "iphone"],
    estimatedTime: 3,
    steps: {
      android: [
        {
          stepNumber: 1,
          title: "Buka WhatsApp",
          instruction:
            "Cari dan ketuk ikon WhatsApp di layar HP kamu. Ikon ini berwarna hijau dengan gambar telepon putih di dalamnya.",
          image: "/steps/wa-open-android.png",
          help: {
            tidakMenemukanTombol:
              "Coba geser layar ke kiri atau kanan untuk menemukan ikon WhatsApp. Kalau tidak ada, coba cari di folder aplikasi.",
            tidakTahuKlikApa:
              "Ketuk (sentuh sekali) ikon WhatsApp yang berwarna hijau.",
            salahLangkah:
              "Tidak apa-apa. Tekan tombol kembali di HP kamu dan coba lagi dari langkah pertama.",
          },
        },
        {
          stepNumber: 2,
          title: "Pilih percakapan",
          instruction:
            "Setelah WhatsApp terbuka, ketuk nama orang yang ingin kamu kirimi file PDF.",
          image: "/steps/wa-chat-android.png",
          help: {
            tidakMenemukanTombol:
              "Scroll ke bawah di daftar chat untuk menemukan nama orang yang dicari. Atau ketuk ikon kaca pembesar untuk mencari nama.",
            tidakTahuKlikApa:
              "Ketuk nama kontak yang ingin kamu kirimi di daftar chat.",
            salahLangkah:
              "Tekan tombol kembali untuk kembali ke daftar chat, lalu pilih kontak yang benar.",
          },
        },
        {
          stepNumber: 3,
          title: "Ketuk ikon lampiran",
          instruction:
            "Di dalam percakapan, cari ikon klip kertas (📎) atau ikon plus (+) di sebelah kotak teks, lalu ketuk.",
          image: "/steps/wa-attach-android.png",
          help: {
            tidakMenemukanTombol:
              "Ikon ini biasanya berada di sisi kiri kotak pesan, atau di sisi kanan. Coba lihat kedua sisi.",
            tidakTahuKlikApa:
              "Ketuk ikon yang terlihat seperti klip kertas atau tanda plus (+).",
            salahLangkah:
              "Kalau menu sudah terbuka, tekan sembarang tempat di luar menu untuk menutupnya, lalu coba lagi.",
          },
        },
        {
          stepNumber: 4,
          title: "Pilih Dokumen",
          instruction:
            "Dari menu yang muncul, pilih opsi 'Dokumen' untuk memilih file PDF.",
          image: "/steps/wa-document-android.png",
          help: {
            tidakMenemukanTombol:
              "Cari tulisan 'Dokumen' atau ikon yang terlihat seperti kertas di menu yang muncul.",
            tidakTahuKlikApa: "Ketuk tulisan atau ikon 'Dokumen'.",
            salahLangkah:
              "Kalau kamu salah pilih, tekan tombol kembali dan pilih 'Dokumen' yang benar.",
          },
        },
        {
          stepNumber: 5,
          title: "Pilih file PDF dan kirim",
          instruction:
            "Cari file PDF yang ingin dikirim, ketuk untuk memilihnya, lalu ketuk tombol 'Kirim' (ikon panah).",
          image: "/steps/wa-send-android.png",
          help: {
            tidakMenemukanTombol:
              "File PDF biasanya ada di folder 'Download' atau 'Dokumen'. Coba buka folder tersebut.",
            tidakTahuKlikApa:
              "Ketuk nama file PDF sekali untuk memilihnya, lalu cari tombol kirim (biasanya ikon panah hijau).",
            salahLangkah:
              "Kalau sudah salah pilih file, tekan kembali dan pilih file yang benar.",
          },
        },
      ],
      iphone: [
        {
          stepNumber: 1,
          title: "Buka WhatsApp",
          instruction:
            "Cari dan ketuk ikon WhatsApp di layar iPhone kamu. Ikon ini berwarna hijau dengan gambar telepon putih.",
          image: "/steps/wa-open-iphone.png",
          help: {
            tidakMenemukanTombol:
              "Geser layar ke kanan dari layar utama, lalu ketik 'WhatsApp' di kotak pencarian.",
            tidakTahuKlikApa:
              "Ketuk (sentuh sekali) ikon WhatsApp yang berwarna hijau.",
            salahLangkah:
              "Tekan tombol Home atau geser ke atas dari bawah layar untuk kembali ke layar utama.",
          },
        },
        {
          stepNumber: 2,
          title: "Pilih percakapan",
          instruction:
            "Setelah WhatsApp terbuka, ketuk nama orang yang ingin kamu kirimi file PDF.",
          image: "/steps/wa-chat-iphone.png",
          help: {
            tidakMenemukanTombol:
              "Tarik layar ke bawah untuk memunculkan kotak pencarian, lalu ketik nama kontak.",
            tidakTahuKlikApa:
              "Ketuk nama kontak yang ingin kamu kirimi di daftar chat.",
            salahLangkah:
              "Ketuk tanda '<' di pojok kiri atas untuk kembali ke daftar chat.",
          },
        },
        {
          stepNumber: 3,
          title: "Ketuk ikon lampiran",
          instruction:
            "Di dalam percakapan, ketuk ikon '+' di sebelah kiri kotak teks.",
          image: "/steps/wa-attach-iphone.png",
          help: {
            tidakMenemukanTombol:
              "Ikon '+' berada di sisi kiri kotak pesan, tepat sebelum tempat kamu mengetik.",
            tidakTahuKlikApa: "Ketuk tanda '+' yang ada di kiri kotak chat.",
            salahLangkah:
              "Ketuk di luar menu untuk menutupnya, lalu coba lagi.",
          },
        },
        {
          stepNumber: 4,
          title: "Pilih Dokumen",
          instruction:
            "Dari menu yang muncul, pilih 'Dokumen' untuk mengakses file PDF kamu.",
          image: "/steps/wa-document-iphone.png",
          help: {
            tidakMenemukanTombol:
              "Geser menu ke atas untuk melihat lebih banyak pilihan. Cari ikon atau tulisan 'Dokumen'.",
            tidakTahuKlikApa: "Ketuk ikon atau tulisan 'Dokumen'.",
            salahLangkah:
              "Ketuk tanda 'X' atau tekan kembali untuk menutup menu, lalu coba lagi.",
          },
        },
        {
          stepNumber: 5,
          title: "Pilih file PDF dan kirim",
          instruction:
            "Pilih file PDF yang ingin dikirim, lalu ketuk tombol 'Kirim'.",
          image: "/steps/wa-send-iphone.png",
          help: {
            tidakMenemukanTombol:
              "File PDF biasanya ada di folder 'iCloud Drive' atau 'Di iPhone Ini'. Coba cek kedua tempat.",
            tidakTahuKlikApa:
              "Ketuk nama file PDF untuk memilihnya. Tombol kirim akan muncul di pojok kanan atas.",
            salahLangkah:
              "Ketuk tanda '<' untuk kembali dan pilih file yang benar.",
          },
        },
      ],
      laptop: [],
    },
  },
  {
    id: "2",
    title: "Cara Membuat Akun Email",
    slug: "buat-akun-email",
    description:
      "Panduan membuat akun email Google (Gmail) baru dari awal sampai selesai.",
    category: "email",
    thumbnail: "/thumbnails/buat-email.png",
    devices: ["android", "iphone", "laptop"],
    estimatedTime: 5,
    steps: {
      android: [
        {
          stepNumber: 1,
          title: "Buka browser",
          instruction:
            "Buka aplikasi browser di HP kamu (Chrome, Firefox, atau browser bawaan HP).",
          image: "/steps/email-browser-android.png",
          help: {
            tidakMenemukanTombol:
              "Cari ikon Chrome (lingkaran warna-warni) atau browser lain di layar HP.",
            tidakTahuKlikApa: "Ketuk ikon browser yang ada di HP kamu.",
            salahLangkah: "Tekan tombol kembali dan coba buka browser lagi.",
          },
        },
        {
          stepNumber: 2,
          title: "Buka halaman Gmail",
          instruction:
            "Ketik 'gmail.com' di kolom alamat browser, lalu tekan Enter atau tombol Go.",
          image: "/steps/email-gmail-android.png",
          help: {
            tidakMenemukanTombol:
              "Kolom alamat ada di bagian atas browser. Ketuk area tersebut untuk mulai mengetik.",
            tidakTahuKlikApa:
              "Ketuk kolom di bagian atas browser, hapus teks yang ada, lalu ketik 'gmail.com'.",
            salahLangkah: "Hapus teks di kolom alamat dan ketik ulang 'gmail.com'.",
          },
        },
        {
          stepNumber: 3,
          title: "Klik Buat Akun",
          instruction:
            "Di halaman Gmail, ketuk tombol 'Buat akun' atau 'Create account'.",
          image: "/steps/email-create-android.png",
          help: {
            tidakMenemukanTombol:
              "Scroll ke bawah halaman untuk menemukan tombol 'Buat akun'.",
            tidakTahuKlikApa: "Ketuk tombol berwarna biru bertuliskan 'Buat akun'.",
            salahLangkah:
              "Ketuk tombol kembali di browser dan coba akses gmail.com lagi.",
          },
        },
        {
          stepNumber: 4,
          title: "Isi data diri",
          instruction:
            "Isi kolom nama depan, nama belakang, tanggal lahir, dan jenis kelamin.",
          image: "/steps/email-form-android.png",
          help: {
            tidakMenemukanTombol:
              "Ketuk tiap kolom untuk mulai mengisi. Scroll ke bawah jika ada kolom yang belum terlihat.",
            tidakTahuKlikApa:
              "Ketuk kotak kosong lalu ketik informasi yang diminta.",
            salahLangkah:
              "Ketuk kotak yang salah isi, hapus teksnya, dan ketik ulang yang benar.",
          },
        },
        {
          stepNumber: 5,
          title: "Pilih nama email",
          instruction:
            "Ketik nama email yang kamu inginkan di kolom yang tersedia. Nama ini akan menjadi alamat emailmu.",
          image: "/steps/email-username-android.png",
          help: {
            tidakMenemukanTombol:
              "Kolom nama email biasanya ada setelah mengisi data diri.",
            tidakTahuKlikApa:
              "Ketuk kotak bertuliskan 'Nama pengguna' lalu ketik nama yang kamu inginkan.",
            salahLangkah:
              "Hapus nama yang sudah diketik dan coba nama lain jika nama tersebut sudah digunakan.",
          },
        },
        {
          stepNumber: 6,
          title: "Buat kata sandi",
          instruction:
            "Buat kata sandi yang kuat dengan minimal 8 karakter. Masukkan dua kali untuk konfirmasi.",
          image: "/steps/email-password-android.png",
          help: {
            tidakMenemukanTombol:
              "Kolom kata sandi ada di bawah kolom nama pengguna.",
            tidakTahuKlikApa:
              "Ketuk kolom 'Kata sandi' lalu ketik kata sandi pilihan kamu.",
            salahLangkah:
              "Hapus kata sandi yang salah dan ketik ulang. Pastikan kedua kolom sama.",
          },
        },
      ],
      iphone: [
        {
          stepNumber: 1,
          title: "Buka Safari atau Chrome",
          instruction:
            "Ketuk ikon Safari (kompas biru) atau Chrome di layar iPhone kamu.",
          image: "/steps/email-browser-iphone.png",
          help: {
            tidakMenemukanTombol:
              "Safari biasanya ada di bagian bawah layar utama iPhone.",
            tidakTahuKlikApa: "Ketuk ikon Safari atau Chrome.",
            salahLangkah:
              "Tekan tombol Home untuk kembali ke layar utama dan coba lagi.",
          },
        },
        {
          stepNumber: 2,
          title: "Buka halaman Gmail",
          instruction:
            "Ketuk kolom alamat di bagian atas, ketik 'gmail.com', lalu tekan Go.",
          image: "/steps/email-gmail-iphone.png",
          help: {
            tidakMenemukanTombol:
              "Kolom alamat ada di bagian atas layar browser.",
            tidakTahuKlikApa: "Ketuk bar di atas layar lalu ketik 'gmail.com'.",
            salahLangkah: "Hapus teks dan ketik ulang 'gmail.com'.",
          },
        },
        {
          stepNumber: 3,
          title: "Klik Buat Akun",
          instruction: "Ketuk tombol 'Buat akun' di halaman Gmail.",
          image: "/steps/email-create-iphone.png",
          help: {
            tidakMenemukanTombol: "Scroll halaman untuk menemukan tombol tersebut.",
            tidakTahuKlikApa: "Ketuk tombol biru 'Buat akun'.",
            salahLangkah: "Kembali ke halaman sebelumnya dan coba lagi.",
          },
        },
        {
          stepNumber: 4,
          title: "Isi data diri",
          instruction: "Isi semua kolom yang diperlukan: nama, tanggal lahir, dan jenis kelamin.",
          image: "/steps/email-form-iphone.png",
          help: {
            tidakMenemukanTombol: "Scroll ke bawah untuk melihat semua kolom.",
            tidakTahuKlikApa: "Ketuk setiap kotak dan isi informasi yang diminta.",
            salahLangkah: "Ketuk kolom yang salah dan perbaiki isinya.",
          },
        },
        {
          stepNumber: 5,
          title: "Pilih nama email dan kata sandi",
          instruction:
            "Pilih nama email unik dan buat kata sandi minimal 8 karakter.",
          image: "/steps/email-credentials-iphone.png",
          help: {
            tidakMenemukanTombol: "Scroll ke bawah untuk menemukan kolom ini.",
            tidakTahuKlikApa: "Ketuk kolom nama pengguna lalu ketik nama email pilihanmu.",
            salahLangkah: "Hapus dan ketik ulang jika ada yang salah.",
          },
        },
      ],
      laptop: [
        {
          stepNumber: 1,
          title: "Buka browser",
          instruction:
            "Buka browser di laptop kamu seperti Chrome, Firefox, atau Edge. Klik dua kali pada ikonnya.",
          image: "/steps/email-browser-laptop.png",
          help: {
            tidakMenemukanTombol:
              "Cari ikon browser di desktop atau klik tombol Start dan cari nama browser.",
            tidakTahuKlikApa: "Klik dua kali ikon browser di desktop.",
            salahLangkah: "Tutup program yang terbuka salah, lalu buka browser yang benar.",
          },
        },
        {
          stepNumber: 2,
          title: "Buka gmail.com",
          instruction:
            "Klik kolom alamat di bagian atas browser, ketik 'gmail.com', lalu tekan Enter.",
          image: "/steps/email-gmail-laptop.png",
          help: {
            tidakMenemukanTombol:
              "Kolom alamat ada di paling atas browser, biasanya menampilkan alamat website saat ini.",
            tidakTahuKlikApa: "Klik satu kali kolom di atas, lalu ketik 'gmail.com' dan tekan Enter.",
            salahLangkah: "Hapus teks di kolom alamat dan ketik ulang 'gmail.com'.",
          },
        },
        {
          stepNumber: 3,
          title: "Klik Buat Akun",
          instruction: "Di halaman Gmail, klik tombol 'Buat akun'.",
          image: "/steps/email-create-laptop.png",
          help: {
            tidakMenemukanTombol: "Scroll ke bawah halaman untuk menemukan tombol tersebut.",
            tidakTahuKlikApa: "Klik tombol biru bertuliskan 'Buat akun'.",
            salahLangkah: "Tekan Backspace di browser dan coba akses gmail.com lagi.",
          },
        },
        {
          stepNumber: 4,
          title: "Isi formulir pendaftaran",
          instruction: "Isi nama depan, nama belakang, tanggal lahir, dan jenis kelamin.",
          image: "/steps/email-form-laptop.png",
          help: {
            tidakMenemukanTombol: "Klik tiap kotak isian untuk mulai mengisi.",
            tidakTahuKlikApa: "Klik kotak kosong dan ketik informasi yang diminta.",
            salahLangkah: "Klik kotak yang salah, pilih semua teks (Ctrl+A), lalu ketik yang benar.",
          },
        },
        {
          stepNumber: 5,
          title: "Pilih nama email",
          instruction: "Ketik nama email yang diinginkan. Jika sudah dipakai orang lain, pilih nama lain.",
          image: "/steps/email-username-laptop.png",
          help: {
            tidakMenemukanTombol: "Kolom nama email ada di halaman berikutnya setelah mengisi data diri.",
            tidakTahuKlikApa: "Klik kolom 'Nama pengguna' dan ketik nama pilihan kamu.",
            salahLangkah: "Hapus nama yang sudah diketik dan coba nama lain.",
          },
        },
        {
          stepNumber: 6,
          title: "Buat kata sandi",
          instruction:
            "Buat kata sandi minimal 8 karakter. Masukkan dua kali untuk konfirmasi, lalu klik Berikutnya.",
          image: "/steps/email-password-laptop.png",
          help: {
            tidakMenemukanTombol: "Kolom kata sandi ada di bawah kolom nama pengguna.",
            tidakTahuKlikApa: "Klik kolom kata sandi dan ketik kata sandi pilihan kamu.",
            salahLangkah: "Pastikan kedua kolom kata sandi sama persis.",
          },
        },
      ],
    },
  },
  {
    id: "3",
    title: "Cara Upload File ke Google Drive",
    slug: "upload-file-google-drive",
    description:
      "Pelajari cara menyimpan dan mengunggah file ke Google Drive agar bisa diakses kapan saja.",
    category: "file",
    thumbnail: "/thumbnails/google-drive.png",
    devices: ["android", "iphone", "laptop"],
    estimatedTime: 4,
    steps: {
      android: [
        {
          stepNumber: 1,
          title: "Buka aplikasi Google Drive",
          instruction:
            "Cari dan ketuk ikon Google Drive (segitiga warna-warni) di HP kamu.",
          image: "/steps/drive-open-android.png",
          help: {
            tidakMenemukanTombol:
              "Cari di folder Google atau cari 'Drive' di pencarian aplikasi.",
            tidakTahuKlikApa: "Ketuk ikon berbentuk segitiga dengan warna biru, hijau, dan kuning.",
            salahLangkah: "Tekan tombol kembali dan pastikan kamu membuka Google Drive yang benar.",
          },
        },
        {
          stepNumber: 2,
          title: "Ketuk tombol tambah (+)",
          instruction:
            "Setelah Drive terbuka, ketuk tombol '+' (tambah) yang biasanya ada di pojok kanan bawah.",
          image: "/steps/drive-add-android.png",
          help: {
            tidakMenemukanTombol:
              "Tombol '+' biasanya berbentuk lingkaran berwarna biru di pojok kanan bawah layar.",
            tidakTahuKlikApa: "Ketuk lingkaran '+' di pojok kanan bawah.",
            salahLangkah: "Ketuk sembarang tempat untuk menutup menu, lalu coba lagi.",
          },
        },
        {
          stepNumber: 3,
          title: "Pilih Upload",
          instruction: "Dari menu yang muncul, ketuk pilihan 'Upload'.",
          image: "/steps/drive-upload-android.png",
          help: {
            tidakMenemukanTombol: "Scroll menu ke bawah untuk menemukan pilihan 'Upload'.",
            tidakTahuKlikApa: "Ketuk tulisan 'Upload' di daftar menu.",
            salahLangkah: "Ketuk X atau area di luar menu untuk menutupnya, lalu coba lagi.",
          },
        },
        {
          stepNumber: 4,
          title: "Pilih file yang ingin diupload",
          instruction:
            "Cari file yang ingin diupload, lalu ketuk untuk memilihnya.",
          image: "/steps/drive-select-android.png",
          help: {
            tidakMenemukanTombol:
              "Coba buka folder 'Download' atau 'Dokumen' untuk menemukan file kamu.",
            tidakTahuKlikApa: "Ketuk nama file yang ingin kamu upload.",
            salahLangkah: "Tekan kembali dan pilih file yang benar.",
          },
        },
      ],
      iphone: [
        {
          stepNumber: 1,
          title: "Buka aplikasi Google Drive",
          instruction: "Ketuk ikon Google Drive di iPhone kamu.",
          image: "/steps/drive-open-iphone.png",
          help: {
            tidakMenemukanTombol: "Geser layar ke kanan dan ketik 'Drive' di pencarian.",
            tidakTahuKlikApa: "Ketuk ikon segitiga warna-warni (biru, hijau, kuning).",
            salahLangkah: "Tekan tombol Home dan coba lagi.",
          },
        },
        {
          stepNumber: 2,
          title: "Ketuk tombol tambah (+)",
          instruction: "Ketuk ikon '+' di pojok kanan bawah layar.",
          image: "/steps/drive-add-iphone.png",
          help: {
            tidakMenemukanTombol: "Tombol '+' ada di pojok kanan bawah, berbentuk lingkaran biru.",
            tidakTahuKlikApa: "Ketuk lingkaran '+' berwarna biru.",
            salahLangkah: "Ketuk di luar menu untuk menutup dan coba lagi.",
          },
        },
        {
          stepNumber: 3,
          title: "Pilih Upload File",
          instruction: "Ketuk 'Upload File' dari menu yang muncul.",
          image: "/steps/drive-upload-iphone.png",
          help: {
            tidakMenemukanTombol: "Geser menu ke atas untuk melihat lebih banyak pilihan.",
            tidakTahuKlikApa: "Ketuk tulisan 'Upload File'.",
            salahLangkah: "Tutup menu dan coba lagi dari tombol '+'.",
          },
        },
        {
          stepNumber: 4,
          title: "Pilih dan upload file",
          instruction: "Pilih file dari 'File' atau 'iCloud Drive', lalu tunggu upload selesai.",
          image: "/steps/drive-select-iphone.png",
          help: {
            tidakMenemukanTombol: "Coba buka 'Di iPhone Ini' atau 'iCloud Drive' untuk menemukan file.",
            tidakTahuKlikApa: "Ketuk nama file yang ingin diupload.",
            salahLangkah: "Tekan Batal dan pilih file yang benar.",
          },
        },
      ],
      laptop: [
        {
          stepNumber: 1,
          title: "Buka browser dan akses Drive",
          instruction: "Buka browser dan ketik 'drive.google.com' di kolom alamat, lalu tekan Enter.",
          image: "/steps/drive-browser-laptop.png",
          help: {
            tidakMenemukanTombol: "Kolom alamat ada di bagian atas browser.",
            tidakTahuKlikApa: "Klik kolom atas browser, ketik 'drive.google.com', tekan Enter.",
            salahLangkah: "Hapus teks di kolom alamat dan ketik ulang 'drive.google.com'.",
          },
        },
        {
          stepNumber: 2,
          title: "Login ke akun Google",
          instruction: "Masukkan email dan kata sandi akun Google kamu untuk login.",
          image: "/steps/drive-login-laptop.png",
          help: {
            tidakMenemukanTombol: "Klik kolom email, ketik email kamu, lalu klik 'Berikutnya'.",
            tidakTahuKlikApa: "Klik kotak email, isi, lalu klik tombol biru 'Berikutnya'.",
            salahLangkah: "Klik 'Lupa kata sandi?' jika kata sandi salah.",
          },
        },
        {
          stepNumber: 3,
          title: "Klik Baru atau seret file",
          instruction:
            "Klik tombol '+ Baru' di kiri atas, atau seret file dari folder komputer langsung ke halaman Drive.",
          image: "/steps/drive-new-laptop.png",
          help: {
            tidakMenemukanTombol: "Tombol '+ Baru' ada di pojok kiri atas halaman Drive.",
            tidakTahuKlikApa: "Klik tombol '+ Baru' berwarna biru.",
            salahLangkah: "Tutup menu dan coba klik '+ Baru' lagi.",
          },
        },
        {
          stepNumber: 4,
          title: "Pilih Upload File",
          instruction: "Dari menu yang muncul, klik 'Upload file', lalu pilih file dari komputer kamu.",
          image: "/steps/drive-upload-laptop.png",
          help: {
            tidakMenemukanTombol: "Cari 'Upload file' di menu setelah klik tombol '+ Baru'.",
            tidakTahuKlikApa: "Klik 'Upload file', lalu cari file di komputer dan klik 'Open'.",
            salahLangkah: "Klik 'Cancel' dan coba lagi dengan file yang benar.",
          },
        },
      ],
    },
  },
  {
    id: "4",
    title: "Cara Download File dari Internet",
    slug: "download-file-internet",
    description:
      "Cara mudah mengunduh file dari internet dan menemukan hasil download di HP atau laptop kamu.",
    category: "browser",
    thumbnail: "/thumbnails/download-file.png",
    devices: ["android", "iphone", "laptop"],
    estimatedTime: 3,
    steps: {
      android: [
        {
          stepNumber: 1,
          title: "Buka browser",
          instruction: "Buka Chrome atau browser lain di HP kamu.",
          image: "/steps/dl-browser-android.png",
          help: {
            tidakMenemukanTombol: "Cari ikon Chrome (bulat warna-warni) di layar HP.",
            tidakTahuKlikApa: "Ketuk ikon Chrome atau browser lain.",
            salahLangkah: "Tekan tombol kembali dan buka browser yang benar.",
          },
        },
        {
          stepNumber: 2,
          title: "Buka halaman yang ada file-nya",
          instruction: "Ketik alamat website yang memiliki file yang ingin didownload di kolom alamat.",
          image: "/steps/dl-website-android.png",
          help: {
            tidakMenemukanTombol: "Kolom alamat ada di bagian atas browser.",
            tidakTahuKlikApa: "Ketuk kolom atas browser dan ketik alamat website.",
            salahLangkah: "Hapus alamat yang salah dan ketik yang benar.",
          },
        },
        {
          stepNumber: 3,
          title: "Ketuk tombol Download",
          instruction: "Temukan tombol atau link download di halaman, lalu ketuk.",
          image: "/steps/dl-button-android.png",
          help: {
            tidakMenemukanTombol: "Cari tulisan 'Download', 'Unduh', atau ikon panah ke bawah.",
            tidakTahuKlikApa: "Ketuk tombol atau link bertuliskan 'Download' atau 'Unduh'.",
            salahLangkah: "Tekan kembali jika halaman yang terbuka bukan yang kamu inginkan.",
          },
        },
        {
          stepNumber: 4,
          title: "Konfirmasi download",
          instruction: "Jika muncul notifikasi konfirmasi, ketuk 'Download' atau 'OK' untuk melanjutkan.",
          image: "/steps/dl-confirm-android.png",
          help: {
            tidakMenemukanTombol: "Notifikasi biasanya muncul di bagian bawah layar atau sebagai pop-up.",
            tidakTahuKlikApa: "Ketuk tombol 'Download' atau 'OK' yang muncul.",
            salahLangkah: "Jika download batal, kembali ke halaman dan coba lagi.",
          },
        },
        {
          stepNumber: 5,
          title: "Temukan file yang didownload",
          instruction: "Buka aplikasi 'File' atau 'My Files', lalu buka folder 'Download' untuk menemukan file.",
          image: "/steps/dl-find-android.png",
          help: {
            tidakMenemukanTombol: "Cari aplikasi 'My Files' atau 'File Manager' di daftar aplikasi.",
            tidakTahuKlikApa: "Ketuk aplikasi pengelola file, lalu buka folder 'Download'.",
            salahLangkah: "Pastikan download sudah selesai sebelum mencari file.",
          },
        },
      ],
      iphone: [
        {
          stepNumber: 1,
          title: "Buka Safari",
          instruction: "Ketuk ikon Safari (kompas biru) di iPhone kamu.",
          image: "/steps/dl-browser-iphone.png",
          help: {
            tidakMenemukanTombol: "Safari biasanya ada di bar bawah layar utama.",
            tidakTahuKlikApa: "Ketuk ikon Safari yang terlihat seperti kompas biru.",
            salahLangkah: "Tekan Home untuk kembali ke layar utama.",
          },
        },
        {
          stepNumber: 2,
          title: "Buka halaman download",
          instruction: "Ketik alamat website di kolom alamat dan tekan Go.",
          image: "/steps/dl-website-iphone.png",
          help: {
            tidakMenemukanTombol: "Kolom alamat ada di bagian atas Safari.",
            tidakTahuKlikApa: "Ketuk bar atas Safari dan ketik alamat website.",
            salahLangkah: "Hapus teks dan ketik ulang alamat yang benar.",
          },
        },
        {
          stepNumber: 3,
          title: "Ketuk link download",
          instruction: "Ketuk tombol atau link download di halaman tersebut.",
          image: "/steps/dl-button-iphone.png",
          help: {
            tidakMenemukanTombol: "Cari tulisan 'Download', 'Unduh', atau ikon panah bawah.",
            tidakTahuKlikApa: "Ketuk tombol bertuliskan 'Download' atau 'Unduh'.",
            salahLangkah: "Tekan kembali jika halaman yang terbuka salah.",
          },
        },
        {
          stepNumber: 4,
          title: "Temukan file yang didownload",
          instruction: "Buka aplikasi 'File' di iPhone, lalu buka folder 'Unduhan' atau 'Downloads'.",
          image: "/steps/dl-find-iphone.png",
          help: {
            tidakMenemukanTombol: "Aplikasi 'File' biasanya ada di layar utama iPhone.",
            tidakTahuKlikApa: "Ketuk aplikasi File, lalu pilih 'Di iPhone Ini' dan buka folder 'Downloads'.",
            salahLangkah: "Pastikan download sudah selesai sebelum mencari file.",
          },
        },
      ],
      laptop: [
        {
          stepNumber: 1,
          title: "Buka browser",
          instruction: "Buka Chrome, Firefox, atau Edge di laptop kamu.",
          image: "/steps/dl-browser-laptop.png",
          help: {
            tidakMenemukanTombol: "Cari ikon browser di desktop atau taskbar bawah.",
            tidakTahuKlikApa: "Klik dua kali ikon browser di desktop.",
            salahLangkah: "Tutup program yang salah dan buka browser yang benar.",
          },
        },
        {
          stepNumber: 2,
          title: "Buka halaman download",
          instruction: "Ketik alamat website di kolom alamat dan tekan Enter.",
          image: "/steps/dl-website-laptop.png",
          help: {
            tidakMenemukanTombol: "Kolom alamat ada di bagian atas browser.",
            tidakTahuKlikApa: "Klik kolom atas, ketik alamat website, tekan Enter.",
            salahLangkah: "Hapus teks dan ketik ulang alamat yang benar.",
          },
        },
        {
          stepNumber: 3,
          title: "Klik tombol Download",
          instruction: "Klik tombol atau link download yang ada di halaman.",
          image: "/steps/dl-button-laptop.png",
          help: {
            tidakMenemukanTombol: "Cari tulisan 'Download', 'Unduh', atau ikon panah bawah.",
            tidakTahuKlikApa: "Klik tombol bertuliskan 'Download' atau 'Unduh'.",
            salahLangkah: "Tekan Backspace di browser jika halaman yang terbuka salah.",
          },
        },
        {
          stepNumber: 4,
          title: "Temukan file hasil download",
          instruction:
            "Buka folder 'Downloads' di File Explorer (Windows) atau Finder (Mac) untuk menemukan file.",
          image: "/steps/dl-find-laptop.png",
          help: {
            tidakMenemukanTombol:
              "Di Windows: tekan Win+E lalu klik 'Downloads'. Di Mac: buka Finder lalu klik 'Downloads'.",
            tidakTahuKlikApa: "Buka File Explorer dan klik folder 'Downloads' di sebelah kiri.",
            salahLangkah: "Tunggu hingga download selesai sebelum mencari file.",
          },
        },
      ],
    },
  },
  {
    id: "5",
    title: "Cara Menggunakan WhatsApp",
    slug: "cara-menggunakan-whatsapp",
    description:
      "Panduan dasar menggunakan WhatsApp untuk mengirim pesan, foto, dan melakukan panggilan.",
    category: "whatsapp",
    thumbnail: "/thumbnails/whatsapp-dasar.png",
    devices: ["android", "iphone"],
    estimatedTime: 5,
    steps: {
      android: [
        {
          stepNumber: 1,
          title: "Buka WhatsApp",
          instruction: "Ketuk ikon WhatsApp (berwarna hijau) di layar HP kamu.",
          image: "/steps/wa-basic-open-android.png",
          help: {
            tidakMenemukanTombol: "Geser layar untuk menemukan ikon WhatsApp. Atau cari di daftar aplikasi.",
            tidakTahuKlikApa: "Ketuk ikon hijau berbentuk telepon.",
            salahLangkah: "Tekan tombol kembali dan coba buka WhatsApp lagi.",
          },
        },
        {
          stepNumber: 2,
          title: "Kirim pesan teks",
          instruction:
            "Ketuk nama kontak di daftar chat, ketuk kotak teks di bawah, ketik pesan, lalu ketuk ikon kirim (panah hijau).",
          image: "/steps/wa-text-android.png",
          help: {
            tidakMenemukanTombol: "Kotak teks ada di bagian bawah layar percakapan.",
            tidakTahuKlikApa: "Ketuk kotak teks, ketik pesan, lalu ketuk ikon panah hijau untuk kirim.",
            salahLangkah: "Hapus teks yang salah sebelum mengirim.",
          },
        },
        {
          stepNumber: 3,
          title: "Kirim foto",
          instruction:
            "Di percakapan, ketuk ikon kamera atau klip, pilih 'Galeri', pilih foto, lalu kirim.",
          image: "/steps/wa-photo-android.png",
          help: {
            tidakMenemukanTombol: "Ikon kamera atau klip ada di sebelah kotak teks.",
            tidakTahuKlikApa: "Ketuk ikon kamera untuk langsung foto, atau klip untuk pilih dari galeri.",
            salahLangkah: "Batalkan pemilihan foto dan pilih foto yang benar.",
          },
        },
        {
          stepNumber: 4,
          title: "Lakukan panggilan",
          instruction:
            "Buka percakapan dengan kontak yang ingin dihubungi, lalu ketuk ikon telepon di pojok kanan atas.",
          image: "/steps/wa-call-android.png",
          help: {
            tidakMenemukanTombol: "Ikon telepon ada di pojok kanan atas layar percakapan.",
            tidakTahuKlikApa: "Ketuk ikon telepon untuk panggilan suara, atau ikon video untuk video call.",
            salahLangkah: "Ketuk ikon merah untuk mengakhiri panggilan jika salah.",
          },
        },
      ],
      iphone: [
        {
          stepNumber: 1,
          title: "Buka WhatsApp",
          instruction: "Ketuk ikon WhatsApp di iPhone kamu.",
          image: "/steps/wa-basic-open-iphone.png",
          help: {
            tidakMenemukanTombol: "Geser ke kanan dari layar utama dan ketik 'WhatsApp' di pencarian.",
            tidakTahuKlikApa: "Ketuk ikon hijau bertuliskan WhatsApp.",
            salahLangkah: "Tekan tombol Home untuk kembali ke layar utama.",
          },
        },
        {
          stepNumber: 2,
          title: "Kirim pesan teks",
          instruction:
            "Pilih kontak, ketuk kotak teks di bawah layar, ketik pesan, lalu ketuk ikon kirim.",
          image: "/steps/wa-text-iphone.png",
          help: {
            tidakMenemukanTombol: "Kotak teks ada di bagian bawah layar percakapan.",
            tidakTahuKlikApa: "Ketuk kolom teks di bawah, ketik pesan, lalu ketuk panah biru.",
            salahLangkah: "Hapus teks yang salah sebelum mengirim.",
          },
        },
        {
          stepNumber: 3,
          title: "Kirim foto",
          instruction: "Ketuk ikon '+' di kiri kotak teks, pilih 'Foto & Video', pilih foto, lalu kirim.",
          image: "/steps/wa-photo-iphone.png",
          help: {
            tidakMenemukanTombol: "Ikon '+' ada di sebelah kiri kotak pesan.",
            tidakTahuKlikApa: "Ketuk '+', lalu pilih 'Foto & Video'.",
            salahLangkah: "Ketuk 'Batal' dan pilih foto yang benar.",
          },
        },
        {
          stepNumber: 4,
          title: "Lakukan panggilan",
          instruction: "Buka percakapan, lalu ketuk ikon telepon di pojok kanan atas.",
          image: "/steps/wa-call-iphone.png",
          help: {
            tidakMenemukanTombol: "Ikon telepon ada di pojok kanan atas layar percakapan.",
            tidakTahuKlikApa: "Ketuk ikon telepon untuk panggilan suara.",
            salahLangkah: "Ketuk tombol merah untuk mengakhiri panggilan jika salah terhubung.",
          },
        },
      ],
      laptop: [],
    },
  },
];

export function getTutorialBySlug(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}

export function getTutorialsByCategory(
  category: Tutorial["category"]
): Tutorial[] {
  return tutorials.filter((t) => t.category === category);
}

export function searchTutorials(query: string): Tutorial[] {
  const q = query.toLowerCase().trim();
  if (!q) return tutorials;
  return tutorials.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
  );
}
