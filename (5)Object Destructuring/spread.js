const first = [1, 2, 3];
const second = [4, 5, 6];

//Spread operator to combine two arrays into one array without modifying the original arrays.
const combined = first.concat(second);
const combinedSpread = [...first, "a", ...second, "b"];

console.log(combined);
console.log(combinedSpread);

const name = { name: "Awanish" };
const country = { country: "India" };

const profile = { ...name, ...country, location: "Bangalore" };

console.log(profile);
