import { StyleSheet } from 'react-native'
export default styles = StyleSheet.create({
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