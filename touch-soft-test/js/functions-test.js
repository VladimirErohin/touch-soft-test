// #1
function foo(str){
    str=str[0].toUpperCase() + str.slice(1).toLowerCase();
    return str
}

//#2
function sayHello(name){
    if(name==='Mark'){
        return `Hi, ${name}!`
    }else{ return `Hello, ${name}!`}
}

//#3
function filterString(arrStr,num){
    let nStr=[];
    nStr=arrStr.filter(i=>i.length<=num)
    return nStr
}