import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DetailsSection from '../FOOTER';
import Navbar from '../../HomePage/Navbar';

const faqData = [
  {
    question: 'How do I book a service?',
    answer: 'Simply browse through our categories, select the service you need, and book it online. Our user-friendly platform makes the process quick and easy.'
  },
  {
    question: 'Are the service providers verified?',
    answer: 'Yes, all our service providers undergo a thorough verification process to ensure quality and reliability.'
  },
  {
    question: 'What if I am not satisfied with the service?',
    answer: 'Our customer support team is here to assist you with any issues or concerns. You can contact us through our support page or call our helpline.'
  },
  // Add more FAQs here
];

function FAQs() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! How can I assist you today? You can ask questions like "How do I book a service?" or "Are the service providers verified?"' }
  ]);

  const handleSend = (question) => {
    if (question.trim() === '') return;

    const userMessage = { type: 'user', text: question };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    const faq = faqData.find(faq => faq.question.toLowerCase().includes(question.toLowerCase()));

    const botMessage = faq
      ? { type: 'bot', text: faq.answer }
      : { type: 'bot', text: 'Sorry, I do not have an answer to that question. Please contact our support team for further assistance.' };

    setMessages(prevMessages => [...prevMessages, botMessage]);
    setInput('');
  };

  const handleClick = (question) => {
    setInput(''); // Clear input
    handleSend(question);
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="card my-4">
          <div className="card-header bg-dark bg-gradien text-white text-center">
            FAQ Chat Bot
          </div>
          <div className="card-body">
            <div className="chat-box" style={{ height: '400px', overflowY: 'scroll', marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type === 'bot' ? 'text-start' : 'text-end'}`}>
                  <div className={`alert ${msg.type === 'bot' ? 'alert-secondary' : 'alert-primary'}`} role="alert">
                    {msg.text}
                  </div>
                </div>
              ))}
              {messages.length === 1 && (
                <div className="suggested-questions">
                  <div className="alert alert-light" role="alert">
                    <strong>Suggested Questions:</strong>
                    <ul className="list-unstyled">
                      {faqData.map((faq, index) => (
                        <li key={index}>
                          <button className="btn btn-link p-0" onClick={() => handleClick(faq.question)}>
                            {faq.question}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type your question here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend(input)}
              />
              <button className="btn btn-dark btn-gradien" onClick={() => handleSend(input)}>
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p>For more information, visit our <a href="/HelpCenter">Help Center</a> or <a href="/ContactUs">Contact Us</a>.</p>
          </div>
        </div>
      
      </div>
      <DetailsSection />
    </>
  );
}

export default FAQs;
