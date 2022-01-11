import React, { useContext } from 'react';
import Login from './Login';
import Img from '../../images/icon.svg';
import { NavLink } from 'react-router-dom';
import { UidContext } from '../AppContext';
import NavBarClient from '../espace-client/NavBarClient';
import Sidebar from '../espace-client/sidebar/Sidebar';
import Home from '../espace-client/home/Home';




const Profil = () => {
    const uid = useContext(UidContext);

    return (
        <div className="profil-page">
            {(uid) ? (
                <>
                    <NavBarClient />
                    <div className='profilContainer'>
                        <Sidebar />
                        <Home />
                    </div>
                </>
            ) : (
                <>
                    <div  className="navigation">
                        <ul>
                            <NavLink  to="/" exact className="hover"
                                activeClassName="nav-active">
                                <li className="titre">Retour</li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="log-container">
                        <Login signIn={false} signUp={true} />
                        <div className="img-container">
                            <img src={Img} alt="login" />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profil;