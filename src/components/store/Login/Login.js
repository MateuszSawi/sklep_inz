import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:8000/accounts/login/', {
        username: data.username,
        password: data.password
    })
    .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.key); // zapisanie tokena do localStorage
    })
    .catch(error => {
        console.error("Błąd logowania:", error);
    });
  };

  return (
    <div>
      <h2>Logowanie</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label>Użytkownik:</label>
              <input name="username" {...register("username", { required: "To pole jest wymagane" })} />
              {errors.username && <span>{errors.username.message}</span>}
          </div>
          <div>
              <label>Hasło:</label>
              <input type="password" name="password" {...register("password", { required: "To pole jest wymagane" })} />
              {errors.password && <span>{errors.password.message}</span>}
          </div>
          <button type="submit">Zaloguj się</button>
      </form>
    </div>
  );
}

export default Login;
