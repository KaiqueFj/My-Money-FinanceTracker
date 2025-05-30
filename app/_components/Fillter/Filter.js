import React from "react";

export default function Filter() {
  return (
    <div className="flex items-center justify-between rounded-md border-4 border-primary-200/60">
      <ButtonFilter>This week</ButtonFilter>
      <ButtonFilter>Last month</ButtonFilter>
      <ButtonFilter>3 months ago</ButtonFilter>
      <ButtonFilter>Last year</ButtonFilter>
    </div>
  );
}

function ButtonFilter({ children }) {
  return (
    <button className=" text-primary-600 px-2 hover:text-primary-100 h-full hover:bg-primary-400  min-w-[120px] font-semibold  rounded-md ">
      {children}
    </button>
  );
}
