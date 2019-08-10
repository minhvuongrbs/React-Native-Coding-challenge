
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

class ProductList extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const searchData = [
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Màn hình LCD HKC 31.5 M32A7Q", newRate: 10000, oldRate: 18000, discount: 20 },
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Thẻ nhớ SDHC Sandisk 16GB", newRate: 10000, oldRate: 18000, discount: 20 },
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Thẻ nhớ SDHC Sandisk 16GB Extre me Pro (class 10) Ultra", newRate: 10000, oldRate: 18000, discount: 20 },
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Thẻ nhớ SDHC Sandisk 16GB Extre me Pro (class 10) Ultra", newRate: 10000, oldRate: 18000, discount: 20 },
        ];
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
                        data={searchData}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => { navigate('Detail') }}>
                                <View style={styles.itemSection}>
                                    <Image
                                        style={{ width: 80, height: 80, resizeMode: 'center' }}
                                        source={{ uri: item.image }} />
                                    <View style={styles.itemDetail}>
                                        <Text style={{ color: 'black', fontSize: 14 }} > {item.title}</Text>
                                        <Text style={{ color: 'firebrick', fontSize: 15 }} > {item.newRate}</Text>
                                        <Text style={{ color: 'gray', fontSize: 12, textDecorationLine: 'line-through' }} > {item.oldRate}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </Fragment>
        );
    }
}

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

export default ProductList;
