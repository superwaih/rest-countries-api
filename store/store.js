import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createWrapper } from "next-redux-wrapper";


// // initial states here
const initalState = {
    countries:[]
};

// // middleware
// const middleware = [thunk];

function myReducer(state = initalState, CountriesAction){

}

const CountriesAction = {
    type: 'FETCH_COUNTRIES', country: 'Nigeria'
}

// store.dispatch()

// creating store
export const store = createStore(myReducer);

// // assigning store to next wrapper
// const makeStore = () => store;

// export const wrapper = createWrapper(makeStore);