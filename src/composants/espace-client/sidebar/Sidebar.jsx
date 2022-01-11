import React from 'react';
import "./sidebar.css";

export default function Sidebar() {
    return (
        <div className='sidebarClient'>
            <div className="sidebarClientWrapper">
                <div className="sideClientMenu">
                    <h3 className="sideClientTilte">
                        Espace Client
                    </h3>
                    <ul className='sidebarClientList'>
                        <li className='sidebarClientItems'>Mes reservations</li>
                        <li className='sidebarClientItems'>Favoris</li>
                        <li className='sidebarClientItems'>Notifications</li>
                        <li className='sidebarClientItems'>Alertes</li>
                    </ul>
                </div>
                <span className="sidebarCopyright">
                    PrintempsHotel © {new Date().getFullYear()} tous Droits reservés.
                </span>

            </div>
        </div>
    )
}
