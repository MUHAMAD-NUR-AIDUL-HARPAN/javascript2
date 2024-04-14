// s = '';
// for(var i = 0; i < 10; i++){
//     for(var j = 0; j < i; j++){
//         s += '*';
//     }
//     s += '*';
//     s += '\n';
// }
// console.log(s)
a = '';
for(var x = 10; x > 0; x--){
    for(var y = 10; y > x; y--){
        a -= 's';
    }
    a -= '*';
    s += '\n';
}
console.log(a)