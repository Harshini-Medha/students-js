let arr = [
  { std: "Harshini", class: "10th", age: 14 },
  { std: "Medha", class: "9th", age: 15 },
  { std: "Arjun", class: "8th", age: 13 },
  { std: "Adhavan", class: "6th", age: 12 },
];

let arr2 = JSON.parse(JSON.stringify(arr));

arr[1] = { std: "john", class: "10th", age: 16 };
arr[0].std = "meghana";
console.log(arr2);
console.log(arr);
console.log(
  "the changes are made in only the std name in first object and the whole line in second object "
);

arr.map((ele) => console.log(ele.std, ele.class, ele.age));
console.log(arr.reverse());

// let n = [10, 55, 33, 22, 90];
// console.log(n.sort());
