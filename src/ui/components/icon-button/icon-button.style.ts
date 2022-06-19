import { SxProps, Theme } from "@mui/material";

export const IconButtonStyle:SxProps<Theme> = (theme) => {
  const {panini} = theme.palette;
  return{
    color: panini.warning,
    '&:hover':{
      background: 'none',
    },
    '&.MuiIconButton-colorPrimary':{
      color: theme.palette.common.white,
    },
    '&.MuiIconButton-colorInfo':{
      color: theme.palette.common.black,
      background: panini.warning
    },
  };
};