/// <reference path="rx.d.ts" />
console.log("Let's begin!");
var source = Rx.Observable.create(function (observer) {
  var id = setTimeout(function () {
    console.log('timeout hit!')
    throw 'my bad error';
    observer.onNext(42);
    observer.onCompleted();
  }, 1000);
  console.log('started!');
  return function () {
    console.log('dispose called!');
    clearTimeout(id);
  }
});

var sub = source.subscribe(function (x) {
  console.log('Next: ', x);
}, function (err) {
  console.error(error);
}, function () {
  console.log("done!")
});