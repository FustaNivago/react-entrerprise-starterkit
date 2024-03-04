import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { RoutePath } from '../../routes';
import { Link } from 'react-router-dom';

const HeaderMainMenu = () => {
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };
  const open = Boolean(anchorElMenu);

  return (
    <>
      <IconButton onClick={handleOpenMenu} size="medium" color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorElMenu} open={open} onClose={handleCloseMenu}>
        <MenuItem component={Link} to={RoutePath.admin} onClick={handleCloseMenu}>
          Admin
        </MenuItem>
        <MenuItem component={Link} to={RoutePath.dashboard} onClick={handleCloseMenu}>
          Dashboard
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMainMenu;
