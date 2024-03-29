import React from "react";
import './NavBar.css'
import CartWidget from '../CarWidget/CarWidget'
import { NavLink , Link } from "react-router-dom";


const SideBar = () => {
    return(
        <>
        <nav>
        <div className="NavBar">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            
            
            <ul>
                <li className="home">
                    <NavLink to='/' className="estilo1"><i className="large material-icons">home</i></NavLink>
                </li>
                {/* carrito */}
                < CartWidget/>

                <li className="home">
                     <NavLink to='/categoria/Tablets' className="estilo1"> Tablets</NavLink>
                </li>

                <li className="home">
                     <NavLink to='/categoria/celulares' className="estilo1"> Celulares</NavLink>
                </li>
                <li className="home">
                     <NavLink to='/categoria/Notebooks' className="estilo1"> Laptops</NavLink>
                </li>
                
                <li className="home">
                     <NavLink to='/categoria/Accesorios y Componentes' className="estilo1"> Accesorios y Componentes</NavLink>
                </li>



            </ul>

        </div>
        </nav>
        </>

    )
}

export default SideBar;
