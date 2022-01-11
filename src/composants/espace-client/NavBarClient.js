import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UidContext } from '../AppContext';
import Img from '../../images/login.svg';
import Logout from '../authentification/Logout';
import { useSelector } from 'react-redux';
import "./navbarClient.css";

const NavBarClient = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer)
    return (
        <div className="nav" >
            <div className="nav-container">
            <div className="blogo">
                    <NavLink className="hpLogo" exact to="/">
                        PrintempsHotel
                </NavLink>
                </div>
                {(uid) ? (
                    <ul>
                        <li></li>
                        <li className="welcome">
                                <h5 className='clientPseudo'>Bienvenue {userData.pseudo}</h5>
                                <Logout />
                        </li>
                       
                    </ul>
                ) : (
                    <ul>
                        <li></li>
                        <li>
                            <NavLink exact to="/EspacePersonnel">
                                <img src={Img} alt="login" />
                            </NavLink>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default NavBarClient;