import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const Discover1Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* img_view */}
      <View style={StyleSheet.applyWidth({ marginLeft: 20 }, dimensions.width)}>
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.APP6}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 360,
              width: 350,
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
            '     Mushroom anatomy comprises the cap, stem, gills, and mycelium. The cap, or pileus, shelters spore-producing structures. The stem, or stipe, supports the cap and may feature a ring (annulus) and a base (volva). Gills, pores, or teeth under the cap release spores. The mycelium, a network of hyphae, is the main vegetative part of the fungus, usually underground, absorbing nutrients. These parts work in concert to enable the mushroom to grow, reproduce, and disperse spores, ensuring the survival and propagation of the fungal species within their ecological niche.'
          }
        </Text>
      </View>
      {/* underbar_view */}
      <View style={StyleSheet.applyWidth({ marginTop: 100 }, dimensions.width)}>
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
                navigation.navigate('Discover2Screen');
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
            { left: 100, position: 'absolute', top: 30 },
            dimensions.width
          )}
        >
          {/* back_button */}
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

export default withTheme(Discover1Screen);
