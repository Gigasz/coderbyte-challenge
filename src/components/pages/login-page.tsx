import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box} from 'components/atoms';
import {RoutesParams, UnauthenticatedRoutes} from 'navigation/routes';

type LoginProps = NativeStackScreenProps<
  RoutesParams,
  UnauthenticatedRoutes.LOGIN
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LoginPage({navigation}: LoginProps) {
  return <Box />;
}
