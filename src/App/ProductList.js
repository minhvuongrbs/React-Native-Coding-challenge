
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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../store';
import { getProductList, getProductDetail } from '../actions';
import { connect } from 'react-redux'
import { Object } from 'core-js';

class ProductList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('https://listing-stg.services.teko.vn/api/search/?channel=pv_online&visitorId=&q=&terminal=cp01')
            .then(res => res.json())
            .then(
                result => store.dispatch(getProductList(result.result.products))
            )
    }

    render() {
        const { productList } = this.props;
        const { navigate } = this.props.navigation;
        if (productList) {
            return (
                <Fragment>
                    <StatusBar barStyle="light-content" backgroundColor="firebrick" />
                    <View style={styles.mainSection}>
                        <View style={styles.headerSection}>
                            <View >
                                <Icon name="chevron-left" color="white" size={20} style={{ paddingLeft: 15 }} />
                            </View>
                            <View style={styles.searchSection}>
                                <Icon name="search" color="firebrick" size={18} />
                                <TextInput
                                    placeholder="Nhập tên, mã sản phẩm"
                                    style={{ paddingLeft: 15 }}
                                />
                            </View>
                        </View>
                        <FlatList
                            data={productList}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    console.log('link: https://listing-stg.services.teko.vn/api/products/' + item.sku);
                                    fetch('https://listing-stg.services.teko.vn/api/products/' + item.sku)
                                        .then(res => res.json())
                                        .then(
                                            result => store.dispatch(getProductDetail(result.result.product))
                                        );
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
                                                    source={require('../assets/default_image.png')} />)
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
            <View>
                <Text>is loading</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    productList: state.productList
})

export default connect(mapStateToProps, {})(ProductList)

const styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(238,241,243)'
    },
    headerSection: {
        backgroundColor: 'firebrick',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchSection: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 10,
        paddingLeft: 10
    },
    itemSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 6,
        paddingTop: 6,
        paddingBottom: 6,
        marginBottom: 5,
        backgroundColor: 'white'
    },
    itemDetail: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 6
    }
});