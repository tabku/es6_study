// アロー関数
const func1 = function () {
  console.log("func1");
};
func1();

// functionは省略可能
const func2 = (str) => {
  console.log(str);
};
func2("func2");

// 一行なら{}は省略できる
const func3 = (str) => console.log(str);
func2("func3");
const multi = (x, y) => console.log(x * y);
multi(2, 3);
