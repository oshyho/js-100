// 입력값 거꾸로

// 알고리즘 순서 적어보기 

// 배열로 먼저 받을 것임 

const arr = 'ㄱ그리고ㄴ그리고ㄷ그리고ㄹ'

// 전부다 하나하나 배열로 바꾸고 => 거꾸로 만든다음 => join 으로 붙이기

const answer = arr.split('그리고').reverse().join('');

console.clear();
console.log(answer);
