function solution(arr) {
    let answer = arr;
    let sum = answer.reduce((a, b) => a + b, 0);
    console.log(sum);
    let flag = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length + 1; j++) {
            if (sum - (answer[i] + answer[j]) === 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
                flag = 1;
                break;
            }
        }
        if (flag === 1) break;
    }
    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
