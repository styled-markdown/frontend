import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

import { loginState } from "../../recoil";
import { loginApi, joinApi } from "../../api";
import { auth } from "../../firebase";

const LoginWrapper = styled.li`
  margin: 0 5px;
  list-style: none;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  user-select: none;
`;

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    const { accessToken } = localStorage;

    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const joinMutation = useMutation(joinApi, {
    onSuccess: (variable) => {
      loginMutation.mutate(variable);
    },
  });

  const loginMutation = useMutation(loginApi, {
    onError: (error, variable) => {
      if (error.response.status === 401) {
        joinMutation.mutate(variable);
      }
    },
    onSuccess: (data) => {
      const accessToken = data.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      setIsLoggedIn(true);
    },
  });

  const handleLoginClick = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const { email, displayName } = result.user;
      loginMutation.mutate({ email, displayName });
    } catch (error) {
      return;
    }
  };

  const handleLogoutClick = async () => {
    localStorage.removeItem("accessToken");
    axios.defaults.headers.common["Authorization"] = "";

    setIsLoggedIn(false);
    navigate("/");
  };

  return !isLoggedIn ? (
    <LoginWrapper onClick={handleLoginClick}>로그인</LoginWrapper>
  ) : (
    <LoginWrapper onClick={handleLogoutClick}>로그아웃</LoginWrapper>
  );
}
