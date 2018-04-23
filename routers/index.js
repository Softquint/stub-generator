let Validator = require('jsonschema').Validator;
let jsf = require('json-schema-faker');

let model;

exports.index = (req, res) => {
    let obj = {
        title: "Home",
        classname: 'home',
        showfield: true,
        description: "Bootstrap uses Autoprefixer to deal with CSS vendor prefixes. If you're compiling Bootstrap from its Less/Sass source and not using our Gruntfile, you'll need to integrate Autoprefixer into your build process yourself. If you're using precompiled Bootstrap or using our Gruntfile, you don't need to worry about this because Autoprefixer is already integrated into our Gruntfile."
    }
    res.render('default', obj);

}

exports.schema = (req, res) => {
    let data = JSON.parse(req.body.schema_feild)
    let obj = {};
    jsf.resolve(data).then(function (sample) {
        obj = {
            title: "Schema",
            classname: 'schema',
            description: "Bootstrap uses Autoprefixer to deal with CSS vendor prefixes. If you're compiling Bootstrap from its Less/Sass source and not using our Gruntfile, you'll need to integrate Autoprefixer into your build process yourself. If you're using precompiled Bootstrap or using our Gruntfile, you don't need to worry about this because Autoprefixer is already integrated into our Gruntfile.",
            model: sample
        }
        console.log(obj.model);
        res.render('default', obj);
    }).catch((error) => {
        assert.isNotOk(error, 'Promise error');
        done();
    });

}