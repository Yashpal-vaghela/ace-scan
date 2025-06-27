import PropTypes from 'prop-types';

// material-ui
// import { alpha,  useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import styled from "@emotion/styled";
import { alpha } from '@mui/material/styles';

// third-party
import SimpleBar from 'simplebar-react';
import { BrowserView, MobileView } from 'react-device-detect';

// root style
const RootStyle = styled(BrowserView)({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden'
});

// scroll bar wrapper
const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    // '&:before': {
    //   background: alpha(theme.palette.grey[500], 0.48),
    //   ...theme.applyStyles('dark', { background: alpha(theme.palette.grey[200], 0.48) })
    // },
    '&.simplebar-visible:before': {
      opacity: 1
    }
  },
  '& .simplebar-track': {
    zIndex: 1201,
    '&.simplebar-vertical': {
      width: 6
    }
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6
  },
  '& .simplebar-mask': {
    zIndex: 'inherit'
  }
}));

// ==============================|| SIMPLE SCROLL BAR ||============================== //
export default function SimpleBarScroll({ children, sx, ...other }) {
  // const theme = useTheme();
  return (
    <>
      <RootStyle>
        <SimpleBarStyle clickOnTrack={false} sx={sx} data-simplebar-direction="ltr" {...other}>
          {children}
        </SimpleBarStyle>
      </RootStyle>
      <MobileView>
        <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      </MobileView>
    </>
  );
}

SimpleBarScroll.propTypes = { children: PropTypes.any, sx: PropTypes.any, other: PropTypes.any };
