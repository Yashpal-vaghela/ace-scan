import Drawer from "@mui/material/Drawer";
import styled from '@emotion/styled';
import { DRAWER_WIDTH , MINI_DRAWER_WIDTH} from "../config";

// const openedMixin = (theme) => ({
//   width: DRAWER_WIDTH,
//   // width: { xs: '100%', lg: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : `calc(100% - ${MINI_DRAWER_WIDTH}px)` },
//   '& .MuiDrawer-paper':{ width:'260px'},
//   borderRight: "1px solid",
//   borderRightColor: theme.palette.divider,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
//   boxShadow: "none",
//   ...theme.applyStyles("dark", { boxShadow: theme.customShadows.z1 }),
// });

const openedMixin = (theme) => ({
  width: DRAWER_WIDTH,
  borderRight: "1px solid",
  overflowX: "hidden",
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    borderRight: "1px solid",
    overflowX: "hidden",
  },
});

// const closedMixin = (theme) => ({
//   // transition: theme.transitions.create("width", {
//   //   easing: theme.transitions.easing.sharp,
//   //   duration: theme.transitions.duration.leavingScreen,
//   // }),
//   overflowX: "hidden",
//   // width: theme.spacing(7.5),
//   borderRight: "none",
//   // boxShadow: theme.customShadows.z1,
// });

const closedMixin = (theme) => ({
  borderRight: "none",
  overflowX: "hidden",
  '& .MuiDrawer-paper': {
    width: "5%",
    borderRight: "none",
    overflowX: "hidden",
  },
});

// ==============================|| DRAWER - MINI STYLED ||============================== //
// const MiniDrawerStyled = styled(Drawer, {
//   shouldForwardProp: (prop) => prop != "open",
// })(({ theme }) => ({
//   width: DRAWER_WIDTH,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         ...openedMixin(theme),
//         "& .MuiDrawer-paper": openedMixin(theme),
//       },
//     },
//     {
//       props: ({ open }) => !open,
//       style: {
//         ...closedMixin(theme),
//         "& .MuiDrawer-paper": closedMixin(theme),
//       },
//     },
//   ],
// }));


const MiniDrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: open ? DRAWER_WIDTH : MINI_DRAWER_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open ? openedMixin(theme) : closedMixin(theme)),
}));
export default MiniDrawerStyled;