import Box from '@mui/material/Box';
import HeaderMainMenu from './HeaderMainMenu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useContextState } from 'src/app/shared/state';

const HeaderComponent = () => {
  const userAuthenticated = useContextState((state) => state.userAuthenticated);
  if (!userAuthenticated) {
    return <></>;
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <HeaderMainMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
