import PropTypes from 'prop-types';
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from '../Logo';

// ==============================|| DRAWER HEADER ||============================== //
export default function DrawerHeader({ open }) {
  return (
    <DrawerHeaderStyled
      open={open}
      sx={{
        minHeight: '60px',
        width: "initial",
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: open ? '12px' : 0
      }}
    >
      <Logo isIcon={!open} sx={{ width: open ? 'auto' : 35, height: 35 }} />
    </DrawerHeaderStyled>
  );
}

DrawerHeader.propTypes = { open: PropTypes.bool };
