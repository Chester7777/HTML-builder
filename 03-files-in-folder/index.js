const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }
  // Перебираем все файлы в папке
  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    // Получаем данные для каждого объекта в папке
    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error('Error getting file stats:', err);
        return;
      }
      if (stats.isFile()) {
        // Отображаем данные файла в консоли
        console.log(
          `${file}-${path.extname(file).slice(1)}-${stats.size} bytes`,
        );
      }
    });
  });
});
