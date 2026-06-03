const iterations = 1000;
console.time("Inside loop");
for (let i = 0; i < iterations; i++) {
  Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(i);
}
console.timeEnd("Inside loop");

console.time("Outside loop");
const formatter = new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 });
for (let i = 0; i < iterations; i++) {
  formatter.format(i);
}
console.timeEnd("Outside loop");
