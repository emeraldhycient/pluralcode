import React from "react";
import Colors from "../../theme/Colors";

function Layout({ children }) {
  return (
    <div className={`h-screen w-screen bg-[#F5F6FA] overflow-y-auto	`}>
      {children}
    </div>
  );
}

export default Layout;
