# beacon-csv-importer-sample

## Background

Beacon is a CRM database. One of the most important things our customers want to do is import their existing data! So we built a feature to let customers import CSV files into the database.

Your task (if you choose to accept it) is to start building one yourself.


## Installation

1. Clone this repo
2. Run `yarn install` (or `npm install`)

## Usage

To run the mapper:

```
npm run start
```

To run unit tests:

```
npm run test
```

## The task

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

We have already written the code to parse and read all rows in the CSV into an array of objects:

* Each row is an object in the array
* The column headings are the keys within each object.

For example:

```
[
  {
    'first name': 'Chris',
    'last name': 'Houghton',
    'email': 'Chris@Beaconcrm.org',
    'email 2': '',
    'email 3': '',
    'phone number': '+44 203 8614 519',
    'address line one': '154-158 Shoreditch High St',
    'address line two': '',
    city: 'London',
    country: 'GB',
    postcode: 'E1 6HU',
  }
]
```

We'd like you to "map" each row **into our standard format** (more on [expected formats](#expected-data-formats) below). Each row should be mapped to the below format:

```js
{
  name: {
    first: 'Sherlock',
    last: 'Holmes',
  },
  emails: ['sherlock@holmes.co.uk'],
  address: {
    address_line_one: '221B',
    address_line_two: 'Baker Street',
    city: 'London',
    postal_code: 'NW1 6XE',
    country_code: 'GB',
  },
}
```

__Tip:__ the [`src/mapRow/index.js`](./src/mapRow/index.js) file is invoked for each row. This is where you need to write your code.


## What we'd like to see

1. **Good code structure** - split out the mapping logic in `src/mapRow/index.js` into multiple files
2. **Unit tests** - each of your mapping files will need unit tests. We've pre-installed [mocha](https://mochajs.org/) for you, but you can use a different unit testing library if you prefer. Run `npm run test` in the terminal.
3. **Data validation** - CSV files are often messy and contain incorrect data. We __don't__ want to include invalid data in our mapped "row" objects. (They would fail to save into the database) See [expected data formats](#expected-data-formats) for more information.
4. **Data tidy up** - some of the data is valid, but needs a little tidying up. If you could write code to tidy things up, that would be fabulous.
    * Email addresses always be lowercase
    * Country codes should be uppercase (e.g. `GB`)
    * Trimming whitespace is for winners (see [`_.trim`](https://lodash.com/docs/4.17.15#trim))
    * Blank strings should be treated as `null`

Importantly, here are the things that you __don't__ need to do:

* We don't want you to tidy up the CSV in Excel. You need to write code to tidy it up (where possible) automatically.
* Parse the CSV file. We've already written code to do that for you!
* Edit any files outside of [`src/mapRow`](./src/mapRow) or [`test/mapRow`](./test/mapRow).


## Expected data formats

### Person name

People's names should be split up into a single object, with the following keys:

* `first`
* `last`

If no first/last name is set, then these keys should be `null`. The object **should** still be specified.

**Only** string values for these keys are supported.

```
{
  first: 'Chris',
  last: 'Houghton',
}
```

### Email address

Email addresses should be returned as an array of email addresses. Each email address should be:

* A string
* All lowercase
* A valid email address

__Tip:__ you can use [isemail](https://www.npmjs.com/package/isemail), [validator.js](https://www.npmjs.com/package/validator), or any other validation library to check for valid email addresses.

```js
['chris@beaconcrm.org', 'chris@beaconproducts.co.uk']
```

If there are no valid email addresses, the `emails` key should be a blank array (`[]`).

### Address

The address should be returned as an object, with the following keys:

* `address_line_one`
* `address_line_two`
* `city`
* `postal_code`
* `country_code`

__Tip:__ the `country_code` should only be set if it is valid. (The `isISO31661Alpha2` function in [validator.js](https://www.npmjs.com/package/validator) can be used to check this)
