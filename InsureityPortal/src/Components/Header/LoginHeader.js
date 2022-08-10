import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col" id="headtag">
                    <h3 className="text-white">Insureity Portal</h3>
                </div>
            </div>
        </div>
    );
};


export default Header;