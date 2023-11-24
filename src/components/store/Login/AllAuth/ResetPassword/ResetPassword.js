import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function ResetPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      axios.post('http://localhost:8000/auth/password_reset/', {
        email: data.email
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Błąd podczas próby resetowania hasła:", error);
      });
    };

    return (
      <div>
        <h2>Odzyskiwanie Hasła</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label>Email:</label>
              <input name="email" {...register('email', { required: "To pole jest wymagane" })} />
              {errors.email && <span>{errors.email.message}</span>}
          </div>
          <button type="submit">Resetuj Hasło</button>
        </form>
      </div>
    );
}

export default ResetPassword;
