const readline = require('readline-sync');

const tFGames = [];

const getNumOfGames = () => {
    return tFGames.length;
}

const createGame = (question, answer) => {
    tFGames.push({
        question,
        answer
    });
}

const getGame = () => {
    return tfGames[Math.floor(Math.random() * tFGames.length)];
}

const playGame = () => {
    let game = getGame();
    let answer = readline.question(game.question);
    return validateAnswer(game, answer);
}

const validateAnswer = (game, answer) => {
    return game.answer === answer;
}

module.exports = {
    getNumOfGames,
    createGame,
    validateAnswer
}