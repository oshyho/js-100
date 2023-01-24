function solution(num1,num2){
  //10진법으로 바꿔야함
  num1 = parseInt(num1, 10)
  num2 = parseInt(num2, 10)
  num2 = num1%num2;
  console.log(num1, num2)

}

solution(3334,7)