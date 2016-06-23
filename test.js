/// <reference path="rx.d.ts" />
console.log("Let's begin!");
var source = Rx.Observable.create(function (observer) {
  setTimeout(function () {
    console.log('timeout hit!')
    observer.onNext(42);
    observer.onCompleted();
  }, 1000);
  console.log('started!');
});

var sub = source.subscribe(function (x) {
  console.log('Next: ', x);
}, function (err) {
  console.error(error);
}, function () {
  console.log("done!")
});

setTimeout(function() {
  sub.dispose();
}, 500);