function tampilAngka(n) {
  // base case
  if (n === 0) {
    return;
  }
  //base case sampe sini
  // jika tidak ada base case akan terjadi infinitive loop
  //di bawah ini adalah perintah
  console.log(n);
  tampilAngka(n - 1);
}

tampilAngka(10);
