// # 문제21 : set은 어떻게 만드나요?

// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

// 1)  var x = {1, 2, 3, 5, 6, 7};
// 2)  var x = {};
// 3)  var x = new Set('javascript');
// 4)  var x = new Set(range(5));
// 5)  var x = new Set(); 

let set1 = new Set([1,2,3])
let set2 = new Set('123')
console.log(set1)
console.log(set2)

set1.add(3)
console.log(set1)
set1.delete(1)
console.log(set1)


// # 답안

// 3)  var x = new Set('javascript');
// 5)  var x = new Set();

// 정답은 '3번', '5번'입니다.