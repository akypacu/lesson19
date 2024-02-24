const fs = require('fs')
const lodash = require('lodash')

const createHTMLFile = () => {
  const htmlContent = `
    <html>
      <head>
        <title>Document</title>
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
  `
  fs.writeFileSync('index.html', htmlContent)
  console.log('Html created successfull')
}

const createStylesFolderAndFile = () => {
  fs.mkdirSync('styles')
  const cssContent = `
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
  `
  fs.writeFileSync('styles/styles.css', cssContent)
  console.log('Styles folder and CSS file created successfull')
}

const deleteFilesAndFolder = () => {
  fs.unlinkSync('index.html')
  fs.unlinkSync('styles/styles.css')
  fs.rmdirSync('styles')
  console.log('Files and folder deleted successfull')
}

const demonstrateLodashMethods = () => {
  const numbers = [1, 2, 3, 4, 5]
  const squaredNumbers = lodash.map(numbers, n => n**2)
  console.log('Squared numbers:', squaredNumbers)

}

console.log(createHTMLFile())
console.log(createStylesFolderAndFile())
console.log(deleteFilesAndFolder())
console.log(demonstrateLodashMethods())
