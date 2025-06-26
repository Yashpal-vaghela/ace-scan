import SimpleBar from "./SimpleBar";
import { useGetMenuMaster } from "../api/menu";
import {
  DashboardOutlined,
  LoginOutlined,
  ProfileOutlined,
  AppstoreAddOutlined,
  AntDesignOutlined,
  BarcodeOutlined,
  BgColorsOutlined,
  FontSizeOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Typography, Box } from "@mui/material";
import NavGroup from "./NavGroup";


// ==============================|| DRAWER CONTENT ||============================== //
export default function DrawerContent() {
  const { menuMaster } = useGetMenuMaster();
  const drawerOpen = menuMaster !==  undefined ? menuMaster.isDashboardDrawerOpened : null;
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
  };
  const dashboard = {
    id: "group-dashboard",
    title: "Navigation",
    type: "group",
    children: [
      {
        id: "admin",
        title: "Admin",
        type: "item",
        url: "/admin/dashboard",
        icon: icons.DashboardOutlined,
        breadcrumbs: false,
      },
    ],
  };
  const pages = {
    id: "authentication",
    title: "Authentication",
    type: "group",
    children: [
      {
        id: "login1",
        title: "Login",
        type: "item",
        url: "/admin/login",
        icon: icons.LoginOutlined,
        target: true,
      },
      {
        id: "register1",
        title: "Register",
        type: "item",
        url: "/admin/register",
        icon: icons.ProfileOutlined,
        target: true,
      },
    ],
  };
  const blogs = {
    id: "blog",
    title: "Blog",
    type: "group",
    children: [
      {
        id: "blog",
        title: "Blog",
        type: "item",
        url: "/admin/blog",
        icon: icons.DashboardOutlined,
      },
    ],
  }

  const menuItems = { items: [dashboard, pages,blogs] };

  return (
    <>
      <SimpleBar
        sx={{
          "& .simplebar-content": { display: "flex", flexDirection: "column" },
        }}
      >
        <Box sx={{ pt: 2 }}>
          {menuItems.items.map((item) => {
            switch (item.type) {
              case "group":
                return <NavGroup key={item.id} item={item} />;
              default:
                return (
                  <Typography
                    key={item.id}
                    variant="h6"
                    color="error"
                    align="center"
                  >
                    Fix - Navigation Group
                  </Typography>
                );
            }
          })}
        </Box>
        {drawerOpen}
      </SimpleBar>
    </>
  );
}
