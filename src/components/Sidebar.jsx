import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div className="border flex h-[85vh] rounded-md">
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="relative w-[70px] bg-white text-center"
      >
        <i class="bx bx-user-circle"></i>

        {/* Sidebar */}
        {isOpen && (
          <div
            style={{
              position: "absolute",
              left: "70px",
              top: 0,
              height: "100%",
              width: "150px",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
            }}
          >
            <span>User Dashboard</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
