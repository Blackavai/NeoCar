import React from 'react';
import '../styles/reg_log.css';
import { useState } from 'react';
import axios from 'axios';

function Reg({ switchModal }) {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Сбрасываем ошибку при изменении поля
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Проверка на пустые поля
    const validationErrors = {};
    for (const key in inputs) {
      if (!inputs[key]) {
        validationErrors[key] = 'Это поле обязательно для заполнения';
      }
    }

    setErrors(validationErrors); // Обновляем состояние ошибок

    if (Object.keys(validationErrors).length > 0) {
      return; // Прерываем обработку формы, если есть ошибки
    }

    // Отправка формы
    axios
      .post('http://neocar-server.ua/reg/', inputs)
      .then(function (response) {
        console.log(response.data);
        setShowSuccessMessage(true);
        // navigate('/');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="block_reg_log block_reg">
      <div className="left_block">
        <img src="/assets/logo2.png" width="350" />
      </div>

      <div className="right_block">
        <h1>Регистрация</h1>
        <div className="flex">
          <div className="line_reg"></div>
          <div className="line_reg"></div>
        </div>
        <form onSubmit={handleSubmit}>
          <p>Имя:</p>
          <input
            type="text"
            name="name_reg"
            placeholder="Введите имя"
            className="input_reg"
            onChange={handleChange}
          />
          {errors.name_reg && <p className="error">{errors.name_reg}</p>} {/* Вывод ошибки */}
          <p>Фамилия:</p>
          <input
            type="text"
            name="fam_reg"
            placeholder="Введите фамилию"
            className="input_reg"
            onChange={handleChange}
          />
          {errors.fam_reg && <p className="error">{errors.fam_reg}</p>} {/* Вывод ошибки */}
          <p>Номер телефона:</p>
          <input
            type="tel"
            name="number_reg"
            placeholder="+7 (ХХХ) ХХХ ХХ ХХ"
            className="input_reg"
            onChange={handleChange}
            maxLength={11}
          />
          {errors.number_reg && <p className="error">{errors.number_reg}</p>} {/* Вывод ошибки */}
          <p>E-mail:</p>
          <input
            type="text"
            name="email_reg"
            placeholder="Введите логин"
            className="input_reg"
            onChange={handleChange}
          />
          {errors.email_reg && <p className="error">{errors.email_reg}</p>} {/* Вывод ошибки */}
          <p>Пароль:</p>
          <input
            type="password"
            name="pass_reg"
            placeholder="Введите не менее 8 символов"
            className="input_reg"
            onChange={handleChange}
          />
          {errors.pass_reg && <p className="error">{errors.pass_reg}</p>} {/* Вывод ошибки */}
          <p>Подтверждение пароля:</p>
          <input
            type="password"
            name="rep_pass_reg"
            placeholder="Подтвердите пароль"
            className="input_reg"
            onChange={handleChange}
          />
          {errors.rep_pass_reg && <p className="error">{errors.rep_pass_reg}</p>} {/* Вывод ошибки */}

          <button type="submit" name="btn_reg" className="btn_reg">
            Зарегистрироваться
          </button>
        </form>
        {showSuccessMessage && (
          <div className={`success-message ${showSuccessMessage ? 'show' : ''}`}>
            Регистрация прошла успешно!
          </div>
        )}
        <p></p>
        <p className="new_login">
          Уже есть аккаунт? <a onClick={switchModal} href="#">Войдите</a>
        </p>
      </div>
    </div>
  );
}

export default Reg;