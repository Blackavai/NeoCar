import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/view.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function View() {

    const location = useLocation();
    const carData = location.state?.carData || null;

    return (
        <div >
            <div className='main_picture'>
                <img src={`/assets/avto/${carData.Model}.png`} />
                <div className='inf_pic'>
                    <p>От {carData.Price}</p>
                    <Link to={`/configurate/${carData.id}`} className='btn_konfig'>В конфигуратор</Link>
                </div>
            </div>
            
            <h1 align="center">Характеристики автомобиля</h1>
            
            
           
                
                <div className='haracteristics'>
                    <div className='inf_har'><img src={`/assets/har_tip.png`} /><p>{carData.Model}</p></div>
                    <div className='inf_har'><img src={`/assets/har_power.png`} /><p>{carData.Power} </p></div>
                    <div className='inf_har'><img src={`/assets/har_wheel.png`} /><p>{carData.Wheel_radius}</p></div>
                    
                    <div className='inf_har'><img src={`/assets/har_width.png`} /><p>{carData.Width}</p> </div>
                    <div className='inf_har'><img src={`/assets/har_lenght.png`} /><p>{carData.Lenght}</p> </div>
                    <div className='inf_har'><img src={`/assets/har_height.png`} /><p>{carData.Height}</p> </div>
                   
                        
                </div>
            
            <div className='picture_car1'>
                <img src={`/assets/avto/${carData.Model}1.png`} />

            </div>
            <div className='picture_car2'>
                <img src={`/assets/avto/${carData.Model}2.png`} />

            </div>
        </div>
    );
}

export default View;