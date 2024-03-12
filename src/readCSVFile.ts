// Reads a CSV file (at a given file path) and returns it in
// an easy to use JSON format
import { parse } from '@fast-csv/parse';
import fs from 'fs';
import { Row } from './types';

export default (filePath) => new Promise((resolve, reject) => {

  const rows: Row[] = [];

  fs.createReadStream(filePath)
    .pipe(parse({ headers: true }))
    .on('error', (error) => reject(error))
    .on('data', (row) => {
      rows.push(row);
    })
    .on('end', () => {
      resolve(rows);
    });
});
