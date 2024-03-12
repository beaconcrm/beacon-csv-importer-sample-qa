/*
* Given a row map the emails.
*/
import {
  compact, map, toLower, trim,
} from 'lodash';
import validator from 'validator';

import { Row, Emails } from '../../types';

export default (row: Row): Emails => compact(map([
  // Trim whitespace in each email
  trim(row.email),
  trim(row['email 2']),
  trim(row['email 3']),
], (email) => {
  // Check if the email is valid. If it is, return the email in lower case.
  // If it is not, return null.
  const isEmail = validator.isEmail(email);
  if (isEmail) {
    return toLower(email);
  }
  // When returning null, lodash's compact function will remove it from the array.
  // We expect the array to be empty if there are no valid emails.
  return null;
}));
