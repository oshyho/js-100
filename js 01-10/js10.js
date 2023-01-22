// making Tree for zenly
"use strict"

const inputNumber = Number(7)

for(let i = 0; i <inputNumber ; i++){
  let star = '';
  // 띄어쓰기
  for(let j = 0; j<inputNumber-i; j++){
    star += ' ';
  }
  // * 표시
  for(let k= 0; k<2*i +1; k++){
    star +='*'
  }
  console.log(star);

}