var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong

  if (penumpang.length == 0) {
    // tambah penumpang di awal array

    penumpang.push(namaPenumpang);

    //kembalikan isi array & keluar dari function

    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal

    for (var i = 0; i < penumpang.length; i++) {
      // kalau penumpang kosong
      if (penumpang[i] == undefined) {
        // tambah kursinya

        penumpang[i] = namaPenumpang;
        // kembalikan isi array & keluar dari function

        return penumpang;
        // jika penumpang namanya sama
      } else if (namaPenumpang == penumpang[i]) {
        // peringatan

        console.log("nama sudah ada!");
        // kembalikan array & keluar dari function

        return penumpang;
        //jika penumpang sudah di isi
      } else if (i == penumpang.length - 1) {
        //tambahkan penumpang diakhir

        penumpang.push(namaPenumpang);
        //kembalikan array & keluar dari function

        return penumpang;
      }
    }
  }
};
var hapusPenumpang = function (namaPenumpang, penumpang) {
  // menghapus penumpang jika angkot kosong.
  if (penumpang.length == 0) {
    console.log("angkot kosong!");
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      // [i] melakukan sesuatu terhadap var i di pengulangan for.

      //mengganti nama penumpang dengan undefined / menghapus penumpang.
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang; /*  kembalikan array & keluar dari function */
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada di dalam angkot.");
        return penumpang;
      }
    }
  }
};
