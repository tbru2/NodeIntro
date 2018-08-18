const csv = require('csvtojson')
const filePath = 'customer-data.csv'
const fs = require('fs')
let arr = []
csv().fromFile(filePath).on('json', (jsonObj) =>{
    arr.push(jsonObj)
}).on('done', (error) =>{
    if(error) process.exit(1)
    console.log(arr)
    fs.writeFile('customer-data.json', JSON.stringify(arr, null, 2), (error) =>{
        if(error) process.exit(1)
        console.log('done')
        process.exit(0)
    })
})