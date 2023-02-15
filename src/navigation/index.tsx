import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import AuthenticatedNavigator from 'navigation/navigators/authenticated-navigator';
import UnauthenticatedNavigator from 'navigation/navigators/unauthenticated-navigator';
import {useAppSelector} from 'store';

import {RootNavigatorRoutes} from 'navigation/routes';

const Stack = createNativeStackNavigator();

const stackNavigationParamOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

function Router() {
  const {user} = useAppSelector(state => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user === null ? (
          <Stack.Screen
            name={RootNavigatorRoutes.UNAUTHENTICATED}
            component={AuthenticatedNavigator}
            options={stackNavigationParamOptions}
          />
        ) : (
          <Stack.Screen
            name={RootNavigatorRoutes.AUTHENTICATED}
            component={UnauthenticatedNavigator}
            options={stackNavigationParamOptions}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
