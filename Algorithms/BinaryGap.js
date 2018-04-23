function solution(N) {
  let binary = N.toString(2).split('');
  let count = 0;
  let res = [];

  for (let elem of binary) {
    if (elem === '0') {
      count++;
    } else {
      res.push(count);
      count = 0;
    }
  }

  return Math.max(...res)
}

console.log(solution(1041))


