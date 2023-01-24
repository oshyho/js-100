// 숫자입력 -> 한글 -> 영어 반환

const planets = {
	'수성' : 'Mercury',
	'금성' : 'Venus',
	'지구' : 'Earth',
	'화성' : 'Mars',
	'목성' : 'Jupiter',
	'토성' : 'Saturn',
	'천왕성' : 'Uranus',
	'해왕성' : 'Neptune',
}
const input = 3
let answer ='';
let answer2 ='';
console.log(Object.keys(planets).length) //8

for(let i=0; i<Object.keys(planets).length;i++){
  answer = Object.keys(planets)[input-1];
  answer2 = Object.values(planets)[input-1]

}

console.log(answer2) 
console.log(planets[answer])

// or 

let kor = '수성'
console.log(planets[kor])