const calculateWinningAverage = (gamesPlayed, currentScoreOfPlayer) => {
  const averageWinningRate = (currentScoreOfPlayer / gamesPlayed) * (100 / 1);
  if (Number.isNaN(averageWinningRate) === true) {
    return 0;
  }
  return averageWinningRate.toFixed(0);
};

export default calculateWinningAverage;
