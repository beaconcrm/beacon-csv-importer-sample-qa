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

To get you started there are some existing test files in the [`/test`](./test) folder. Finish and complete these test files.

The functions these files are testing are:
* The row mapper [`src/mapRow/index.ts`](./src/mapRow/index.ts)
* The name mapper [`src/mapRow/mappers/name.ts`](./src/mapRow/mappers/name.ts)
* The email mapper [`src/mapRow/mappers/email.ts`](./src/mapRow/mappers/email.ts)
* The address mapper [`src/mapRow/mappers/address.ts`](./src/mapRow/mappers/address.ts)

Remember we are pulling in data from a spreadsheet that could contain anything. Try to think about the different formats that data could take and write tests to cover this.

## What you don't need to do

The app should already be working! If it's not let us know as this is not intended to be part of the test. You shouldn't have to change any of the code in the [`src/`](./src) folder.

Stick to adding unit tests in the test files that already exist. We can use the discussion time afterwards as an opportunity for discussing how you might extend this or make things more reusable.