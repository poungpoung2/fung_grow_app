import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const Discover2Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* img_view */}
      <View style={StyleSheet.applyWidth({ marginLeft: 20 }, dimensions.width)}>
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.APP7}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 340,
              width: 340,
            }),
            dimensions.width
          )}
        />
      </View>
      {/* text_view */}
      <View>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Medium'],
              fontFamily: 'ADLaMDisplay_400Regular',
              marginLeft: 30,
              marginRight: 30,
              marginTop: 30,
            }),
            dimensions.width
          )}
        >
          {
            '     Stage 1, Inoculation, is the initial phase of mushroom cultivation where spores or mycelium cultures are introduced into a sterile substrate, such as grain, sawdust, or a nutrient-enriched medium. This process must be performed in a clean environment to prevent contamination. The mycelium, once inoculated, begins to colonize the substrate, consuming the nutrients provided. The success of this stage is critical as it sets the foundation for healthy mycelial growth, which will eventually lead to the formation of fruiting bodies or mushrooms. Careful monitoring of moisture and temperature is vital to ensure optimal conditions for mycelial development.'
          }
        </Text>
      </View>
      {/* underbar_view */}
      <View style={StyleSheet.applyWidth({ marginTop: 65 }, dimensions.width)}>
        {/* underbar_img */}
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.UnderBar}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 70,
              width: '100%',
            }),
            dimensions.width
          )}
        />
        {/* forward_view */}
        <View
          style={StyleSheet.applyWidth(
            { marginLeft: 290, marginTop: 30, position: 'absolute' },
            dimensions.width
          )}
        >
          {/* forward_button */}
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('Discover3Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            size={32}
            icon={'AntDesign/caretright'}
          />
        </View>
        {/* back_view */}
        <View
          style={StyleSheet.applyWidth(
            { marginLeft: 100, marginTop: 30, position: 'absolute' },
            dimensions.width
          )}
        >
          {/* back_button */}
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('Discover1Screen');
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

export default withTheme(Discover2Screen);
