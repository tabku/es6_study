let scope = "global";
if (true) {
  let scope2 = "parent";
  var myFunc = function () {
    console.log(scope);
    console.log(scope2);
  };
}
myFunc();

// object の操作は可能
const obj = {
  name: "test"
};
obj.name = "test2";
console.log(obj);
