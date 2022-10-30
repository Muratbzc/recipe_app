import React, { useState } from "react";
import StyledLogin, {
  LoginButton,
  Loginh,
  LoginImg,
  LoginInput,
  LoginSection,
  LoginSectionCard,
} from "./Login.styled";
import { useNavigate } from "react-router-dom";
import MainLogo from "../../assets/aşcı.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleLoginValues = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    login.username && login.password && navigate("/home");
  };
  return (
    <StyledLogin>
      <LoginSectionCard>
        <LoginImg src={MainLogo} alt="" />
        <Loginh>Legandary Recipes</Loginh>
        <form onSubmit={handleNavigate}>
          <LoginSection>
            <LoginInput
              type="text"
              placeholder="USERNAME"
              required
              id="username"
              value={login.username}
              onChange={handleLoginValues}
            />
            <LoginInput
              type="password"
              placeholder="PASSWORD"
              required
              id="password"
              value={login.password}
              onChange={handleLoginValues}
            />
            <LoginButton type="submit">Login</LoginButton>
          </LoginSection>
        </form>
      </LoginSectionCard>
    </StyledLogin>
  );
};

export default Login;
