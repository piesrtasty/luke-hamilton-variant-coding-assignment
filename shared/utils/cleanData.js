const fs = require('fs')

const lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('variants.tsv')
})

const FIELDS = [
  'gene',
  'nucleotideChange',
  'proteinChange',
  'otherMappings',
  'alias',
  'transcripts',
  'region',
  'reportedClassification',
  'inferredClassification',
  'source',
  'lastEvaluated',
  'lastUpdated',
  'url',
  'submitterComment',
  'assembly',
  'chr',
  'genomicStart',
  'genomicStop',
  'ref',
  'alt',
  'accession',
  'reportedRef',
  'reportedAlt'
]
const output = []
lineReader.on('line', function(line) {
  const cols = line.split('\t')
  if (cols.length === FIELDS.length) {
    let obj = {}
    for (let i = 0; i < cols.length; i++) {
      const field = FIELDS[i]
      if (field === 'otherMappings' || field === 'transcripts') {
        obj[field] = cols[i].split(',')
      } else {
        obj[field] = cols[i]
      }
    }
    output.push(obj)
  }
})

lineReader.on('close', () => {
  const jsonContent = JSON.stringify(output)
  fs.writeFile('output.json', jsonContent, 'utf8', function(err) {
    if (err) {
      return console.log(err)
    }
    console.log('JSON file has been saved.')
  })
})
