
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    _ = require('underscore'),
    marked = require('marked'),
    engine = require('ejs-locals'),
    SECTIONS_DIR = './sections';


var app = express();

app.configure(function(){
  app.engine('ejs', engine);
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'dist')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var sections = {};
fs.readdirSync(SECTIONS_DIR).sort().forEach(function(file) {
  if (file.match("md$")) {
    var name = file.split("_").slice(1).join(" ").replace(/.md$/, ""),
        md = fs.readFileSync(path.join(SECTIONS_DIR,file)).toString(),
        content = marked(md).replace(/<h3>(\w+)(.*?)<\/h3>/g,"<p class=\"content\" id=\"$1\"/><h3>$1$2</h3>"),
        regex = /<h3.*?>(.*?)<\/h3>/g,
        headings = [], match;
    while (match = regex.exec(content)) {
      headings.push(match[1]);
    }
    console.log(name);
    sections[name] = {html: content, headings: headings};
  }
});


app.get('/', function(req,res) {
    app.render('index', {static: true, title: 'tishadow', sections:_.keys(sections)}, function(err, str) {
      console.log(err);
      fs.writeFileSync(path.join(__dirname, "dist", "index.html"), str);

    });
  res.render('index', {static: false, title: 'tishadow', sections:_.keys(sections)});
});

app.get('/:section', function(req, res) {
  var name = req.params.section;
  if (!name || !sections[name]) {
    res.redirect("/");
  } else {
    app.render('section', {static: true, title: 'tishadow | ' + name, sections: _.keys(sections), section: sections[name]}, function(err, str) {
      fs.writeFileSync(path.join(__dirname, "dist", name,"index.html"), str);
    });
    res.render('section', {static: false, title: 'tishadow | ' + name, sections: _.keys(sections), section: sections[name]});
    console.log(req.params.section);
  }
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
