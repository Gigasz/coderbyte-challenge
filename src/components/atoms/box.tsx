import React, {memo} from 'react';

import {View, ViewStyle} from 'react-native';

export interface BoxProps extends ViewStyle {
  children?: React.ReactNode;
}

function BoxComponent({children, ...props}: BoxProps): JSX.Element {
  return (
    <View
      style={{
        ...props,
      }}>
      {children}
    </View>
  );
}

export const Box = memo(BoxComponent);
