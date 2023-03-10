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
