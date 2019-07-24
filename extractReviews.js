
const extractWordCounts = (lines = []) => {
  const counts = {}

  lines.forEach((line) => {
    const tokens = line.split(" ")
    tokens.forEach((token) => {
      if(counts[token] === undefined) {
        counts[token] = 1
      } else {
        counts[token] = counts[token] + 1
      }
    })
  })

  return counts
}

module.exports = {
  extractWordCounts
}
