// 分割代入 オブジェクト 配列
// const obj = {
//   name: "tom",
//   age: 23
// };
// console.log(`${obj.name} ${obj.age}`);
// const { name, age } = obj;
// console.log(`${name} ${age}`);

// const profile = ["tom2", 22];
// const [name2, age2] = profile;
// console.log(`${name2} ${age2}`);

// スプレッド構文

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (a, b) => console.log(a + b);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [n1, n2, ...arr3] = arr2;
// console.log(arr3);

// 配列のコピー、結合
// 参照渡しにならないので、コピー結合はスプレッド構文でやるのが吉
const arr3 = [10, 20, 30];
const arr5 = [10, 20, 30];
const arr4 = [...arr3];
console.log(arr4);

console.log([...arr3, ...arr5]);
