console.log('Bentuk Segitiga ke 1');
var s = '';
for (var i = 0; i < 10 ; i++ ) {
    for( var j = 0; j <= i; j++) {
        s += '*';
    } 
    s += '\n'; 
}
console.log(s);



console.log('Bentuk Segitiga ke 2');
var s = '';
for (var i = 10; i >= 0 ; i-- ) {
    for( var j = 0; j < i; j++) {
        s += '*';
    } 
    s += '\n'; 
}
console.log(s);



console.log('Bentuk Segitiga ke 3');
var s = '';
for (var i = 10; i > 0 ; i-- ) {
    for( var j = 10; j > 0; j--) {
        if (j <= i ){
            s += '*';
        } else {
            s += ' ';
        } 
    } 
    s += '\n';
}
console.log(s);



console.log('Bentuk Segitiga ke 4');
var s = '';
for (var i = 10; i >= 0 ; i-- ) {
    for( var j = 0; j < 10; j++) {
        if (j >= i ){
            s += '*';
        } else {
            s += ' ';
        } 
    } 
    s += '\n';
}
console.log(s);

console.log('Bentuk Segitiga ke 4.2')
var s = '';
for (var i = 10; i >= 0 ; i-- ) {
    for( var j = 0; j < 10; j++) {
        if (j >= i ){
            s += '*';
        } else {
            s += ' ';
        } 
    } 
    s += '\n';
}
console.log(s);















