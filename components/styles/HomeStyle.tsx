import { StyleSheet } from 'react-native';

export const HomeStyle = StyleSheet.create({
    h1 :{
        fontWeight: "700",
        color :"black",
        fontSize: 34,
    },
    DecInput : {
        backgroundColor : "#EFEEEE",
        borderRadius : 30,
        width: 314,
        height: 60,
        position: "relative",
        paddingLeft: "15%",
        alignSelf : 'center'
    },
    ImageDec: {
        position: "absolute",
        top: 20,
        left: "12%",
        bottom: 0,
        right: 0,
        zIndex: 100,
        
    },
    NavigateContainer : {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        flexGrow : 0.9

    },
    contentContainer : {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexGrow: 3
    },
    observeCont: {
        flexGrow : 0.6
    }
})