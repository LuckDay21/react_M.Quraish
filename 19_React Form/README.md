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

| **Fitur** | **uncontrolled** | **Controlled** |
| --- | --- | --- |
| one-time value retrieval (e.g. on submit) | **V** | **V** |
| validating on submit | **V** | **V** |
| instant field validation | **X** | **V** |
| conditionally disabling submit button | **X** | **V** |
| enforcing input format | **X** | **V** |
| several inputs for one piece of data | **X** | **V** |
| dynamic inputs | **X** | **v** |

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