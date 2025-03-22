import React, { useState } from 'react';
import axios from 'axios';

import './contacts.css'; // Import the CSS file for advanced styling

function Contacts() {
  const [phoneNo, setPhoneNo] = useState('');
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit-query', {
        phoneNo,
        query,
      });
      setMessage(response.data.message);
      setPhoneNo('');
      setQuery('');
    } catch (error) {
      setMessage('Failed to submit the query. Please try again later.');
    }
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number:</label>
          <input
            type="text"
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="query">Query:</label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Contacts;
