const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test 1
let dolphinScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49)

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    console.log('No team wins...')
  }
}

checkWinner(dolphinScore, koalasScore);
checkWinner(576, 111);

// Test 2
dolphinScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
console.log(dolphinScore, koalasScore);
checkWinner(dolphinScore, koalasScore);
