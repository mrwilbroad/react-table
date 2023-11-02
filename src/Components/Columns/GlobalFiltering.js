import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFiltering = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const OnChangeValue = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <section>
      <input
        onChange={(e) => {
          setValue(e.target.value);
          OnChangeValue(e.target.value);
        }}
        value={value || ""}
        className="form-control"
        name="search"
        placeholder="Search Here!"
        type="search"
      />
    </section>
  );
};

export default GlobalFiltering;
