var o = {
	m:function() {
		console.log(this === o);
		
		function f() {
			console.log(this === o);
		}
		
		f();
		
	}
}

o.m();
