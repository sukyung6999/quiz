/*
배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
*/

function division(array, num) {
  let column, row;

  array.forEach((item,idx) => {
    idx++;
    row = Math.ceil(idx / num);
    column = idx % num;

    // array = new Array(row);
    // for (let i = 0; i < num; i++) {
    //   array[row] = item;
    // }

  })
  return row, column;
}

const example = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(division(example, 5)); 


// arr = [1,2,3,4,5]
// division(arr, 2); === [ [1,2], [3,4], [5] ]
