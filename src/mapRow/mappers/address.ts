/*
* Given a row map the address.
*/
import { toUpper, trim } from 'lodash';
import validator from 'validator';
import { Row, Address } from '../../types';

export default (row: Row): Address => {

  // Trim whitespace and convert to uppercase
  const countryCode = trim(toUpper(row.country));

  return {
    // Validate the country code. If it's not valid, set to null.
    country_code: validator.isISO31661Alpha2(countryCode) ? countryCode : null,
    // For all of the below trim whitespace and set to null if empty
    address_line_one: trim(row['address line one']) || null,
    address_line_two: trim(row['address line two']) || null,
    city: trim(row.city) || null,
    postal_code: trim(row.postcode) || null,
  };
};
