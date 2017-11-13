export const request = {};

request.post = jasmine.createSpy('post').and.callFake(function () {
    return this;
});

request.send = jasmine.createSpy('send').and.callFake(function () {
    return this;
});

request.accept = jasmine.createSpy('accept').and.callFake(function () {
    return this;
});

request.withCredentials = jasmine.createSpy('withCredentials').and.callFake(function () {
    return this;
});

request.then = jasmine.createSpy('then').and.callFake(function () {
    request.dispatch('Success request');
    return this;
});

request.catch = jasmine.createSpy('catch').and.returnValue('fail')
    .and.callFake(function (err) {
        console.log('fake')
        console.log(err)
        return this;
    });

request.dispatch = jasmine.createSpy('dispatch').and.callFake(function (arg) {
});