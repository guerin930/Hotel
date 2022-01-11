import React, { useState } from 'react';

import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroH1,
} from './HeroElements'
import { Button } from '../ButtonElements'
import ImageSlider from './ImageSlider';
import { SliderData, SliderText } from './SliderData';
import TextSlider from './TextSlider';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <ImageSlider slides={SliderData} />
            </HeroBg>
            <HeroContent>
                <HeroH1>   Bienvenue a L'Hotel le printemps </HeroH1>
                <TextSlider textSlides={SliderText} />
                <HeroBtnWrapper>
                    <Button to="PageAbonnement"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Newsletter {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
