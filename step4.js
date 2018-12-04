var https = require('https');
var newOptions = {

    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
};

function getAndPrintHTML(options, callback) {


    https.get(options, function (response) {
      var buffer = ""

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    buffer += data


  });
   response.on('end', function() {
    console.log('Response stream complete.');
      callback(buffer)
  });
})




}

function printHTML (html) {
  console.log(html);
}

getAndPrintHTML(newOptions, printHTML);