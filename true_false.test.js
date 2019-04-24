const {
    getNumOfGames,
    createGame,
    validateAnswer
} = require('./true_false');


describe('tFGames', () => {
    let game;

    beforeEach(() => {
        game = {
            question: 'Java is programming langugae',
            answer: 'true'
        };
    });

    it('creates a new true or false game', () => {
        createGame('html is programming langugae', 'false');
        expect(getNumOfGames()).toEqual(1);
    })

    it('validates the user answer', () => {
        expect(validateAnswer(game, 'true')).toBe(true);
    });

    it('invalidates the user answer', () => {
        expect(validateAnswer(game, 'false')).toBe(false);
    });

})