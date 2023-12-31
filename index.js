const express = require('express')
var exphbs  = require('express-handlebars');
const path=require("path")
var app = express();
const port = 3000
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');                        

app.use(express.static(path.join(__dirname, "static")))
app.use('/',require(path.join(__dirname,"routes/blog.js")))


app.listen(port, () => 
{
  console.log(`Example app listening on port ${port}`)
})