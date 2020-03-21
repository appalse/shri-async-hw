/* Даны 3 асинхронные функции со случайным setTimeout
Нужно написать код, который выведет в консоль:
A
B
C
*/

function foo(callback) {
    setTimeout(function() {
        callback('A');
    }, Math.random()*100);
}

function bar(callback) {
    setTimeout(function() {
        callback('B');
    }, Math.random()*100);
}

function baz(callback) {
    setTimeout(function() {
        callback('C');
    }, Math.random()*100);
}


/* Решение */

const promisify = function(fn) {
    return new Promise(resolve => {
        fn(resolve)
    });
}

async function solution() {    
    const a = await promisify(foo)
    console.log(a);
    const b = await promisify(bar);
    console.log(b);
    const c = await promisify(baz);
    console.log(c);
}

solution();