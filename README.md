# Luke Hamilton Variant Coding Assignment

## API Endpoints

#

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

## Build / Run

#

### Start development server

`npm run dev`

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

#

https://luke-hamilton-variant-coding-assignment-65yi5r5s0.now.sh/

## Next Steps

#

Here I detail potential improvements and new features.

### Improvements

1. Support mobile viewports. This can be challenging when displaying tabular data. It will need some UX consideration for how best to display the data on a smaller screen.

2. Add infinite scroll to the auto suggest gene list.

### New Features

1. Ability to bookmark specific genes.

2. Share link to send search results to a colleague.
