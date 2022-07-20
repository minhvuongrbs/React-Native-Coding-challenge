import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInfo: '',
        }
        this.handleSearchPress = this.handleSearchPress.bind(this);
    }

    handleSearchPress() {
        const { searchInfo } = this.state;
        this.props.onSearchPress(searchInfo);
    }

    render() {
        return (
            <View style={styles.headerSection}>
                <View >
                    <Icon name="chevron-left" color="white" size={20} style={{ paddingLeft: 15 }} />
                </View>
                <View style={styles.searchSection}>
                    <Icon name="search" color="rgb(245,71,30)" size={18}
                        onPress={this.handleSearchPress}
                    />
                    <TextInput
                        onChangeText={searchInfo => this.setState({ searchInfo: searchInfo })}
                        placeholder="Nhập tên, mã sản phẩm"
                        style={{ paddingLeft: 15 }}
                    />
                </View>
            </View>
        )
    }
}
