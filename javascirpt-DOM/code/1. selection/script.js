// DOM selection
// document.getElemenById() mengembalikan 1 element.

const judul = document.getElementById("judul");

judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "welcome";

// document.getElementsByTagName mengembalikan HTML Colections

const p = document.getElementsByTagName("p");

// p[2].style.backgroundColor = "lightblue"; /* yang bisa diubah hanya dengan indexnya saja, karena array tidak bisa diubah. */
// mengubah background color menggunakan looping
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0]; /* jika ingin memasukan HTML colection harus menggunakan urutan index ( [x] ), karena mereka bersifat seperti array. */
h1.style.fontSize = "3em";

// documen.getElementsByClassName(); mengembalikan HTML Colection

const p1 = document.getElementsByClassName("p1")[0]; /* jika ingin memasukan HTML colection harus menggunakan urutan index ( [x] ), karena mereka bersifat seperti array. */
p1.innerHTML = "ini dibuat dari javascript";
