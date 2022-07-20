import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import styles from './styles'

export default class CommonInfo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { productDetail } = this.props;
        return (
            <View style={{ flexDirection: 'column' }}>
                <IndicatorViewPager
                    style={{ height: 200, width: '100%' }}
                    indicator={<PagerDotIndicator pageCount={productDetail.images.length} selectedDotStyle={{ backgroundColor: 'red', height: 10, width: 10, borderRadius: 100 }} dotStyle={{ height: 10, width: 10, borderRadius: 100 }} />}>
                    {productDetail.images.map(image => (
                        <View style={{ backgroundColor: 'white', paddingLeft: 24, paddingRight: 24 }}>
                            <Image
                                source={{ uri: image.url }}
                                style={{ height: '100%', width: '100%', resizeMode: 'contain', alignSelf: 'baseline' }}
                            />
                        </View>
                    ))}
                </IndicatorViewPager>
                <View style={{ marginLeft: 12 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                        {productDetail.displayName}
                    </Text>
                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                        <Text>Mã SP: </Text>
                        <Text style={{ color: 'blue' }}>{productDetail.productLine.code ? productDetail.productLine.code : ''}</Text>
                    </View>
                    <View style={{ backgroundColor: 'rgb(238,241,243)', alignSelf: 'baseline', padding: 5, borderRadius: 10, marginBottom: 10 }}>
                        <Text>{productDetail.totalAvailable ? "Còn hàng" : 'Tạm hết hàng'}</Text>
                    </View>
                </View>
                {
                    productDetail.price.sellPrice && <View style={styles.rateSection}>
                        <Text style={{ color: 'rgb(234,52,31)', fontSize: 17, fontWeight: '400' }}>{productDetail.price.supplierSalePrice} </Text>
                        <Text style={{ textDecorationLine: 'line-through', fontSize: 17 }}>{productDetail.price.sellPrice}</Text>
                    </View>
                }
            </View>
        )
    }
}
