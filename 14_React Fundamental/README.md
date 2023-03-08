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
