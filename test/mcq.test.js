const { createMCQGame, checkAnswer, mcqGames } = require('../games/mcq');
const assert = require('assert');

let mcqGame;
beforeEach(() => {
    mcqGame = {
        question: 'What is my name ?',
        choices: ['Omar', 'Mouhab', 'Abanob', 'Ammar'],
        answer: 0
    };

});

describe('MCQ', () => {
    it('creates a new MCQ game', () => {
        createMCQGame(mcqGame.question, mcqGame.choices, mcqGame.asnwer);
        assert.equal(mcqGames.length, 1);
    });
    it('validates a correct answer', () => {
        const answer = checkAnswer(mcqGame, 0);
        assert.equal(answer, 'Correct answer');
    });
    it('invalidates a wrong answer', () => {
        const answer = checkAnswer(mcqGame, 1);
        assert.equal(answer, 'Wrong answer');
    });
});