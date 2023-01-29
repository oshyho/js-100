// let unsorted = [prompt()]
function sortedTest(unsorted) {
  let sorted = unsorted.split(' ').sort().join(' ')
  if (unsorted === sorted) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

let test1 = '33 22 11'
let test2 = '11 22 31'
sortedTest(test1)
sortedTest(test2)