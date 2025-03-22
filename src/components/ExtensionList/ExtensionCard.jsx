import React from "react";
import ActiveButton from "./ActiveButton";

function ExtensionCard({
  logo,
  name,
  description,
  isActive,
  toggleActive,
  removeExtension,
}) {
  const url = import.meta.env.BASE_URL;
  
  return (
    <div className="bg-neutral-0 rounded-2xl flex flex-col justify-between h-[200px] border border-neutral-100 dark:border-neutral-600 shadow-sm dark:bg-neutral-800 pb-5 p-4">
      <div className="flex gap-4 items-start">
        <img src={url+"/" + logo} />
        <div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1.5">
            {name}
          </h3>
          <p className="text-gray-500 text-[16px]">{description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center ">
        <button
          onClick={() => removeExtension(name)}
          className="text-[16px]   px-4 rounded-4xl cursor-pointer hover:bg-red-500 hover:text-neutral-0 dark:hover:text-neutral-900 border border-gray-300 py-1.5 text-neutral-900 dark:text-neutral-100 dark:border-neutral-600"
        >
          Remove
        </button>
        <ActiveButton
          isActive={isActive}
          id={name}
          toggleActive={toggleActive}
        />
      </div>
    </div>
  );
}

export default ExtensionCard;
