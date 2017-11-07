//解构赋值
// 解构赋值：左边一种结构，右边一种结构，左右一一对应进行赋值
//解构赋值 这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
// 分类：
// 1.数组解构赋值、 2.对象解构赋值、3.字符串解构赋值、4.布尔值解构赋值、5.函数参数解构赋值、6.数值解构赋值
// 1.数组解构赋值、
// 如果解构不成功，变量的值就等于undefined。
{let a,b,rest;
[a,b]=[1,2];
console.log(a,b);
}

{
	let a,b,rest;
	[a,b,...rest]=[1,2,3,4,5,6];
	console.log(a,b,rest);
}


 {
	let a,b;
	({a,b}={a:1,b:2});
	console.log(a,b);
}

{let a,b,c,rest;
// [a,b,c=3]=[1,2];
[a,b,c]=[1,2];
console.log(a,b,c);
}

{
	let a=1;
let b=2;
[a,b]=[b,a];
console.log(a,b);
}

{ 
	function f(){
	return [1,2]
}
let a,b;
[a,b]=f();
console.log(a,b)
}

{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,,,b]=f();//获取想要的值
	console.log(a,b);
}

{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,...b]=f();//只取第一个
	console.log(a,b);
}
{
	function f(){
		return [1,2,3,4,5]
	}
	let a,b,c;
	[a,,...b]=f();
	console.log(a,b);
}

//2. 对象解构赋值
{ let o={p:42,q:true};
let{p,q}=o;
console.log(p,q);
}

{
	let {a=10,b=5}={a:3};//覆盖a的值
		console.log(a,b);
}
{
	let { bar, foo } = { foo: "aaa", bar: "bbb" };
console.log(foo,bar) // foo "aaa"  bar "bbb" 

}

{
	let metaData={
		title:'abc',
		test:[{
			title:'test',
			desc:'description'
		}]//常用场景  嵌套数组的应用
	}
	let {title:esTitle,test:[{title:cnTitle}]}=metaData;
	console.log(esTitle,cnTitle);
}

//3.字符串的解构赋值
{
const [a,b,c,d,e]='hello';
console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
}


//4.布尔值解构赋值
{
	let {toString:s}=true;
	console.log(s===Boolean.prototype.toString);
	console.log(s);
}
//5.函数参数的解构赋值
{
	function add([x,y]){
		return x+y;
	}
	console.log('add([x,y])',add([1,2]));
}
{//函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。
	function move({x=0,y=0}={}){
		return [x,y];
	}
	console.log('move({x=0,y=0}' ,move({x:3,y:8}));
	console.log(move({x:3}));
	console.log(move({}));
	console.log(move());
}
{//函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果
	function move({x,y}={x:0,y:0}){
		return [x,y];
	}
	console.log('move({x,y}',move({x:3,y:8}));
	console.log(move({x:3}));
	console.log(move({}));
	console.log(move());
}
//6.数值解构赋值
{
	let {toString:s}=123;
	console.log(s===Number.prototype.toString);
	console.log(s);
}