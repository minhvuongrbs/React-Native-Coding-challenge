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
import API from '../../api'

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInfo: '',
            loading: true
        }
    }

    componentDidMount() {
        API.get('search/?channel=pv_online&visitorId=&q=&terminal=cp01')
            .then(result => {
                store.dispatch(getProductList(result.data.result.products))
                this.setState({ loading: false })
            })
            .catch(error => console.log(error));
    }

    render() {
        const { searchInfo, loading } = this.state;
        const { productList } = this.props;
        const { navigate } = this.props.navigation;
        if (!loading) {
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
                                        API.get('/search/?channel=pv_online&visitorId=&q=' + searchInfo + '&terminal=cp01')
                                            .then(result => store.dispatch(getProductList(result.data.result.products)))
                                            .catch(error => console.log(error));
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
                                    API.get('products/' + item.sku)
                                        .then(result => store.dispatch(getProductDetail(result.data.result.product)))
                                        .catch(error => console.log(error));
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

