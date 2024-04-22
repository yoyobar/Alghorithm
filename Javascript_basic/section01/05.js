//최소 값
function solution(arr) {
    let result = arr.sort((a, b) => a - b);
    return result[0];
}

let arr = [5, 3, 7, 11, 2, 15, 17];
console.log(solution(arr));
