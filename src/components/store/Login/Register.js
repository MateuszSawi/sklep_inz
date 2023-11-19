import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  // Stan formularza
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/auth/register/', {
      name: name,
      surname: surname,
      email: email,
      pass1: pass1,
      pass2: pass2
    }, 
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      const headers = response.headers;
      const cookies = headers.get('set-cookie');
      console.log('REGISTER: ', response);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="username">Surname</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password1">Password</label>
        <input
          type="password"
          id="password1"
          name="password1"
          value={pass1}
          onChange={(event) => setPass1(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password2">Confirm Password</label>
        <input
          type="password"
          id="password2"
          name="password2"
          value={pass2}
          onChange={(event) => setPass2(event.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;