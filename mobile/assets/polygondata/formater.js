function formatData(dataString){
  let byLine = dataString.split('\n')
  let bySpace = []
  let byComma = []
  let finalForm =[]
  byLine.forEach(el=>{
    bySpace.push(el.split(' '))
  })
  bySpace[0].forEach(el=>{
    byComma.push(el.split(','))
  })
  byComma.forEach(el=>{
    finalForm.push({longitude: Number(el[0]), latitude: Number(el[1])})
  })
  return finalForm;
}

module.exports = formatData