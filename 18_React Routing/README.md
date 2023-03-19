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
