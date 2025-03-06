import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";

import StackHomeRoutes from "./stackHome.routes";
import Adicionar from "../screens/Adicionar";
import Grafico from "../screens/Graficos";

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
                    tabBarIcon: ({ color, size }) => <Ionicons name="add-circle" color={color} size={size}/>,
                    tabBarLabel: "Adicinar"
                }}
            />
            <Tab.Screen
                name="graficoRoutes"
                component={Grafico}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" color={color} size={size}/>,
                    tabBarLabel: "Grafico"
                }}
            />
        </Tab.Navigator>
    )
}