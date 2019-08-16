import React, { Fragment, Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    StatusBar,
    Image,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../../store';
import { getProductList, getProductDetail } from '../../actions';
import { connect } from 'react-redux';
import styles from './styles';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInfo: '',
            loading: true,
        }
    }

    componentDidMount() {
        store.dispatch(getProductList(''));
    }

    render() {
        const { searchInfo, loading } = this.state;
        const { productList } = this.props;
        const { navigate } = this.props.navigation;
        if (productList) {
            console.log("productList: " + productList[0].displayName);

            return (
                <Fragment>
                    <StatusBar backgroundColor="rgb(245,71,30)" />
                    <View style={styles.mainSection}>
                        <View style={styles.headerSection}>
                            <View >
                                <Icon name="chevron-left" color="white" size={20} style={{ paddingLeft: 15 }} />
                            </View>
                            <View style={styles.searchSection}>
                                <Icon name="search" color="rgb(245,71,30)" size={18}
                                    onPress={() => {
                                        store.dispatch(getProductList(searchInfo));
                                    }}
                                />
                                <TextInput
                                    onChangeText={searchInfo => this.setState({ searchInfo: searchInfo })}
                                    placeholder="Nhập tên, mã sản phẩm"
                                    style={{ paddingLeft: 15 }}
                                />
                            </View>
                        </View>
                        <FlatList
                            data={productList}
                            renderItem={({ item }) => (
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
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </Fragment>
            );
        } else return (
            <ActivityIndicator />
        )
    }
}

const mapStateToProps = state => ({
    productList: state.productList
})

export default connect(mapStateToProps, {})(ProductList)

