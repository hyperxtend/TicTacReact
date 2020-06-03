// eslint-disable-next-line import/prefer-default-export
export const previousPlayerMoves = (history, jumpTo) =>
  history.map((_eachMove, moveId) => ({
    buttonName: moveId ? `Go to move #${moveId}` : 'Restart',
    onClick: () => jumpTo(moveId),
  }));
