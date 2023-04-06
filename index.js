let data = [
  {
    studentName: "student001",
    age: "12",
    fee: ["1000", "10000", "2000"],
  },

  {
    studentName: "student002",
    age: "12",
    fee: ["1000", "10000", "2000", "2000"],
  },

  {
    studentName: "student003",
    age: "12",
    fee: ["1000", "10000", "2000"],
  },
  {
    studentName: "student004",
    age: "12",
    fee: ["1000", "10000", "2000", "2000", "30000"],
  },

  {
    studentName: "student005",
    age: "12",
    fee: ["1000", "2000"],
  },
];

const l_arr = data.filter((ele) => {
  if (ele.fee.length >= 3) {
    return ele.fee.length >= 3;
  }
});

console.log(l_arr);

data.fee(length - 1);
