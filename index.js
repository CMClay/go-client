var express = require('express');
var spawn = require('child_process').spawn;
var app = express();

//sgf tool for pachi cat ff4_ex.sgf | (tools/sgf2gtp.pl; echo genmove b) | ./pachi
// exec('echo peaches', function(error, stdout, stderr){
var pachi  = spawn('../pachi/pachi');
var command = 'list_commands\n';
// var command = 'genmove black\n';

// pachi.on('exit', function(code) {
//   if (code != 0)
//       console.log('Failed: ' + code);
// });

// pachi.stdin.setEncoding = 'utf-8';
pachi.stdout.pipe(process.stdout);
pachi.on('data', function(data){
  console.log('here');
});

pachi.stdin.write(command);
pachi.stdin.write('quit\n');