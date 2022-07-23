const http = require("http");
const fs = require("fs");

const port = 3000;

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    /* Untuk membaca file secara asynchronous yang ada di file index.html. */
    if (err) {
      // Kalau Error masuk kedalam sini
      res.writeHead(404);
      res.write("Error: file not found!");
    } else {
      // Kalau tidak Error masuk kedalam sini.
      res.write(data); /* Data diambil dari argument readFile */
    }
    res.end();
  });
};

// Menambahkan modul http agar dapat membuat server
http
  // pada argument createServer req adalah request dan res adalah respons
  .createServer((req, res) => {
    // console.log(url); /* untuk mengecek url contoh urlnya seperti localhost:3000/tipang */

    res.writeHead(200, {
      "Content-Type": "text/html" /* Untuk mengubah yang tadinya hanya Plain text diubah menjadi text html. */,
    });

    const url = req.url;

    // Melakukan pengkondisian menggunakan IF ELSE
    // if (url === "/about") {
    //   // res.write(`<h1>Ini adalah halaman about</h1>`); /* Mengisikan nilai kedalam halaman */
    //   // res.end();

    //   renderHTML("./about.html", res);
    //   //
    // } else if (url === "/contact") {
    //   renderHTML("./contact.html", res);
    // } else {
    //   // Url selain 2 if di atas maka akan masuk kedalam sini.
    //   renderHTML("./index.html", res);
    // }

    // Melakukan Pengkondisian dengan Switch

    switch (url) {
      case "/about":
        renderHTML("./html/about.html", res); /* jika url mengarah ke halaman about, maka renderHTML akan membuat masuk ke dalam file about.html */
        break; /* Break untuk keluar dari perkondisian */
      case "/contact":
        renderHTML("./html/contact.html", res); /* jika url mengarah ke halaman contact, maka renderHTML akan membuat masuk ke dalam file contact.html */
        break; /* Break untuk keluar dari perkondisian */
      default:
        /* jika url mengarah selain kedua kondisi di atas, maka renderHTML akan membuat masuk ke dalam file index.html */
        renderHTML("./html/index.html", res);
        break; /* Break untuk keluar dari perkondisian */
    }
  })
  .listen(port, () => {
    console.log("server is listening on port " + port + ".."); /* Untuk mengecek jika server berhasil dijalankan. */
  });
