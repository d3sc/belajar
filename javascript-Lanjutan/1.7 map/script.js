// Map

// isi dari Map terdiri dari Key dan Value
// dibawah ini adalah contoh untuk membuat Map
// var nama = new Map ([ ["Key", "Value"], ]);

const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);

// method size untuk mengecek jumlah dari Map capital
console.log(capital.size);

// Method get untuk mengambil value dari property yang di isi, karena dibawah ini london berarti isinya adalah value dari property london
console.log(capital.get("London"));

// Method set untuk membuat Key dan Value baru yang akan di letakan pada map yang ditentukan.
capital.set("New Delhi", "India");

console.log(capital.size);
console.log(capital.get("New Delhi"));
