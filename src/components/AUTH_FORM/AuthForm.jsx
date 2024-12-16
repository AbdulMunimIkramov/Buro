import './AuthForm.scss'

import React, { useState } from 'react';

function AuthForm() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      console.log('Registering:', formData);
    } else {
      console.log('Logging in:', formData);
    }
  };

  return (
    <div className={`auth_container`}>
      <div className="auth-form">
        <h2>{isRegister ? 'Регистрация' : 'Авторизация'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Имя пользователя:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          {isRegister && (
            <label>
              Электронная почта:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          )}
          <label>
            Пароль:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">{isRegister ? 'Зарегистрироваться' : 'Войти'}</button>
        </form>
        <button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Регистрация'}
        </button>
      </div>
    </div>

  );
}

export default AuthForm;
