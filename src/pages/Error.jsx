import React from 'react'
import Hero from '../composants/Hero'
import Banner from '../composants/Banner';
import { Link } from 'react-router-dom';
import {FaRegMeh} from 'react-icons/fa';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

export default function Error() {
    return (
        <>
        <Hero hero="roomsError" />
        <Banner title="ERROR 404 NOT FOUND" subtitle="You are lost !! ITs dark everywhere">
                <FaRegMeh className="lost"></FaRegMeh>
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner>
        </>
    )
}
