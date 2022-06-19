import {
  IconButton as MuiIconButton,
  IconButtonProps
} from "@mui/material";
import { IconButtonStyle } from "./icon-button.style";

export const IconButton = ({ children, color, ...props }: IconButtonProps) => {
  return (
    <MuiIconButton {...props} color={color} sx={IconButtonStyle}>
      {children}
    </MuiIconButton>
  );
};