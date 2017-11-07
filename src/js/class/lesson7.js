//函数扩展

{//通常需要先判断一下参数y是否被赋值，如果没有，再等于默认值。
	function test(x,y='world'){
		console.log('默认值',x,y);
	}
	test('hello');//hello  world
	test('hello','china');//hello china
	test('hello','')
}

{
	let x='test';
	function test2(x,y=x){
		console.log('作用域',x,y);
	}
	test2('china');
}

//参数默认值可以与解构赋值的默认值，结合起来使用。
{
	function foo({x,y=5}){
		console.log('foo',x,y);//foo undefined 5
	}
	foo({});//undefined
	foo({x:1});// foo 1 5
	foo({x:1,y:2});//foo 1 2
}
{
	function m1({x=0,y=0}={}){
		// return [x,y];
		console.log('m1',x,y);
	};
	function m2({x,y}={x:0,y:0}){
		// return [x,y];
		console.log('m2',x,y);
	}
// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x 和 y 都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x 有值，y 无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x 和 y 都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

}

{//rest参数把一系列的参数转变成数组
	//rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
	function test3(...arg){
		for(let v of arg){
			console.log('rest',v);
		}
	}
	test3(1,2,3,4,'a');
}

{//把数组转成零散的值
	console.log(...[1,2,4]);
	console.log('a',...[1,2,4]);
}
//箭头函数
{//arrow函数名  v函数参数 v*2函数返回值
	let arrow =v => v*2;
	//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
	let arrow2 =() => 5;
	console.log('arrow',arrow(3));
	console.log('arrow2',arrow2());

	var f=v=>v;
	//等价于
	var f=function(v){
		return v;
	}
}


//尾调用（Tail Call）就是指某个函数的最后一步是调用另一个函数。
{
	function tail(x){
		console.log('tail',x);
	}
	function fx(x){
		return tail(x);
	}
	fx(123);
}