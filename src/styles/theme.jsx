export const theme = {
  colors: {
    accent: '#2A9D8F',
    accentHover: '#10544f',

    black: '#000000',
    white: '#ffffff',
    green: '#4cd137',
    yellow: '#fbc531',
    red: '#e84118',

    textColorLight: '#f5f6fa',
    textColorDark: '#2f3640',
    titleColorLight: '#dcdde1',
    titleColorDark: '#353b48',
    backgroundColorMain: '#dcdde1',
    backgroundColorSecond: '#bdbec5',
    backgroundColorInput: '#353b48',
    backgroundColorContact: '#b4b6bd',
    backgroundColorDark: '#353b48',
    backgroundColorButton: '#9a9ca4',

    linearGradient:
      'radial-gradient(circle at 50% 50%, #F8F8F8 0%, #d5d2d2 100%)',
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
    xl: '32px',
  },
  spacing: value => `${4 * value}px`,

  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
};
