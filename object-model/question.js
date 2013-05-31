var questions = [
    {
        qe:"Function instanceof Object",
        why:"一切皆是对象"
    }, {
        qe:"Function instanceof Function",
        why:"函数类型本身也是一个函数"
    }, {
        qe: "Function.constructor === Function"  // Function initialize by itself
    }, {
        qe: "Function.prototype instanceof Object"
    }, {
        qe: "Function.prototype instanceof Function",  // Function has prototype because it's a Function 
    }, {
        pre:"var empty = function() {};",
        qe:"Function.prototype == empty",
        why:"Function.prototype是内建对象"
    }, {
        qe: "Function.__proto__ === Function.prototype" 
    }, {
        pre:"var a = {};",
        qe:"Function.prototype.__proto__ === a.__proto__"  // the __proto__ of Function:Empty is the same as a Function
    }, {
        qe:"typeof Function.prototype.prototype != 'undefined'" // Because it's not a Function, so it don't have prototype
    }, {
        pre:"var A = function() {};",
        qe:"A instanceof Function"
    }, {
        pre:"var A = function() {};",
        qe:"A.__proto__ === Function.prototype" // A should has everything in 'Function'
    }, {
        pre:"var A = function() {};",
        qe:"A.constructor === Function" // A is constructed by 'Function'
    }, {
        pre:"var A = function() {};",
        qe:"A.prototype !== Function.prototype"
    }, {
        qe:"Object instanceof Object"
    }, {
        qe:"Object instanceof Function"
    }, {
        qe:"Object.constructor instanceof Function"
    }, {
        qe:"Object.constructor === Object"
    }, {
        qe:"Object.prototype instanceof Object"
    }, {
        qe:"Object.prototype === Function.prototype.__proto__"
    }, {
        qe:"Object.prototype === {}.__proto__"
    }, {
        qe:"Object.prototype.__proto__ === null"
    }, {
        pre:"var A = function(){}; A.prototype.a = '1', a = new A; a.__proto__.b = '2';",
        qe:"('b' in new A())"
    }

];


for(var i = questions.length; i-- > 0; ) {
    var q = questions[i];
    var run = "(function() {";
    if("pre" in q) run += q.pre;
    run += "return ("+q.qe+");})()";
    q.answer = eval(run);
}
