import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const FarmScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* img_view */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', marginTop: 40 },
          dimensions.width
        )}
      >
        {/* farm_img */}
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.APP12}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 530,
              width: 380,
            }),
            dimensions.width
          )}
        />
      </View>
      {/* under_bar_view */}
      <View style={StyleSheet.applyWidth({ marginTop: 138 }, dimensions.width)}>
        {/* under_bar_img */}
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.UnderBar3}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 70,
              width: '100%',
            }),
            dimensions.width
          )}
        />
        {/* go_back_view */}
        <View
          style={StyleSheet.applyWidth(
            { left: 170, position: 'absolute', top: 20 },
            dimensions.width
          )}
        >
          {/* go_back_button */}
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('HomeScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            size={32}
            icon={'AntDesign/caretleft'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(FarmScreen);
