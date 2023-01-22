class student{
  // constructor(kor, mat, eng){
  //   this.kor = kor
  //   this.mat = mat
  //   this.eng = eng
  // }
  avr(kor,mat,eng){
    const average = (kor+mat+eng)/3
    console.log(`평균 점수 : ${Math.floor(average)}`);
  }
}

const score = new student(100, 98 ,92);
score.avr(98,99,93);
score.avr(98,70,93);
score.avr(98,99,100);