import React, { useEffect } from "react";
import LoginForm from "@/components/LoginForm";
import { isAuthenticated } from "@/redux/actions/auth";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Screens from "../../constants/screens";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(isAuthenticated());
  }, [dispatch]);

  useEffect(() => {
    if (authState?.user) {
      router.push(Screens.MAIN);
    }
  }, [authState]);

  return (
    <div className="w-full h-full">
      <LoginForm />
    </div>
  );
};

export default Login;
