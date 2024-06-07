
import React, { useState } from 'react';

const Phone =() => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleMobileNumberChange = (event) => {
    let input = event.target.value;


    input = input.replace(/^\s+|\s+$/g);


    if (input.length > 5) {
      input = input.slice(0, 5) + '-' + input.slice(5);
    }

    setMobileNumber(input);
  };

  return (
    <div>
      <label>Mobile Number:</label>
      <input
        type="text"
        value={mobileNumber}
        onChange={handleMobileNumberChange}
        placeholder="Enter your mobile number"
      />
    </div>
  );
}

export default Phone;