import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import Logon from './pages/Logon';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Logon" component={Logon} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Cart" component={Cart} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}