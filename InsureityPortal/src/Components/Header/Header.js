import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';



const Header = () => {


    const navigate = useNavigate();


    // let user = JSON.parse(localStorage.getItem("user-info"))
    function logOut(){
        localStorage.clear();
        navigate("/");
    }

    function NavToHome(){
        navigate("/Home")
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col" id="headtag">
                    <h3 className="text-white">Insureity Portal</h3>
                </div>
                <div className="col listItems">
                    <ul className="nav justify-content-end">
                        <li><button className="lead btn btn-sm btn-warning button1" onClick={()=>NavToHome()}>Home</button></li>
                        <li><button className="lead btn btn-sm btn-secondary "  onClick={()=>logOut()}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;