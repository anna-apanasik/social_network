import * as types from 'constants/actionsConstants';
import * as actions from 'redux/actions/actionsPost'

describe('action Post', () => {

    beforeEach(function () {
        this.dispatchSpy = jasmine.createSpy('dispatch');
    });

    it('should return type GET_LIST_OF_POSTS and posts', function () {
        let info = 'Information';

        actions.getListOfPosts(info)(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.GET_LIST_OF_POSTS);
        expect(callArgs.payload).toBe(info);
    });

    it('should return type CREATE_POST', function () {
        actions.addPost()(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.CREATE_POST);
    });

    it('should return type DELETE_POST', function () {
        actions.destroyPost()(this.dispatchSpy);
        let callArgs = this.dispatchSpy.calls.first().args[0];

        expect(callArgs.type).toBe(types.DELETE_POST);
    });
});