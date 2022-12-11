import { createStore, combineReducers } from 'redux';
import municipiosReducer from './Municipios/municipios.reducer';

const rootReducer = combineReducers({
    municipios: municipiosReducer
});

const store = createStore(rootReducer);

export default store;