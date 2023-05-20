import { createDrawerNavigator } from "@react-navigation/drawer";
import { routMobile } from "./rout"

const RoutMobile : React.FC = ()=> {
    const Drawer = createDrawerNavigator();
   return(<>
        
            <Drawer.Navigator>
                {
                    routMobile.map((e)=> <Drawer.Screen key={e.name} name= {e.name} component = {e.component}/>)
                }
                    
            </Drawer.Navigator>
            
        
   </>)
}
export default RoutMobile