import * as actions from 'redux/actions/actionsSignIn'
import *as types from 'constants/actionsConstants'

describe('action Sign In', () => {

    beforeEach(function () {
        this.dispatchSpy = jasmine.createSpy('dispatch')
    });

    it('should return type SIGN_IN_SUCCESS and login ', function () {
        let login = 'userLogin';

        actions.successRequest(login)(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.SIGN_IN_SUCCESS);
        expect(callArgs.payload).toBe(login);
    });

    it('should return type SIGN_UP_FAILURE and error ', function () {
        let error = 'Error';

        actions.failureRequest(error)(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.SIGN_IN_FAILURE);
        expect(callArgs.payload).toBe(error);
    });

});
