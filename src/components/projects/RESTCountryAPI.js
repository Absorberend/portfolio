import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import RCAHome from "../../assets/RESTCountryAPI/RCA-Homepage.png";
import RCAHomeInfo from "../../assets/RESTCountryAPI/RCA-Homepage-info.png";
import RCACountryInfo from "../../assets/RESTCountryAPI/RCA-Country-info-page.png";

export default function RestCountryAPI({openModal}) {
  return (
    <Carousel showThumbs={false} swipeable={true} emulateTouch={true} useKeyboardArrows={true} autoFocus={openModal ? true : false}>
    <div>
        <img src={RCAHome} alt="RestCountryAPI homepage" />   
    </div>
    <div>
        <img src={RCAHomeInfo} alt="RestCountryAPI homepage with search info" />    
    </div>
    <div>
        <img src={RCACountryInfo} alt="RestCountryAPI single country page" />
    </div>
  </Carousel>
  )
}
