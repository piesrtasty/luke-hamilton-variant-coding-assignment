const { genes } = require('../../data/genes.js')

const MAX_ITEMS = 50

export default (req, res) => {
  const { keyword = '' } = req.query
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  const data = genes
    .filter(gene => gene.toLowerCase().includes(keyword.toLowerCase()))
    .slice(0, MAX_ITEMS)
  res.end(JSON.stringify({ data }))
}
