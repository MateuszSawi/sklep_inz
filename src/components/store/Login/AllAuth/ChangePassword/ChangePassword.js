import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { apiK, apiP } from '../../../../../apiConfig';

function ChangePassword() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
      // Jeśli używasz ciasteczek, axios automatycznie je dołączy do zapytania

      axios.post(`${apiK}/accounts/password/change/`, {
          old_password: data.oldPassword,
          new_password1: data.newPassword1,
          new_password2: data.newPassword2
      }, {
          // Jeśli Django korzysta z CSRF, dodajemy token CSRF do nagłówków.
          // Zakładając, że ciasteczko CSRF jest dostępne w przeglądarce jako "csrftoken".
          headers: {
              'X-CSRFToken': document.cookie.split('; ').find(row => row.startsWith('csrftoken')).split('=')[1]
          }
      })
      .then(response => {
          console.log(response.data);
          // Można dodać informację dla użytkownika o pomyślnej zmianie hasła
      })
      .catch(error => {
          console.error("Błąd podczas zmiany hasła:", error);
      });
    };

    return (
      <div>
          <h2>Zmiana Hasła</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <label>Stare Hasło:</label>
                  <input type="password" name="oldPassword" {...register('oldPassword', { required: "To pole jest wymagane" })} />
                  {errors.oldPassword && <span>{errors.oldPassword.message}</span>}
              </div>
              <div>
                  <label>Nowe Hasło:</label>
                  <input type="password" name="newPassword1" {...register('newPassword1', { required: "To pole jest wymagane" })} />
                  {errors.newPassword1 && <span>{errors.newPassword1.message}</span>}
              </div>
              <div>
                  <label>Powtórz Nowe Hasło:</label>
                  <input type="password" name="newPassword2" {...register('newPassword2', { required: "To pole jest wymagane" })} />
                  {errors.newPassword2 && <span>{errors.newPassword2.message}</span>}
              </div>
              <button type="submit">Zmień Hasło</button>
          </form>
      </div>
    );
}

export default ChangePassword;
