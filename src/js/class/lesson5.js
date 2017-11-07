//数值的扩展
{//多进制  二进制  八进制 的表现方法
	console.log('B',0b111110111);//二进制
	console.log(0b111110111);//二进制
	console.log(0o767);//八进制
}

{//	Number.isFinite  数值是否有穷尽
	//Number.isFinite()用来检查一个数值是否为有限的（finite）。
	console.log('15',Number.isFinite(15));
	console.log('NaN',Number.isFinite(NaN));  //NaN不是一个数
	console.log('1/0',Number.isFinite('true'/0));
	//Number.isNaN()用来检查一个值是否为NaN。
	console.log('NaN',Number.isNaN(NaN));
	console.log('0',Number.isNaN(0));
   
}

{//Number.isInteger()用来判断一个值是否为整数。
    console.log('25',Number.isInteger(25));
    console.log('25.0',Number.isInteger(25.0));
    console.log('25.1',Number.isInteger(25.1));
    console.log('25',Number.isInteger('25'));//字符串
}

{//Number.isSafeInteger判断一个数值是否有效安全
	console.log('最大上限',Number.MAX_SAFE_INTEGER);//最大的上限
	console.log('最小下限',Number.MIN_SAFE_INTEGER);//最小的下限
	//Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。
	console.log('10',Number.isSafeInteger(10));
	console.log('a',Number.isSafeInteger('a'));
}

{//Math.trunc方法用于去除一个数的小数部分，返回整数部分。
	console.log(4.1,Math.trunc(4.1));
	console.log(4.9,Math.trunc(4.9));
}

{//Math.sign  判断正数负数还是0  正数为1 负数为-1
	//Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
	//参数为正数，返回+1；
// 参数为负数，返回-1；
// 参数为0，返回0；
// 参数为-0，返回-0;
// 其他值，返回NaN。
	console.log('-5',Math.sign(-5));
	console.log('0',Math.sign(0));
	console.log('5',Math.sign(5));
	console.log('50',Math.sign('50'));
	console.log('abc',Math.sign('abc'));
}

{
	//Math.cbrt方法用于计算一个数的立方根。
	console.log('-1',Math.cbrt(-1));
	console.log('8',Math.cbrt(8));
	console.log('27',Math.cbrt(27));
}