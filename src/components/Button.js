import React from "react";
import PropTypes from "prop-types";
import { Loading } from "@/components/Loading";

const Button = ({ children, isLoading, ...props }) => {
  return (
    <button
      className={`${
        isLoading ? "bg-blue-500 cursor-wait" : "bg-blue-600 hover:bg-blue-700"
      } flex justify-center items-center w-full h-full rounded-full px-4 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLogin: PropTypes.bool,
};

export default Button;
