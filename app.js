const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(require('path').join(__dirname, '/views/index.html')))

app.listen(PORT, () => console.log('===================================='),
console.log('Server listening on PORT ' + PORT),
console.log('===================================='))