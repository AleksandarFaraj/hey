const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const n = Date();
app.get('/', (req, res) => res.send('Hello World! '+n));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
