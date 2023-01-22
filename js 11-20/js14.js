//3의 배수 = 짝
//나머지 = 입력한 수 그대로 출력

function threeGame(num) {
  num % 3 === 0 ? console.log("짝") : console.log(num);
}

threeGame(30);
threeGame(23);

function oldThreeGame(num) {
  if (num % 3 === 0) {
    console.log("짝");
  } else {
    console.log(num);
  }
}

// 클래스를 이용해서 함수만들기
class classThreeGame {
  output(num) {
    num % 3 === 0 ? console.log("짝") : console.log(num,'응아니야');
  }
}

const classThree = new classThreeGame()

classThree.output(32);