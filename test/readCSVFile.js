const assert = require('assert');
const _ = require('lodash');
const readCSVFile = require('../src/readCSVFile');


describe('#readCSVFile', () => {

  it('should convert the sample input.csv file into rows', async () => {
    const rows = await readCSVFile(`${__dirname}/../input.csv`);

    assert(_.isArray(rows));

    const isArrayOfObjects = _.every(rows, row => _.isPlainObject(row));
    assert.strictEqual(isArrayOfObjects, true);
  });

});
