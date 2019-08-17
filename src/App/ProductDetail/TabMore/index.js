import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { IndicatorViewPager, PagerTitleIndicator } from 'rn-viewpager'

export default class TabMore extends Component {
    //TODO not implemented data yet
    
    render() {
        return (
            <IndicatorViewPager
                style={{ height: 150, flexDirection: 'column' }}
                indicator={
                    <PagerTitleIndicator
                        itemTextStyle={{ fontSize: 13 }}
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
        )
    }
}
