import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const Discover3Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* img_view */}
      <View style={StyleSheet.applyWidth({ marginLeft: 20 }, dimensions.width)}>
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.APP8}
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
            '    Stage 2, Germination, follows inoculation in the mushroom growth cycle. During this stage, the spores or mycelial fragments introduced into the substrate begin to germinate, developing into fine, thread-like structures called hyphae. This occurs under specific conditions of temperature, humidity, and darkness. As the hyphae emerge, they secrete enzymes to digest the substrate, absorbing nutrients to fuel growth. This stage is largely invisible to the naked eye and requires a stable environment to prevent contamination and stress on the developing mycelium. Proper germination is essential, as it leads to a robust mycelial network, setting the stage for mushroom formation.'
          }
        </Text>
      </View>
      {/* underbar_view */}
      <View style={StyleSheet.applyWidth({ marginTop: 46 }, dimensions.width)}>
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
                navigation.navigate('Discover4Screen');
              } catch (err) {
                console.error(err);
              }
            }}
            size={32}
            icon={'AntDesign/caretright'}
          />
        </View>
        {/* backward_view */}
        <View
          style={StyleSheet.applyWidth(
            { marginLeft: 100, marginTop: 30, position: 'absolute' },
            dimensions.width
          )}
        >
          {/* backward_button */}
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('Discover2Screen');
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

export default withTheme(Discover3Screen);
