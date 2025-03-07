import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Mes from "../screens/Mes"

const Stack = createStackNavigator();

export default function StackHomeRoutes({navigation})
{
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Mes" 
                component={Mes}
            />
        </Stack.Navigator>
    )
}