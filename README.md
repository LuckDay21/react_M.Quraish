# (4) Introduction FE

## 1. Apa itu front-end developer

Front-end developer adalah orang yang bertugas untuk menghubungkan sebuah situs/aplikasi dengan pengguna.

## 2. Tugas front-end

Tugas front-end developer adalah mengubah UI/UX yang sudah siap menuju halaman website agar bisa digunakan oleh user.

## 3. Internet

Internet merupakan singkatan dari _International network_, yang didefinisikan sebagai suatu jaringan komputer yang sangat besar, dimana jaringan tersebut terdiri dari jaringan-jaringan kecil yang saling terhubung satu sama lain.

## 4. HTML, CSS, & Javascript

### HTML

HTML adalah Bahasa markup yang digunakan untuk membuat halaman web. HTML dapat didefinisikan sebagai struktur halaman web.

### CSS

CSS adalah Bahasa yang digunakan untuk mengatur tampilan elemen-elemen HTML.

### Javascript

Javascript adalah bahasa pemrograman yang digunakan untuk membuat halaman web yang lebih interaktif.

## 5. Version Control

Version control adalah sebuah sistem yang merekam perubahan-perubahan dari sebuah berkas dari waktu ke waktu sehingga kita bisa melihat kembali versi khusus suatu saat nanti.

## 6. Web Security

Web security adalah segala Tindakan dengan tujuan mengamankan website dari serangan internet yang biasanya dilakukan oleh hacker.

## 7. Package Manager

Package manager adalah program/tool yang memudahkan pengguna dalam pengaturan paket perangkat lunak.

## 8. Kesimpulan

Terdapat beberapa jalan untuk menjadi front-end. Sedangkan, cara pertamanya adalah paham tentang internet dan cara kerjanya. Bahasa utama yang digunakan adalah HTML, CSS, dan Javascript. Version control system akan memudahkan kalian melakukan dokumentasi atau bekerja secara team.

# (5) Version Control and Branch Managements (Git)

## 1. Apa itu Versioning?

Versioning adalah kegiatan untuk pengaturan versi atau pelacakan perubahan dari setiap code program. Salah satu tujuannya adalah untuk me-manage project dengan mengetahui/mengtrack setiap perubahan apa yang kita/team lakukan pada project tersebut.

## 2. Version Control System

### Single User

1. SCCS - 1972 Unix only
2. RCS - 1982 Cross platform, text only

### Centralized

1. CVS - 1986 File focus
2. Perforce - 1995
3. Subversion - 2000 - track directory structure
4. Microsoft Team Foundation Server – 2005

### Distributed

1. Git - 2005
2. Mercurial - 2005
3. Bazaar - 2005

## 3. Git

Salah satu version control system populer yang digunakan para developer untuk mengembangkan software secara bersama-bersama.

## 4. The Staging Area

