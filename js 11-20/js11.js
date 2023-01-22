// # 문제11 : for를 이용한 기본 활용

// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.

// ```jsx
// let s = 0;

// //pass

// console.log(s);
// ```

function summery(num){
  let total = Number('')
  for(let i=1;i<=num;i++){
    total +=i
  }
  return total;
}

console.log(summery(10))
// # 답안

// ```jsx
// let s = 0;

// for (let i=1; i<=100; i++){
//   s += i;
// }

// console.log(s);
// ```