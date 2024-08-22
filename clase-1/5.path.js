const path = require('node:path')

// console.log(path.sep)
// unir rutas con path.join

// unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename('/tmp/miguel/password.txt')
console.log(base)

const extension = path.extname('my.super.image.jpg')
console.log(extension)
