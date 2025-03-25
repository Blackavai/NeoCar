import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/test_drive.css';
import { Link } from 'react-router-dom';

function Test_drive() {
    const [userData, setUserData] = useState(null);
    const [salons, setSalons] = useState([]);
    const [avto, setAvto] = useState([]);
    const [inputs, setInputs] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedModel, setSelectedModel] = useState(null);


    

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    useEffect(() => {
        getSalons();
    }, []);

    function getSalons() {
        axios
            .get('http://localhost/neocar-server.ua/avtosalon/')
            .then(function(response) {
                setSalons(response.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    useEffect(() => {
        getAvto();
    }, []);

    function getAvto() {
        axios
            .get('http://localhost/neocar-server.ua/model/')
            .then(function(response) {
                setAvto(response.data);
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };


    const handleChangePhoto = (event) => {
        const { name, value } = event.target;
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));

        if (name === 'avto_test') {
            // console.log(avto);
            const selectedCar = avto.find((car) => car.id === value);
            console.log(avto);
            
            setSelectedModel(selectedCar); // Обновление выбранной модели
            // console.log(selectedModel)
        }
    };

    const getTest = (event) => {
        event.preventDefault();

        if (!inputs.name_test || !inputs.fam_test || !inputs.email_test || !inputs.tel_test || !inputs.avtosalon_test) {
            alert('Пожалуйста, заполните все поля');
            return;
        }

        axios
            .post('http://neocar-server.ua/test_drive/', JSON.stringify(inputs))
            .then(function(response) {
                console.log(response.data.message);
                alert('Данные успешно отправлены');
                setIsSubmitted(true);
            })
            .catch(function(error) {
                console.error(error);
            });
    };

    return (
        <form onSubmit={getTest}>
            <div className="block">
                <div className="block_test_drive">
                    
                    {/* <div className="model_test">
                        {selectedModel ? (
                            
                            <img src={`/assets/avto/${selectedModel.photo}.png`} />
                        ) : (
                            <p>Выберите модель автомобиля</p>
                        )}
                    </div> */}
                        
                    <div className="information">
                        
                        <div className="input_flex">
                        
                            <select onChange={handleChangePhoto} name="avto_test">
                            {avto.map((car, key) => (
                                    <option key={key} value={car.id}>
                                        <p>{car.Model}</p>
                                    </option>
                            ))}
                            </select>
                            
                        </div>
                        
                        <div className="input_flex">
                            <input type="text" name="name_test" onChange={handleChange} placeholder="Введите имя" value={inputs.name_test || (userData ?  userData.Name : '')} />
                            <input type="text" name="fam_test" onChange={handleChange} placeholder="Введите фамилию" value={inputs.fam_test || (userData ? userData.Fam : '')} />
                        </div>
                        <div className="input_flex">
                            <input type="text"  name="email_test" onChange={handleChange} placeholder="Введите e-mail" value={inputs.email_test || (userData ? userData.email : '')} />
                            <input type="text" name="tel_test"  onChange={handleChange} placeholder="Введите номер телефона" value={inputs.tel_test || (userData ? userData.tel : '')} />
                        </div>
                        <div className="input_flex">
                            <select onChange={handleChange} name="avtosalon_test">
                                {salons.map((salon, key) => (
                                    <option key={key} value={salon.id}>
                                        <p>{salon.Name}</p>
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="btn_test">
                            <input type="submit" className="button_zapis" value="Записаться на тест-драйв" disabled={isSubmitted} />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Test_drive;
