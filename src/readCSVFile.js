
// Reads a CSV file (at a given file path) and returns it in
// an easy to use JSON format
const csv = require('fast-csv');
const fs = require('fs');

module.exports = filePath => new Promise((resolve, reject) => {

  const rows = [];

  fs.createReadStream(filePath)
    .pipe(csv.parse({ headers: true }))
    .on('error', error => reject(error))
    .on('data', (row) => {
      rows.push(row);
    })
    .on('end', () => {
      resolve(rows);
    });

});
