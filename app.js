let express = require('express');
let ejs = require('ejs');
let rote = require('./routers');
let bodyParser = require('body-parser');
let  Validator = require('jsonschema').Validator;
let v = new Validator();
let app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', rote.index);
app.post('/schema', rote.schema);

app.listen(2018, () => {
    console.log(`Server started on port 2018`);
});