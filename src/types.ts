export interface Row {
  ['first name']: string;
  ['last name']: string;
  email: string;
  ['email 2']: string;
  ['email 3']: string;
  ['address line one']: string;
  ['address line two']: string;
  city: string;
  country: string;
  postcode: string;
}

export interface Name {
  first: string;
  last: string;
}

export type Emails = string[];

export interface Address {
  address_line_one: string;
  address_line_two: string;
  city: string;
  postal_code: string;
  country_code: string;
}

export interface MappedRow {
  name: Name,
  emails: Emails,
  address: Address
}
