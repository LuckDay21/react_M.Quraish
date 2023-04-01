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
