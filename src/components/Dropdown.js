import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";
import { Loading } from "./Loading";

const DropdownItem = ({ id, value }) => (
  <li>
    <a
      href="#"
      className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
    >
      {value}
    </a>
  </li>
);

const Dropdown = ({ label, name, items, isLoading }) => {
  const [field, meta] = useField(name);
  const [isOpen, setIsOpen] = React.useState(false);
  console.log(items);

  return (
    <div className="my-4 relative">
      <button
        id="dropdownDefaultButton"
        onClick={() => setIsOpen(!isOpen)}
        data-dropdown-toggle="dropdown"
        class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        type="button"
      >
        {label}
        <svg
          class="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        class={`z-10 absolute ${
          isOpen ? "" : "hidden"
        }  bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {items.map((item) => (
              <DropdownItem key={item.id} value={item.value} />
            ))}
          </ul>
        )}
      </div>

      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs italic">{meta.error}</div>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  isLoading: false,
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool,
};

export default Dropdown;
