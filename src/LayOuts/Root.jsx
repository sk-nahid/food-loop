import React from 'react';
import Home from '../Pages/Home';
import Navbar from '../Components/NavBar';
import { NavLink, Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {
    const NavLinks = <>
        <li><NavLink to="/" className="text-gray-700 hover:text-green-600">Home</NavLink></li>
        <li><NavLink to="/available-foods" className="text-gray-700 hover:text-green-600">Available Foods</NavLink></li>
        <li><NavLink to="/add-food" className="text-gray-700 hover:text-green-600">Add Food</NavLink></li>
        <li><NavLink to="/my-foods" className="text-gray-700 hover:text-green-600">My Foods</NavLink></li>
        <li><NavLink to="/requested-foods" className="text-gray-700 hover:text-green-600">Requested Foods</NavLink></li>
    </>
    return (
        <div>
            <Navbar NavLinks={NavLinks}></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer NavLinks={NavLinks}></Footer>
        </div>
    );
};

export default Root;