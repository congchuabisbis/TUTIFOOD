import React from "react";

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Routes from '../../routes/Routers';

import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector.js";

const Layout = () => {
    document.title = "TUTI FOOD"
    return (
        <div>
            <Header />
            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;