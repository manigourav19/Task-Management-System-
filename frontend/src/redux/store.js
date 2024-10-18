import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

// Save state to local storage
function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.error("Could not save state", e);
    }
}

// Load state from local storage
function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) return undefined; 
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("Could not load state", e);
        return undefined;
    }
}

// Load persisted state
const persistedState = loadFromLocalStorage();

// Create the store with persisted state and Redux DevTools support
const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools()
);

// Subscribe to store updates to save state in local storage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
