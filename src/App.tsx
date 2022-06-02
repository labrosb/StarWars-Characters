import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state/store';
import People from './components/People';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <People />
    </Provider>
  );
};

export default App;
