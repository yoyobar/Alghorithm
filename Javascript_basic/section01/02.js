//삼각형 판별하기
//가장 긴 막대보다, 나머지 두개의 합이 커야 만들 수 있음

function solution(a, b, c) {
    let answer = 'YES';
    let max;
    let total = a + b + c;

    if (a > b) max = a;
    else max = b;
    if (max < c) max = c;

    if (total - max <= max) answer = 'NO';

    return answer;
}

console.log(solution(13, 33, 17));
