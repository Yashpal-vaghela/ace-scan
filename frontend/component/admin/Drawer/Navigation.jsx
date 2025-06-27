import { Typography, Box } from "@mui/material";
import NavGroup from "./NavGroup";
import {
  DashboardOutlined,
  LoginOutlined,
  ProfileOutlined,
  FontSizeOutlined,
  BgColorsOutlined,
  BarcodeOutlined,
  AntDesignOutlined,
  LoadingOutlined,
  AppstoreAddOutlined,
  ChromeOutlined,
  QuestionOutlined
} from "@ant-design/icons";

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //
export default function Navigation() {
  const icons = {
    DashboardOutlined,
    LoginOutlined,
    ProfileOutlined,
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    ChromeOutlined,
    QuestionOutlined
  };
  const dashboard = {
    id: "group-dashboard",
    title: "Navigation",
    type: "group",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        type: "item",
        url: "/dashboard/default",
        icon: icons.DashboardOutlined,
        breadcrumbs: false,
      },
    ],
  };
  const pages = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
      {
        id: 'login1',
        title: 'Login',
        type: 'item',
        url: '/login',
        icon: icons.LoginOutlined,
        target: true
      },
      {
        id: 'register1',
        title: 'Register',
        type: 'item',
        url: '/register',
        icon: icons.ProfileOutlined,
        target: true
      }
    ]
  };
  const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
      {
        id: 'util-typography',
        title: 'Typography',
        type: 'item',
        url: '/typography',
        icon: icons.FontSizeOutlined
      },
      {
        id: 'util-color',
        title: 'Color',
        type: 'item',
        url: '/color',
        icon: icons.BgColorsOutlined
      },
      {
        id: 'util-shadow',
        title: 'Shadow',
        type: 'item',
        url: '/shadow',
        icon: icons.BarcodeOutlined
      }
    ]
  };
  const support = {
    id: 'support',
    title: 'Support',
    type: 'group',
    children: [
      {
        id: 'sample-page',
        title: 'Sample Page',
        type: 'item',
        url: '/sample-page',
        icon: icons.ChromeOutlined
      },
      {
        id: 'documentation',
        title: 'Documentation',
        type: 'item',
        url: 'https://codedthemes.gitbook.io/mantis/',
        icon: icons.QuestionOutlined,
        external: true,
        target: true
      }
    ]
  };
  const menuItem = { items: [dashboard, pages, utilities, support] };
  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 2 }}>{navGroups}</Box>;
}
