import React, { useState } from "react";

const NavbarWithProfileCard = () => {
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false); // Manage dropdown visibility
  const [showProfileDetails, setShowProfileDetails] = useState(false); // Manage profile details visibility

  const toggleProfileCard = () => {
    setIsProfileCardOpen((prev) => !prev);
    setShowProfileDetails(false); // Reset profile details view
  };

  const showProfile = () => {
    setShowProfileDetails(true);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "18px" }}>My Application</div>
        <div>
          <span
            style={{
              cursor: "pointer",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "#0056b3",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={toggleProfileCard}
          >
            Welcome User
          </span>
        </div>
      </nav>

      {/* Dropdown Profile Card */}
      {isProfileCardOpen && (
        <div
          style={{
            position: "absolute",
            top: "50px", // Adjust as needed
            right: "20px",
            width: "200px",
            padding: "15px",
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            borderRadius: "5px",
            zIndex: "1000",
          }}
        >
          {!showProfileDetails ? (
            // Show "Your Profile" link
            <a
              href="#"
              onClick={showProfile}
              style={{
                textDecoration: "none",
                color: "#007BFF",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Your Profile
            </a>
          ) : (
            // Show Profile Details
            <div>
              <h3 style={{ margin: "0 0 10px 0", color: "#333" }}>User Profile</h3>
              <p style={{ margin: "5px 0" }}>
                <strong>Name:</strong> John Doe
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Email:</strong> john.doe@example.com
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Role:</strong> Administrator
              </p>
              <button
                onClick={() => setIsProfileCardOpen(false)}
                style={{
                  marginTop: "10px",
                  padding: "8px 15px",
                  backgroundColor: "#007BFF",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NavbarWithProfileCard;