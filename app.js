const readline = require('readline-sync');
const fs = require('fs');
var game = read();
console.log("File: " + read());
create_game();
edit_game();
write(game);
console.log("File: " + read());

function create_game() {
  var num_of_questions = readline.question("enter number of questions: ");
  for (var i = 0; i < num_of_questions * 2; i++) {
    var question = readline.question("Enter Question: ");
    var answer = readline.question("Enter Answer: ");
    game[i++] = question;
    game[i] = answer;
  }
  console.log(game);
  console.log("game created ");
}

function edit_game() {
  for (i in game) {
    if (i % 2 == 0)
      console.log(i + ": " + game[i]);
    i = i + 1;
  }

  var edit_choice = readline.question("Choose Question number to edit: ");
  var question = readline.question("Enter Question: ");
  var answer = readline.question("Enter Answer: ");
  game[Number(edit_choice - 0)] = question;
  console.log(parseInt(edit_choice) + 1);
  game[Number(edit_choice) + 1] = answer;
  console.log(game);
}


function delete_game() {
  game = [];
  //write on file!
}

function read() {
  return fs.readFileSync('test.txt').toString().split(",");
}

function write(game) {

  fs.writeFileSync('test.txt', game);
}