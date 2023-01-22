// 키 150 pass 이하는 nope

function testHeight(input){
  (input>=150) ? console.log('통과') : console.log('돌아가세요')
}

testHeight(132)
testHeight(170)