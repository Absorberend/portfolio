import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import IVHome from "../../assets/inVirtuaPage/IV-homepage.png";
import IVAbout from "../../assets/inVirtuaPage/IV-about.png";
import IVPortfolio from "../../assets/inVirtuaPage/IV-portfolio.png";
import IVProduct from "../../assets/inVirtuaPage/IV-product.png";
import IVReviews from "../../assets/inVirtuaPage/IV-reviews.png";
import IVContact from "../../assets/inVirtuaPage/IV-contact.png";


export default function InVirtuaPage({openModal}) {
  return (
    <Carousel showThumbs={false} swipeable={true} emulateTouch={true} useKeyboardArrows={true} autoFocus={openModal ? true : false}>
    <div>
        <img src={IVHome} alt="in-Virtua homepage" />   
    </div>
    <div>
        <img src={IVAbout} alt="in-Virtua about page" />    
    </div>
    <div>
        <img src={IVPortfolio} alt="in-Virtua portfolio page" />
    </div>
    <div>
        <img src={IVProduct} alt="in-Virtua product information page" />
    </div>
    <div>
        <img src={IVReviews} alt="in-Virtua review page" />
    </div>
    <div>
        <img src={IVContact} alt="in-Virtua contact page" />
    </div>
  </Carousel>
  )
}
