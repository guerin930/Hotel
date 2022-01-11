import React, { useEffect, useState } from 'react'
import { HeroP } from './HeroElements';
import { SliderText } from './SliderData';
import "./imageslider.css";

export default function TextSlider({ textSlides }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const length = textSlides.length;
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
        if (!Array.isArray(textSlides) || textSlides.length <= 0) {
            return null;
        };
        setTimeout(nextSlider, 7000);
    }, [current])

    return (
        <section>
            {SliderText.map((text, index) => {
                return (
                    <>
                        <HeroP className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && text.desc}
                        </HeroP>
                    </>
                )
            })}
        </section>
    )
}
