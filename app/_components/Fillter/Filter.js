import React from "react";

export default function Filter() {
  return (
    <div className="flex items-center justify-between px-4 py-2  rounded-md">
      <ButtonFilter>This week</ButtonFilter>
      <ButtonFilter>Last month</ButtonFilter>
      <ButtonFilter>3 months ago</ButtonFilter>
      <ButtonFilter>Last year</ButtonFilter>
    </div>
  );
}

function ButtonFilter({ children }) {
  return (
    <button className=" text-primary-600 px-2 py-3 w-40 rounded-md border border-primary-250">
      {children}
    </button>
  );
}
