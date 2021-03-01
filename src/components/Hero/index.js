import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../sidebar'
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
    HeroBtn
    } from './HeroElements'
const Hero = () => {
    const [isOpen, setisOpen] = useState(false);
    const toggle = () => {
        setisOpen(!isOpen);
    };

    return (
       <HeroContainer>
           <Navbar toggle={toggle}/>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <HeroContent>
               <HeroItems>
                   <HeroH1>Gretest Pizza Ever</HeroH1>
                   <HeroP>Ready in 60 seconds</HeroP>
                   <HeroBtn>Place Order</HeroBtn>
               </HeroItems>
           </HeroContent>
       </HeroContainer>
    )
}

export default Hero
