// Private Class Field
// hanya bisa diakses di dalam classnya saja

class Counter {
  // membuat private field dengan menambahkan #
  #counter1 = 0;

  //   Menggunakan method increment untuk menambah counter
  increment() {
    return this.#counter1++;
  }

  //   Menggunakan method decrement untuk mengurangi counter
  decrement() {
    return this.#counter1--;
  }

  //   Menggunakan get untuk mengambil hasil counter
  get hasil() {
    return this.#counter1;
  }
}

const counter = new Counter();
counter.decrement();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.hasil);
