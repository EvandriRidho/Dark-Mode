const judul = document.querySelector('.judul')
let nama = localStorage.getItem('nama')

if(!nama) {
    nama = prompt('Masukkan nama anda');
    localStorage.setItem('nama', nama);
}

judul.innerHTML = `Halo, ${nama}`;

// ganti nama
const gantiNama = (e) => {
    nama = prompt('Masukkan nama baru anda : ')
    localStorage.setItem('nama', nama);
    e.preventdefault();
}

// Hapus nama
const hapusNama = (e) => {
    localStorage.removeItem('nama')
    e.preventdefault();
}

// Hapus semua
const hapusSemua = (e) => {
    localStorage.clear()
    e.preventdefault();
}

// Dark Mode
let toggle = document.querySelector('.toggle')
let tema = localStorage.getItem('tema')

if(!tema) {
    localStorage.setItem('tema', 'light')
}

const darkMode = () => {
    document.body.classList.add('dark-mode')
    localStorage.setItem('tema', 'dark')
    toggle.innerHTML = 'Light Mode'
}

const lightMode = () => {
    document.body.classList.remove('dark-mode')
    localStorage.setItem('tema', 'light')
    toggle.innerHTML = 'Dark Mode'
}

if(tema === 'dark') {
    darkMode()
}

toggle.addEventListener('click', function(e) {
    tema = localStorage.getItem('tema')

    if(tema === 'light') {
        darkMode()
    } else {
        lightMode()
    }

    e.preventDefault();
})