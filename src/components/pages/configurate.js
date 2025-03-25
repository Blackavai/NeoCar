import React, { Suspense, useState } from 'react';
import '../styles/configurate.css';
import axios from 'axios';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PerspectiveCamera, PresentationControls, OrbitControls } from "@react-three/drei";
import { Link, useLocation } from 'react-router-dom';



function ModelLoader() {
  const { scene } = useGLTF("/models/1.gltf");
  return <primitive object={scene} />;
}

function Model() {
  return (
    <Suspense fallback={null}>
      <ModelLoader />
    </Suspense>
  );
}

function Configurator() {
  const location = useLocation();
  const configCar = location.state?.configCar || null;

  const [color, setColor] = useState('');
  const [engine, setEngine] = useState('');
  const [transmission, setTransmission] = useState('');
  const [equipment, setEquipment] = useState('');

  const [mode, setMode] = useState('image'); // Состояние режима (3d или картинка)

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setColor('');
    setEngine('');
    setTransmission('');
    setEquipment('');
  };

  function handleFormSubmit() {
    const formData = {
      color,
      engine,
      transmission,
      equipment
    };
    axios.post('http://neocar-server.ua/configure/', formData)
      .then(response => {
        // Обработайте успешный ответ от сервера
        console.log('Конфигурация сохранена в базе данных.');
      })
      .catch(error => {
        // Обработайте ошибку при сохранении в базе данных
        console.error('Произошла ошибка при сохранении конфигурации.', error);
      });
  }

  return (
    <div className="main_block_configurate">
      <h1 align="center">{configCar.Model}</h1>
      <div className="car_model">
        <div className="car">
          <div className="container">
            {mode === '3d' ? (
              <Canvas dpr={[1, 1]} shadows camera={{ fov: 45, position: [0, 1, 3] }} style={{}}>
                <color attach="background" args={["#ffffff"]} />
                <ambientLight intensity={1} castShadow={false} />
                <PresentationControls speed={3} global polar={[0, 0]} castShadow={false}>
                  <Stage environment={null}>
                    <Model scale={0.01} receiveShadow={false} castShadow={false} />
                  </Stage>
                </PresentationControls>
              </Canvas>
            ) : (
              configCar && configCar.Model && <img src={`/assets/avto/${configCar.Model}/${configCar.id}_red.png`}  alt="Car" />
              
            )}
          </div>
          <div className="mode_buttons">
          <button onClick={() => handleModeChange('3d')} className={mode === '3d' ? 'active' : 'btn_model'}>
            3D
          </button>
          <button onClick={() => handleModeChange('image')} className={mode === 'image' ? 'active' : 'btn_model'}>
            Изображение
          </button>
        </div>
        </div>
        <div className="zakaz_btn">
          <input type="submit" value="Заказать" className='edit_btn_conf' onClick={handleFormSubmit} />
        </div>
      </div>
      <div className="characteristic">
      <div className="first_row">
          <div className="color">
            <h2>Цвет</h2>
            <div className="select_color">
              <div className='color_btn'><input type="radio" name="color" id="color1" className="" checked={color === 'color1'} onChange={() => setColor('color1')} /> <p>Белый</p></div>
              <div className='color_btn'><input type="radio" name="color" id="color1" className="" checked={color === 'color1'}      onChange={() => setColor('color1')} /> <p>Синий</p></div>
              <div className='color_btn'><input type="radio" name="color" id="color1" className="" checked={color === 'color1'}      onChange={() => setColor('color1')} /> <p>Красный</p></div>
              <div className='color_btn'><input type="radio" name="color" id="color1" className="" checked={color === 'color1'}      onChange={() => setColor('color1')} /> <p>Зелёный</p></div>
              <div className='color_btn'><input type="radio" name="color" id="color1" className="" checked={color === 'color1'}      onChange={() => setColor('color1')} /> <p>Жёлтый</p></div>
            </div>
          </div>
          <div className="select_dvigatel">
            <h2>Объём двигателя</h2>
            <div className="select_row">
              <input type="radio" name="dvigatel" id="dvigatel1" className="" checked={engine === 'dvigatel1'}
      onChange={() => setEngine('dvigatel1')} />
              <p htmlFor="dvigatel1">2.0 л. <br /> 150 л.с., бензин</p>
            </div>
            <div className="select_row">
              <input type="radio" name="dvigatel" id="dvigatel2" className="" checked={engine === 'dvigatel1'}
      onChange={() => setEngine('dvigatel1')} />
              <p htmlFor="dvigatel2">2.5 л. <br /> 200 л.с., дизель</p>
            </div>
          </div>
          <div className="select_kpp">
            <h2>Коробка передач</h2>
            <div className="select_row">
              <input type="radio" name="kpp" id="kpp1" className="" checked={transmission === 'kpp1'}
      onChange={() => setTransmission('kpp1')}/>
              <p htmlFor="kpp1">Автомат <br /> 4AT</p>
            </div>
            <div className="select_row">
              <input type="radio" name="kpp" id="kpp2" className="" checked={transmission === 'kpp1'}
      onChange={() => setTransmission('kpp1')}/>
              <p htmlFor="kpp2">Механика <br /> 6MT</p>
            </div>
          </div>
        </div>
      </div>
      <div className="second_row">
      <div className="select_equipment">
          <h2>Комплектация</h2>
          <div className="select_row">
            <input type="radio" name="equipment" id="equipment1" className="" checked={equipment === 'equipment1'}
      onChange={() => setEquipment('equipment1')} />
            <p htmlFor="equipment1">Обычная <br /> Без дополнителнений</p>
          </div>
          <div className="select_row">
            <input type="radio" name="equipment" id="equipment2" className="" checked={equipment === 'equipment1'}
      onChange={() => setEquipment('equipment1')} />
            <p htmlFor="equipment2">Зимний <br /> В комплекте шины 4шт</p>
          </div>
          <div className="select_row">
            <input type="radio" name="equipment" id="equipment2" className="" checked={equipment === 'equipment1'}
      onChange={() => setEquipment('equipment1')} />
            <p htmlFor="equipment2">Спорт <br /> Спортивные шины и тормоза</p>
          </div>
        </div>
        <div className="select_accessory">
          <h2>Автосалон</h2>
          <div className="select_access">
            <div className="block_access"></div>
            <div className="block_access"></div>
            <div className="block_access"></div>
            <div className="block_access"></div>
            <div className="block_access"></div>
            <div className="block_access"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Configurator;

