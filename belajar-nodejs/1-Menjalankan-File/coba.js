// const nama = "ikbar";

// console.log(`halo ${nama}`);

function cetakNama(nama) {
  return `halo, selamat datang kembali ${nama}!`;
}

module.exports = cetakNama; /* untuk dapat memberikan mengakses menggunakan var, function, dan object ke file/module lain. dengan syarat file tersebut merequire ke file ini */
