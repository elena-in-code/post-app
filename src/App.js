import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Title from './components/title/Title';
import PostCollection from './components/postCollection/PostCollection';

const App = () => (
  <Provider store={store}>
    <main>
      <Title level="primary" titleContent="Post Application" />
      <PostCollection />
    </main>
  </Provider>
);

export default App;
