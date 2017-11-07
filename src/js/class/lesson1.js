//let 和 const 命令

function test() {
  // for (let i = 0; i < 3; i++) {
  //   console.log(i);
  // }
  // console.log(i);
 
}
// test();
//const声明一个只读的常量。一旦声明，常量的值就不能改变。
function last(){
	const PI=3.14159;//使用const声明的常量是不能修改的:PI=8;   使用const声明必须赋值: const PI; PI=8;
	const k={
		a:1
	}//当前k为对象，引用类型
	k.b=3;
	console.log(PI,k);
}

last();
