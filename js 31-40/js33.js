// # 문제33 : 거꾸로 출력하기

// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

const str = '45 23 12 34 36 46 32';
const reverse = (str) => str.split(' ').reverse().join(' ')

console.log(reverse(str))