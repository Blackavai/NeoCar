import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/accessory.css';
import { Link } from 'react-router-dom';

function Accessory() {

    const [tovars, setTovars] = useState([]);
    useEffect(() => {
        console.log(getTovars());
    }, []);

    function getTovars() {
        axios.get('http://neocar-server.ua/tovari/').then(function(response){
            console.log(response.data);
            setTovars(response.data);
        })
    }
    
    const handleBuyClick = (tovarId) => {
        const storedUserData = localStorage.getItem('userData');
        const userId = storedUserData ? JSON.parse(storedUserData).id : null;
        console.log("userId:", userId);
        console.log("tovarId:", tovarId);
        // Выполните запрос с передачей id пользователя
        axios.post('http://neocar-server.ua/korzina/', { userId, tovarId })
            .then(function(response) {

                // Обработка успешного ответа
                console.log(response.data);
            })
            .catch(function(error) {
                // Обработка ошибки
                console.error(error);
            });
    };

    return (
        <div className='container_tovari'>
            <h1>Аксессуары / запчасти</h1>
            <div className="all_cards">
                {tovars &&tovars.map((tovar, key) => {
                    return (
                        <div className='block_tovara' key={key}>
                            <img src={`/assets/avtotovars/${tovar.picture_avtotovara}`} />
                            <h1>{tovar.name_avtotovara}</h1>
                            <h3>{tovar.name_tip_tovara}</h3>
                            <p>{tovar.opisanie_avtotovara}</p>
                            <h2>{tovar.price_avtotovara} руб.</h2>
                            <button type='submit' className='btn_korzina' data-tovar-id={tovar.id} onClick={(e) => handleBuyClick(e.currentTarget.dataset.tovarId)}>Купить</button>
                        </div>
                    );
                })}
                
                
            </div>
        </div>
    );
}

export default Accessory;