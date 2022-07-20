import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import store from './src/store'

class ProductDiscoveryApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => ProductDiscoveryApp);
