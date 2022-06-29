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
// const arr3 = [10, 20, 30];
// const arr5 = [10, 20, 30];
// const arr4 = [...arr3];
// console.log(arr4);

// console.log([...arr3, ...arr5]);

// map filterを使った配列の処理
// const nameArr = ["tom", "soge", "hoge"];
// // const nameArr2 = nameArr.map((name) => name);
// // console.log(nameArr2);
// const nameArr2 = nameArr.map((name) => {
//   return `${name}さん`;
// });
// console.log(nameArr2);

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => num % 2 === 0);
// console.log(newNumArr);

// || 左側がfalseなら右を実行する
// const num = 100;
// const fee = num || "金額未設定";
// console.log(fee);

// && 左側がtrueなら右を実行する
const test = true;
const test2 = 1;
console.log(test && test2);
