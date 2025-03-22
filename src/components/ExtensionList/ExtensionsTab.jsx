import React, { useContext } from "react";
import TabButton from "./TabButton";
import { FilterContext } from "../../context/FilterContext";

function ExtensionsTab() {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div className="flex  flex-col md:flex-row gap-6 md:justify-between items-center  mb-8">
      <h1 className="h1-bold  text-neutral-900 dark:text-neutral-100">
        Extensions List
      </h1>
      <div className="flex gap-x-4">
        {["All", "Active", "Inactive"].map((status) => (
          <TabButton
            title={status}
            isActive={filter === status}
            onClick={() => setFilter(status)}
          />
        ))}
      </div>
    </div>
  );
}

export default ExtensionsTab;
