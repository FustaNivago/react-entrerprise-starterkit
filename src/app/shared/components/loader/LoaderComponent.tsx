import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const LoaderComponent = () => {
  return (
    <Backdrop open>
      <CircularProgress size={100} thickness={4} color="warning" />
    </Backdrop>
  );
};

export default LoaderComponent;
