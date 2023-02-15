import React, {memo} from 'react';
import {
  TextStyle as RNTextStyle,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

const FONT_WEIGHTS = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
};

interface TextProps extends RNTextProps, Omit<RNTextStyle, 'fontWeight'> {
  fontWeight?: keyof typeof FONT_WEIGHTS;
}

export const getFontFamily = (weight: keyof typeof FONT_WEIGHTS) =>
  `Sora-${FONT_WEIGHTS[weight]}`;

function TextComponent({
  allowFontScaling,
  ellipsizeMode,
  lineBreakMode,
  numberOfLines,
  onLayout,
  onTextLayout,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  testID,
  nativeID,
  maxFontSizeMultiplier,
  fontWeight = 400,
  children,
  ...props
}: TextProps): JSX.Element {
  return (
    <RNText
      style={{
        ...props,
        fontFamily: getFontFamily(fontWeight),
      }}
      allowFontScaling={allowFontScaling}
      ellipsizeMode={ellipsizeMode}
      lineBreakMode={lineBreakMode}
      numberOfLines={numberOfLines}
      onLayout={onLayout}
      onTextLayout={onTextLayout}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      testID={testID}
      nativeID={nativeID}
      maxFontSizeMultiplier={maxFontSizeMultiplier}>
      {children}
    </RNText>
  );
}

export const Text = memo(TextComponent);
