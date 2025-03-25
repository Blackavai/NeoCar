import React from 'react';
import '../styles/index.css';
import Slider from './slider';
import { Link } from 'react-router-dom';

function Main() {
    return (
      <div>
          <div className="main bord1">
              <img src="/assets/maket2.png" width="100%" />
          </div>
          <div className="types_car bord2">
            {/* <Slider /> */}
          </div>
          <div className="detals_access bord3">
            <Link to="/accessory" className="detals">
                <p><b>Запчасти</b></p>
            </Link>    
            <Link to="/accessory" className="access">  
                <p><b>Аксессуары</b></p>
            </Link>   
          </div>
          <div className="brands bord4">
              <h2>О бренде NeoCar</h2>
              <div className="brands_content">
              <div className="brands_text">
                  <p>NeoCar - автокомпания которая за год своего существования смогла покорить множество сердец благодаря своим качественным и стильным автомобилям. Каждая новая модель несёт в себе различные тематики, от тёмной строгой грусти, до радужной и полигональной радости. И компания не остановится на этом. Она имеет цель распространиться на все страны мира.</p>
                  <br/>
                  <p>Основанная в 2022 году одним человеком, его маленькая мечта воплотившаяся в реальность. И теперь она является серъёзным конкурентам  таким как Kia, Huynday, Mercedes, BMW. Сейчас она насчитывает 1 сотрудника, в дальнейшем расширять своих работников не планирует, но также будет выпускать всё новые и новые автомобили настоящего будущего!</p>
              </div>
              <div className="brands_img">
                  <img src="/assets/brands_img.png" width="400"/>
              </div>
              </div>
          </div>         
      </div>
    );
}

export default Main;