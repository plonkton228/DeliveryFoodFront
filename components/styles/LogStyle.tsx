import { StyleSheet } from 'react-native';
export const stylesL = StyleSheet.create({
 container: {
    display: 'flex',
    justifyContent : "space-between",
    width : "100%",
    height : "100%",
    backgroundColor : "#F2F2F2",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
 },
 head : {
    width : "100%",
    flexGrow: 0.7,
    backgroundColor: "white",
    borderRadius: 30,
    display : "flex",
    flexDirection :  'column',
    justifyContent: "space-around"
    
 },
 containerInner: {
    width : "50%",
    display: 'flex',
    flexDirection : "row",
    justifyContent : 'space-between',
    alignSelf: "center",
    alignItems: "flex-end",
    
 },
 textstyle : {
    fontSize : 18,
    fontWeight: "600",
 },
 inputsyle : {
    height: 39,
    width: 314,
    borderBottomWidth: 1,
    borderColor : "grey",
    color: "black",

 },
 containerLog : {
    width : "100%",
    display : "flex",
    alignItems: "center",
    flexGrow : 1.5,
    justifyContent: 'space-evenly',
    flexDirection: "column",
    backgroundColor : "F2F2F2"
 },
 buttonStyle : {
    width: 314,
    height: 70,
    borderRadius: 30,
    backgroundColor : "#FA4A0C"
 },
 headerText : {
   fontSize: 13,
   color : "black"
 }
})