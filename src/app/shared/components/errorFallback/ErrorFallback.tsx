import { RestartAlt } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ErrorFallback = () => {
  return (
    <Box display="flex" height="100%" justifyContent="center" alignItems="center">
      <Typography variant="h6">
        Something went wrong, please refresh the page
        <Typography variant="h6" align="center" marginTop={1}>
          <Button
            startIcon={<RestartAlt />}
            size="large"
            variant="contained"
            onClick={() => {
              window.location.reload();
            }}
          >
            Refresh
          </Button>
        </Typography>
      </Typography>
    </Box>
  );
};

export default ErrorFallback;
