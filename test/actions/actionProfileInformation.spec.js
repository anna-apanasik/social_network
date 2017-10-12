import * as types from 'constants/actionsConstants';
import * as actions from 'redux/actions/actionsProfileInformation'

describe('action Profile Information', () => {

    beforeEach(function () {
        this.dispatchSpy = jasmine.createSpy('dispatch');
        this.getStateSpy = jasmine.createSpy('getState');
    });

    // it('should return type GET_LOGIN and login', function () {
    //     let info = 'Login';
    //
    //     actions.getLogin(info)(this.dispatchSpy,this.getStateSpy);
    //     this.getStateSpy.and.returnValue(info);
    //     let callArgs = this.dispatchSpy.calls.first().args[0];
    //
    //     expect(callArgs.type).toBe(types.GET_LOGIN);
    //     expect(callArgs.payload).toBe(info);
    // });

    it('should return type RECEIVE_INFORMATION and information', function () {
        let info = 'Information';

        actions.receiveInformation(info)(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.RECEIVE_INFORMATION);
        expect(callArgs.payload).toBe(info);
    });

    it('should return type PROFILE_EDIT_SUCCESS and user information', function () {
        let user = 'User';

        actions.successRequest(user)(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.PROFILE_EDIT_SUCCESS);
        expect(callArgs.payload).toBe(user);
    });

    it('should return type PROFILE_EDIT_FAILURE and error ', function () {
        let error = 'Error';

        actions.failureRequest(error)(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.PROFILE_EDIT_FAILURE);
        expect(callArgs.payload).toBe(error);
    });

    it('should return type RESET_SUCCESS', function () {
        actions.resetSuccess()(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.RESET_SUCCESS);
        expect(callArgs.payload).toBe();
    });

    it('should return type OPEN_MODAL', function () {
        actions.openModal()(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.OPEN_MODAL);
        expect(callArgs.payload).toBe();
    });

    it('should return type CLOSE_MODAL', function () {
        actions.closeModal()(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.CLOSE_MODAL);
        expect(callArgs.payload).toBe();
    });

});
