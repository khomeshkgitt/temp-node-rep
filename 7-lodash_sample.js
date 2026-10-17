// this code will hels our array of arrayas(sorta) to convert into a single array
const _ = require('lodash')

const items = [1, [2 ,[3 ,[4 ]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)