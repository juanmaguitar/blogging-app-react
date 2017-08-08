require('./server/db')
const app = require('./server/app')

const PORT = 7777

app.listen(PORT)
console.log(`Started listening on port ${PORT}`)
