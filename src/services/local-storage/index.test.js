import { saveStateToLocalStorage, getStateFromLocalStorage } from './index';

describe('localStorage', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
      writable: true,
    });
  });

  describe('getState', () => {
    it('checks if getItem localStorage gets called', () => {
      getStateFromLocalStorage();
      expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
    });
  });

  describe('saveState', () => {
    it('checks if setItem localStorage gets called', () => {
      const mockCurrentState = {
        app: {
          status: {
            history: [
              ['', '', '', '', '', '', '', '', ''],
              ['', 'X', '', '', '', '', '', '', 'O'],
              ['X', 'X', 'O', '', '', '', '', '', 'O'],
              ['X', 'X', 'O', '', '', 'X', '', 'O', 'O'],
              ['X', 'X', 'O', '', '', 'X', '', 'O', 'O'],
              ['X', 'X', 'O', 'X', 'O', 'X', '', 'O', 'O'],
            ],
            xIsNext: true,
            winner: '',
            moveNumber: 5,
            playerXScore: 1,
            playerOScore: 0,
            drawScore: 0,
            gamesPlayed: 1,
          },
        },
      };
      saveStateToLocalStorage(mockCurrentState);
      expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    });
  });
});
