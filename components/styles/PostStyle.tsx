import { StyleSheet } from 'react-native';
export const PostStyle = StyleSheet.create({
    MainContainer :{
      postition : "relative",
      display: 'flex',
      width: 220,
      maxHeight: 321,
      justifyContent: "flex-end",
      alignItems: "center",
      marginLeft: 10,
      marginRight: 10,
    },
    imgContainer : {
      top: 200,
      zIndex: 10,
    },
     contentContainer : {
       display: 'flex',
       textAlign: 'center',
       justifyContent: "flex-end",
       backgroundColor: "white",
       borderRadius: 30,
       flexBasis: 270,
       width: "100%",
     },
    titleDec : {
      fontWeight : '600',
      fontSize: 22,
      textAlign : 'center',
      marginBottom: 20
    }

})