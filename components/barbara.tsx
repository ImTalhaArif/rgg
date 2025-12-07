import React, { useState } from 'react';

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleChat = () => setShowChat(true);

  const handleCall = () => {
    window.location.href = 'tel:+18334901621';
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
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .barbara-button:hover {
          background-color: #7b68ee;
        }

        .botchat {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 9999;
          border: none;
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
        }

        .chat-button,
        .call-button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
          margin: 10px;
          border-radius: 6px;
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

      {!showChat && (
        <button className="barbara-button" onClick={openModal}>
          <span>Get In Touch</span>
        </button>
      )}

      {showChat && (
        <iframe
          className="botchat"
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/0537384d-6bae-4314-9c12-b86b621a03b1"
        ></iframe>
      )}

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2 style={{ color: 'black' }}>How can we assist you?</h2>

            <button
              className="chat-button"
              onClick={() => window.open('https://wa.me/923251515021', '_blank')}
            >
              WhatsApp
            </button>

            <button
              className="call-button"
              onClick={() => (window.location.href = 'tel:+923251515021')}
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