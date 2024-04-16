import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const Discover4Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* img_view */}
      <View style={StyleSheet.applyWidth({ marginLeft: 20 }, dimensions.width)}>
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.APP9}
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
              fontSize: 14,
              marginLeft: 30,
              marginRight: 30,
              marginTop: 30,
            }),
            dimensions.width
          )}
        >
          {
            '    Stage 3, Mycelium Growth, marks a critical phase where the hyphae from germinated spores interweave to form a dense network called mycelium. This white, fluffy structure expands throughout the substrate, colonizing it fully. The mycelium serves as the mushroom\'s "roots," breaking down organic matter to absorb vital nutrients. Environmental conditions must be carefully controlled, as the mycelium is sensitive to temperature, humidity, and fresh air exchange. This stage is pivotal, as a strong mycelial network determines the health and yield of the mushroom crop. Once the mycelium fully permeates the substrate, the environment can be manipulated to prompt the next stage: primordia formation.'
          }
        </Text>
      </View>
      {/* underbar_view */}
      <View style={StyleSheet.applyWidth({ marginTop: 47 }, dimensions.width)}>
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
                navigation.navigate('Discover5Screen');
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
                navigation.navigate('Discover3Screen');
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

export default withTheme(Discover4Screen);
