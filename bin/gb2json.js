const fs = require('fs');
const { spawn, exec } = require('child_process');
const commandLineArgs = require('command-line-args');
const async = require('async');

const optionDefinitions = [
  { name: 'src', type: String },
  { name: 'out', type: String },
];
const options = commandLineArgs(optionDefinitions);

// Required options.
if (!options.src || !options.out) {
  console.log('usage: gb2json --src rom.gb --out rom.json');
  process.exit(1);
}

//TODO: use async or promises to make this not suck.
let outJSON = {}
const child = exec(`base64 -i ${options.src} -o tmp.b64`, function(error, stdout, stderr) {
  if (error) {
    console.log('\nERROR:\n', error);
    process.exit(1);
  }
  outJSON.title = options.src;

  fs.readFile('tmp.b64', 'utf8', function(error, data) {
    // outJSON.data = encodeURIComponent(stdout);
    outJSON.data = 'data:application/octet-stream;base64,' + data;
    // console.log('data', data)
    fs.writeFile(options.out, JSON.stringify(outJSON), (err) => {
      console.log('Wrote: ', options.out);
    });
  });

});
