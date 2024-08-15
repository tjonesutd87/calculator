let str = '55555';
const arr = str.split('');
console.log(arr);
arr.splice(1, 0, 'test');
console.log(arr);
arr.splice(1, 1, 'test');
console.log(arr);