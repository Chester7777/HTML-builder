const fs = require('fs');

fs.readFile('01-read-file/text.txt', 'utf8', function (err, data) {
  if (!err) {
    console.log(data);
  } else {
    console.log('error:', err);
  }
});
