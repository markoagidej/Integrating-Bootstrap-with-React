import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import '../NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav>
            <NavLink to='/' activeClassName='active'>Home 1</NavLink>
            <NavLink to='/home2' activeClassName='active'>Home 2</NavLink>
        </nav>
    );
};

export default NavigationBar;