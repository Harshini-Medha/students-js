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

//filter as per the requirement
const fildata = data.filter((ele) => ele.fee.length >= 3);

//mapping
const mod = fildata.map((ele) => {
  //spreading
  const newdata = { ...ele };
  //assigning the spreaded (only fee)
  const feear = newdata.fee;
  //checking the length and taking index of last element
  const lastidx = feear.length - 1;
  //subtract 1000 from the last element of fee of all object l=>3
  feear[lastidx] = feear[lastidx] - 1000;
  return newdata;
});

//print the data now newly generated
console.log(mod);
