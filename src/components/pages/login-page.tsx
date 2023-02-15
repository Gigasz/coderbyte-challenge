import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, Text} from 'components/atoms';
import {RoutesParams, UnauthenticatedRoutes} from 'navigation/routes';

type LoginProps = NativeStackScreenProps<
  RoutesParams,
  UnauthenticatedRoutes.LOGIN
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LoginPage({navigation}: LoginProps) {
  return (
    <Box>
      <Text>aaa</Text>
      <Text fontWeight={100}>aaa</Text>
      <Text fontWeight={100}>aaa</Text>
      <Text fontWeight={100}>aaa</Text>
      <Text fontWeight={100}>aaa</Text>
      <Text fontWeight={100}>aaa</Text>
      <Text fontWeight={100}>aaa</Text>
      <Text fontWeight={200}>aaa</Text>
      <Text fontWeight={300}>aaa</Text>
      <Text fontWeight={400}>aaa</Text>
      <Text fontWeight={500}>aaa</Text>
      <Text fontWeight={600}>aaa</Text>
      <Text fontWeight={700}>aaa</Text>
      <Text fontWeight={800}>aaa</Text>
    </Box>
  );
}
