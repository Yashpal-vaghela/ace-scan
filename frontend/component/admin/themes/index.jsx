import PropTypes from "prop-types";
import { useMemo } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Palette from "./palette";
import Typography from "./typography";
import CustomShadows from "./shadows";
import ErrorBoundary from "@/component/ErrorBoundary";
import { StyledEngineProvider } from "@mui/material/styles";

// ==============================|| DEFAULT THEME - MAIN ||============================== //
export default function ThemeCustomization({ children }) {
  const theme = Palette("light", "default");

  const themeTypography = Typography(`'Public Sans', sans-serif`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440,
        },
      },
      direction: "ltr",
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography,
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              backgroundColor: theme.palette.primary.button,
              color: "#fff",
              "&:hover": {
                backgroundColor: theme.palette.primary.button,
              },
              textTransform: "none", // optional: remove uppercase
              borderRadius: 6, // optional: custom border radius
            },
            containedPrimary: {
              backgroundColor: theme.palette.primary.button,
              "&:hover": {
                backgroundColor: theme.palette.primary.button,
              },
            },
          },
        },
        MuiDataGrid: {
          styleOverrides: {
            root: {
              border: "1px solid #ddd",
            },
            columnHeaders: {
              backgroundColor: "#f0f0f0",
              fontWeight: "bold",
            },
            cell: {
              fontSize: "14px",
            },
          },
        },
      },
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  const themes = createTheme(themeOptions);
  // themes.components = componentsOverride(themes);

  return (
    <ErrorBoundary>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ErrorBoundary>
  );
}

ThemeCustomization.propTypes = { children: PropTypes.node };
