// 2 gram

const str = 'Javascript'
for(let i =0; i<str.length-1; i++){
  console.log(str[i], str[i+1])
}
console.log('---------------')
for(let j=1; j<str.length; j++){
  console.log(str[j-1], str[j])
}