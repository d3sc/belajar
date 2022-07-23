var s = "";
var u = "";

for (var x = 0; x < 5; x++) {
  for (var y = 0; y <= x; y++) {
    s += " *";
  }
  s += "\n";
}
console.log(s);

for (var o = 5; o > 0; o--) {
  for (var p = 0; p < o; p++) {
    u += " *";
  }
  u += "\n";
}
console.log(u);
