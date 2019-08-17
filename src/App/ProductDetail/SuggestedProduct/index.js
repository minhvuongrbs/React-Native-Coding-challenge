import React, { Component } from 'react'
import { Text, View, Image, FlatList } from 'react-native'

export default class index extends Component {
    //TODO not implemented data yet

    render() {
        const suggestedProduct = [
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Màn hình LCD HKC 31.5 M32A7Q", newRate: 10000, oldRate: 18000, discount: 20 },
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Thẻ nhớ SDHC Sandisk 16GB", newRate: 10000, oldRate: 18000, discount: 20 },
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Thẻ nhớ SDHC Sandisk 16GB Extre me Pro (class 10) Ultra", newRate: 10000, oldRate: 18000, discount: 20 },
            { image: "https://img1.phongvu.vn/media/catalog/product/v/i/vigor_2920gvn.jpg", title: "Thẻ nhớ SDHC Sandisk 16GB Extre me Pro (class 10) Ultra", newRate: 10000, oldRate: 18000, discount: 20 },
        ];
        return (
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
        )
    }
}
