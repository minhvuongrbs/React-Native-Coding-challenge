import React, { Fragment, Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StatusBar,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import store from '../../store';
import { getProductList, getProductDetail } from '../../actions';
import { connect } from 'react-redux';
import styles from './styles';
import LoadingView from '../../components/LoadingView'
import SearchView from './SearchView'

class ProductList extends Component {
    constructor(props) {
        super(props);

        this._renderItem = this._renderItem.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        store.dispatch(getProductList(''));
    }

    handleSearch(searchInfo) {
        store.dispatch(getProductList(searchInfo));
    }
    _renderItem({ item }) {
        const { navigate } = this.props.navigation;
        return (
            <TouchableOpacity onPress={() => {
                store.dispatch(getProductDetail(item.sku));
                navigate('Detail');
            }}>
                <View style={styles.itemSection}>
                    {
                        item.images.length > 0
                            ? (<Image
                                style={{ width: 80, height: 80, resizeMode: 'center' }}
                                source={{ uri: item.images[0].url }} />) :
                            (<Image
                                style={{ width: 80, height: 80, resizeMode: 'center' }}
                                source={require('../../assets/default_image.png')} />)
                    }
                    <View style={styles.itemDetail}>
                        <Text style={{ color: 'black', fontSize: 14 }} > {item.displayName}</Text>
                        <Text style={{ color: 'firebrick', fontSize: 15 }} > {item.price.supplierSalePrice}</Text>
                        <Text style={{ color: 'gray', fontSize: 12, textDecorationLine: 'line-through' }} > {item.price.sellPrice}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _keyExtractor = (item, index) => index.toString()

    render() {
        const { productList } = this.props;
        if (productList) {
            return (
                <Fragment>
                    <StatusBar backgroundColor="rgb(245,71,30)" />
                    <View style={styles.mainSection}>
                        <SearchView
                            onSearchPress={this.handleSearch}
                        />
                        <FlatList
                            data={productList}
                            renderItem={this._renderItem}
                            keyExtractor={this._keyExtractor}
                        />
                    </View>
                </Fragment>
            );
        } else return (
            <LoadingView />
        )
    }
}

const mapStateToProps = state => ({
    productList: state.productList
})

export default connect(mapStateToProps, {})(ProductList)

