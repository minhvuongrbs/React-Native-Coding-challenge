import { createAppContainer, createStackNavigator } from 'react-navigation';
import ProductList from './App/ProductList';
import ProductDetail from './App/ProductDetail';

const MainNavigator = createStackNavigator({
    List: { screen: ProductList },
    Detail: { screen: ProductDetail }
}, {
        headerMode: 'none',
    });

const App = createAppContainer(MainNavigator);

export default App;