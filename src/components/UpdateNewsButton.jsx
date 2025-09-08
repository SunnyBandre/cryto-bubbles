import React, { useState } from "react";

function UpdateNewsButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleManualUpdate = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/.netlify/functions/update-tweets", {
        method: "POST",
      });
      const data = await response.json();

      if (response.ok) {
        setMessage("Tweets updated successfully!");
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage("Failed to update tweets.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-5">
      <button onClick={handleManualUpdate} disabled={loading}>
        {loading ? "Updating..." : "Manually Update Tweets"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateNewsButton;
