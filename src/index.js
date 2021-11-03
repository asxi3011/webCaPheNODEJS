const express = require('express');
var exphbs  = require('express-handlebars');

var path = require('path');
const app =express();

app.get('/',function(req,res){
    res.render('home');
})
app.engine('.hbs', exphbs({
    extname:".hbs",
}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname,'resources/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);