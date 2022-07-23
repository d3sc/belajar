// Manipulation DOM
// inner.HTML

// const judul = document.getElementById("judul");
// judul.innerHTML = "<center>Ikbar</center>"; /* dapat mengisikan apapun didalam tag yang sudah diseleksi */

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<p>Hello World</p>"; /* dapat menimpa/mengganti elemen html */

//
// element.style.<propertyCSS>

// const judul = document.querySelector("#judul");
// judul.style.color = "green";
// judul.style.backgroundColor = "salmon"; /* untuk menambahkan properti yang lebih dari satu kata harus menggunakan camelCase, dan kata berikutnya */

//
// element.getAttribute()
// Attribute adalah sesuatu yang menempel pada html.
// dan ada banyak macam yaitu setAttribute untuk menambahkan atribute, getAttribute untuk melihat isi attribute, dan removeAttribute untuk menghilangkan atribute.

// const a = document.querySelector("section#a a");
// a.setAttribute("target", "blank_");
// // const lihat = a.getAttribute("href"); /* untuk melihat attribute di tag a */
// a.removeAttribute("href"); /* untuk menghilangkan attribute pada tag a */

const p2 = document.querySelector(".p2");

// attribute

// attribute ada beberapa jenis, yaitu get, set, remove.
// cara menggunakan attribute adalah dengan = element.<jenisnya>Attribute()

element.getAttribute(p2); /* untuk melihat isi attribute. */
// element.setAttribute('class / <nama attributenya>', 'label / <isi attributenya>') untuk menambahkan attribute, disitu saya memberikan attribute class yang di isi label. (dan ini menimpa attributenya jika sama!)
// element.removeAttribute('class / <nama attributenya>')

// classList

// classList ada beberapa jenis, yaitu add, remove, toggle, item, contains, replace.
// cara menggunakan classList adalah dengan = element.classList.<jenisnya>()

// element.classList.add/remove() untuk menambahkan class / menghapus.
// element.classList.toggle() untuk menghapus jika class sudah ada dan menambahkan jika class tidak ada, dan mengembalikan nilai boolean.
// elemen.classList.item() untuk mencari urutan class dengan urutan index, seperti array.
// element.classList.contains() adalah untuk mengecek apakah nama class tersebut ada/tidak, dan jenis ini mengembalikan nilai boolean yang berisi true / false.
// yang diisi 2 baris ada replace. contohnya element.classList.replace('class yang lama', 'class yang baru'). replace berguna untuk mengganti class yang sudah ada.
