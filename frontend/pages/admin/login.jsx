import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Box,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
} from "@mui/material";
import AuthCard from "@/component/admin/sections/auth/AuthCard";
import Logo from "../../component/admin/Logo";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormHelperText from "@mui/material/FormHelperText";
import IconButton from "../../component/admin/@extended/IconButton";
import EyeOutlined from "@ant-design/icons/EyeOutlined";
import EyeInvisibleOutlined from "@ant-design/icons/EyeInvisibleOutlined";
import Footer from "@/component/admin/Footer";

const Login = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string()
      .required("Password is required")
      .test(
        "no-leading-trailing-whitespace",
        "Password cannot start or end with spaces",
        (value) => value === value.trim()
      )
      .max(10, "Password must be less than 10 characters"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // console.log("Form Data:", values);
      if (values.email && values.password) {
        router.push("/admin");
        localStorage.setItem("user", JSON.stringify(values));
      }
    },
  });

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
        justifyContent="space-between"
        sx={{ minHeight: "100vh" }}
      >
        <Grid sx={{ px: 3, mt: 3 }} size={12}>
          <Logo to="/" sx={{ justifyContent: "start" }} />
        </Grid>
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
          <AuthCard>
            <Grid container spacing={3}>
              <Grid size={12}>
                <Stack
                  direction="row"
                  sx={{
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    mb: { xs: -0.5, sm: 0.5 },
                  }}
                >
                  <Typography variant="h3" sx={{ fontSize: "1.5rem" }}>
                    Login
                  </Typography>
                  <Typography
                    component={Link}
                    href={"/admin/register"}
                    variant="link1"
                  >
                    Don&apos;t have an account?
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={12}>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid size={12}>
                      <Stack sx={{ gap: 1 }}>
                        <InputLabel htmlFor="email-login">
                          Email Address 
                        </InputLabel>
                        <OutlinedInput
                          id="email-login"
                          type="email"
                          value={formik.values.email}
                          name="email"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Enter email address"
                          fullWidth
                          error={Boolean(
                            formik.touched.email && formik.errors.email
                          )}
                          className="login-form-input"
                        />
                      </Stack>
                      {formik.touched.email && formik.errors.email && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-email-login"
                        >
                          {formik.errors.email}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid size={12}>
                      <Stack sx={{ gap: 1 }}>
                        <InputLabel htmlFor="password-login">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          fullWidth
                          error={Boolean(
                            formik.touched.password && formik.errors.password
                          )}
                          id="-password-login"
                          type={showPassword ? "text" : "password"}
                          value={formik.values.password}
                          name="password"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                color="secondary"
                                sx={{ fontSize: "1rem" }}
                              >
                                {showPassword ? (
                                  <EyeOutlined />
                                ) : (
                                  <EyeInvisibleOutlined />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          placeholder="Enter password"
                          className="login-form-input"
                        />
                      </Stack>
                      {formik.touched.password && formik.errors.password && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-password-login"
                        >
                          {formik.errors.password}
                        </FormHelperText>
                      )}
                    </Grid>
                    <Grid sx={{ mt: -1 }} size={12}>
                      <Stack
                        direction="row"
                        sx={{
                          gap: 2,
                          alignItems: "baseline",
                          justifyContent: "space-between",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={(event) =>
                                setChecked(event.target.checked)
                              }
                              name="checked"
                              color="primary"
                              size="small"
                            />
                          }
                          label={
                            <Typography variant="h6">
                              Keep me sign in
                            </Typography>
                          }
                        />
                        <Link
                          variant="h6"
                          href="#"
                          color="text.primary"
                          sx={{ textDecoration: "none" }}
                        >
                          Forgot Password?
                        </Link>
                      </Stack>
                    </Grid>
                    <Grid size={12}>
                      <Button
                        fullWidth
                        size="large"
                        variant="contained"
                        color="primary"
                        type="submit"
                        // disabled={isSubmitting}
                      >
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </AuthCard>
        </Grid>
        <Grid sx={{ p: 3 }} size={12}>
          <Footer/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
