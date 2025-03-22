import React, { useContext, useState } from "react";
import ExtensionCard from "./ExtensionCard";
import data from "../../../data.json";
import { FilterContext } from "../../context/FilterContext";
function ExtensionList() {
  const { filter } = useContext(FilterContext);
  const [extensions, setExtensions] = useState(data);

  const toggleActive = (id) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.name === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const removeExtension = (id) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((ext) => ext.name !== id)
    );
  };

  const filteredExtensions = extensions.filter((extension) => {
    if (filter === "Active") return extension.isActive;
    else if (filter === "Inactive") return !extension.isActive;
    return true;
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {filteredExtensions &&
        filteredExtensions.map((extension) => (
          <ExtensionCard
            name={extension.name}
            logo={extension.logo}
            description={extension.description}
            isActive={extension.isActive}
            toggleActive={toggleActive}
            removeExtension={removeExtension}
          />
        ))}
    </div>
  );
}

export default ExtensionList;
