import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import RPSGHomepage from "../../assets/RockPaperScissors/RPSG-Homepage.png";
import RPSGPickScreen from "../../assets/RockPaperScissors/RPSG-PickScreen.png";
import RPSGWinScreen from "../../assets/RockPaperScissors/RPSG-WinScreen.png";

export default function RockPaperScissors({openModal}) {
  return (
    <Carousel showThumbs={false} swipeable={true} emulateTouch={true} useKeyboardArrows={true} autoFocus={openModal ? true : false}>
    <div>
        <img src={RPSGHomepage} alt="Rock paper scissors game homepage" />   
    </div>
    <div>
        <img src={RPSGPickScreen} alt="Rock paper scissors game homepage with search info" />    
    </div>
    <div>
        <img src={RPSGWinScreen} alt="Rock paper scissors game single country page" />
    </div>
  </Carousel>
  )
}
