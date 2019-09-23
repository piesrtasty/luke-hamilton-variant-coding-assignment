# Luke Hamilton Variant Coding Assignment

A web application that allows a user to search for genomic variants by gene name and display the results in a tabular view.

## Disclaimer

I am aware that there are some usability bugs still especially with the infintie scroll and replacing or appending the items if it's a new search or a continuation of a paginated one. Updating the search bar with a gene that is selected by pressing enter needs to be added as well. Additionally there is just general state organization that can be improved. I will continue to work on these areas.

## Features / Requiremewnts

1. Allow the user to enter a gene name to search for variants in that gene. Display the results in a table that shows various attributes associated with each genomic variant.

2. Provide an auto-suggest feature for entering the gene name.

3. Provide two RESTful endpoints supporting the functionality listed in steps 1 and 2.

## API Endpoints

### Genes

`/api/genes`

`/api/genes?keyword=loremipsum`

Query Params

`keyword` - Keyword to search gene names with

### Variants

`/api/variants`

`/api/variants?keyword=loremipsum&page=1`

Query Params

`keyword` - Keyword to search all gene variants by gene names

`page` - Pagination page number

## Commands

### Install

`npm install`

### Start development server

`npm run dev`

### Run tests

`npm run test`

### Build for production

`next build`

### Run in production

`next start`

### Clean data

```
cd shared/utils/
node cleanData
```

## Deployed App

https://luke-hamilton-variant-coding-assignment-65yi5r5s0.now.sh/

## Next Steps

Here I detail potential improvements and new features.

### Improvements

1. Support mobile viewports. This can be challenging when displaying tabular data. It will need some UX consideration for how best to display the data on a smaller screen.

2. Add infinite scroll to the auto suggest gene list.

3. Load initial data via server side rendering.

4. Save the data in a database on the backend instead of serving it from a JSON file. This will improve performance as I would not need to filter and slice the array to implement the search.

### New Features

1. Ability to bookmark specific genes.

2. Share link to send search results to a colleague.
