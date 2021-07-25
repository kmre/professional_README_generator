const fs = require('fs');

// writing files
const writeFile = readme => {
  return new Promise((resolve, reject) => {
    fs.writeFile('../readme2.md', readme, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'Readme File created!'
      });
    });
  });
};

module.exports = {writeFile};
