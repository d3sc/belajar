//Latihan menggunakan semua DOM Selector
// yang bersifat array getElementsByTagName, getElementsByClassName, querySelectorAll / yang bersifat (jamak/banyak/lebih dari satu.).
// dan yang paling cepat performanya adalah getElementById and getElementsByTagName.

const h1 = document.getElementById("judul");
h1.style.color = "green";

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].innerHTML = "mengubah dengan javascript";
}

const p2 = document.getElementsByClassName("p2")[0]; /* harus diberi urutan index karena dia bersifat array. */
p2.style.color = "blue";

const a = document.querySelector("section#a a");
a.style.textDecoration = "none";

const li = document.querySelectorAll("li")[1]; /* harus diberi urutan index karena dia bersifat array */
li.innerHTML = "mengubah dengan Javascript";

// dan juga dapat seperti ini
// mempersempit jangkouan scope

const sectionB = document.getElementById("b"); /* mengambil scope section id b */
const p4 = sectionB.querySelector("p"); /* melakukan seleksi di jangkauan section b, dan menyeleksi paragraf yang ada pada section b */
p4.innerHTML = "merubah";
