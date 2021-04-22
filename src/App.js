import React, { Component } from 'react';

/*
  { Provider } ele utiliza  context-api, que é uma forma de repasar á todos os componentes filhos
  algo tipo de informação.
  A context-api não dá para mim uma api para mim manipular esses dados para mim lidar com ações do usuário...
  Context-api apenas dá para mim uma forma de eu passar uma informação para vários níveis. Então para todos os
  componentes dependente de quem ele está filho quem é o pai, vai passar para todos os componentes que estão 
  dentro do { Provider } e vou passar todas as informações do Store para que eles possão acessar essa informação.
*/ 
import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar';
import Video from './components/video';

import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    );
  }
}

export default App;
