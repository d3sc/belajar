// higher order function
// adalah sebuah function yang menampung function lagi, berada pada argument function / pada return.

function repeat(n, action, isi) {
  /* ada didalam argument */
  for (let i = 1; i <= n; i++) {
    action(isi + " " + i);
  }
  return;
}
