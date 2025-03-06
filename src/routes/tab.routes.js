import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";

import StackHomeRoutes from "./stackHome.routes";
import Adicionar from "../screens/Adicionar";

const Tab = createBottomTabNavigator();


export default function TabRoutes() 
{
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="stackRoutes"
                component={StackHomeRoutes}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size}/>,
                    tabBarLabel: "Home"
                }}
            />
            <Tab.Screen
                name="adicionarRoutes"
                component={Adicionar}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="wallet-outline" color={color} size={size}/>,
                    tabBarLabel: "Adicinar"
                }}
            />
        </Tab.Navigator>
    )
}