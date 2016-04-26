var data = [1, 1, 3, 5, 5];
var total = 0;

for (var index = 0; index < data.length; ++index) {
	total += data[index];
}

var mean = total / data.length;

var result = [];
for (var index = 0; index < data.length; ++index) {
	result[index] = data[index] - mean;
}

console.log(result);


//--------- 函数式编程------
var sum = function(x, y) { return x + y; };

var mean2 = data.reduce(sum)/data.length;
var result2 = data.map(function(x) {return x-mean2});
console.log(result2);
