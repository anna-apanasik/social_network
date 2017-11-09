import * as actions from 'redux/actions/actionsSignIn'
//import * as actions from 'redux/actions/actionsSignIn'
//import * as request from 'superagent';

//const actions = require('inject-loader!redux/actions/actionsSignIn')

describe('action postRequest', () => {
    beforeEach(function () {
        this.dispatchSpy = jasmine.createSpy('dispatch');

        this.requestSpy = {
            post: jasmine.createSpy('post')
        };

        this.actions = actions({
            'superagent': this.requestSpy,
            // request:this.requestSpy
        })
        // this.requestSpy = jasmine.createSpy('post')

        // spyOn(request, 'post');
        // request.post('/test')


    });

    // it("toHaveBeenCalled", function () {
    //     expect(request.post).toHaveBeenCalled();
    // });

    // it("toHaveBeenCalledWith /test ", function () {
    //     expect(request.post).toHaveBeenCalledWith('/test');
    // });


    it('should return type dispatch and request ', function () {

        let state = {
            login: 'user',
            password: 'user'
        };
        // this.postSpy = jasmine.createSpy('post');

        // actions.postRequest(state)(this.dispatchSpy);
        // let callArgs = this.requestSpy.calls.first().args[0];
        // let callArgs = this.dispatchSpy.calls.first().args[0];
        // expect(request.post).toHaveBeenCalled();
        //  expect(request.post).toHaveBeenCalledWith('/test');
        //expect(callArgs).toEqual('api');
        //expect(callArgs).toEqual('request')


        // this.postRequestSpy(state)(this.dispatchSpy);
        //  let callArgs = this.requestSpy.post.calls.first().args[0];
        // expect(callArgs).toEqual('api');
    });
});