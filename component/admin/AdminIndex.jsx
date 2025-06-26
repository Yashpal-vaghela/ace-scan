import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AnalyticEcommerce from "./AnalyticEcommerce";


const AdminIndex = () => {
  return (
    <>
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        {/* row 1 */}
        <Grid sx={{ mb: -2.25 }} size={12}>
          <Typography variant="h5">Dashboard</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <AnalyticEcommerce
            title="Total Blogs"
            count="97"
            // percentage={59.3}
            // extra="35,000"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <AnalyticEcommerce
            title="Total Users"
            count="78,250"
            percentage={70.5}
            extra="8,900"
          />
        </Grid>
        <Grid
          sx={{ display: { sm: "none", md: "block", lg: "none" } }}
          size={{ md: 8 }}
        />
      </Grid>
    </>
  );
};

export default AdminIndex;
