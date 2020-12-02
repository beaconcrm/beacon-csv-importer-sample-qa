# beacon-csv-importer-sample

## Background

Beacon is a CRM database. One of the most important things our customers want to do is import their existing data! As such, we've built a feature to let customers import CSV files into the database.

Your task (if you choose to accept it) is to do the same.


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

Tip: you can use [isemail](https://www.npmjs.com/package/isemail), [validatorjs](https://www.npmjs.com/package/validatorjs), or any other validation library to check for valid email addresses.

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