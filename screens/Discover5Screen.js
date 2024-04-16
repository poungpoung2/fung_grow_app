import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const Discover5Screen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      {/* img_view */}
      <View style={StyleSheet.applyWidth({ marginLeft: 20 }, dimensions.width)}>
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={Images.APP10}
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
            '    Stage 4, the Button Stage, is the transformative period in mushroom cultivation where the mycelium forms pinhead-sized knots, known as buttons, which are the initial fruiting bodies. This stage is induced by changing environmental conditions, such as temperature drop, increased oxygen, and light exposure. These buttons are the precursors to mature mushrooms, and their development is a sign of a successful mycelial network. The button stage requires a balanced humidity level to prevent drying out or oversaturation. Vigilance in this stage ensures that the buttons grow into healthy mushrooms, marking the transition from vegetative growth to reproductive maturity.'
          }
        </Text>
      </View>
      {/* underbar_view */}
      <View style={StyleSheet.applyWidth({ marginTop: 66 }, dimensions.width)}>
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
                navigation.navigate('Discover6Screen');
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
                navigation.navigate('Discover4Screen');
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

export default withTheme(Discover5Screen);
