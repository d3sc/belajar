// Callback
// Contoh callback adalah pada saat membuat function didalam nya memanggil function yang diluar

function funct1() {
  console.log("ini function 1");
  //   memanggil function kedua
  funct2();
}

function funct2() {
  console.log("ini function 2");
}

// Menjalankan function 1
funct1();
