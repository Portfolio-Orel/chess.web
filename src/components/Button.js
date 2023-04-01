import React from "react";
import PropTypes from "prop-types";
import { Loading } from "@/components/Loading";

const Button = ({ children, isLoading, ...props }) => {
  return (
    <button
      className={`${
        isLoading ? "bg-blue-500 cursor-wait" : "bg-blue-600 hover:bg-blue-700"
      } flex justify-center items-center w-full rounded-full px-4 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
      style={{ minHeight: "3rem" }} // Add this line to set the min-height
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
};

Button.defaultProps = {
  isLoading: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

export default Button;
