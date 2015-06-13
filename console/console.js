//1//语法//console.log([data][, ...])
var count = 51;
console.log('%d', count);

//2
console.time('elements');
for (var i = 0; i < 1000000; i++) {

}
console.timeEnd('elements');
// prints 100-elements: 2ms