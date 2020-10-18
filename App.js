import React from 'react';
import Navigation from './src/navigation';
import {StoreProvider} from 'easy-peasy';
import store from './src/state/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <Navigation />
    </StoreProvider>
  );
};

export default App;
