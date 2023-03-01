# (11) Introduction Data Structures (javascript)

## 1. Mengapa Belajar Data Structures?

- Mengerti kualitas kode yang dibuat.
- Efisiensi kode.

## 2. Data Structures

- Data adalah cakupan luas merujuk semua tipe informasi yang tersimpan dalam memori komputer (_string, number, Boolean,_ dll).
- _Data Structure_ adalah bagaimana menyimpan dan mengorganisir data/value/elemen di dalam memori komputer.
- Data dapat dikelola dengan berbagai cara.

## 3. Basic Data Structures

### 1. Array

- _Data structure_ paling dasar.
- Serbaguna

  Reading

  1. Melihat nilai apa yang terkandung pada indeks tertentu di dalam array.
  2. Operasi yang efisien.
  3. Jenis operasi tercepat karena hanya membutuhkan 1 steps.
  4. Setiap _cell_ pada memori memiliki alamat spesifik yang diwakili dengan angka
  5. Angka yang dimiliki lebih besar dari _cell_ sebelumnya
  6. Ketika membaca sebuah value pada indeks tertentu memori komputer dapat langsung melompat ke indeks tersebut, karena:<br/>
  7. Komputer bisa melompat ke alamat memori manapun dalam satu _steps_.<br/>
  8. Ketika mengalokasikan sebuah _array_, komputer juga membuat catatan dimana alamat memori _array_ dimulai.

  Searching

  1. Mencari apakah nilai tertentu ada didalam _array_ atau tidak.
  2. Kebalikan dari _Reading_.
  3. Ketika melakukan operasi _searching_ pada _array_ komputer tidak memiliki cara untuk melompat langsung ke nilai tertentu.
  4. Komputer tidak bisa tahu begitu saja nilai apa yang terkandung pada setiap memori.
  5. Perlu memeriksa setiap _cell_ satu per satu.
  6. Kurang efisien disbanding dengan _Reading_.
  7. Memeriksa satu per satu _cell_.
  8. Membutuhkan banyak _steps_ sesuai dengan ukuran array atau disebut juga _linear search_.

  Insertion

  1. Efisiensi tergantung dimana kita memasukan value nya.
  2. Memasukan value pada akhir dari _array_ hanya membutuhkan 1 _steps_.
  3. Memasukan value baru di awal atau tengah _array_ perlu menggeser data yang sudah ada pada _array_.
  4. Sehingga akan membutuhkan _steps_ tambahan.

  Deletion

  1. Operasi menghilangkan value pada indeks tertentu.
  2. Membutuhkan jumlah _N steps_ untuk _array_ yang mengandung _N_ data.

### 2. Set

- _Data structure_ sama seperti _array_, tetapi perbedaan nya hanya pada _set_ yang tidak mengizinkan duplikat value dimasukan kedalam nya.
- Dari keempat operasi _reading, searching, insertion,_ dan _deletion_ terdapat perbedaan efisiensi pada operasi. Sedangkan untuk operasi lainnya sama seperti _array_.
