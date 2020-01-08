var fork = require('child_process').fork;
var path = require('path');
var child = path.resolve('childTimer.js');
var childProcess = fork(child,[],{
    silent :true
});