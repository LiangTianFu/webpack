//数组的扩展
{//Array.of方法用于将一组值，转换为数组
	let arr =Array.of(3,4,7,9,11,151);
	console.log('arr=',arr);
//如果没有参数，就返回一个空数组。
	let empty=Array.of();
	console.log('empty',empty);
}

{//querySelectorAll数组转换功能
	//querySelectorAll 在文档内找全部符合选择器描述的节点包括Element本身
	let p=document.querySelectorAll('p');
	let pArr =Array.from(p);
	pArr.forEach(function(item){
		console.log(item.textContent);
	});
//querySelectorAll映射功能
   
   console.log(Array.from([1,3,4],function(item){
   	return item*2
   }))

}

{//fill方法使用给定值，填充一个数组。
	console.log('fill-7',[1,'a',undefined].fill(7));
	console.log('fill,pos',['a','b','c'].fill(7,1,2));
	console.log('fill,pos',['a','b','c'].fill(7,1,3));//填充数值、起始位置和结束位置

}

{//entries()，keys()和values() —— 用于遍历数组
	//keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
	//遍历index索引
	for(let index of ['1','c','ks'].keys()){
		console.log('keys',index);
	}
//遍历value值
	for(let value of ['1','c','ks'].values()){
		console.log('values',value);
	}
//遍历index和value
	for(let [index,value] of ['1','c','ks'].entries()){
		console.log('values',index,value);
	}
}

{//copyWithin方法在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
//从该位置开始替换数据、从该位置开始读取数据(负值，表示倒数)、到该位置前停止读取数据(负值，表示倒数)
	console.log([1,2,3,4,5].copyWithin(0,3,4));//  将 3 号位复制到 0 号位  
	console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1));// -2 相当于 3 号位， -1 相当于 4 号位  
}

{//find方法，用于找出第一个符合条件的数组成员。
	//查找
	console.log([1,2,3,4,5,6,7].find(function(item){//find只找第一个符合条件的 返回数值
		return item>3;
	}));
		console.log([1,2,3,4,5,6,7].findIndex(function(item){//findIndex返回数值的索引下标
		return item>3;
	}));
}
//数组实例的 includes()
{//表示某个数组是否包含给定的值
	console.log('number',[1,2,NaN].includes(1));
	console.log('number',[1,2,NaN].includes(NaN));
}