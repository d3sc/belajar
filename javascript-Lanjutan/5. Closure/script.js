// Closure

function init() {
  let nama = "ikbar"; /* Local Variable */
  /* inner function ( closure ) */
  function tampilkanNama() {
    console.log("halo " + nama);
    return nama;
  }
  return tampilkanNama();
}
init();
