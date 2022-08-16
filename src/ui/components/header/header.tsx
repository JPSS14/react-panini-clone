import { Box } from "@mui/material";
import { headerStyle } from "./header.style";
import { IconButton } from "../icon-button";
import logoImage from '../../../assets/panini-logo_small.svg';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { headerLogoBox } from './header.style';
import { headerIconBox } from './header.style';
import { teste } from './header.style';

export const Header = () => {
  return (
    <Box component="header" sx={headerStyle}>
      <Box sx={headerLogoBox}>
        <IconButton color="primary"><MenuIcon /></IconButton>
        <img src={logoImage} alt="" />
      </Box>
      <Box sx={headerIconBox}>
        <IconButton sx={teste} size="small"><SearchIcon /></IconButton>
        <IconButton><PersonIcon /></IconButton>
        <IconButton sx={teste} size="small" color="info"><ShoppingCartOutlinedIcon /></IconButton>
      </Box>
    </Box>
  );
};