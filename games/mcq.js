const readline = require('readline-sync');
const mcqGames = [];

const createMCQGame = (question, choices, answer) => {
    mcqGames.push({
        question,
        choices,
        answer
    });
}

const fetchRandomMCQGame = () => {
    return mcqGames[Math.random() * mcqGames.length];
}

const playMCQGame = () => {
    const game = fetchRandomMCQGame();
    let answer = readline.question(game);
    return checkAnswer(game, answer);
}

const checkAnswer = (game, answer) => {
    return game.answer === answer ? 'Correct answer' : 'Wrong answer';
}

module.exports = {
    createMCQGame,
    checkAnswer,
    mcqGames
}


