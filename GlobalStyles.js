import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ButtonStyles = theme =>
  StyleSheet.create({
    'Action button': {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        height: 48,
        marginTop: 25,
        textAlign: 'center',
      },
      props: {},
    },
    Button: {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        fontFamily: 'System',
        fontWeight: '700',
        textAlign: 'center',
      },
      props: {},
    },
    'action btn tablet': {
      style: {
        backgroundColor: theme.colors.primary,
        borderRadius: 12,
        fontFamily: 'Inter_500Medium',
        fontSize: [
          { minWidth: Breakpoints.Mobile, value: 16 },
          { minWidth: Breakpoints.BigScreen, value: 24 },
          { minWidth: Breakpoints.Desktop, value: 20 },
          { minWidth: Breakpoints.Laptop, value: 20 },
          { minWidth: Breakpoints.Tablet, value: 20 },
        ],
        height: [
          { minWidth: Breakpoints.Mobile, value: 48 },
          { minWidth: Breakpoints.BigScreen, value: 80 },
          { minWidth: Breakpoints.Desktop, value: 60 },
          { minWidth: Breakpoints.Laptop, value: 60 },
          { minWidth: Breakpoints.Tablet, value: 60 },
        ],
        marginTop: 10,
        textAlign: 'center',
      },
      props: {},
    },
  });

export const ImageBackgroundStyles = theme =>
  StyleSheet.create({ 'Image Background': { style: { flex: 1 }, props: {} } });

export const ViewStyles = theme =>
  StyleSheet.create({
    'header action': {
      style: {
        alignItems: 'center',
        height: 48,
        justifyContent: 'center',
        width: 48,
      },
      props: {},
    },
    'screen header view': {
      style: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
      },
      props: {},
    },
  });

export const TextStyles = theme =>
  StyleSheet.create({
    Text: { style: { color: theme.colors.strong }, props: {} },
    'Text 2': { style: { color: theme.colors.strong }, props: {} },
  });

export const ImageStyles = theme =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
    'Image 2': { style: { height: 100, width: 100 }, props: {} },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Input': {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const AudioPlayerStyles = theme =>
  StyleSheet.create({
    'Audio Player': {
      style: {
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        padding: 8,
      },
      props: {},
    },
  });
