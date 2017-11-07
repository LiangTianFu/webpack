//正则的扩展
//es5的写法
//1.RegExp 构造函数
//RegExp构造函数的参数有两种情况。

{//第一种情况是，参数是字符串，这时第二个参数表示正则表达式的修饰符（flag）
	let regex=new RegExp('xyz','i');
	//第二种情况是，参数是一个正则表示式，这时会返回一个原有正则表达式的拷贝。
	let regex2=new RegExp(/xyz/i);
	console.log(regex.test('xyz123'),regex2.test('xyz123'));

//es6
	let regex3=new RegExp(/xyz/ig,'i');
	//后面的修饰符会覆盖掉前面正则表达式的修饰符   原有正则对象的修饰符是ig，它会被第二个参数i覆盖。
	console.log(regex3.flags);
}


//g、y修饰符
{//es5的写法
	let s='bbb_bb_b';//g、y都是全局匹配
	let a1=/b+/g; // g修饰符只要剩余位置中存在匹配就可
	
    let a2=/b+/y;//es6    y修饰符确保匹配必须从剩余的第一个位置开始
    console.log('one',a1.exec(s),a2.exec(s));
    console.log('two',a1.exec(s),a2.exec(s));
    console.log(a1.sticky,a2.sticky);//sticky判断正则是否开启带有y修饰符的作用
    }

//u修饰符，含义为“Unicode模式”，用来正确处理大于\uFFFF的 Unicode 字符。也就是说,会正确处理四个字节的 UTF-16 编码。
{
	console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));//没加u会吧('\uD83D\uDC2A')当成两个字符
	console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));//加u会吧('\uD83D\uDC2A')当成一个字符  加了u修饰符以后，ES6 就会识别其为一个字符
	console.log(/\u{61}/.test('a'));
	console.log(/\u{61}/u.test('a'));//{}大括号放unicode编码，一定要加u才能够被识别

	console.log(`\u{20BB7}`);
	let s='𠮷';

	console.log('u',/^.$/.test(s));
	console.log('u-2',/^.$/u.test(s));//字符串中有的字符大于两个字节的，一定要加u才能够被识别
   
   console.log('test',/𠮷{2}/.test('𠮷𠮷'));
   console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));
//  .(点)并不能匹配所有的字符，他是有条件的：小于两个字节长度的字符
}

