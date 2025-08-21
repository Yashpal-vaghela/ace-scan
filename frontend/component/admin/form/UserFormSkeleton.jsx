import { Box, Skeleton } from "@mui/material";
import React from "react";

export default function UserFormSkeleton() {
  return (
    <div>
      <Box sx={{ mt: 2 }}>
        {/* User Name */}
        <Skeleton variant="text" width={200} height={40} sx={{ mb: 2 }} />

        {/* First Name */}
        <Skeleton variant="rounded" width="100%" height={56} sx={{ mb: 2 }} />

        {/* Last Name */}
        <Skeleton variant="rounded" width="100%" height={56} sx={{ mb: 2 }} />

        {/* Email */}
        <Skeleton variant="rounded" width="100%" height={56} sx={{ mb: 2 }} />

        {/* Password */}
        <Skeleton variant="rounded" width="100%" height={56} />
      </Box>
    </div>
  );
}
