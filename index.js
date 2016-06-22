var cp = require('child_process');
const join = require('path').join;

var child = cp.fork(join(__dirname,'./server'));