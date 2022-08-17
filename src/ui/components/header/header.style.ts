import { SxProps, Theme } from "@mui/material";

export const headerStyle: SxProps<Theme> = (theme) => {
  const { panini } = theme.palette;
  return {
    background: panini.primaryBg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(1)}`,
    height: '65px',

    '& img': {
      width: '105px',
      marginLeft: theme.spacing(4.5),
    }
  };
};

export const headerLogoBox: SxProps<Theme> = (theme) => {
  return {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
    width: '50%',
  };
};

export const headerIconBox: SxProps<Theme> = (theme) => {
  return {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
  };
};

export const headerIcon: SxProps<Theme> = () => {
  return {
    fontSize: '1.7rem',
  };
};