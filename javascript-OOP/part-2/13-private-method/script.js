// Private Method
// Sebuah method yang hanya dapat diakses didalam classnya saja

class SayHello {
  // Membuat method say
  say(name) {
    // Jika argument berisi value maka akan bernilai true dan akan masuk ke dalam if.
    if (name) {
      // dan mengembalikan method sayName (private)
      return this.#sayName(name);
    }
    // Kalau nilai tidak berisi value maka akan masuk kedalam else
    else {
      // dan akan mengembalikan method sayNoName (private)
      return this.#sayNoName();
    }
  }

  //   Method Private
  #sayName(name) {
    return `hello ${name}!`;
  }

  //   Method Private
  #sayNoName() {
    return `Hello No Name!`;
  }
}

const person = new SayHello();

// mengisi method say yang ada di class SayHello()
console.log(person.say());
console.log(person.say("ikbar"));
