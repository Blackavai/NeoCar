import React from 'react';
import '../styles/head_foot.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="block_footer">
            <div className="footer_content">
                <div className="logo_footer">
                    <img src="/assets/logo.png" width="400" />
                    <h2>© 2023 "NeoCar"</h2>
                </div>
                <div className="social_footer">
                    <div className=""><h1>Наши соц. сети</h1></div>
                    <div className="social">
                        <img src="/assets/insta.png" />
                        <img src="/assets/twitter.png" />
                        <img src="/assets/vk.png" />
                        <img src="/assets/yt.png" />
                    </div>
                </div>
                <div className="support_footer" >
                    <p>Свяжитесь<br/> с нами</p>
                    <p>Телефон:<br/>+7(999)999-99-99</p>
                    <p>Почта:<br/>neocar.support@gmail.com</p>
                </div>
            </div>
        </div>

    );
}

export default Footer;