import React from 'react';
import '../styles/reg_log.css';
import { useState } from 'react';
import axios from 'axios';

function Log({ switchModal, onUserData }) {
	const [inputs, setInputs] = useState({});
	const [userData, setUserData] = useState('');

	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
	}

	const getUsers = (event) => {
		event.preventDefault();
		axios.post('http://neocar-server.ua/log/', inputs).then(function(loginResponse){
			console.log(loginResponse.data); // Проверка данных, полученных от сервера
			const userData = loginResponse.data[0];
			// console.log(userEmail); // Проверка значения email
			setUserData(userData);
			window.localStorage.setItem('userData', JSON.stringify(userData));
			onUserData(userData);
		});
	}

    return (	
	<div className="block_reg_log block_log">
		<div className="left_block">
			<img src="/assets/logo2.png" width="350" />
		</div>

		<div className="right_block">
			<h1>Вход</h1>
			<div className="flex">
				<div className="line_reg"></div>
				<div className="line_reg"></div>
			</div>
			<form onSubmit={getUsers}>
				<p>E-mail:</p>
				<input type="text" name="email_log" placeholder="email@gmail.com" className="input_reg" onChange={handleChange} />
				<p>Пароль:</p>
				<input type="password" name="pass_log" placeholder="Введите не менее 8 символов" className="input_reg" onChange={handleChange} />
				
				<button type="submit" name="btn_log" className="btn_reg">Войти</button>
			</form>
			<p className="new_login" >Ещё нет аккаунта? <a onClick={switchModal} href="#">Зарегистрируйтесь</a></p>
			
		</div>
	</div>		
	);
}

export default Log;