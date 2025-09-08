import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const whatsappNumber = "+971521651531";
  const message = "Hello, I would like to chat with you!";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-btn" onClick={handleWhatsAppClick}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </div>
  );
};

export default WhatsAppButton;
