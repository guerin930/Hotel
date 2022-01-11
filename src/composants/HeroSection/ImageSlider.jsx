import React from 'react'
import { useState, useEffect } from 'react'
import { SliderData } from './SliderData'
/*import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"*/
import "./imageslider.css";

export default function ImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);


    useEffect(() => {
        const length = slides.length;
        /*si l'indice courant est egale a length - 1 on repars a zero 
       sinon on incremente l'indice courant */
        const nextSlider = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        /*si l'indice courant est egale a zero alors on passe a length - 1
        sinon on decremente
    
        const previewSlider = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);
        };*/
        /*si le tableau est vide ou si la taille du tableau est inferieur a zero on ne retourne rien*/
        if (!Array.isArray(slides) || slides.length <= 0) {
            return null;
        };

        setTimeout(nextSlider, 7000);
    }, [current])


    return (
        <section className='imageslider'>
            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && <img className="image" src={slide.Image} alt='evenements' />}
                    </div>
                )
            })}
        </section>
    )

}
