import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import ShopTwoIcon from "@mui/icons-material/ShopTwo";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Replace with your desired primary color
    },
    secondary: {
      main: "#dc004e", // Replace with your desired secondary color
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Replace with your desired font
  },
  // You can further customize other aspects of the theme here
});

const LoginPage = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="m-auto flex flex-col items-center">
      {/* Header */}
      <div className="text-[64px] font-bold mt-8">K GOODS</div>
      {/* Header two */}
      <div className="text-[36px]">Login to K-Goods</div>
      {/* // Login Form */}
      <div className="mt-10">
        <form className="login_form">
          <TextField
            id="standard-basic"
            label="Username/Email"
            variant="standard"
            fullWidth
            style={{ width: 600 }}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            fullWidth
            style={{ width: 600 }}
          />
          <div className="flex justify-between text-[#757A7D]">
            <div>Forget password</div>
            <div>
              <Checkbox {...label} />
              Remember me
            </div>
          </div>
          <Button variant="contained">Login</Button>
        </form>
        {/* //OR */}
        <div className="flex justify-around items-center mt-9 text-[#8A8A8A]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="272"
              height="2"
              viewBox="0 0 272 2"
              fill="none"
            >
              <path d="M0 1L272 0.999976" stroke="#C4C4C4" />
            </svg>
          </div>
          <div className="text-[24px]">OR</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="272"
              height="2"
              viewBox="0 0 272 2"
              fill="none"
            >
              <path d="M0 1L272 0.999976" stroke="#C4C4C4" />
            </svg>
          </div>
        </div>
        {/* //Button group */}
        <div className="flex justify-center gap-3 mt-4">
          <Button
            variant="contained"
            href="#contained-buttons"
            startIcon={<FacebookIcon />}
          >
            Google
          </Button>
          <Button
            variant="contained"
            href="#contained-buttons"
            startIcon={<GoogleIcon />}
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            href="#contained-buttons"
            startIcon={<ShopTwoIcon />}
          >
            Shopify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
