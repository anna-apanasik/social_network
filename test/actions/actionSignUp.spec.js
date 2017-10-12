import *as types from 'constants/actionsConstants'
import * as actions from 'redux/actions/actionsSignUp'

describe('action Sign Up', () => {

    beforeEach(function () {
        this.dispatchSpy = jasmine.createSpy('dispatch')
    });

    it('should return type SIGN_UP_SUCCESS  ', function () {
        actions.successRequest()(this.dispatchSpy);

        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.SIGN_UP_SUCCESS);
        expect(callArgs.payload).toBe();
    });

    it('should return type SIGN_UP_FAILURE ', function () {
        let error = 'Error';

        actions.failureRequest(error)(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.SIGN_UP_FAILURE);
        expect(callArgs.payload).toBe(error);
    });

});
