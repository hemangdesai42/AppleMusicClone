import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/modal'
import { ModalProvider2 } from '../src/components/Playlists/modal'

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <ModalProvider2>
         <App />
        </ModalProvider2>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
