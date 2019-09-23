const data = require('../../data/variants.json')

const PER_PAGE = 50

export default (req, res) => {
  const { page = 1, keyword = '' } = req.query
  const perPage = PER_PAGE
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  const arr =
    keyword === ''
      ? data.filter(({ gene }) => gene !== '')
      : data.filter(
          ({ gene }) =>
            gene.toLowerCase().includes(keyword.toLowerCase()) && gene !== ''
        )
  const items = arr.slice(page * perPage - perPage, page * perPage)
  res.end(JSON.stringify({ items, page, keyword }))
}
