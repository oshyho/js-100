//  문제29 : 대문자만 지나가세요

const test1 = 'HAPPY'
const test2 = 'happy'

const upperTest = (input) => (input === input.toUpperCase()) ? "pass" : "fail"

console.log(upperTest(test1)) // pass
console.log(upperTest(test2)) // fail