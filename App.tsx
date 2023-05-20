import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './components/routs/Router';
import {NativeRouter} from 'react-router-native';
import { Provider } from 'react-redux';
import { SetStore } from './store';


export default function App() {
  const store = SetStore();
  return (
    <Provider store={store}>
  <NativeRouter>
     <Router/>
    </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
// import Test from './components/Test';
// import Payment from './components/Payment';
// import 'react-native-gesture-handler';




//  export default function App() {
//   const Drawer = createDrawerNavigator();
//   return (
//     <>
//        <NavigationContainer>
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={Test} />
//       <Drawer.Screen name="Notifications" component={Payment} />
//     </Drawer.Navigator>
   
//   </NavigationContainer>
//   <Button title='sds'></Button>
//     </>
 
  
//   );
// }