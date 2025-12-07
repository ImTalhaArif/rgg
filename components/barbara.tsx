import React, { useState } from "react";
import RGGChat from "./RGGChat"; // <-- IMPORT YOUR CUSTOM CHAT COMPONENT

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChat = () => {
    setShowChat(true);
    setModalOpen(false); // close popup when chat opens
  };

  return (
    <div>
      <style jsx>{`
        .barbara-button {
          background-color: blue;
          color: white;
          border: none;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
          position: fixed;
          bottom: 20px;
          left: 20px;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .barbara-button:hover {
          background-color: #7b68ee;
        }

        .chatbox-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 350px;
          height: 450px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          overflow: hidden;
        }

        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9998;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          text-align: center;
          position: relative;
          border-radius: 8px;
          width: 300px;
        }

        .chat-button,
        .call-button,
        .whatsapp-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          margin: 10px 0;
          border-radius: 6px;
          width: 100%;
        }

        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          font-size: 20px;
          color: #555;
        }
      `}</style>

      {/* Floating “Get in Touch” Button */}
      {!showChat && (
        <button className="barbara-button" onClick={openModal}>
          +
        </button>
      )}

      {/* CHATBOX POPUP */}
      {showChat && (
        <div className="chatbox-container">
          <RGGChat />
        </div>
      )}

      {/* MODAL */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>

            <h2 style={{ color: "black" }}>How can we assist you?</h2>

            {/* Chat Option */}
            <button className="chat-button" onClick={handleChat}>
              Chat with Us
            </button>

            {/* WhatsApp */}
            <button
              className="whatsapp-button"
              onClick={() =>
                window.open("https://wa.me/923251515021", "_blank")
              }
            >
              WhatsApp
            </button>

            {/* Call */}
            <button
              className="call-button"
              onClick={() => (window.location.href = "tel:+923251515021")}
            >
              Call
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;