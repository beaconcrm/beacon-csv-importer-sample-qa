import _ from 'lodash';
import { Row } from './types';
import readCSVFile from './readCSVFile';
import mapRow from './mapRow';

const app = async () => {
  const inputFile = `${__dirname}/../input.csv`;

  const rows: Row[] = await readCSVFile(inputFile) as Row[];

  const mappedRows = _.map(rows, (row: Row) => mapRow(row));

  console.log(mappedRows);
};

app();
