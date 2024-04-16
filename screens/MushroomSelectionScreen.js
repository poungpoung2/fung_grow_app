import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { Image, View } from 'react-native';

const MushroomSelectionScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* option1_view */}
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
        <Touchable>
          {/* option1_img */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.APP15}
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
      {/* option2_view */}
      <View
        style={StyleSheet.applyWidth(
          { marginLeft: 50, marginRight: 50, marginTop: 85 },
          dimensions.width
        )}
      >
        <Touchable>
          {/* option2_img */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.APP19}
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
      {/* option3_view */}
      <View
        style={StyleSheet.applyWidth(
          { marginLeft: 50, marginRight: 50, marginTop: 85 },
          dimensions.width
        )}
      >
        <Touchable>
          {/* option3_img */}
          <Image
            resizeMode={'cover'}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            source={Images.APP16}
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

export default withTheme(MushroomSelectionScreen);
