
const square = (num1, num2) => {
  for(let i =1; i< num2; i++){
    num1 *= num1
  }
  console.log(num1)
}

square(3,2)
square(5,3)


// 구구단 만들기

// for(let i = 1; i < 10 ; i++){
//   console.log(`${i}단`)
//   for(let j = 1; j < 10 ; j ++){
//     console.log(`${i} x ${j} = ${i*j}`)
//   }
// }