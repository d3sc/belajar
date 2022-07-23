// This dalam Object

const Person = {
  name: "ikbar",
  sayHello: function (name) {
    //* Kalau kita menggunakan this, maka yang terjadi adalah kata kunci nya akan ke object pemilik function itu (Person)
    console.log("halo " + name + ", nama saya adalah " + this.name);
  },
};

Person.sayHello("rusdi");

// This dalam DOM
const btn = document.querySelectorAll(".btn");

function active() {
  btn.forEach((i) => {
    i.textContent = "tip";
  });
  console.log(this);
}

btn.forEach((i) => {
  i.addEventListener("click", active);
});
