import React from 'react';
import '../styles/avtosalon.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Avtosalon() {

   const [salons, setSalons] = useState([]);
    useEffect(() => {
        console.log(getSalons());
    }, []);

    function getSalons() {
        axios.get('http://neocar-server.ua/avtosalon/').then(function(response){
            console.log(response.data);
            setSalons(response.data);
        })
    }

    return (
      <div className="block_avtosalon">
         <h1 align="center">Диллеры</h1>
         {salons.map((salon, key) => {
            return (
               <div className="salon">
                     <div className="image_salon">
                        <img src={`/assets/avtosalon/${salon.photo_salona}`} />
                     </div>
                     <div className="text_salon">
                        <h1 align="center">{salon.Name}</h1>
                        <p>Адрес: {salon.Address}</p>
                        <p>Режим работы: {salon.work}</p>
                        <p>Номер телефона: 84292361201</p>
                        <div className="map_salon">
                           <img src={`/assets/avtosalon/map_${salon.id}.png`} />
                        </div>
                     </div>
                     
               </div>
            );
         })}
    </div>
   );
}

export default Avtosalon;


    
