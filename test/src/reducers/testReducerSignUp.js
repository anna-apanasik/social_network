import * as types from '../../../src/constants/actionsConstants'
import reducer from '../../../src/redux/reducers/reducerSignUp'


describe('reducer Sign Up', () => {

    describe('Initial state', () => {
        beforeEach(function () {
            this.initialState = reducer(undefined, {})
        });

        it('State in field errorEmail', function () {
            expect(this.initialState).to.have.property('errorEmail', '');
        });

        it('State in field errorLogin', function () {
            expect(this.initialState).to.have.property('errorLogin', '');
        });

        it('State in field errorPassword', function () {
            expect(this.initialState).to.have.property('errorPassword', '');
        });

        it('State in field success', function () {
            expect(this.initialState).to.have.property('success', false);
        });

    });

    describe('Action: SIGN_UP_SUCCESS ', () => {
        beforeEach(function () {
            this.createAction = () => ({type: types.SIGN_UP_SUCCESS})
        });

        it('should reset errorEmail after action SIGN_UP_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter).to.have.property('errorEmail', '');
        });

        it('should reset errorLogin after action SIGN_UP_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter).to.have.property('errorLogin', '');
        });

        it('should reset errorPassword after action SIGN_UP_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter).to.have.property('errorPassword', '');
        });

        it('should change success after action SIGN_UP_SUCCESS', function () {
            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter).to.have.property('success', true);
        });

    });

    describe('Action: SIGN_UP_FAILURE', () => {
        beforeEach(function () {
            this.createAction = (error) => ({type: types.SIGN_UP_FAILURE, payload: error})
        });

        it('should set error in field errorEmail after action SIGN_UP_FAILURE', function () {
            const stateAfter = reducer({}, this.createAction(['Wrong email']));

            expect(stateAfter).to.have.property('errorEmail', 'Wrong email');
        });

        it('should set error in field errorLogin after action SIGN_UP_FAILURE', function () {
            const stateAfter = reducer({}, this.createAction(['','Wrong login']));

            expect(stateAfter).to.have.property('errorLogin', 'Wrong login');
        });

        it('should set error in field errorPassword after action SIGN_UP_FAILURE', function () {
            const stateAfter = reducer({}, this.createAction(['','','Wrong password']));

            expect(stateAfter).to.have.property('errorPassword', 'Wrong password');
        });


        it('should change success after action SIGN_UP_FAILURE in field success', function () {
            const stateAfter = reducer({}, this.createAction(['','',false]));

            expect(stateAfter).to.have.property('success', false);
        });
    });

});


