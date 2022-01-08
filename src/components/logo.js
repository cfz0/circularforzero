import React from "react";

const Logo = (props) => {
  const { children } = props;
  return (
    <div className="flex items-center" {...props}>
      <img src="/assets/logo.svg" alt="" className="w-[40px] mr-3" />
      {children}
    </div>
  );
};

export default Logo;
