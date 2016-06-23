/// <reference path="rx.d.ts" />
console.log("Let's begin!");
var source = Rx.Observable.create(function (observer) {
  var id = setTimeout(function () {
    try {
      throw 'my bad error';
      observer.onNext(42);
      observer.onCompleted();
    } catch (error) {
      observer.onError(error);
    }
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
  console.error(err);
}, function () {
  console.log("done!")
});