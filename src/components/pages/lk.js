import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/lk.css';
import { Link } from 'react-router-dom';

function Lk() {
    const [userData, setUserData] = useState(null);
    const [carData, setCarData] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [testData, setTestData] = useState([]);
  
    useEffect(() => {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData));
      }
    }, []);
  
    const [activeTab, setActiveTab] = useState('tab1');
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    const fetchCarData = () => {
      if (userData && userData.id) {
        const id_user = userData.id;
        axios
          .post('http://neocar-server.ua/lk/', {
            userId: id_user,
          })
          .then((response) => {
            setCarData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
  
    const fetchOrderData = () => {
        if (userData && userData.id) {
          const id_user = userData.id;
          axios
            .post('http://neocar-server.ua/lk/order/', {
              userId: id_user,
            })
            .then((response) => {
              console.log(response.data); // Вывод данных в консоль для проверки формата
              if (Array.isArray(response.data)) {
                setOrderData(response.data);
              } else {
                console.log('Response data is not an array');
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };

      const fetchTestData = () => {
        if (userData && userData.id) {
          const id_user = userData.id;
          axios
            .post('http://neocar-server.ua/lk/test_drive/', {
              userId: id_user,
            })
            .then((response) => {
              console.log(response.data); // Вывод данных в консоль для проверки формата
              if (Array.isArray(response.data)) {
                setTestData(response.data);
              } else {
                console.log('Response data is not an array');
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
      
  
    useEffect(() => {
      if (userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
      }
      fetchCarData();
    }, [userData]);
  
    useEffect(() => {
      if (activeTab === 'tab2') {
        fetchOrderData();
      }
    }, [activeTab]);

    useEffect(() => {
        if (activeTab === 'tab3') {
          fetchTestData();
        }
      }, [activeTab]);

    return (

    <div className="main_block">
        <div className="ava_name">
        {userData &&<img src={`/assets/avatar/${userData.avatarka}`} className="ava" />}
            {userData && <p>{userData.Name} {userData.Fam}</p>}
        </div>
        <div className="lk_main">
            <div className="lk_navigation">
                <div className="sidebar">
                    <button className={activeTab === 'tab1' ? 'active_lk' : 'no-active_lk'} onClick={() => handleTabClick('tab1')}>
                        <img src="/assets/mycar.png" width={50} />Мои автомобили
                    </button>
                    <button className={activeTab === 'tab2' ? 'active_lk' : 'no-active_lk'} onClick={() => handleTabClick('tab2')}>
                        <img src="/assets/orders.png" width={50} />Заказы
                    </button>
                    <button className={activeTab === 'tab3' ? 'active_lk' : 'no-active_lk'} onClick={() => handleTabClick('tab3')}>
                        <img src="/assets/test-drive.png" width={50} />Записи на тест-драйв
                    </button>
                    <button className={activeTab === 'tab4' ? 'active_lk' : 'no-active_lk'} onClick={() => handleTabClick('tab4')}>
                        <img src="/assets/avtoservice.png" width={50} />Записи в автосервис
                    </button>
                    <button className={activeTab === 'tab5' ? 'active_lk' : 'no-active_lk'} onClick={() => handleTabClick('tab5')}>
                        <img src="/assets/account_info.png" width={50} />Об аккаунте
                    </button>
                    
                    {userData && userData.Name === "admin" ?
                    <button className={activeTab === 'tab6' ? 'active_lk' : 'no-active_lk'} onClick={() => handleTabClick('tab6')}>
                        <img src="/assets/admin-menu.png" width={50} />Админ-меню
                    </button>
                    : "" }
                </div>
            </div>
            <div className="lk_content">
                <div className="tab-content">
                    {activeTab === 'tab1' && (
                    <div>
                        <div className="neon-line"></div>
                        
                        {carData.filter((car) => userData && car.id_user === userData.id)
                        .map((car, index) => (
                            <div key={index} className="lk_car">
                                <img src={`/assets/avto/${car.photo}`} />
                                <p><h3>{car.Model}</h3><br/>
                                Мощность: {car.Power}<br/>
                                Радиус колеса: {car.Wheel_radius}<br/>
                                Цвет: {car.color_avto}<br/>
                                Объём двигателя: {car.obiem_dvig}<br/>
                                Коробка передачь: {car.korobka}<br/>
                                Комплектация: {car.komplektaciya}<br/>
                                Дата покупки: {car.data}<br/>
                                Автосалон: {car.Name}<br/>
                                Цена: {car.price} руб.</p>
                            </div>
                        ))}
                        <div className="neon-line"></div>
                    </div>
                    )}
                    {activeTab === 'tab2' && (
                    <div>
                        {orderData.map((order, index) => (
                        <div key={index} className='img_order_lk'>
                            <div className="neon-line_order">
                            </div>
                            <img src={`/assets/avtotovars/${order.picture_avtotovara}`} className=' ' />
                            <h3>{order.name_avtotovara}</h3>
                            <p>Цена - {order.price}</p>
                            <div className="neon-line_order">
                            </div>
                        </div>
                        ))}
                    </div>
                    )}
                    {activeTab === 'tab3' && (
                    <div>
                        {testData.map((test, index) => (
                        <div key={index} className='lk_car'>
                            <img src={`/assets/avto/${test.photo}`} className=' ' />
                            <p>Контактные данные: <br />Телефон - {test.tel_test}<br /> Эл. почта - {test.email_test}<br />
                            Автомобиль: {test.Model}<br />
                            Дата записи: {test.data_test}<br />
                            Автосалон: {test.Name}</p>
                        </div>
                        ))}
                    </div>
                    )}
                    {activeTab === 'tab4' && (
                    <div>
                        <h2>У вас пока нет записей в автосервис</h2>
                    </div>
                    )}
                    {activeTab === 'tab5' && (
                    <div>
                        <div className='inf_acc'>
                            <h2>Ваш e-mail:</h2>
                            <h1>{userData.email}</h1>
                        </div>
                        <div className='inf_acc'>
                            <h2>Ваш номер телефона:</h2>
                            <h1>{userData.tel}</h1>
                        </div>
                        <button className='edit_btn'>Редактировать данные</button>
                    </div>
                    )}
                    {activeTab === 'tab6' && (
                    <div>
                        <div className="neon-line_green"></div>
                        <h1>Новый диллер</h1>
                        <div className='admin_input'>
                            <input type="text" placeholder='Введите наименование автосалона'></input>
                            <input type="text" placeholder='Введите адрес'></input>
                            <input type="text" placeholder='Введите часы работы'></input>
                            <input type="text" placeholder='Введите контактный номер телефона'></input>
                        </div>
                            <button className='edit_btn'>Добавить автосалон</button>
                            <input type="file"></input>
                        <div className="neon-line_green"></div>
                        <div className="neon-line"></div>
                        <h1>Новый автомобиль</h1>
                        <div className='admin_input'>
                            <input type="text" placeholder='Введите название модели'></input>
                            <input type="text" placeholder='Выберите тип автомобиля'></input>
                            <input type="text" placeholder='Введите ширину автомобиля'></input>
                            <input type="text" placeholder='Введите длину автомобиля'></input>
                            <input type="text" placeholder='Введите высоту автомобиля'></input>
                            <input type="text" placeholder='Введите мощность'></input>
                            <input type="text" placeholder='Введите радиус колёс'></input>
                            <input type="text" placeholder='Введите цену'></input>
                            
                        </div>
                        <button className='edit_btn'>Добавить автомобиль</button>
                        <input type="file"></input>
                        <div className="neon-line"></div>
                        <div className="neon-line_order"></div>
                        <h1>Новая запчасть / аксессуар</h1>
                        <div className='admin_input'>
                            <input type="text" placeholder='Введите название запчасти/аксессуара'></input>
                            <input type="text" placeholder='Выберите тип'></input>
                            <input type="text" placeholder='Введите описание'></input>
                            <input type="text" placeholder='Введите цену'></input>
                        </div>
                        <button className='edit_btn'>Добавить товар</button>
                        <input type="file"></input>
                        <div className="neon-line_order"></div>

                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>

    );
}

export default Lk;