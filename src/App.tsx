import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoutes from './routes';
import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
