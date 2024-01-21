const fs = require('fs');
const path = require('path');

const stylesDir = path.join(__dirname, 'styles');
const outputDir = path.join(__dirname, 'project-dist');
const outputFile = path.join(outputDir, 'bundle.css');

fs.readdir(stylesDir, (err, files) => {
  if (err) {
    console.error('Error reading styles directory', err);
    return;
  }

  const fileContents = [];

  files.forEach((file) => {
    const filePath = path.join(stylesDir, file);
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}`, err);
        return;
      }
      fileContents.push(data);

      if (fileContents.length === files.length) {
        const combinedStyles = fileContents.join('\n');
        fs.writeFile(outputFile, combinedStyles, 'utf8', (err) => {
          if (err) {
            console.error('Error writing bundle.css', err);
            return;
          }
          console.log('Bundle.css has been created successfully');
        });
      }
    });
  });
});
