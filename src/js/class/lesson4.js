//字符串的扩展

//1.字符的 Unicode 表示法
{
	console.log('a',`\u0061`);
	console.log('s',`\u20BB7`);

	console.log('s',`\u{20BB7}`);


}
{
	let s='𠮷';
	console.log('length',s.length);
	console.log('0',s.charAt(0));
	console.log('1',s.charAt(1));
	console.log('at0',s.charCodeAt(0));
	console.log('at1',s.charCodeAt(1));

	//es6
	//ES6提供了codePointAt方法，能够正确处理4个字节储存的字符，返回一个字符的码点。
	let s1='𠮷a';
	console.log('length',s1.length);
	console.log('code0',s1.codePointAt(0));
	console.log('code0',s1.codePointAt(0).toString(16));
	console.log('code1',s1.codePointAt(1));
	console.log('code1',s1.codePointAt(1).toString(16));
	console.log('code2',s1.codePointAt(2));
}

{
	//ES5提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别32位的UTF-16字符（Unicode编号大于0xFFFF）。
	console.log(String.fromCharCode("0x20bb7"));
	//ES6提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符
	console.log(String.fromCodePoint("0x20bb7"));
	//fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符串的实例对象上。
}

{
	//es5
	let str='\u{20bb7}abc';
	for (var i = 0; i < str.length; i++) {
		console.log('es5',str[i]);
	}

//es6
	for(let code of str){
		console.log('es6',code);
	}
}

{
	let str ="string";
	console.log('includes',str.includes("c"));
	console.log('start',str.includes("str"));
	console.log('end',str.includes("ng"));
}

{//复制
	//repeat方法返回一个新字符串，表示将原字符串重复n次。
	let str="abc";
	console.log(str.repeat(2));
}

{
	let name="list";
	let info="hello world";
	let m=`i am ${name},${info}`;
	console.log(m);
}

{
	//如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
	//padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。
	console.log('1'.padStart(2,'0'));//往前补
	console.log('1'.padEnd(2,'0'));//往后补
	console.log('abc'.padStart(10, "foo"));//foofoofabc
	console.log('abc'.padStart(6,"123465"));  //123abc
	console.log('abc'.padStart(8, "0"));  

}

//标签模版  
	//“标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。
	{
function SaferHTML(templateData){
    var s = templateData[0];
    var i;
    for(i = 1;i<arguments.length;i++){
        var arg = String(arguments[i]);

        //sender里面可能有特殊字符，进行转义
        s += arg.replace(/&/g,"&amp;")
                .replace(/</g,"&lt;")
                .replace(/>/g,"&gt;");
        s += templateData[i];
    }
    console.log(i);//2，表示这个循环只执行了一次，因为templateData[0]="<p>",arguments这个数组只有${sender}这个元素，后面一长串字符都是templateData[2];
    return s;
}
var sender = '<script>alert("abc")</script>';
var message = SaferHTML`<p>${sender} has sent you a message.</p>`;
console.log('message',message);
	}
 //标签模板的另一个应用，就是多语言转换（国际化处理）
	//它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
	{
		var book = {
    title:"shiji",
    author:"simaqian"
};
var book1 = {
    title:"sanguo",
    author:"luo"
};
var myBooks = [book,book1];
function hashTemplate(templateData){
    var s = "";
    var i = 0;
    while(i<templateData.length){
        s += templateData[i++];
        if(i<arguments.length){
            s += arguments[i];
        }
    }
    return s;
}
var libraryHtml = hashTemplate`
    <ul>
        #for book in ${myBooks}
            <li><i>${book.title}</i> by ${book.author}</li>
        #end
    </ul>
`;
console.log('libraryHtml',libraryHtml);
	}

	{
		let user={
		name:'list',
		info:'hello world'
	};
	abc `i am ${user.name},${user.info}`;
	console.log(abc `i am ${user.name},${user.info}`);
	function abc(s,v1,v2){
		console.log(s,v1,v2);
		return s+v1+v2;
	}

}

{
	console.log(String.raw`Hi\n${1+2}`); //raw对\斜杠进行转义（在斜杠之前又加了一个斜杠）
	console.log(`Hi\n${1+2}`);
}