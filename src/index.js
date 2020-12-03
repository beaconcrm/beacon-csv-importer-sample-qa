const _ = require('lodash');

const readCSVFile = require('./readCSVFile');
const mapRow = require('./mapRow');


module.exports = async () => {

  const inputFile = `${__dirname}/../input.csv`;

  const rows = await readCSVFile(inputFile);

  const mappedRows = _.map(rows, row => (
    mapRow(row)
  ));

  console.log('Mapped rows:', mappedRows);

};
