var getHTML = require('./step5');

var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html);
}


getHTML(options, printHTML)