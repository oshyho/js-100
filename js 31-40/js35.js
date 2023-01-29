//2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

function one(n) {
  function two(value) {
    const sq = Math.pow(value, n);
    console.log(value)
    return sq;
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(2));
console.log(c(7));