// membuat object angkot

function Angkot(supir, track, penumpang, kas) {
  /* jika menggunakan this harus dengan sama dengan */
  this.supir = supir;
  this.track = track;
  this.penumpang = penumpang;
  this.kas = kas;

  // penumpang naik

  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang == 0) {
      this.penumpang.push(namaPenumpang);
      return this.penumpang;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] == undefined) {
          alert("Bangku sudah diisi!");
          this.penumpang[i] = namaPenumpang;
          return this.Penumpang;
        } else if (namaPenumpang == this.penumpang[i]) {
          alert("Nama penumpang sudah ada!");
          return this.penumpang;
        } else if (i == this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);
          return this.penumpang;
        }
      }
    }
  };

  //penumpang turun

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      /* jika angkot masih kosong */
      alert("angkot masih kosong!");
      return false; /* return false; untuk keluar dari method nya */
    }
    // turun harus bayar
    for (var i = 0; i < this.penumpang.length; i++) {
      if (namaPenumpang != this.penumpang) {
        alert("Nama tidak ada di dalam angkot!");
        return this.penumpang;
      } else if (namaPenumpang == this.penumpang[i]) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var angkot1 = new Angkot("ikbar", ["ciputat", "muncul"], ["ridho", "rafli", "rizky"], 0);
var angkot2 = new Angkot("tipang", ["cibinong", "wonosari"], [], 0);
