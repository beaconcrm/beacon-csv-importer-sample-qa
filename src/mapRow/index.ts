/*
* A method to map a `Row` object into a Beacon-friendly format, to be
* inserted into the database.
*/
import { MappedRow, Row } from '../types';
import nameMapper from './mappers/name';
import emailMapper from './mappers/email';
import addressMapper from './mappers/address';

export default (row: Row): MappedRow => ({
  name: nameMapper(row),
  emails: emailMapper(row),
  address: addressMapper(row),
});
