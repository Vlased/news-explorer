import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainStack from "./routes/mainStack";

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}
