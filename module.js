var exec = require('child_process').exec,
  ydlPath = __dirname + '/youtube-dl';

function cmd(args) {
  return new Promise(function(resolve, reject) {
     exec([ydlPath, args].join(' '), function(error, stdout, stderr) {
      error ? reject(stderr) : resolve(stdout);
     });
  });
}

function getVersion() {
  return cmd('--version');
}

function getJSON(url) {
  return cmd([url, '--dump-json'].join(' '));
}

module.exports = {
  execute: cmd,
  getJSON: getJSON,
  getVersion: getVersion
};
