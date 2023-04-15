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
