var o = {};// o 从 Object.prototype 继承对象的方法
o.x = 1;    // 给 o 定义一个属性 x
var p = Object.create(o); // p 继承 o 和 Object.prototype
p.y = 2;    // 给 p 定义一个属性 y
var q = Object.create(p); // q 继承 p、o 和 Object.prototype
q.z = 3;    // 给 q 定义一个属性 z
var s = q.toString(); // toString 继承自 Object.prototype
var result = q.x + q.y;   // =>3: x 和 y 分别继承自 o 和 p
console.log(result);
