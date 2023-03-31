import React from "react";
import { useField } from "formik";
import PropTypes from "prop-types";
import { Loading } from "./Loading";

const DropdownItem = ({ id, value, onClick }) => (
  <li key={id} onClick={onClick}>
    <a href="#" className="w-full block px-4 py-2 hover:bg-gray-100 ">
      {value}
    </a>
  </li>
);

const Dropdown = ({ label, name, items, isLoading }) => {
  const [field, meta, helpers] = useField(name);
  const [isOpen, setIsOpen] = React.useState(false);

  const onSelect = (item) => {
    setIsOpen(false);
    helpers.setValue({ id: item.id, value: item.value });
  };

  return (
    <div className="my-4 relative w-full">
      <label className="block text-gray-700 font-bold mb-1">{label}</label>
      <button
        id="dropdownDefaultButton"
        onClick={() => setIsOpen(!isOpen)}
        data-dropdown-toggle="dropdown"
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        type="button"
      >
        {field.value && field.value.value ? field.value.value : label}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      <div
        id="dropdown"
        className={`scrollbar-w-2 scrollbar-track-gray-200 scrollbar-thumb-gray-500
        z-10 absolute ${
          isOpen ? "" : "hidden"
        }  bg-white divide-y divide-gray-100 rounded-lg shadow w-full max-h-40 overflow-auto `}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <ul
            className="py-2 text-sm text-gray-800 "
            aria-labelledby="dropdownDefaultButton"
          >
            {items.map((item) => (
              <DropdownItem
                key={item.id}
                value={item.value}
                onClick={() => onSelect(item)}
              />
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
