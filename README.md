# beacon-csv-importer-sample

## Background

Beacon is a CRM database. One of the most important things our customers want to do is import their existing data! So we built a feature to let customers import CSV files into the database.

Your task (if you choose to accept it) is to start doing the same.


## Installation

1. Clone this repo
2. Run `yarn install` (or `npm install`)

## The task

The `input.csv` is a CSV file with some fake customer data in it. It includes the following columns:

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

We want to map this list of rows into an array of objects **in our standard format** (more on [expected formats](#expected-data-formats) below). A snippet 

```js
[
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
  },
  ... more rows
]
```

The `src/mapRow/index.js` file is invoked for each row. We'd like you to 


## What we'd like to see

1. **Good code structure** - split out the mapping logic in `src/mapRow/index.js` into multiple files
2. **Unit tests** - your mapping files definitely will need unit tests. We've pre-installed mocha for you, but you can use a different unit testing library if you prefer. Run `npm run test` in the terminal.
3. **Data validation** - CSV files are often messy and contain incorrect data. We __don't__ want to include invalid data in our mapped "row" objects. (They would fail to save into the database) See [expected data formats](#expected-data-formats) for more information.
4. **Data tidy up** - some of the data is valid, but needs a little tidying up. If you could write code to tidy things up, that would be fabulous.
    * Email addresses always be lowercase
    * Country codes should be uppercase (e.g. `GB`)
    * Trimming whitespace is for winners (see [`_.trim`](https://lodash.com/docs/4.17.15#trim))

Importantly, here are the things that you __don't__ need to do:

* We don't want you to tidy up the CSV in Excel. You need to write code to tidy it up (where possible) automatically.



## Expected data formats

### Person name

People's names should be split up into a single object, with the following keys:

* `first`
* `last`

If no first/last name is set, then these keys should be `null`. The object **should** still be specified.

**Only** string values are supported.

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

### Address

The address should be returned as an object, with the following keys:

* `address_line_one`
* `address_line_two`
* `city`
* `postal_code`
* `country_code`

__Tip:__ the `country_code` should only be set if it is valid. (The `isISO31661Alpha2` function in [validator.js](https://www.npmjs.com/package/validator) can be used to check this)
