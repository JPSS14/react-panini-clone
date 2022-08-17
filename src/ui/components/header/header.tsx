import { Box } from "@mui/material";
import { headerStyle } from "./header.style";
import { IconButton } from "../icon-button";
import logoImage from '../../../assets/panini-logo_small.svg';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { headerLogoBox, headerIconBox, headerIcon } from './header.style';

export const Header = () => {
  return (
    <Box component="header" sx={headerStyle}>
      <Box sx={headerLogoBox}>
        <IconButton color="primary"><MenuIcon sx={headerIcon}/></IconButton>
        <img src={logoImage} alt="" />
      </Box>
      <Box sx={headerIconBox}>
        <IconButton color="primary"><FavoriteBorderOutlinedIcon sx={headerIcon}/></IconButton>
        <IconButton size="small" color="primary"><SearchIcon sx={headerIcon}/></IconButton>
        <IconButton size="small" color="primary"><ShoppingCartOutlinedIcon sx={headerIcon}/></IconButton>
      </Box>
    </Box>
  );
};