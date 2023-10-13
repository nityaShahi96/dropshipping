import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Google, Facebook, ShopTwo } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="m-auto flex flex-col items-center">
      {/* Header */}
      <div className="text-[64px] font-bold mt-12">K GOODS</div>
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
            startIcon={<Google />}
          >
            Google
          </Button>
          <Button
            variant="contained"
            href="#contained-buttons"
            startIcon={<Facebook />}
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            href="#contained-buttons"
            startIcon={<ShopTwo />}
          >
            Shopify
          </Button>
        </div>
        {/* Register if new */}
        <div className="text-[#8A8A8A] mt-8 flex justify-center gap-1 text-[18px]">
          New at K-Goods?
          <Link to="/registration" className="text-blue-500 hover:underline">
            {" "}
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
