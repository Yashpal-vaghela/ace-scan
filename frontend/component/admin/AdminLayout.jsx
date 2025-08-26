import React from "react";
import { Box ,Toolbar} from "@mui/material";
import Drawer from "../admin/Drawer/index";
import { AdminHeader } from "./Header/AdminHeader";
import Footer from "../admin/Footer";
import "react-toastify/dist/ReactToastify.css";

export const AdminLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <AdminHeader />
      <Drawer />
      <Box
        component="main"
        className="mt-5 pt-lg-4 pt-5"
        sx={{ width: "calc(100% - 260px)", flexGrow: 1, p: { xs: 2, sm: 3 } }}
      >
        {/* <Toolbar sx={{ mt: "inherit" }}></Toolbar> */}
         <Box
            sx={{
              ...{ px: { xs: 0, sm: 2 } },
              position: "relative",
              minHeight: "calc(100vh - 110px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {children}
            {/* {pathname !== '/apps/profiles/account/my-account' && <Breadcrumbs />} */}
            {/* <Outlet /> */}
            <Footer />
          </Box>
      </Box>
    </Box>
  );
};


