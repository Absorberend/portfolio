import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import DBHome from "../../assets/DirtyBombFanSite/DB-Homepage.png";
import DBLoadout from "../../assets/DirtyBombFanSite/DB-Loadouts.png";
import DBDbpage from "../../assets/DirtyBombFanSite/DB-Dbpage.png";
import DBConfig from "../../assets/DirtyBombFanSite/DB-ConfigPage.png";
import DBRescources from "../../assets/DirtyBombFanSite/DB-ResourcesPage.png";
import DBContact from "../../assets/DirtyBombFanSite/DB-ContactPage.png";


export default function DirtyBombFanSite({openModal}) {
  return (
    <Carousel showThumbs={false} swipeable={true} emulateTouch={true} useKeyboardArrows={true} autoFocus={openModal ? true : false}>
    <div>
        <img src={DBHome} alt="Dirty bomb homepage" />   
    </div>
    <div>
        <img src={DBLoadout} alt="Dirty bomb loadouts page" />    
    </div>
    <div>
        <img src={DBDbpage} alt="Dirty bomb page" />
    </div>
    <div>
        <img src={DBConfig} alt="Dirty bomb config page" />
    </div>
    <div>
        <img src={DBRescources} alt="Dirty bomb recources page" />
    </div>
    <div>
        <img src={DBContact} alt="Dirty bomb contact page" />
    </div>
  </Carousel>
  )
}
