var empty = {};   // 没有任何属性的对象
var point = {x: 0, y:0};  // 两个属性
var point2 = {x:point.x, y:point.y+1}; // 更复杂的值
var book = {
	"main title": "JS", // 属性名字里有空格，必须用字符串表示
	'sub-title": "JS_learn_ppt", // 属性字符里有连字符，必须用字符串表示
	"for": "all",       // "for"是保留字，因此必须用引号
	 author: {
		firstname: "Nathan",
		lastname: "Lit"
	}
}

var object = new Object();  // 和 {} 一样
var array  = new Array();   // 和 [] 一样
var date   = new Date();    
var reg    = new RegExp("js");
