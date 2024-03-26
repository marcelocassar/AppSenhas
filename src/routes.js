import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Password } from "./pages/password";
import { Ionicons } from "@expo/vector-icons"


const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        naome="home"
        component={Home}
        options={{
            
        tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (focused, size, color) => {
                if (foccused){
                    return <Ionicons size={size} color={color} name="home"/>
                }
                return <Ionicons size={size} color={color} name="home-outline"/>
          }

        }}
      />

      <Tab.Screen
        naome="password"
        component={Password}
        options={{
            tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: (focused, size, color) => {
            if (foccused){
                return <Ionicons size={size} color={color} name="lock-closed"/>
            }
            return <Ionicons size={size} color={color} name="lock-closed-outline"/>
      }
        }}
      />
    </Tab.Navigator>
  );
}
