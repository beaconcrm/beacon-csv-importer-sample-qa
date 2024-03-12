# beacon-csv-importer-sample-qa

## Background

Beacon is a CRM database. One of the most important things our customers want to do is import their existing data! So we built a feature to let customers import CSV files into the database.

Your task (if you choose to accept it) is to ensure this feature is well tested.


## Installation

1. Clone this repo
2. Run `yarn install` (or `npm install`)

## Usage

To run unit tests:

```
npm run test
```

## The mapper

The [`input.csv`](./input.csv) is a CSV file with some fake customer data in it. It includes the following columns:

* first name
* last name
* email
* email 2
* email 3
* address line one
* address line two
* city 
* country
* postcode

We have already written the code to parse and read all rows in the CSV and map them into the required format. There are four files that are responsible for this:

* The [`src/mapRow/index.js`](./src/mapRow/index.ts) file maps an entire row
* There are three mapper files found in the [`src/mapRow/mappers`](./src/mapRow/mappers) folder that are responsible for mapping each part of a row.

For example the address mapper extracts and maps the address section of a row:

```
// Unmapped Row
[
  {
    'first name': 'Chris',
    'last name': 'Houghton',
    'email': 'Chris@Beaconcrm.org',
    'email 2': '',
    'email 3': '',
    'address line one': '154-158 Shoreditch High St',
    'address line two': '',
    city: 'London',
    country: 'GB',
    postcode: 'E1 6HU',
  }
]

// Mapped address
{
  address_line_one: '154-158 Shoreditch High St',
  address_line_two: null,
  city: 'London',
  postal_code: 'E1 6HU',
  country_code: 'GB'
}
```

## The task

Write some tests to ensure this feature is shipped with confidence!

To get you started there are some existing test files in the [`/test`](./test) folder but these could do with some improvements and need to be finished.

The functions these files are testing are:
* The row mapper [`src/mapRow`](./src/mapRow/index.ts)
* The name mapper [`src/mapRow/mappers/name`](./src/mapRow/mappers/name.ts)
* The email mapper [`src/mapRow/mappers/email`](./src/mapRow/mappers/email.ts)
* The address mapper [`src/mapRow/mappers/address`](./src/mapRow/mappers/address.ts)

