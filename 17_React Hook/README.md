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
