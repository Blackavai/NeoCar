import '../styles/model.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Model() {

    const [models, setModels] = useState([]);
    useEffect(() => {
        console.log(getModels());
    }, []);

    function getModels() {
        axios.get('http://neocar-server.ua/model/').then(function(response){
            console.log(response.data);
            setModels(response.data);
        })
    }
    
    return (
    <div className="container_model">
        <h1>Все модели</h1>
        <h1>Седаны</h1>
        <div className="all_cards">
            
            {models.map((model, key) => {
                if(model.tip === "1") {
                    return (
                <div className="auto_card bord" key={key}>
                    <img src={`/assets/avto/sedan/${model.photo}`} />
                    <h1>{model.Model}</h1>
                    <p>От {model.Price}</p>
                    <Link to={`/view/${model.Model}`} state={{ carData: model }}>Подробнее</Link>
                    <Link to={`/configurate/${model.id}`} state={{ configCar: model }}>В конфигуратор</Link>
                </div>);
                };
            })}
            {/* <div className="auto_card bord">
                <img src="/assets/sedan_main2.jpg" />
                <a href="#">Подробнее</a>
                <a href="#">В конфигуратор</a>
            </div>
            <div className="auto_card bord">
                <img src="/assets/sedan_main2.jpg" />
                <a href="#">Подробнее</a>
                <a href="#">В конфигуратор</a>
            </div>
            <div className="auto_card bord">
                <img src="/assets/sedan_main2.jpg" />
                <a href="#">Подробнее</a>
                <a href="#">В конфигуратор</a>
            </div>
            <div className="auto_card bord">
                <img src="/assets/sedan_main2.jpg" />
                <a href="#">Подробнее</a>
                <a href="#">В конфигуратор</a>
            </div><div className="auto_card bord">
                <img src="/assets/sedan_main2.jpg" />
                <a href="#">Подробнее</a>
                <a href="#">В конфигуратор</a>
            </div> */}
        </div>

        <h1>Кроссоверы</h1>
        <div className="all_cards">
            {models.map((model, key) => {
                if(model.tip === "2") {
                    return (
                <div className="auto_card bord" key={key}>
                    
                    <img src={`/assets/avto/crossover/${model.photo}`} />
                    <h1>{model.Model}</h1>
                    <p>От {model.Price}</p>
                    <Link to={`/view/${model.Model}`} state={{ carData: model }}>Подробнее</Link>
                    <Link to={`/configurate/${model.id}`}>В конфигуратор</Link>
                </div>);
                };
            })}
        </div>

        <h1>Внедорожники</h1>
        <div className="all_cards">
            {models.map((model, key) => {
                if(model.tip === "3") {
                    return (
                <div className="auto_card bord" key={key}>
                    
                    <img src={`/assets/avto/suv/${model.photo}`} />
                    <h1>{model.Model}</h1>
                    <p>От {model.Price}</p>
                    <Link to={`/view/${model.Model}`} state={{ carData: model }}>Подробнее</Link>
                    <Link to={`/configurate/${model.id}`}>В конфигуратор</Link>
                </div>);
                };
            })}
        </div>
    </div>  

    );
}

export default Model;