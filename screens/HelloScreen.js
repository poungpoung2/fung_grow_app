import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const HelloScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* Icon_view */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'center',
            height: 200,
            left: 20,
            marginLeft: 70,
            marginRight: 95,
            marginTop: 60,
            right: 20,
            top: 100,
            width: 200,
          },
          dimensions.width
        )}
      >
        {/* Icon */}
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.APPModified}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 200,
              width: 200,
            }),
            dimensions.width
          )}
        />
      </View>
      {/* text_view */}
      <View
        style={StyleSheet.applyWidth(
          { marginLeft: 50, marginTop: 200 },
          dimensions.width
        )}
      >
        {/* text */}
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.TextModified}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              width: 300,
            }),
            dimensions.width
          )}
        />
      </View>
      {/* home_button */}
      <Button
        onPress={() => {
          try {
            navigation.navigate('HomeScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        title={'Get Started'}
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'].style, {
            marginLeft: 16,
            marginRight: 16,
            marginTop: 50,
          }),
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(HelloScreen);
