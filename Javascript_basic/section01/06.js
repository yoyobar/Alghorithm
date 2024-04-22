//홀수의 합

function solution(arr) {
    let result1 = 0;
    let result2 = Number.MAX_SAFE_INTEGER;

    arr.filter((item) => {
        return item % 2 === 1;
    }).forEach((item) => {
        result1 += item;
        result2 > item ? (result2 = item) : result2;
    });

    return [result1, result2];
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
