import React, { useState } from 'react';


export default function Community() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setMessage('');
  };

  return (
    <div>
      <p>Respond to Gena and her Journy</p>
      <form className="flex-row justify-center justify-space-between-md align-center">
        <input
          value={message}
          className="form-input w-100"
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="message"
        />
        <button className="btn btn-primary btn-block py-3" type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

