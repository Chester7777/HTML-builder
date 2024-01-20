const fs = require('fs');
const { promises: fsPromises } = require('fs');

async function copyDir() {
  // 1. Создание папки files-copy, если она еще не существует
  try {
    await fsPromises.mkdir('./04-copy-directory/files-copy', {
      recursive: true,
    });
    console.log('Directory "files-copy" created successfully');
  } catch (err) {
    console.error('Error creating directory:', err);
  }

  // 2. Чтение содержимого папки files
  try {
    const files = await fsPromises.readdir('./04-copy-directory/files');
    // 3. Копирование файлов из папки files в папку files-copy
    for (const file of files) {
      await fsPromises.copyFile(
        `./04-copy-directory/files/${file}`,
        `./04-copy-directory/files-copy/${file}`,
      );
      console.log(`${file} has been copied to files-copy folder`);
    }
  } catch (err) {
    console.error('Error reading or copying files:', err);
  }
}

// Вызов функции copyDir
copyDir();
