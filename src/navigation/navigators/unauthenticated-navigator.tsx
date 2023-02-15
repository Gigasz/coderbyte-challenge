import React from 'react';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {LoginPage} from 'components/pages';

import {UnauthenticatedRoutes} from 'navigation/routes';

const Stack = createNativeStackNavigator();

const stackNavigationParamOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

function UnauthenticatedNavigator() {
  return (
    <Stack.Navigator screenOptions={stackNavigationParamOptions}>
      <Stack.Screen
        name={UnauthenticatedRoutes.LOGIN}
        component={LoginPage as React.FC}
      />
    </Stack.Navigator>
  );
}

export default UnauthenticatedNavigator;
