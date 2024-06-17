import React, { useState } from 'react';
import { FaPaperPlane, FaImage, FaSmile } from 'react-icons/fa';
import { BsRobot } from "react-icons/bs";
import EmojiPicker from 'emoji-picker-react';


function Chat() {

  
    const [messages, setMessages] = useState([
        { text: "Hello! How can I help you today?", sender: "bot" },
        { text: "Sure, I have a question.", sender: "user" },
      ]);
      const [input, setInput] = useState('');
      const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    
      const handleSendMessage = (e) => {
        e.preventDefault();
        if (input.trim()) {
          setMessages([...messages, { text: input, sender: 'user' }]);
          setInput('');
        }
      };
    
      const handleSendImage = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setMessages([...messages, { text: reader.result, sender: 'user', type: 'image' }]);
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleSendEmoji = (emojiObject) => {
        setInput(input + emojiObject.emoji);
      };





      return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-3">
          {/* Chat Container */}
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl lg:max-w-3xl md:max-w-2xl sm:max-w-xl ">
            {/* Chat Header */}
            <div className="flex items-center mb-4 justify-center text-center">
              <div className="relative text-center mb-5">
                <div className="relative inline-block">
                  <BsRobot className="w-12 h-12 text-blue-500 rounded-full items-center" />
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>
                </div>
                <p className="font-medium text-2xl">CampPro AI Assistant</p>
              </div>
            </div>
      
            {/* Chat Messages */}
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start ${msg.sender === 'user' ? 'justify-end' : ''}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="relative inline-block">
                      <BsRobot className="w-8 h-8 text-blue-500 rounded-full items-center" />
                      <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400"></span>
                    </div>
                  )}
                  {msg.type === 'image' ? (
                    <img
                      src={msg.text}
                      alt="Sent image"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  ) : (
                    <div
                      className={`ml-3 p-3 rounded-lg ${
                        msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                    </div>
                  )}
                  {msg.sender === 'user' && (
                    <img 
                      src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full ml-3"
                    />
                  )}
                </div>
              ))}
            </div>
      
            {/* Chat Input */}
            <div className="mt-4 flex items-center relative">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="upload-image"
                onChange={handleSendImage}
              />
              <label
                htmlFor="upload-image"
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer"
              >
                <FaImage className="text-gray-500" />
              </label>
              <button
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 ml-2 relative"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <FaSmile className="text-gray-500" />
              </button>
              {showEmojiPicker && (
                <div className="absolute bottom-12 left-0">
                  <EmojiPicker onEmojiClick={handleSendEmoji} />
                </div>
              )}
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 py-2 px-3 rounded-full bg-gray-100 focus:outline-none ml-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full ml-3 hover:bg-blue-600"
                onClick={handleSendMessage}
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      );
      
}

export default Chat;