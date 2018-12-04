var getHTML = require('./step5');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printHTML (html) {
  console.log(html.toLowerCase());
}


getHTML(options, printHTML)