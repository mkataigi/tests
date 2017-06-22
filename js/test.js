"use strict"

const async = require('async');

let test = []

test[1] = "aaa";
test[3] = "bbb";

console.log(test);

async.each(test, (t, cb) => {
  console.log(t);
  cb(null);
}, (err) => {
  console.log(err);
});
