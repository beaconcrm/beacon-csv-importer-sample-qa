/*
* A method to map a `Row` object into a Beacon-friendly format, to be
* inserted into the database.
*/
import { MappedRow, Row } from '../types';
import nameMapper from './mappers/name';
import emailMapper from './mappers/email';
import addressMapper from './mappers/address';

export default (row: Row): MappedRow => ({
  // Map the row to the Beacon-friendly format.
  // Deferring to the mappers for each field.
  name: nameMapper(row),
  emails: emailMapper(row),
  address: addressMapper(row),
});
