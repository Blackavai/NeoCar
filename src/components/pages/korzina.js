import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/korzina.css';
import { Link } from 'react-router-dom';

function Korzina() {
  const [inputs, setInputs] = useState({});
  const [userData, setUserData] = useState(null);
  const [tovKorz, setTovKorz] = useState([]);
  const [salons, setSalons] = useState([]);
  const [selectedTovarIds, setSelectedTovarIds] = useState([]); // Массив для хранения выбранных идентификаторов товаров
  const [selectedAvtosalonId, setSelectedAvtosalonId] = useState(''); // Идентификатор выбранного автосалона

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  useEffect(() => {
    getSalons();
  }, []);

  function getSalons() {
    axios
      .get('http://neocar-server.ua/avtosalon/')
      .then(function (response) {
        setSalons(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    getTovKorz();
  }, []);

  function getTovKorz() {
    axios
      .get('http://neocar-server.ua/korzina/')
      .then(function (response) {
        setTovKorz(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleTovarSelection = (tovarId) => {
    if (selectedTovarIds.includes(tovarId)) {
      // Если идентификатор товара уже выбран, удаляем его из массива
      setSelectedTovarIds((prevIds) => prevIds.filter((id) => id !== tovarId));
    } else {
      // Если идентификатор товара еще не выбран, добавляем его в массив
      setSelectedTovarIds((prevIds) => [...prevIds, tovarId]);
    }
  };

  const handleAvtosalonSelection = (event) => {
    setSelectedAvtosalonId(event.target.value);
  };

  const handleOrderSubmit = () => {
    // Создаем объект с данными для отправки на сервер
    const postData = {
      selectedTovarIds: selectedTovarIds,
      selectedAvtosalonId: selectedAvtosalonId,
    };
  
    // Отправляем запрос POST на сервер
    axios
      .post('http://neocar-server.ua/order_korzina', postData)
      .then(function (response) {
        console.log(response.data);
        // Дополнительные действия после успешного заказа
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div class="container_korz">
      <h1>Корзина</h1>
      <div className="all_korz">
        <div className="korz_left">
          <div className="korz_tovar">
            {tovKorz.map((tovKor, key) => (
              <div className="tov_korz" key={key}>
                <p className="img_text">
                  <img src={`/assets/avtotovars/${tovKor.picture_avtotovara}`} width="300" />
                  {tovKor.name_avtotovara}
                </p>
                <p className="price_del">
                  {tovKor.price_avtotovara} руб.
                  <button
                    type="button"
                    className="del_btn_korz"
                    onClick={() => handleTovarSelection(tovKor.id)}
                  >
                    Удалить
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="korz_right">
          <select onChange={handleAvtosalonSelection} name="avtosalon_test" className="avtosalon_korz">
            {salons.map((salon, key) => (
              <option key={key} value={salon.id}>
                <p>{salon.Name}</p>
              </option>
            ))}
          </select>
          <input type="submit" className="button_zapis" value="Заказать" onClick={handleOrderSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Korzina;