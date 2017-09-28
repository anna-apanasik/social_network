import { applyMiddleware, createStore,compose  } from 'redux';
import rootReducer from '../reducers'
import thunk from 'redux-thunk';


export default function configureStore(initialState) {
    //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
    //const store = createStore(rootReducer, initialState,composeEnhancers(applyMiddleware(thunk)));
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, initialState,composeEnhancers(applyMiddleware(thunk)));
//composeEnhancers(applyMiddleware(thunk)  && window.__REDUX_DEVTOOLS_EXTENSION__()
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}



// export default function (initialState = {}) {
//     const rootReducer = combineReducers({
//        // counter: counterReducer
//     });
//
//     return createStore(rootReducer, initialState, applyMiddleware(thunk));
// }
