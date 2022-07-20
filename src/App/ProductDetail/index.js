import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';
import { Appbar } from 'react-native-paper';
import { IndicatorViewPager, PagerDotIndicator, PagerTitleIndicator } from 'rn-viewpager'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import styles from './styles';
import LoadingView from '../../components/LoadingView';
import SuggestedProduct from './SuggestedProduct';
import TabMore from './TabMore'
import CommonInfo from './CommonInfo';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { goBack } = this.props.navigation;
        const { productDetail } = this.props;

        if (productDetail) {
            return (
                <View style={styles.mainSection}>
                    <Appbar.Header style={{ backgroundColor: 'white' }}>
                        <Appbar.BackAction
                            onPress={() => goBack()}
                        />
                        <Appbar.Content
                            title={productDetail.displayName}
                            subtitle={productDetail.price.sellPrice + 'đ' ? productDetail.price.sellPrice : ''}
                            titleStyle={{ textAlign: 'center', fontSize: 13, color: 'black' }}
                            subtitleStyle={{ textAlign: 'center', fontSize: 13, color: 'red' }}
                        />
                        <Appbar.Action icon='shopping-cart' />
                    </Appbar.Header>
                    <ScrollView style={{ flex: 1 }}>
                        <CommonInfo
                            productDetail= {productDetail}
                        />
                        <TabMore />
                        <SuggestedProduct />
                        <View style={styles.cartSection}>
                            <Icon name='minus-circle-outline' size={25} color='gray' style={{ marginLeft: 10, marginRight: 10, borderRadius: 100 }} />
                            <Text style={{ fontSize: 17 }}>2</Text>
                            <Icon name='plus-circle-outline' size={25} color='gray' style={{ marginLeft: 10, marginRight: 10, borderRadius: 100 }} />
                            <View style={{ flexDirection: 'row', backgroundColor: 'red', flex: 1, paddingVertical: 7, width: '50%', borderRadius: 10, justifyContent: 'space-around', alignItems: 'center', marginRight: 10 }}>
                                <Icon name='cart-plus' size={30} color='white' />
                                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>20.840.000 đ</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        } else return (
            <LoadingView />
        )
    }
}



const mapStateToProps = state => ({
    productDetail: state.productDetail
});

export default connect(mapStateToProps, {})(ProductDetail);

