"use strict";

var wait = function wait(seconds) {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve(++seconds);
    }, 1000);
  });
};
// next then only after intial then completes
// intial resolve give 1 which is passed to custom callback as sec and becomes 2
wait(0).then(wait).then(function (sec) {
  return console.log(sec);
});