import React, { useEffect, useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import '../styles/head_foot.css';
// import '../styles/modal.css';
import Modal from '../assets/modal.js';
// import Reg from './reg';
// import Log from './log';


function Header() {
    const [modalActive, setModalActive] = useState(false);
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate(); // useNavigate hook для перенаправления

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        if (storedUserData) {
            setUserData(JSON.parse(storedUserData));
        }
    }, []);

    const handleUserData = (data) => {
        setUserData(data);
        localStorage.setItem('userData', JSON.stringify(data));
        setModalActive(false);
    };

    const handleLogout = () => {
        setUserData(null);
        localStorage.removeItem('userData');
        navigate('/'); // Перенаправление на главную страницу
    };

    // const handleLogout = () => {
    //     setUserData(null);
    //     localStorage.removeItem('userData');
    // };

    return (
        <div className="block_head">
            <div className="overlay"></div>
                <div className="head_navigation">
                    <p className="bord_wow"><Link to="/model">Модели</Link></p>
                    <p className="bord_wow"><Link to="/accessory">Аксессуары</Link></p>
                    <Link to="/"><img src="/assets/logo.png" className='image' alt="Логотип"/></Link>
                    <p className="bord_wow"><Link to="/avtosalon">Дилеры</Link></p>
                    <p className="bord_wow"><Link to="/test-drive">Тест-драйв</Link></p>  
                                 
                </div>
                <div className='head_profile'>
                    {
                    userData ? 
                    <> 
                        <Link to={`/lk/${userData.id}`} className="">{userData.Name}</Link>  
                        <button className='btn_logout'><Link to={`/korzina/${userData.id}`}><img src="/assets/korzina.png" /></Link></button>
                        <button onClick={handleLogout} className='btn_logout'><img src="/assets/logout.png" /></button>
                        
                    </> 
                    : 
                    <img src="/assets/lk.png" className="" width="50" onClick={() => setModalActive(true)} />
                    }
                    
                </div>
                
                 
                
            <Modal active={modalActive} setActive={setModalActive} onUserData={handleUserData}/>
            {/* <div className="modal" id="modal">
                <Reg />  
            </div>
            <div className="modal" id="modal2">
                <Log />
            </div> */}
        </div>
    );
}

export default Header;