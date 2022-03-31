'use strict';

const n = 10;
let randomNum;

const isNumber = function (num) {
  return (!isNaN(parseFloat(num)) && isFinite(num))
}

function getRandomNum() {
  return Math.floor(Math.random() * 100)
}

const gameReload = function () {
  randomNum = getRandomNum();
  startGame(randomNum, n)
}

const startGame = function (randomNum, n) {
  const game = function () {
    if (n > 0) {
      let userNum = prompt('Угадай число от 1 до 100');
      if (userNum === null) {
        alert('Игра окончена');
      } else {
        if (isNumber(userNum)) {
          userNum = +userNum;
          n--;
          if (randomNum === userNum) {
            if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
              gameReload()
            } else {
              alert('Игра окончена');
              return
            }
          } else if (randomNum < userNum) {
            alert(`Загаданное число меньше, осталось ${n} попыток`)
          } else {
            alert(`Загаданное число больше, осталось ${n} попыток`)
          }
        } else {
          alert('Введите число!')
        }
        game()
      }
    } else {
      if (confirm('Попытки закончились, хотите сыграть еще?')) {
        gameReload()
      } else {
        alert('Игра окончена')
      }
    }
  }
  game()
}

randomNum = getRandomNum();

startGame(randomNum, n)

