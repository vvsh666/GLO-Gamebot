'use strict';

let randomNum;

const isNumber = function (num) {
  return (!isNaN(parseFloat(num)) && isFinite(num))
}

function getRandomNum() {
  return Math.floor(Math.random() * 100)
}

const startGame = function (randomNum) {
  const game = function () {
    let userNum = prompt('Угадай число от 1 до 100');
    if (userNum === null) {
      alert('Игра окончена');
    } else {
      if (isNumber(userNum)) {
        userNum = +userNum;
        if (randomNum === userNum) {
          alert('Поздравляю, Вы угадали!!!');
          return userNum
        } else if (randomNum < userNum) {
          alert('Загаданное число меньше')
        } else {
          alert('Загаданное число больше')
        }
      } else {
        alert('Введите число!')
      }
      game()
    }
  }
  game()
}

randomNum = getRandomNum();

startGame(randomNum)

