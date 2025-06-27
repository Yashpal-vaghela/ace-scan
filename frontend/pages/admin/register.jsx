import { Box, Grid, Stack, Typography,InputLabel,OutlinedInput,InputAdornment,FormControl,Button,FormHelperText} from "@mui/material";
import React,{useState,useEffect} from "react";
import Logo from "../../component/admin/Logo";
import Link from "next/link";
import Image from "next/image";
import AuthCard from "@/component/admin/sections/auth/AuthCard";
import AuthWrapper from "@/component/admin/sections/auth/AuthWrapper";
import { useFormik } from "formik";
import * as Yup from "yup";
import IconButton from "@/component/admin/@extended/IconButton";
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import { useRouter } from "next/router";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const registerSchema = Yup.object().shape({
    firstname: Yup.string().max(255).required("First Name is required"),
    lastname: Yup.string().max(255).required("Last Name is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .required("Email is required"),
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
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      if (
        (values.firstname && values.lastname && values.email, values.password)
      ) {
        router.push("/admin/login");
        localStorage.setItem("regiteruser", JSON.stringify(values));
      }
    },
  });
  return (
    <>
      <AuthWrapper>
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
              <Typography variant="h3">Sign up</Typography>
              <Typography
                component={Link}
                href="/admin/login"
                variant="link1"
              >
                Already have an account?
              </Typography>
            </Stack>
          </Grid>
          <Grid size={12}>
            <form method="post" onSubmit={formik.handleSubmit}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Stack sx={{ gap: 1 }}>
                    <InputLabel htmlFor="firstname-signup">
                      First Name*
                    </InputLabel>
                    <OutlinedInput
                      id="firstname-login"
                      type="text"
                      value={formik.values.firstname}
                      name="firstname"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Enter first name"
                      fullWidth
                      error={Boolean(formik.touched.firstname && formik.errors.firstname)}
                      className="login-form-input"
                    />
                  </Stack>
                  {formik.touched.firstname && formik.errors.firstname && (
                  <FormHelperText error id="helper-text-firstname-signup">
                    {formik.errors.firstname}
                  </FormHelperText>
                )}
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Stack sx={{ gap: 1 }}>
                      <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                      <OutlinedInput
                          fullWidth
                          error={Boolean(formik.touched.lastname && formik.errors.lastname)}
                          id="lastname-signup"
                          type="text"
                          value={formik.values.lastname}
                          name="lastname"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Enter last name"
                          className="login-form-input"
                      />
                    </Stack>
                    {formik.touched.lastname && formik.errors.lastname && (
                      <FormHelperText error id="helper-text-lastname-signup">
                          {formik.errors.lastname}
                      </FormHelperText>
                    )}
                </Grid>
                <Grid size={12}>
                    <Stack sx={{ gap: 1 }}>
                      <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                      <OutlinedInput
                          fullWidth
                          error={Boolean(formik.touched.email && formik.errors.email)}
                          id="email-login"
                          type="email"
                          value={formik.values.email}
                          name="email"
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          placeholder="Enter email address"
                          className="login-form-input"
                      />
                    </Stack>
                    {formik.touched.email && formik.errors.email && (
                        <FormHelperText error id="helper-text-email-signup">
                            {formik.errors.email}
                        </FormHelperText>
                    )}
                </Grid>
                <Grid size={12}>
                    <Stack sx={{ gap: 1 }}>
                      <InputLabel htmlFor="password-signup">Password</InputLabel>
                      <OutlinedInput
                          fullWidth
                          error={Boolean(formik.touched.password && formik.errors.password)}
                          id="password-signup"
                          type={showPassword ? 'text' : 'password'}
                          value={formik.values.password}
                          name="password"
                          onBlur={formik.handleBlur}
                          className="login-form-input"
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
                                {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                </IconButton>
                            </InputAdornment>
                          }
                          placeholder="Enter confirm password"
                      />
                    </Stack>
                    {formik.touched.password && formik.errors.password && (
                      <FormHelperText error id="helper-text-password-signup">
                          {formik.errors.password}
                      </FormHelperText>
                    )}
                </Grid>
                <Grid size={12}>
                    <Typography variant="body2">
                      By Signing up, you agree to our &nbsp;
                      <Typography component={Link} href="#" variant="subtitle2">Terms of Service</Typography>
                      &nbsp; and &nbsp;
                      <Typography component={Link} href="#" variant="subtitle2">Privacy Policy</Typography>
                    </Typography>
                </Grid>
                <Grid size={12}>
                    <Button fullWidth size="large" variant="contained" color="primary" type="submit">
                        Create Account
                    </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </AuthWrapper>
    </>
  );
};
export default Register;
