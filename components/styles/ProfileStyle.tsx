import { StyleSheet } from 'react-native';
export const ProfileStyle = StyleSheet.create({
   ArrowBack : {
     marginBottom: 60,
   },
   h1 : {
    fontSize : 34,
    fontWeight: "600",
   },
   MainContainer : {
    maxWidth: 365,
    width: "100%",
    paddingTop: 40,
   },
   InfoContainer : {
    borderRadius: 30,
    backgroundColor: "white",
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 100,
    padding: 30,
    marginTop: 10,
   },
   InfoInner : {
       marginLeft : 10,
       color: "gray",
       fontSize: 15,
       fontWeight: 400,
         
   },
   FooterContainer : {
    display : "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: 'center'
   },
   hr : {
    maxWidth: "80%",
    height: 0.5,
    backgroundColor: "gray",
    marginVertical : 4,
   },
   NavigateContainer : {
    display : "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 60,
    marginTop: 30,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 20,
   }

})