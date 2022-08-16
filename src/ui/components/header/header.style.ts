import { SxProps, Theme } from "@mui/material";

export const headerStyle: SxProps<Theme> = (theme) => {
  const { panini } = theme.palette;
  return {
    background: panini.secondaryBg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${theme.spacing(1)}`,
    height: '57px',

    '& img': {
      width: '85px'
    }
  };
};

export const headerLogoBox: SxProps<Theme> = (theme) => {
  return {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.common.white,
  };
};

export const headerIconBox: SxProps<Theme> = (theme) => {
  const {panini} = theme.palette;
  return {
    display: 'flex',
    alignItems: 'center',
    color: panini.warning,
  };
};

export const teste: SxProps<Theme> = (theme) => {
  const {panini} = theme.palette;
  return {
    background: panini.warning,

    '& svg':{
      fontSize: '1.5rem'
    }
  }
}