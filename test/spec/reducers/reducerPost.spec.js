import * as types from 'constants/actionsConstants'
import reducer from 'redux/reducers/reducerPost'

describe('reducer Post', () => {

    describe('Initial state', () => {
        beforeEach(function () {
            this.initialState = reducer(undefined, {})
        });

        it('State in field listOfPhotos', function () {
            expect(this.initialState.listOfPosts).toEqual([]);
        });

        it('State in field photo', function () {
            expect(this.initialState.photo).toEqual([]);
        });

        it('State in field createPost', function () {
            expect(this.initialState.createPost).toBe(false);
        });

        it('State in field deletePost', function () {
            expect(this.initialState.deletePost).toBe(false);
        });
    });

    describe('Action: GET_LIST_OF_POSTS ', () => {
        beforeEach(function () {
            this.info = {
                posts: [1, 2],
                photos: [3, 4],
            };
            this.createAction = (information) => ({type: types.GET_LIST_OF_POSTS, payload: information})
        });

        it('should set info.posts in field listOfPosts after action GET_LIST_OF_POSTS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.listOfPosts).toBe(this.info.posts);
        });

        it('should set info.photos in field photo after action GET_LIST_OF_POSTS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.photos).toBe(this.info.photos);
        });

        it('should set false in field createPost after action GET_LIST_OF_POSTS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.createPost).toBe(false);
        });

        it('should set false in field deletePost after action GET_LIST_OF_POSTS', function () {
            const stateAfter = reducer({}, this.createAction(this.info));

            expect(stateAfter.deletePost).toBe(false);
        });
    });

    describe('Action: CREATE_POST ', () => {
        it('should set true in field createPost after action CREATE_POST', function () {
            this.createAction = () => ({type: types.CREATE_POST});

            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter.createPost).toBe(true);
        });
    });

    describe('Action: DELETE_POST ', () => {
        it('should set true in field deletePost after action DELETE_POST', function () {
            this.createAction = () => ({type: types.DELETE_POST});

            const stateAfter = reducer({}, this.createAction());

            expect(stateAfter.deletePost).toBe(true);
        });
    });
});