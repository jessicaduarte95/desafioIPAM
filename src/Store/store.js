import { createStore, combineReducers } from 'redux';
import municipiosReducer from './Municipios/municipios.reducer';
import municipiosDadosReducer from './DadosMunicipios/municipiosDados.reducer';

const rootReducer = combineReducers({
    municipios: municipiosReducer,
    municipiosDados: municipiosDadosReducer
});

const store = createStore(rootReducer);

export default store;