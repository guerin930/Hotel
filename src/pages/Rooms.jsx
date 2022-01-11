import React from 'react'
import Hero from '../composants/Hero'
import Banner from '../composants/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../composants/RoomsContainer';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
const Rooms = () => {
    return (
    <div>
        <Hero hero="roomsHero">
        </Hero>
        <Banner title="Chambres disponibles" subtitle="le meilleur des Chambres class">
                <Link to="/" className="btn btn-warning">
                      RETOUR A L'ACCEUIL
                </Link>
        </Banner>
        <RoomsContainer/>
    </div>
    )
}

export default Rooms
