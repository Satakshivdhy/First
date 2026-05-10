// let arr = [12, 2, 34, 67, 54, 6, 9, 8, 78, 321];

// for (var i = 0; i < 10; i++) {
//   console.log(arr[i]);
// }

// console.log(arr);

// arr[2] = arr[2]+30;

// console.log(arr);

// arr = [];
// console.log(arr);

// Updation methods

let arr = [12, 33, 34, 45, 56, 67, 78, 89, 90];
console.log(arr);
arr.push(99);
console.log(arr);
arr.pop();
console.log(arr);

arr.shift();
console.log(arr);
arr.unshift(11);
console.log(arr);
arr.unshift(11, 12, 13);
console.log(arr);

// .at() , .indexOf() , .includes() , .find()
console.log(arr.at(0)); // .at()
console.log(arr.indexOf(78));
console.log(arr.includes(89));

// console.log(arr.find(89)); /Hold

let unar = [12, 10, 90, 65, 23, 20, 11, 65, 44, 99];
console.log(unar);

unar.sort();
console.log(unar);
unar.reverse();
console.log(unar);

// for (var i = 0; i < 10; i++) {
//   console.log(arr[i]);
// }

//working dynamically
arr.forEach((element) => {
    console.log(element);
    
});


let users = [];

users.push({ id: 1, name: "Raj" });
users.push({ id: 2, name: "Amit" });

console.log(users);