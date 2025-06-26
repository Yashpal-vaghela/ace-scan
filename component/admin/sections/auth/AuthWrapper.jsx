import React from "react";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Logo from '../../Logo';
import AuthCard from "./AuthCard";
import Footer from "../../Footer";

const AuthWrapper = ({ children }) => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          position: "absolute",
          filter: "blur(18px)",
          zIndex: -1,
          bottom: 0,
          transform: "inherit",
        }}
      >
        <Link href="/" className="Logo">
          <Image
            src="/images/ACE-logo.webp"
            alt="Logo"
            className="img-fluid"
            width={150}
            height={50}
          ></Image>
        </Link>
      </Box>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        sx={{ minHeight: "100vh" }}
      >
        <Grid sx={{ px: 3, mt: 3 }} size={12}>
          <Logo to="/" />
        </Grid>
        <Grid size={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              minHeight: {
                xs: "calc(100vh - 210px)",
                sm: "calc(100vh - 134px)",
                md: "calc(100vh - 132px)",
              },
            }}
          >
            <Grid>
              <AuthCard>{children}</AuthCard>
            </Grid>
          </Grid>
        </Grid>
        <Grid sx={{ p: 3 }} size={12}>
          <Footer/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthWrapper;
