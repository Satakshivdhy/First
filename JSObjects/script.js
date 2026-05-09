// BRACKET NOTATION
// DOT NOTATION
let FData=[
  {
    "name": "Amit Sharma",
    "DOB": "1998-05-12",
    "phone": "9876543210",
    "city": "Bhopal"
  },
  {
    "name": "Neha Verma",
    "DOB": "2000-11-23",
    "phone": "9123456780",
    "city": "Indore"
  },
  {
    "name": "Rahul Mehta",
    "DOB": "1995-07-08",
    "phone": "9988776655",
    "city": "Delhi"
  },
  {
    "name": "Sneha Iyer",
    "DOB": "1999-03-17",
    "phone": "9090909090",
    "city": "Chennai"
  },
  {
    "name": "Arjun Patel",
    "DOB": "1997-09-30",
    "phone": "9812345678",
    "city": "Ahmedabad"
  }
]
FData.forEach(element => {
    console.log(element);    
});
console.log(FData);

console.log(FData[1]["name"]) //bracket notation
console.log(FData[1].name);  //dot notation -> array k saath nhi karta


const data = {
    "name": "Arjun Patel",
    "DOB": "1997-09-30",
    "phone": "9812345678",
    "city": "Ahmedabad"

}
console.log(data["phone"]);  //bracket notation
console.log(data.phone); //dot notation

// map() and filter()

FData.map((element,idx) => {
    console.log(idx);
    console.log(element);    
});





console.log(Object.keys(FData[0]));
console.log(Object.values(FData[0]));
console.log(Object.entries(FData[0]));

let a = [12,3,2,9,52,8,1,23,9,54,21,22,9,0,87]
console.log(a);
console.log(a.sort((a,b)=> a-b));
console.log(a);

// find() , findIndex() , findLastIndex() 
// val, is a variable 
console.log(a.find((m) => m ===9));
console.log(a.findIndex((val) => val ===9));
console.log(a.findLastIndex((val) => val ===9));


// filter()
let ar1=[34,57,2,3,1,98,12,22,5,45,23,1,22]
console.log(ar1);

console.log(ar1.filter((m) => m ===9)); // o/p :- []
console.log(ar1.filter((m) => m > 9)); // filter()
console.log(ar1.find((m) => m > 9));  // find()

// split()
let str = "Hello I'm The boss of Web-deveopment-class, so don't mess with me"
console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split("-"));
console.log(str.split(","));

// join()
let arr = ["apple", "banana", "mango"];
console.log(arr);
console.log(arr.join(" "));
console.log(arr.join(""));
console.log(arr.join(","));
console.log(arr.join("-"));
console.log(arr.join());

//slice()
let ar2 = [1,5,4,3,2,6,8,4,9,12,43,56,98]
console.log(ar2.slice(0,7));
console.log(ar2.slice(0,11));

console.log(ar2.slice(0));
console.log(ar2.slice(7,10));
console.log(ar2.slice(-7,10));

// String
let m = 3.13457687866689;
console.log(m);

// .tofixed() 
console.log(m.toFixed(2)); // converts number into string 

// 
console.log(m.toString());