![Staging Area](https://scontent.fcgk37-1.fna.fbcdn.net/v/t39.30808-6/332175020_1174449339926006_3216217218504418305_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=cY6vzX_iMfkAX_sLGVA&_nc_ht=scontent.fcgk37-1.fna&oh=00_AfDdsZhUKn4t-3UBddFIB6RbPkaU3tpj9YVShxY3cCKPsg&oe=63F59240)

# (6) Figma Introduction Interface Dimension

## 1. Introduction Figma

Figma adalah editor grafik vector & alat prototyping yang berbasi web, dengan memiliki fitur offline yang dapat digunakan untuk aplikasi desktop.

## 2. Advantages

- Gratis!!! (untuk dua pengguna dan tiga proyek per akun)
- Berjalan di Mac dan PC
- Kolaborasi team real-time
- Dapat mengimpor Sketch file
- Prototipe berkualitas tinggi terintegrasi

## 3. Disadvantages

Memerlukan jaringan internet untuk digunakan. Kita tetap bisa menggunakan dan menyimpan di local storage, dan menyimpannya kembali jika terhubung intenet kembali.

# (7) HTML

## 1. Apa itu HTML?

**HTML (Hypertext Markup Language)** adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web.

## 2. Kegunaan HTML

- Membuat struktur dari halaman website.
- Mengatur tampilan dan isi dari halaman web.
- Membuat tabel dengan tag HTML _table_.
- Membuat _form_ HTML.
- Membuat gambar dengan canvas.
- Mempublikasikan halaman website secara online.

## 3. Dokumentasi HTML

| \<! DOCTYPE html\> | Mendefinisikan dokumen ini sebagai HTML5 |
| ------------------ | ---------------------------------------- |
| \<html\>           | Elemen root dari halaman HTML            |
| \<head\>           | Berisi informasi meta tentang dokumen    |
| \<title\>          | Menentukan judul untuk dokumen           |
| \<body\>           | Berisi konten halaman yang terlibat      |

# (8) CSS

## 1. CSS

CSS (Cascading Style Sheets) berfungsi untuk menghias halaman web (color, size, font, background, width, height, dll) & mengatur posisi pada halaman web (float, align, display, position, dll).

## 2. Menambahkan file CSS

3 cara menambahkan file CSS ke dalam HTML:

1. External CSS
2. Internal CSS
3. Inline CSS

## 3. CSS Selector

Pola yang digunakan untuk memilih element, yang ingin di styling.

Penanda HTML ke dalam CSS. Dapat menggunakan selector ID dan Class.

1. ID → (#)

- Setiap elemen hanya dapat memiliki satu tag id
- Dalam satu halaman tidak boleh ada dua penamaan id yang berbeda

2. Class → (.)

- Tag class dengan nama yang sama dapat dipakai berulang-ulang pada satu halaman.
- Satu elemen boleh memiliki lebih dari satu Class yang berbeda-beda.

## 4. CSS Grouping

Beberapa selector dapat dikelompokkan dalam satu deklarasi style.

## 5. CSS Font

| Font         | Menetapkan semua properti font dalam satu deklarasi |
| ------------ | --------------------------------------------------- |
| Font-familiy | Menentukan kelompok font teks                       |
| Font-size    | Menentukan ukuran font teks                         |
| Font-weight  | Menentukan ketebalan untuk font teks                |
| Font-style   | Menentukan font teks menjadi miring                 |

## 6. CSS Margin & Padding

Membuat ruang disekitar element.

## 7. CSS Background

| Background-color    | Menetapkan warna background pada suatu elemen  |
| ------------------- | ---------------------------------------------- |
| Background-image    | Menentukan gambar background pada suatu elemen |
| Background-repeat   | Menentukan gambar background untuk di ulang    |
| Background-size     | Menentukan ukuran gambar untuk background      |
| Background-position | Mengatur posisi awal gambar background         |

## 8. CSS Link

| :hover   | Kondisi style ketika mouse berada diatas elemen.          |
| -------- | --------------------------------------------------------- |
| :active  | Style ketika link "a" ditekan.                            |
| :visited | Style dimana elemen link "a" telah di kunjungi / di klik. |

## 9. CSS Display

| Block        | Elemen block selalu dimulai pada baris baru. (dimulai dari kiri ke kanan). |
| ------------ | -------------------------------------------------------------------------- |
| Inline-block | Elemen inline-block membutuhkan lebar sesuai yang diperlukan.              |
| None         | Menyembunyikan elemen untuk tidak ditampilkan.                             |

## 10. CSS Table

| Border           | Menambahkan border pada table, th, dan td |
| ---------------- | ----------------------------------------- |
| Border-collapse  | Membuat border menjadi single border      |
| :nth-child(even) | Membuat background stripe                 |

# (9) Bootstrap

## 1. Apa itu Frontend Framework?

Frontend Framework adalah sekumpulan aturan kode yang bisa kita gunakan untuk mempermudah dalam membuat suatu tampilan website.

## 2. Apa itu Bootstrap?

Bootstrap adalah framework web development berbasis HTML, CSS, & Javascript yang dirancang untuk mempercepat proses pengembangan web responsive & mobile-first.

## 3. Kenapa Bootstrap?

- Gratis
- Mudah dipelajari
- Cepat
- Mendukung responsif

# (10) Javascript Refreshment

## 1. Apa itu JavaScript?

JavaScript adalah _Bahasa Pemrograman yang Hgih-level, Scripting, Untyped_ dan _interpreted_.

## 2. Kenapa JavaScript?

### High-level

JavaScript adalah bahasa pemrograman tingkat tinggi yang bahasanya mudah dimengerti oleh manusia.

### Scripting

JavaScript adalah Bahasa script yang dibuat untuk berinteraksi dengan halaman web

### Untyped

JavaScript merupakan bahasa yang Untyped, dimana JavaScript tidak berpengaruh terhadap tipe data. Hal ini memudahkan kita dalam mempelajari bahasa pemgrogaman saat masih pemula karena kita tidak di bingungkan mendeklarasika tipe data

### Interpreted

Selama kita mempunyai web browser JavaScript bisa di jalankan. Bahasa-nya fleksibel, mudah untuk di uji dan JavaScript mempunyai banyak framework yaitu bootstrap, vue, react, dll.

## 3. Pengertian Var, Let, Const

### Apa itu Declaration?

_Declaration_ adalah proses pembuatan variable untuk menyimpan data.

### Apa itu Scoping?

_Scoping_ menentukan dimana variable, fungsi, dan objek diatur dan dapat diakses dalam kode kita. Ini berarti ruang lingkup variable dikendalikan oleh lokasi deklarasi variable.

### Apa itu Hoisting?

_Hoisting_ membuat beberapa jenis variable atau fungsi dapat diakses/digunakan dalam kode sebelum dideklarasikan.

![](https://scontent.fcgk37-2.fna.fbcdn.net/v/t39.30808-6/333813953_471739141704639_2024365460294031236_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=lN0qITGA0ZMAX8sdKmN&_nc_ht=scontent.fcgk37-2.fna&oh=00_AfDeVYCmNOcfSqbOaJhsYJBam1hHSNVlpoK-vPr74sBupA&oe=64012C1B)

## 4. Values & References

JavaScript mempunyai 2 kategori dalam tipe data, yaitu primitive dan object.

- Primitive dalam pemrograman adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman.
- Object adalah unit yang menyimpan property dan fungsi (_method_).

Aturan sederhana untuk meneruskan value adalah bahwa semua nilai primitive dalam JavaScript diteruskan oleh value. Sedangkan untuk meneruskan reference bagaimanapun akan memberikan reference yang sama.

## 5. Destructuring

Destructuring adalah ekspresi dari JavaScript yang memungkinkan untuk menyalin nilai dari array, atau property dari objek, ke dalam variable yang berbeda.

## 6. Method

_Method_ merupakan sebuah fungsi yang terkait dengan object, membuat programnya se-sederhana mungkin sesuai kegunaan masing-masing.

## 7. Control Flow

Mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita.

## 8. Function

_Function_ di dalam JavaScript adalah sebuah objek. Karena memiliki property dan juat method.

## 9. DOM

_Document Object Model_ adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object.

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

# (12) Clean Code

## 1. Apa itu "Clean Code"?

Clean Code adalah istilah untuk kode yang mudah dibaca, dipahami dan diubah oleh programmer.

## 2. Kenapa "Clean Code"?

- Work Collaboration
- Feature Development
- Faster Development

## 3. Karakteristik "Clean Code"

- Mudah dipahami
- Mudah dieja dan dicari
- Singkat namun mendeskripsikan konteks
- Konsisten
- Hindari penambahan konteks yang tidak perlu
- Komentar
- Good function
- Gunakan konvensi
- Formatting

## 4. KISS

Hindari membuat fungsi yang dibuat untuk untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.

## 5. DRY

Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.

## 6. Refactoring

Refactoring adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah stuktur internal tanpa mengubah perilaku eksternal. Prinsip KISS dan DRY bisa dicapai dengan cara refactor.

# (13) Introduction React

## 1. Apa itu React?

- Library javascript untuk membuat user interface (UI) yang interaktif dan cepat pada web maupun mobile.
- Open source yang di maintain oleh Facebook.
- Pada arsitektur MVC (Model – View – Controller), Reactjs hanya akan mengambil peran pada layaer View saja.

## 2. Kenapa menggunakan React

- Deklaratif.
- Berbasis komponen.
- Belajar sekali, tulis dimana saja.
- Teknologi yang popular.
- Sudah teruji.

## 3. Virtual Dom

Representasi dari UI berbentuk Javascript Object yang disimpan pada memori.

Masalah yang dihadapi dengan DOM manipulation:

- DOM manipulation secara manual dapat membuat code berantakan.
- Sulit untuk mengingat DOM state sebelumnya.
- Jauh lebih lambat daripada operasi javascript pada umumnya.

# (14) React Fundamental

## 1. JSX

### Apa itu JSX?

- Singkatan dari Javascript XML
- Ekstensi pada javascript

### Kenapa menggunakan JSX?

- JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
- Seperation of Technology -\> Seperation of Concerns

### JSX vs React.createElement

- Kita tidak harus menggunakan JSX, tapi JSX memudahkan kita menulis aplikasi React
- Syntactic Sugar dari fungsi **React.createElement(component, prop, …children)**

### Spesifikasi jenis Elemen React

- Kapitalisasi untuk komponen React
- Huruf kecil (lowercase) untuk komponen bawaan

### Menaruh expression pada JSX

- Kita dapat menaruh ekspresi JS yang valid pada JSX dengan menggunakan kurung kurawal.

### JSX adalah expression

- Setelah dikompilasi, Ekspresi JSX akan menjadi panggilan fungsi JavaScript biasa dan menjadi objek JavaScript

### Menspesifikasikan Elemen Anak dengan JSX

- Jika tag bersifat kosong (tidak memiliki elemen anak), kita bisa saja menutupnya secara langsung dengan /\>
- Tag JSX dimungkinkan untuk memiliki elemen anak

## 2. React Components

### Apa itu component?

Komponen React adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state Sebagian UI

### Membagi UI menjadi beberapa komponen

![](https://scontent.fcgk37-1.fna.fbcdn.net/v/t39.30808-6/335026631_731999988588859_6858276204251450684_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=_wdwSW7Cid8AX9McgOq&_nc_ht=scontent.fcgk37-1.fna&oh=00_AfCwB-61IcGJ4t5b8q2CNQr1dpnBeSRKIsk6pbFyDWn8uQ&oe=640D696E)

### Function and class component

![](https://scontent.fcgk37-1.fna.fbcdn.net/v/t39.30808-6/334973280_532416428790256_5860606352697508592_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=TcO6jp2Mmr8AX8V_Gcf&_nc_ht=scontent.fcgk37-1.fna&oh=00_AfCuZI_6SgmdiDLyJcTzxyixchFja94H6VHekVy6QRpPDw&oe=640D189A)

### Membuat & merender component

![](https://scontent.fcgk37-1.fna.fbcdn.net/v/t39.30808-6/335088552_735968828000580_439658101876650168_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_aid=0&_nc_ohc=51uyZNB4wUYAX-oSGKT&_nc_ht=scontent.fcgk37-1.fna&oh=00_AfDfVsBU9xKyD0KADWJso1yChi6hZDrLR2NTZ7asAFrR6Q&oe=640DC113)

## 3. Component Composite

### Apa itu props?

1. Singkatan dari properties, membuat kita dapat memberikan argument/data pada component.
2. Props membantu untuk membuat komponen menjadi lebih dinamis
3. Props dioper ke component sama seperti memberikan atribut pada tag HTML
4. Props pada component adalah read-only dan tidak dapat diubah.

### One Way data flow pada react

![](https://scontent.fcgk37-1.fna.fbcdn.net/v/t39.30808-6/335114725_919339022818387_3192322351582785078_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=9FekQbIYw_UAX9sQbB4&_nc_ht=scontent.fcgk37-1.fna&oh=00_AfChW4qkJLykNaQGVO4TlPmwRcsnjNDv6UB45CMBLP8VLg&oe=640D4AAC)

### Komposisi komponen

- Kontainmen
- Spesialisasi

## 4. React Lifecycle

Lifecycle method yang umum:

### render()

- Fungsi yang paling sering dipakai
- Required pada class component
- Pure function. Tidak boleh ada setState()

### componentDidMount()

- Dipanggil Ketika component sudah di render untuk pertama kali
- Tempat yang tepat untuk pemanggilan API
- Boleh ada setState()

### componentDidUpdate()

- Dipanggil Ketika terjadi update (props atau state berubah)

### componentWillUnmount()

- Dipanggil ketika component akan dihancurkan
- Cocok untuk clean up actions

## 5. Condition and List

### Render Bersyarat

Pada React, Kita dapat membuat komponen berbeda yang mencakup perilaku yang dibutuhkan. Lalu, Kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi Anda.

- Menggunakan If
- Inline If dengan operator &&
- Inline If-Else dengan ternary conditional operator
- Mencegah komponen untuk rendering

### Render List

Kita dapat membangun koleksi dari beberapa elemen dan menyertakan dalam JSX menggunakan tanda kurung kurawal {}.

### Key

Key membantu React untuk mengidentifikasikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.

# (15) Event Handling

## 1. State

### Apa itu _State_?

_State_ adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain

- Data yang bisa dimodifikasi menggunakan setState
- Setiap terjadi modifikasi akan terjadi render ulang
- Bersifat Asynchronus
- Dipakai dalam _class_

## 2. Statefull & Stateless

### Apa itu _Stateful component_?

_Stateful component_ adalah memiliki state. Component ini dibuat dengan class. Kelebihan dari class component adalah memiliki _lifecycle_

### Apa itu _Stateless Component_?

_Stateless Component_ adalah tidak memiliki state hanya prop. Umumnya component ini dibuat dengan _function_ karena codenya lebih ringkas

### Perbedaan dari komponen stateful dan komponen stateless

| Stateless Component                              | Stateful Component                         |
| ------------------------------------------------ | ------------------------------------------ |
| Tidak tahu tentang aplikasi                      | Mengerti tentang aplikasi                  |
| Tidak melakukan data fetching (pengambilan data) | Melakukan data fetching (pengambilan data) |
| Tujuan utamanya adalah visualisasi               | Berinteraksi dengan aplikasi               |
| Dapat digunakan Kembali                          | Tidak dapat digunakan Kembali              |
| Hanya berkomunikasi dengan induk langsungnya     | Meneruskan status dan data ke anak-anaknya |

## 3. Handling Events

### Apa itu _Handling Event_?

_Handling Event_ adalah suatu metode untuk menangani sebuah _event_/aksi yang diberikan pengguna kepada suatu komponen

_Event_ Adalah suatu peristiwa yang dipicu oleh pengguna pada suatu komponen, misalnya tombol ditekan

# (17) React Hook

## 1. Introduction React Hook

### React Hooks

Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.

### Motivasi

- Kesulitan untuk menggunakan Kembali stateful logic antar komponen
- Komponen kompleks menjadi sulit untuk dimengerti
- Kelas membingungkan manusia dan mesin

### Hooks pada react

| Hooks dasar | Hooks Tambahan      |
| ----------- | ------------------- |
| useState    | useReducer          |
| useEffect   | useCallback         |
| useContext  | useMemo             |
|             | useRef              |
|             | useImperativeHandle |
|             | useLayoutEffect     |
|             | useDebugValue       |

### Aturan pada hooks

#### Hanya Panggil Hooks di Tingkat Atas

Jangan memanggil Hooks dari dalam loops, conditions, atau nested functions

#### Hanya Panggil Hooks dari Fungsi-Fungsi React

Jangan memanggil Hooks dari fungsi-fungsi JavaScript biasa. Kita dapat:

- Memanggil Hooks dari komponen-komponen fungsi React.
- Memanggil Hooks dari custom Hooks

## 2. Implement UseEffect

### Menggunakan useEffect

- Effect Hook memungkinkan kita melakukan efek samping (side effects) di dalam function component
- componentDidMount, componentDidUpdate, dan componentWillUnmount = useEffect
- Ada dua jenis : Butuh pembersihan dan tidak butuh pembersihan

## 3. Membuat Custom Hooks

### Custom Hooks

Membuat Hook kita sendiri memungkinakna kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.

# (18) React Routing

## 1. Routes Learning

### Apa itu _Router_?

Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada SPA (Single Page Application)

### _Multi Page Application_ vs _Single Page Application_

#### Apa itu Multi Page Application?

Multi Page Application (MPA) juga disebut dengan tradisional web app adalah jenis aplikasi website dimana perlu memuat ulang seluruh halaman web setiap kali membuat permintaan baru

#### Apa itu Single Page Application?

Single Page Application (SPA) adalah salah satu jenis aplikasi website dimana hanya ada 1 halaman yang menangani semua aktivitas yang terjadi dalam aplikasi tersebut

### _React Router_

#### BrowserRouter

BrowserRouter digunakan sebagai router yang menggunakan API history dari HTML5, sehingga dapat menggunakan location untuk sinkronkan UI dengan url. Di dalam object location sendiri merepresentasikan dimana lokasi aplikasi sekarang

#### Route

Route digunakan sebagai pengarah jalan nya lalu lintas suatu aplikasi web. Attribute path merupakan url pada browser pada proses routing. Attribute component merupakan suatu komponen yang akan ditampilkan kepada user saat mengakses path yang didefinisikan

#### Switch

Switch digunakan untuk membungkus kumpulan beberapa component Route. Exact bertugas untuk memastikan route hanya me-render component yang memiliki path yang cocok, lika tidak ada yang cocok, maka route yang akan di-render yaitu route terakhir dengan component Notfound

#### Link

Link digunakan untuk berpindah antar halaman, property to tersebut merujuk pada path di route yang akan dituju. Element kosong \<\>\</\> tersebut adalah shorthand dari \<React.Fragment\>\</React.Fragment\> yang mana bisa untuk membungkus child element tanpa menambahkan node ke dalam DOM.

## 2. Use URL Params

### Apa itu _URL Parameter_?

Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamais di URL halaman.

### Kegunaan _URL Parameter_

- Paginasi
- Penyortiran dan Penyaringan
- Pencarian
- Menggambarkan

### Perbedaan _Link_ dan _Redirect_

| Link                                 | Redirect                                |
| ------------------------------------ | --------------------------------------- |
| Dapat digunakan pada kondisi apapun  | Lebih sering digunakan pada halaman 404 |
| Memberikan history baru pada browser | Menimpa history pada browser            |
| Bereaksi dengan click seperti a href | Bereaksi dengan suatu kondisi           |

## 3. Hook Routing React

### _useHistory_

useHistory memberi kita akses ke instance riwayat yang dapat Anda gunakan untuk bernavigasi.

Contoh:

- length
- go
- goBack
- goForward
- Push

Dan seterusnya...

### _useParams_

useParams mengembalikan objek pasangan kunci/nilai parameter URL. Gunakan untuk mengakses match.params dari \<Route\> saat ini.

### _userRouteMatch_

useRouteMatch mencoba mencocokkan URL saat ini dengan cara yang sama seperti \<Route\>. Ini Sebagian besar berguna untuk mendapatkan akses ke data kecocokan tanpa benar0benar merender \<Route\>.

# (19) React Form

## 1. Basic Form

### Penggunaan Form

Form merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.

Form banyak kita jumpai saat login, mendaftarkan sesuatu, memberikan feedback, mengisi data dan masih banyak lainnya.

Dalam react akan ada banyak hal kita pelajari dari Form. Seperti bagaimana menghandle inputan? Bagaimana memvalidasi inputan dsb. Untuk saat ini kita akan belajar Basic Form.

### Macam Form

#### Elemen \<input\>

Elemen **\<input\>** biasanya digunakan inputan yang tidak terlalu Panjang.

#### Elemen \<textarea\>

Element **\<textarea\>** biasanya digunakan inputan yang cukup panjang. Semisal deskripsi.

#### Elemen \<select\>

Element **\<select\>** biasanya digunakan untuk inputan yang pilihannya sudah ditentukan.

#### Radio Button

Radiobutton merupakan salah satu type di elemen \<input\>. Kita hanya bisa memilih 1 pilihan menggunakan radiobutton.

#### Checkbox

Checkbox merupakan salah satu type di elemen \<input\>. Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox.

## 2. Controlled Component

### Apa itu Controlled Component

Kita dapat menggabungkan cara menyimpan dan memperbarui state di HTML dan React dengan menggunakan state pada React. Kemudian Komponen React yang me-render sebuah form juga mengontrol apa yang terjadi dalam form tersebut pada masukin pengguna selanjutnya.

Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component".

### Tag Textarea

Pada HTML, elemen **\<textarea\>** mendefinisikan teks di dalamnya sebagai elemen anaknya. Di React, **\<textarea\>** menggunakan atribut value. Dengan cara ini, sebuah form yang menggunakan **\<textarea\>** dapat ditulis dengan cara yang sangat mirip dengan sebuah form yang menggunakan input satu baris.

### Tag Select

Pada HTML, **\<select\>** membuat sebuah daftar drop-down. Perhatikan bahwa opsi Coconut mula-mula dipilih, karena adanya atribut selected. Di React, alih-alih menggunakan atribut selected, kita menggunakan atribut value di tag select. Hal ini lebih mudah karena hanya perlu diubah di satu tempat saja.

Kita bisa memasukkan array ke atribut value, yang memungkinkan kita memilih beberapa opsi dalam tag select.

### Handle Banyak Input

Ketika kita membutuhkan penanganan banyak elemen pada _controlled component_, kita dapat **menambahkan atribut name pada setiap elemen** dan **membiarkan fungsi handler memilih apa yang harus dilakukan berdasarkan nilai dari event.target.name.**

## 3. Uncontrolled Component

### Apa itu Uncontrolled Component

Uncontrolled component adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.

Karena hal ini, terkadang lebih mudah untuk mengintegrasikan kode React dan non-React jika menggunakan uncontrolled component. Ini berarti lebih sedikit kode jika kita menginginkan solusi cepat walau tak rapi. Selain itu pada umumnya kita harus menggunakan controlled component.

### Nilai Default

Pada lifecycle rendering React, atribut value pada elemen form akan menimpa nilai pada DOM. Dengan uncontrolled component, sering kali kita ingin React dapat menentukan nilai awal tetapi pembaruan berikutnya dilakukan secara uncontrolled. Untuk menangani kasus ini, kita bisa menggunakan atribut defaultValue alih-alih menggunakan value.

Kita bisa menggunakan **defaultChecked** untuk **\<input type="checkbox"\>** dan **\<input type="radio"\>** , serta **defaultValue** untuk **\<select\>** dan **\<textareax\>**.

### Tag File Input

Pada HTML, sebuah \<input type='file"\> memungkinkan pengguna untuk memilih satu atau beberapa flle dari media penyimpanan mereka untuk diunggah ke server atau dimanipulasi dengan JavaScript lewat File API.

Dalam React, sebuah **\<input type="file" /\>** merupakan uncontrolled component karena nilainya hanya bisa disetel oleh pengguna, bukan oleh kode program.

## 4. Uncontrolled vs Controlled Component

| **Fitur**                                 | **uncontrolled** | **Controlled** |
| ----------------------------------------- | ---------------- | -------------- |
| one-time value retrieval (e.g. on submit) | **V**            | **V**          |
| validating on submit                      | **V**            | **V**          |
| instant field validation                  | **X**            | **V**          |
| conditionally disabling submit button     | **X**            | **V**          |
| enforcing input format                    | **X**            | **V**          |
| several inputs for one piece of data      | **X**            | **V**          |
| dynamic inputs                            | **X**            | **v**          |

## 5. Basic Validation Learning

### Kenapa Perlu Validasi

Pada dasarnya, ada 3 alasan mengapa validasi form diperlukan:

- **Mencari input data yang benar dan sesuai format**. Sebuah web/aplikasi tidak dapat berjalan dengan benar, jika data yang diolah tidak sesuai dengan kebutuhan aplikasi
- **Melindungi akun pengguna**. Misalnya, membuat pengguna untuk memasukkan data password yang aman
- **Melindungi sistem/aplikasi**. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi

### Tipe Validasi Data Formulir

#### Client-side Validation

Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server.

Kelebihan validasi sisi klien ialah **user-friendly** , karena jika terjadi kesalahan pengguna akan langsung diberitahu. Pengguna tidak harus menunggu respon dari server untuk mengetahui hasil validasi.

Validasi sisi klien, terbagi atas dua bagian

- **Built-in form validation** , yaitu menggunakan fitur validasi langsung dari HTML5. Biasanya, validasi ini tidak membutuhkan Javascript dan memiliki performa yang lebih baik. Tapi tidak dapat dikostumisasi. Kadang pesan errornya cukup 'kaku'. Contohnya : **required, minlength, maxlength, min, max, type dan patten**
- **Menggunakan Javascript**. Ini membuat validasi form dapat dikostumisasi. Tetapi kita perlu membuatnya sendiri.

#### Server-side Validation

Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.

Berbeda dengan validasi sisi klien, validasi ini **tidak user-friendly**. Karena, koreksi kesalahan akan dikirimkan, setelah form di-submit.

### Built-in Form Validation

#### Required

**Required** digunakan untuk menentukan field form perlu diisi sebelum formulir dapat dikirimkan.

#### Minlength dan Maxlength

**Minlength** dan **Maxlength** digunakan untuk menentukan jumlah karakter minimal dan maksimal yang bisa dimasukkan. Jika kurang dari minlength akan muncul pemberitahuan, dan tidak bisa melebihi maxlength.

#### Min dan Max

**Min** dan **Max** digunakan untuk menentukan nilai minimum dan maksimum angka yang bisa dimasukkan.

#### Type

**Type** digunakan untuk menentukan apakah data berupa angka, email, atau type yang lainnya.

#### Pattern

**Pattern** digunakan untuk menentukan regular expression (regex) yang mendefinisikan pola data yang boleh dimasukkan.

### Menggunakan Javascript

Bisa kapan saja melakukan validasi?

- Ketika ada perubahan di form. Ketika ada perubahan, akan mentrigger event onChange. Kkup real-time berdasarkan perubahan data, namun fungsi akaelebihannya validasi akan cun terus dipanggil selama ada perubahan. Bisa dikombinasikan dengan disable button.
- Ketika menekan tombol submit. Ketika menekan tombol submit, akan mentrigger event onSubmit. Kelebihannya validasi cukup sekali, namun tidak akan real-time memvalidasi form.

# (20) Global State Management and Data Fetching

## 1. Global State Introduction

### Apa itu Global State Management?

Global State Management dibuat sebagai sarana untuk memusatkan dan mengelola data dalam aplikasi, membuatnya mudah berubah dan tersedia untuk semua komponen dalam aplikasi.

### Redux

Redux adalah open-source JavaScript library untuk mengelola dan memusatkan status aplikasi.

### Kapan saat yang tepat untuk menggunakan Redux

1. Banyak state yang perlu ditaruh di banyak tempat
2. State pada app sering berubah
3. Logic untuk mengubah state kompleks
4. Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
5. Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu

### Redux Libraries dan Tools

1. React-Redux
2. Redux Toolkit
3. Redux DevTools Extension

### Komponen Penting di Redux

#### 1. Actions

Digunakan untuk memberikan informasi dari aplikasi ke store

#### 2. Reducer

Pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru

#### 3. Store

Objek sentral yang menyimpan state pada aplikasi

## 2. Redux Thunk

Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action

### Kenapa perlu Redux Thunk

- Untuk menghandle side effect logic yang kompleks
- Untuk logic async seperti request data

## 3. Rangkuman

1. Redux adalah library untuk manajemen state global
2. Redux menggunakan struktur "one-way data flow"
3. Redux menggunakan beberapa tipe code

# (21) React Testing

## 1. Testing

adalah proses memverifikasi bahwa test assertions (ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita) kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi.

### Manfaat Testing

- Kita dapat segera mengetahui apabila ada bagian pada aplikasi yang broken setelah kita melakukan perubahan pada aplikasi tersebut.
- Testing tidak bisa menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah/mengurangi beberapa hal yang berpotensi menjadi bug

### Kategori Testing

1. Rendering component trees - di dalam environment test yang sudah disederhanakan dan ditegaskan pada keluarannya.
2. Menjalankan aplikasi lengkap - di dalam environment browser asli. Dikenal sebagai tes “end-to-end".

## 2. Rekomendasi Tools

### Render & Debug

- Fungsi render RTL akan merender file JSX apapun yang dibutuhkan
- Untuk meyakinkan bahwa file JSX sudah terender, bisa menggunakan fungsi debug RTL

## 3. Kategori Testing

- LabelText: getByLabelText: < label for=”search” />
- PlaceholderText: getByPlaceholderText: < input placeholder="Search" />
- AltText: getByAltText: < img alt=”profile” />
- DisplayValue: getByDisplayValue: < input value=”JavaScript” />

## 4. Testing Custom Hook

Library yang digunakan untuk mengetes custom hook adalah React Hooks Library.

#### npm install -D @testing-library/react-hooks

# (22) Introduction Restfull API

## 1. What is API?

API kepanjangan dari Application Programming Interface. API sendiri merupakan sekumpulan fungsi dan prosedur yang memungkinkan pembuatan aplikasi dapat mengakses fitur atau data dari sistem operasi, aplikasi, atau layanan lainnya.

## 2. REST

REST kepanjangan dari Representational State Transfer. Rest sendiri merupakan arsitektur perangkat lunak yang memberlakukan syarat mengenai cara API bekerja.

## 3. JSON

JSON kepanjangan dari JavaScript Object Notation. JSON merupakan format file berbasis teks yang umumnya digunakan dalam proses pertukaran data antara server dan klien.

##

## 4. Open API

Merupakan sebuah API yang dapat diakses secara publik atau terbuka yang dapat digunakan secara bebas sesuai dengan kebutuhan kita.

Link Open API : [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)

Package API :

- Net/http : sebuah package yang bisa digunakan untuk membuat sebuah server API dan mengkonsumnya.
- Encoding/Json : sebuah package yang digunakan untuk mendecode.

# (24) Restfull API With JavaScript

## 1. Mock API

Mock API merupakan API yang bisa diakses oleh banyak orang, dengan tujuan mengambil dummy data atau sebuah endpoint. Terkadang Mock API disebut juga sebagai API palsu. Mock API sering digunakan ketika kita akan membuat API yang mengembalikan data yang inginkan.

## 2. Top 7 Mock APIs Available

- Beeceptor
- Mockoon
- Mocki
- Stoplight
- Postman Mock Server
- Mocky
- MockAPI

## 3. Let's start with MockAPI

### Login terlebih dahulu dengan akun google/github.

### Membuat sebuah projek :

1. Isi nama project
2. Klik tombol Create
3. Pastikan projek telah dibuat

### Membuat sebuah resource :

1. Klik tombol new resouce
2. Isi nama resource
3. Klik tombol create
4. Pastikan resource telah dibuat

### Melakukan generate dummy data :

1. Klik tombol generate all untuk membuat dummy data default sebanyak 50 data.
2. Dummy data berhasil dibuat.

### Mengatur Acces pada MockAPI Endpoint :

1. Klik edit untuk melihat article endpoint.
2. Geser kebawah untuk melihat endpoint.

### Melakukan implementasi pada Get Data dan Render :

- Melakukan implementasi Delete Data.
- Melakukan implementasi Insert Data.
- Melakukan implementasi Update Data.

# (25) Authentication in React

## 1. Authorization with react

Authorization memiliki fungsi untuk menentukan hak akses/hak istimewa ke sumber daya yang terkait dengan keamanan informasi umum, keamanan komputer, dan kontrol akses pada umumnya. Kesimpulannya, To Authorize bisa disebut juga dengan kebijakan akses dimana hal tersebut tidak bisa sembarangan diakses oleh orang lain.

## 2. Login with React

Di dalam keamanan komputer, login merupakan sebuah proses dimana seseorang mendapatkan akses ke sistem komputer dengan mengidentifikasi dan mengautentikasi diri mereka sendiri. Login biasanya dilakukan dengan cara mengisikan sebuah username dan juga pasword.

### Contoh alur login sederhana

#### 1. Open App

#### 2. Melakukan Authentication token :

- Jika berhasil authentication dia akan langsung masuk ke Attempt Login
- Jika gagal authentication dia akan masuk ke ScreenLogin.

# (26) Introduction GraphQL and Apoll Client Setup

## 1. Introduction GraphQL

GraphQL merupakan sebuah query languange yang digunakan pada API, dengan server-side runtime untuk melakukan eksekusi query dengan type system yang bisa di define sesuai dengan data sendiri.

## 2. Server yang biasanya digunakan GraphQL

- Hasura
- Heroku

## 3. Client untuk GraphQL

- Apollo client
- postman
- prisma

## 4. Fitur utama GraphQL

- Query, untuk mengambil data dengan query specific yang didefinikan
- Mutation, untuk melakukan insert, update dan delete data
- Subscription, untuk melakukan update data realtime / berdasarkan dengan events

# (27) GraphQL Query and Mutation

## 1. Query

### Query with Apollo Client

1. Import gql dan useQuery atau anda bisa langsung menyalin dari hasura.
2. Memanggil useQuery dengan tujuan mendapatkan data awal
3. Melakukan komsumsi data yang terdapat pada kode jsx, pastikan bahwa pada permintaan pertama data adalah nol sehingga perlu menggunakan rangkaian opsional untuk menghindari kesalahan.

### Query with Apollo Client - lazy query

useLazyQuery sangat cocok untuk mengeksekusi Query sebagai respons selain rendering komponen. Berbeda dengan useQuery, pemanggilan useLazyQuery, tidak akan segera mengeksekusi Query yang terkait.

### Query with Apollo Client - refetching

Refetching merupakan proses pengambilan ulang yang memungkinkan dalam menyegarkan hasil Query sebagai respons terhadap tindakan seorang pengguna. Refetching tidak menggunakan interval tetap. Cara kerjanya adalah secara opsional yaitu dengan memberikan objek variabel baru ke fungsi refetch. Jika tidak, Query akan secara otomatis menggunakan variabel yang sama dengan yang digunakan dalam eksekusi sebelumnya

## 2. Mutation

### Mutation with Apollo Client

1. Import useMutation hooks dari apollo client dan definisikan.

### Mutation Insert Data with Apollo Client

2. Aktifkan useMutation dan gunakan array destruction define mutation handler (insert).
3. Panggil fungsi insert dengan sebuah variabel.

### Mutation Update Data with Apollo Client

- Definisikan update Query
- Buatlah mutation handler untuk mengupdate
- Panggil fungsi update Query.

### Mutation Delete Data with Apollo Client

- Definisikan delete Query.
- Buatlah mutation handler untuk delete
- Panggil fungsi delete Query.

# (28) GraphQL – Subscription

## 1. Setting Subscription

1. Menginstall subscriptions-transport-ws untuk mengaktifkan koneksi ke websocket, yaitu dengan yarn add @apollo/client subscriptions-transport-ws
2. Import semua modul yang diperlukan dan pisahkan antara http dan websocket.
3. Buat httpLink untuk Query dan mutation, wsLink untuk subscription serta tambahkan header untuk authentication.
4. Tambahkan split function dan gunakan fungsi tersebut sebagai tautan pada saat kita membuat client. Fungsi split ini digunakan untuk menggabungkan dua buah Link menjadi satu Link dengan jenis operasi yang dijalankan.

## 2. Subscription using useSubscription

5. Import Subscription dari apollo client dan lakukan definisi.
6. Aktifkan Subscription dan mulai untuk menggunakannya.

## 3. Subscription using subscribeToMore

subscribeToMore merupakan fungsi yang digunakan unuk menjalankan Subscription, subscribeToMore biasanya digunakan untuk Subscription pada bidang tertentu yang disertai dengan Query. Pada umumnya subscribeToMore digunakan ketika server akan mengembalikan 1 data yang akan diperbarui, atau dengan kata lain pada saat memperbarui data sebelumnya fungsi ini akan mengembalikan data yang diperbarui.

# (29) Deployment

## 1. Kenapa Perlu Build?

Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men-deploy aplikasi. Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan cepat.

## 2. Build React App

Ini akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum men-deploy ke produksi. Untuk pengembangan normal, gunakan npm start

## 3. Run Optimized App

Untuk menjalankan aplikasi yang optimal di lokal komputer kita, kita bisa menggunakan serve.
