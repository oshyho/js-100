let obj = {};
function answer(name, mat){
const keys = [name]
const values = [mat]
// prompt()로 입력 받을시 split(' ')
// const keys = prompt('이름을 입력하세요').split(' ');
// const values = prompt('점수를 입력하세요').split(' ');

for (let i=0; i<keys.length; i++) {
  obj[keys[i]] = parseInt(values[i], 10);
}
}

answer('가', 90)
answer('나', 90)
console.log(obj) // { '가': 90, '나': 90 }
answer('다', 99)
answer('라', 90)

console.log(obj) // { '가': 90, '나': 90, '다': 99, '라': 90 }