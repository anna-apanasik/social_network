import * as types from 'constants/actionsConstants'
import reducer from 'redux/reducers/reducerSignIn'


describe('reducer Sign In', () => {

    describe('Initial state', () => {
        beforeEach(function () {
            this.initialState = reducer(undefined, {})
        });

        it('State in field errorLogin', function () {
           expect(this.initialState.errorLogin).toBe('');
        });

        it('State in field errorPassword', function () {
            expect(this.initialState.errorPassword).toBe('');
        });

        it('State in field success', function () {
            expect(this.initialState.success).toBe(false);
        });

    });

    describe('Action: SIGN_IN_SUCCESS ', () => {
        beforeEach(function () {
            this.createAction = () => ({type: types.SIGN_IN_SUCCESS})
        });

        it('should reset errorLogin after action SIGN_IN_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter.errorLogin).toBe('');
        });

        it('should reset errorPassword after action SIGN_IN_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter.errorPassword).toBe('');
        });

        it('should change success after action SIGN_IN_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter.success).toBe(true);
        });

    });

    describe('Action: SIGN_IN_FAILURE', () => {
        beforeEach(function () {
            this.createAction = (error) => ({type: types.SIGN_IN_FAILURE, payload: error})
        });

        it('should set error in field errorLogin after action SIGN_IN_FAILURE', function () {
            const stateAfter = reducer({}, this.createAction(['Wrong login']));

            expect(stateAfter.errorLogin).toBe('Wrong login');
        });

        it('should set error in field errorPassword after action SIGN_IN_FAILURE', function () {
            const stateAfter = reducer({}, this.createAction(['','Wrong password']));

            expect(stateAfter.errorPassword).toBe('Wrong password');
        });

        it('should change success after action SIGN_IN_FAILURE in field success', function () {
            const stateAfter = reducer({}, this.createAction(['','',false]));

            expect(stateAfter.success).toBe(false);
        });
    });

});


