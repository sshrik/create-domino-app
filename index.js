const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, '/app'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
