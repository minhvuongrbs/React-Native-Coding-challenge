import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Image, FlatList, TouchableOpacity
} from 'react-native';
import { Appbar, Card } from 'react-native-paper';
import { IndicatorViewPager, PagerDotIndicator, PagerTitleIndicator } from 'rn-viewpager'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { productDetail } = this.props;
        const suggestedProduct = [
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Màn hình LCD HKC 31.5 M32A7Q", newRate: 10000, oldRate: 18000, discount: 20 },
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Thẻ nhớ SDHC Sandisk 16GB", newRate: 10000, oldRate: 18000, discount: 20 },
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Thẻ nhớ SDHC Sandisk 16GB Extre me Pro (class 10) Ultra", newRate: 10000, oldRate: 18000, discount: 20 },
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Thẻ nhớ SDHC Sandisk 16GB Extre me Pro (class 10) Ultra", newRate: 10000, oldRate: 18000, discount: 20 },
        ];
        if (productDetail) {
            return (
                <View style={styles.mainSection}>
                    <Appbar.Header style={{ backgroundColor: 'white' }}>
                        <Appbar.BackAction />
                        <Appbar.Content
                            title={productDetail.displayName}
                            subtitle={productDetail.price.sellPrice + 'đ' ? productDetail.price.sellPrice : ''}
                            titleStyle={{ textAlign: 'center', fontSize: 13, color: 'black' }}
                            subtitleStyle={{ textAlign: 'center', fontSize: 13, color: 'red' }}
                        />
                        <Appbar.Action icon='shopping-cart' />
                    </Appbar.Header>
                    <View style={styles.imageView}>
                        <IndicatorViewPager
                            style={{ height: 120 }}
                            indicator={<PagerDotIndicator pageCount={productDetail.images.length} />}>
                            {productDetail.images.map(image => (
                                <View style={{ backgroundColor: 'white', paddingLeft: 24, paddingRight: 24 }}>
                                    <Image
                                        source={{ uri: image.url }}
                                        style={{ width: '100%', height: '100%', resizeMode: 'center' }}
                                    />
                                </View>
                            ))}
                        </IndicatorViewPager>
                        <Text>
                            {productDetail.displayName}
                        </Text>
                        <Text>
                            Mã SP: {productDetail.productLine.code ? productDetail.productLine.code : ''}
                        </Text>
                        <View style={{ backgroundColor: 'rgb(238,241,243)' }}>
                            <Text>{productDetail.totalAvailable ? "Còn hàng" : 'Tạm hết hàng'}</Text>
                        </View>
                        <View style={styles.rateSection}>
                            <Text style={{ color: 'rgb(234,52,31)' }}>{productDetail.price.supplierSalePrice}</Text>
                            <Text style={{ textDecorationLine: 'line-through' }}>{productDetail.price.sellPrice}</Text>
                        </View>
                    </View>
                    <View>
                        <IndicatorViewPager
                            style={{ height: 150, flexDirection: 'column' }}
                            pagerStyle={{ marginTop: 50 }}
                            indicator={
                                <PagerTitleIndicator
                                    style={{ top: 0, right: 0, left: 0, position: 'absolute' }}
                                    titles={['Mô tả sản phẩm', 'Thông số kỹ thuật', 'So sánh giá']}
                                />}>
                            <View style={{ backgroundColor: 'cadetblue' }}>
                                <Text>Page1</Text>
                            </View>
                            <View style={{ backgroundColor: 'cadetblue' }}>
                                <Text>Page2</Text>
                            </View>
                            <View style={{ backgroundColor: 'cadetblue' }}>
                                <Text>Page3</Text>
                            </View>
                        </IndicatorViewPager>
                        <View>
                            <Text>Sản phẩm cùng loại</Text>
                            <FlatList
                                horizontal={true}
                                data={suggestedProduct}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.suggestedProduct}>
                                        <Image
                                            style={{ width: '100%', height: 50, resizeMode: 'center' }}
                                            source={{ uri: item.image }} />
                                        <Text style={{ color: 'black', fontSize: 14 }} > {item.title}</Text>
                                        <Text style={{ color: 'firebrick', fontSize: 15 }} > {item.newRate}</Text>
                                        <Text style={{ color: 'gray', fontSize: 12, textDecorationLine: 'line-through' }} > {item.oldRate}</Text>
                                    </View>
                                )}
                            />
                        </View>
                        <View style={styles.cartSection}>
                            <Icon name='minus-circle-outline' size={20} style={{ marginLeft: 10, marginRight: 10 }} />
                            <Text>2</Text>
                            <Icon name='plus-circle-outline' size={20} style={{ marginLeft: 10, marginRight: 10 }} />
                            <View style={{ flexDirection: 'row', backgroundColor: 'red', flex: 1, height: 40, width: '50%', borderRadius: 10, justifyContent: 'space-around', alignItems: 'center', marginRight: 10 }}>
                                <Icon name='cart-plus' size={20} />
                                <Text>20.840.000 đ</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        } else return (
            <View>
                <Text>is loading</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        flexDirection: 'column',
    },
    rateSection: {
        flexDirection: 'row'
    },
    suggestedProduct: {
        flexDirection: 'column',
        width: 100,
    },
    cartSection: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

const mapStateToProps = state => ({
    productDetail: state.productDetail
});

export default connect(mapStateToProps, {})(ProductDetail);

