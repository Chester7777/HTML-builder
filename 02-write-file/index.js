// Шаг 1: Импортируем необходимые модули
const fs = require('fs');
const readline = require('readline');

// Шаг 2: Создаем записываемый поток в текстовый файл
const fileStream = fs.createWriteStream('02-write-file/input.txt', {
  flags: 'a',
});

// Шаг 3: Отображаем приветственное сообщение в консоли
console.log(
  'Программа для записи вводимых данных. Для выхода введите "exit" или нажмите "ctrl + c"',
);

// Шаг 4: Дожидаемся ввода пользователя с последующей проверкой наличия ключевого слова `exit`
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  if (input.toLowerCase() === 'exit') {
    console.log(
      'Программа завершена. Данные были записаны в файл input.txt в папке 02-write-file',
    );
    rl.close();
  } else {
    // Шаг 5: Записываем введенный текст в файл
    fileStream.write(input + '\n');
    console.log('Данные успешно записаны в файл');
    // Шаг 6: Дожидаемся дальнейшего ввода
    rl.prompt();
  }
});

// Шаг 7: Реализуем прощальное сообщение при остановке процесса
rl.on('close', () => {
  console.log('Процесс остановлен');
  fileStream.end();
});
