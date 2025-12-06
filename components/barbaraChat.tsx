import React, { useState } from 'react'; // Import React and useState

const YOUR_PROJECT_ID = 'barbara-sxcr'; // Replace with your Dialogflow project ID

interface Message {
  text: string;
  isUser: boolean;
}

const barbaraChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = async (message: string) => {
    try {
      const response = await fetch(
        `https://dialogflow.googleapis.com/v2/projects/${YOUR_PROJECT_ID}/agent/sessions/12345:detectIntent`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer YOUR_ACCESS_TOKEN', // Replace with your Dialogflow access token
          },
          body: JSON.stringify({
            queryInput: {
              text: {
                text: message,
                languageCode: 'en-US',
              },
            },
          }),
        }
      );

      const data = await response.json();
      const botReply = data?.queryResult?.fulfillmentText;

      if (botReply) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botReply, isUser: false },
        ]);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            {message.isUser ? 'User: ' : 'Bot: '}
            {message.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            handleSendMessage(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
      />
    </div>
  );
};

export default barbaraChat;
