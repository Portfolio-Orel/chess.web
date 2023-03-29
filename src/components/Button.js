import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, isLoading, ...props }) => {
  return (
    <button
      className={`${
        isLoading ? 'bg-blue-500 cursor-wait' : 'bg-blue-600 hover:bg-blue-700'
      } flex justify-center items-center w-full h-full rounded-full px-4 py-2 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm6 8a8 8 0 008-8V0c-4.418 0-8 3.582-8 8h4zm2 0a6 6 0 01-6-6h-4a10 10 0 0010 10v-4zm-6-6a6 6 0 016-6v-4a10 10 0 00-10 10h4z"
          ></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isLogin: PropTypes.bool,
};

export default Button;
