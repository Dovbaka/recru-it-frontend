import palette from '../palette';

const muiButton = {
  styleOverrides: {
    root: {
      padding: '8px 16px',
      borderRadius: '3px',
      '&:disabled': {
        borderColor: palette.primary.main,
        backgroundColor: palette.primary.disabled,
        color: palette.primary.main,
      },
    },

    contained: {
      boxShadow: '0 2px 6px 0 rgb(114 124 245 / 50%)',
      border: `1px solid ${palette.primary.main}`,
      '&:hover': {
        boxShadow: '0 2px 6px 0 rgb(114 124 245 / 50%)',
        backgroundColor: palette.primary.hover,
        borderColor: palette.primary.hover,
      },
    },
  },
};

export default muiButton;
