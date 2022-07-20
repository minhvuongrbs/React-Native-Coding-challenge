import { StyleSheet } from 'react-native'
export default styles = StyleSheet.create({
    mainSection: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(238,241,243)'
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