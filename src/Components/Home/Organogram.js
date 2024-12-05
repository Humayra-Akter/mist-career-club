import React from "react";

const Organogram = () => {
  return (
    <div
      style={{
        backgroundColor: "#0D1B2A",
        color: "#ffffff",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Organogram</h1>
        <p style={{ fontSize: "1rem", margin: "10px 0" }}>
          <strong>Chief Patron:</strong> Commandant, MIST
        </p>
        <p style={{ fontSize: "1rem" }}>
          <strong>Chief Advisor and Club Counselor:</strong> Director, DSW, MIST
        </p>
      </div>

      {/* Organizational Structure */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        {[
          "Moderator",
          "President",
          "General Secretary",
          "Club Coordinator",
        ].map((role) => (
          <div
            key={role}
            style={{
              display: "inline-block",
              backgroundColor: "#1E3A5F",
              padding: "10px 20px",
              borderRadius: "8px",
              margin: "10px",
              cursor: "pointer",
              transition: "transform 0.3s, background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#27476E")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#1E3A5F")
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {role}
          </div>
        ))}
      </div>

      {/* Directors Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {[
          "Event Management",
          "Communication",
          "Brand Promotion",
          "Logistics",
          "Creative Design",
          "Workshop Management",
        ].map((category) => (
          <div
            key={category}
            style={{
              backgroundColor: "#1E3A5F",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
              width: "200px",
              cursor: "pointer",
              transition: "transform 0.3s, background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#27476E")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#1E3A5F")
            }
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            }
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
              Director
            </h3>
            <p
              style={{
                fontSize: "1rem",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {category}
            </p>
            <hr style={{ borderColor: "#ffffff", marginBottom: "10px" }} />
            <p>Assistant Director</p>
            <p>Executive</p>
            <p>Associates</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organogram;
