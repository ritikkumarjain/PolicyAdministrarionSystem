import Header from '../Header/Header.js';
import Services from './Services.js';
import React,{useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user-info") == null) {
            return (
                navigate("/")
            );
        }
    });
    if (localStorage.getItem("user-info") != null) {
        return (
            <div>
                <Header />
                <Services />
            </div>
        );
    }
};

export default Home;