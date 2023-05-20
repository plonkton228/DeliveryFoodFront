import { StyleSheet } from 'react-native';

export const OrderStyle = StyleSheet.create({
    PostContainer : {
        position: 'relative',
        display: "flex",
        marginBottom:35,
        flexDirection: "row",
        alignItems: "center",
       

        maxWidth: 385,
        // width: "100%",
        maxHeight: 102,
        // height: "100%",

        backgroundColor: "#FFFFFF",
        borderRadius: 30,

        paddingTop: 40,
        paddingBottom: 20,

    },
    ImagePost : {
    //    height: 69,
    //    width: 69,
    //    width: "100%",
    //    height: "100%",
        
    },
    PostInner  : {
        marginLeft: 5,
        width: "100%",
        maxWidth: 215,
    },
    TextPost : {
        fontSize: 17,
        fontWeight: "600",

        color: "#000000",

        marginBottom: 8,
        lineHeight: 20,
    },
    CostPost :{
        fontWeight: "600",
        fontSize : 15,
        color: "#FA4A0C",

        lineHeight: 18,



    },

    ButtonPost : {
        width: 314,
        height : 70,
        flexGrow: 0.03,

        backgroundColor: "#FA4A0C",
        borderRadius : 30,
        zIndex : 10,

        alignSelf: "center",
        
        marginTop: 100,
       
        

    },

    ButtonText : {
        color: "#FFFFFF",
        fontWeight: "600",
        textAlign: "center",
    },
    
    counterDiv : {
        display : "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",

        maxWidth : 52,
        maxHeight: 20,

        width: "100%",
        height: "100%",

        backgroundColor: "#FA4A0C",

        borderRadius: 20,
        
        zIndex: 1000,

        marginRight : 10,
        
    },

    counterInner : {
        color: 'white',
        fontWeight: "600",
        fontSize : 15,
        lineHeight: 18,
    },

    counterImg : {
        maxWidth : 7,
     

        width: "100%",
    
    },

    counterTouch1 : {
        marginRight: 7,
    },

    counterTouch2 : {
        marginLeft: 7,
    }

    
})