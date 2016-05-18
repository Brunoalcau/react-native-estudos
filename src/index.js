import React, {Component} from 'react-native';
import { App } from './containers';
import { store } from './stores/configureStore';
import { Provider } from 'react-redux';

export default class Root extends Component {
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
