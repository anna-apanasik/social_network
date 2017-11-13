import actions from 'inject-loader!redux/actions/actionsSignIn'
import {request} from "../../src/MyRequest";

describe('action postRequest', () => {
    beforeEach(function () {
        this.state = {
            login: 'user',
            password: 'user'
        };
        this.dispatchSpy = jasmine.createSpy('dispatch');

        this.actions = actions({
            'superagent': request
        });

        this.actions.postRequest(this.state)(request.dispatch);
    });

    it('should call post method with /api/login', function () {
        expect(request.post).toHaveBeenCalledWith('/api/login');
    });

    it('should call send method with /api/login', function () {
        expect(request.send).toHaveBeenCalledWith(this.state);
    });

    it('should call accept method with application/json', function () {
        expect(request.accept).toHaveBeenCalledWith('application/json');
    });

    it('should call withCredentials method ', function () {
        expect(request.withCredentials).toHaveBeenCalled();
    });
//TODO ask abot dispatch
    it('should call then method ', function () {
        expect(request.then).toHaveBeenCalled();
    });

    it('should call dispatch method with "Success request" in then', function () {
        expect(request.dispatch).toHaveBeenCalledWith('Success request');
    });
//TODO test for catch
//     it('should call catch method ', function () {
//
//        // let a = request.catch.calls.allArgs();
//         console.log(function(err){request.dispatch(err)})
//       //  console.log(err)
//
//         expect(request.catch).toHaveBeenCalledWith(function(err){request.dispatch(err)});
//     });

});