import { StyleSheet } from 'react-native';

export const InfoFoodStyle = StyleSheet.create({
    MainContainer : {
        display: 'flex',
        alignItems:"center",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 45,

    },
    NavigateBar: {
       display: 'flex',
        flexDirection :'row',
        justifyContent: 'space-between',
        width: "100%",
        flexBasis: "5%"
    },
    contentContainer : {
       display: 'flex',
       alignItems: 'center',
       width: "100%",
       justifyContent: "flex-start",
       flexBasis: "100%"
    },
    innerContainer : {
       display: "flex",
       alignItems: 'center',
       justifyContent: "flex-start",
       flexGrow: 0.5
    },
    TouchStyle : {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        width: 314,
        height : 70,
        backgroundColor: "#FA4A0C",
        borderRadius : 30,
        zIndex : 10,
    
        
    },
    textDecorate: {
        fontSize: 15,
        color: 'gray',

    },
    h1: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
    },
    

})