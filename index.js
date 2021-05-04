var through = require('through2');
var template = require('lodash.template');
var PluginError = require('plugin-error');
var dgram = require('dgram');

const PLUGIN_NAME = 'gulp-docker-notify';

function sendNotification(messageString) {
  const message = Buffer.from(messageString);
  const client = dgram.createSocket('udp4');
  client.send(message, 9090, '172.17.0.1', (err) => {
    client.close();
  });
}

function gulpDockerNotify(title, information = "", error = false) {

  if (!title) {
    throw new PluginError(PLUGIN_NAME, 'Your notification is missing a title.');
  }

  return through.obj(function (file, enc, cb) {

    if (file.isNull()) {
      return cb(null, file);
    }

    var message = {
      "title": template(title)({ file: file }),
      "information": template(information)({ file: file }),
      "error": error
    }

    sendNotification(JSON.stringify(message));

    cb(null, file);
  });

}

// Exporting the plugin main function
module.exports = gulpDockerNotify;
