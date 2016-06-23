/// <reference path="rx.d.ts" />
console.log("Let's begin!");
var source = Rx.Observable.create(function (observer) {
  observer.onNext(42);
  observer.onCompleted();
});

var sub = source.subscribe(function (x) {
  console.log('Next: ', x);
}, function (err) {
  console.error(error);
}, function () {
  console.log("done!")
});