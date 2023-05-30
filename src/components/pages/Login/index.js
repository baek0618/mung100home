import React from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import customHistory from "common/history";

const LoginContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f9f9fa;
`;

const LoginForm = styled("div")`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 40px 20px;
  border-radius: 10px;
  width: 350px;
  background-color: white;
  margin-bottom: 100px;
`;
const Logo = styled(IconButton)`
  width: 340px;
  height: 100px;
  color: black;
  margin-bottom: 20px;
`;
const InputLabel = styled("span")`
  font-size: 16px;
  margin-bottom: 4px;
  font-weight: bold;
  color: #323232;
`;

const goToHomePage = () => {
  customHistory.push(`/`);
};

const Login = () => {
  return (
    <LoginContainer>
      <Logo onClick={goToHomePage}>
        <img src="/img/main_logo.png" alt="logo" style={{ width: "100%" }} />
      </Logo>

      <LoginForm>
        <InputLabel>ID</InputLabel>
        <TextField placeholder="ID" variant="outlined" />
        <InputLabel style={{ marginTop: "15px" }}>PW</InputLabel>
        <TextField
          placeholder="Password"
          type={"password"}
          sx={{ color: "black" }}
          variant="outlined"
        />
        <Button
          sx={{
            width: "80px",
            padding: "10px",
            justifySelf: "flex-end",
            alignSelf: "flex-end",
          }}
          variant="text"
        >
          회원가입
        </Button>
        <Button sx={{ marginTop: "40px" }}>Login</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
