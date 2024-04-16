import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const HomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* discover_mushroom_view */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'center',
            marginLeft: 50,
            marginRight: 20,
            marginTop: 50,
          },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('Discover1Screen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* discover_img */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.APP1}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { height: 166, width: 300 }
              ),
              dimensions.width
            )}
          />
        </Touchable>
      </View>
      {/* simulation_view */}
      <View
        style={StyleSheet.applyWidth(
          { marginLeft: 50, marginRight: 50, marginTop: 85 },
          dimensions.width
        )}
      >
        <Touchable>
          {/* simulation_img */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.APP2}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { height: 166, width: 300 }
              ),
              dimensions.width
            )}
          />
        </Touchable>
      </View>
      {/* personal_farm_view */}
      <View
        style={StyleSheet.applyWidth(
          { marginLeft: 50, marginRight: 50, marginTop: 85 },
          dimensions.width
        )}
      >
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('FarmScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* personal_farm_img */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.APP3}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { height: 166, width: 300 }
              ),
              dimensions.width
            )}
          />
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
