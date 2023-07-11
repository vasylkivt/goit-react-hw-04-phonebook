import { theme } from 'styles';

export const toastOptions = {
  // Define default options

  style: {
    background: `${theme.colors.backgroundColorSection}`,
    color: `${theme.colors.textColorDark}`,
  },

  // Default options for specific types
  success: {
    style: {
      boxShadow: `0px 0px 5px 0px ${theme.colors.green}`,
    },
    iconTheme: {
      primary: `${theme.colors.green}`,
    },
  },

  error: {
    style: {
      boxShadow: `0px 0px 5px 0px ${theme.colors.red}`,
    },
    iconTheme: {
      primary: `${theme.colors.red}`,
    },
  },
};
