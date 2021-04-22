// Configurações básicas do Redux
import { createStore } from 'redux';
import rootRedux from './reducers';


const store = createStore(rootRedux); // parâmetro de inicialização

export default store;
