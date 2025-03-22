import React from "react";

function TabButton({ title, isActive,onClick }) {
  return (
    <button onClick={onClick}
      className={`btn-rounded   dark:text-neutral-100  bg-neutral-0 dark:bg-neutral-700 dark:border-neutral-600 border-neutral-200 shadow-sm  ${
        isActive
          ? "bg-red-400 text-neutral-100 dark:bg-red-400 dark:text-neutral-900 hover:bg-red-500 "
          : "text-neutral-700 hover:opacity-80"
      }`}
    >
      {title}
    </button>
  );
}

export default TabButton;
