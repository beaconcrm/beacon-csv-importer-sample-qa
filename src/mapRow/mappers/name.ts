/*
* Given a row map the name.
*/
import { trim } from 'lodash';
import { Row, Name } from '../../types';

export default (row: Row): Name => ({
  // For first and last name trim whitespace and set to null if empty
  first: trim(row['first name']) || null,
  last: trim(row['last name']) || null,
});
