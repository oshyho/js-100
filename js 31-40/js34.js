// let unsorted = [prompt()]
let unsorted = prompt('공백으로 입력하세').split(' ');
let sorted= () =>{
  for(let i =0 ; i<unsorted.length; i++){
    if(unsorted[i]>unsorted[i+1]){
      continue;
    }else{
      sorted[i] = unsorted[i]
    }
  }
  return sorted;
}

function makeSorted(input){
  for(let i=0; i<unsorted.length; i++){
    if(unsorted[i] === sorted[i]){

    }
  }

}

makeSorted('')