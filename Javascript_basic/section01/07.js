//10부제

function solution(day, arr) {
    let result = 0;
    for (x of arr) {
        if (x % 10 === day) {
            result++;
        }
    }
    return result;
}

let arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));
