// Global Scope / Window Scope
var a = 1;

function tes() {
  /* Function scope itu adalah {} (kurung kurawal) */
  // Function scope = bisa mengakses variable di dalam dan diluar function (variable global), kalau di luar tidak bisa mengakses variable lokal.
  //   dengan kata lain yang didalam dapat melihat yang diluar, tetapi yang diluar tidak dapat melihat yang didalam. coba pindahkan console.log nya keluar dari kurung kurawal function.
  var a = 2; /* Harus diberi nilai variable agar menjadi variable lokal dan tidak keluar dari functionnya. */
  console.log(a);
}
