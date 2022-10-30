import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Homepage from "../../assets/RealEstateCare/Homepage.png";
import AssignedReports from "../../assets/RealEstateCare/Assigned-Reports.png";
import CompletedReports from "../../assets/RealEstateCare/Completed-Reports.png";
import CompletedReportsExpand from "../../assets/RealEstateCare/Completed-Reports2.png";
import EditReports from "../../assets/RealEstateCare/Edit-Reports.png";
import KnowledgeBase from "../../assets/RealEstateCare/Knowledge-Base.png";

export default function RealEstateCare({openModal}) {
  return (
    <Carousel showThumbs={false} swipeable={true} emulateTouch={true} useKeyboardArrows={true} autoFocus={openModal ? true : false}>
    <div>
        <img src={Homepage} alt="RealEstateCare homepage" />   
    </div>
    <div>
        <img src={AssignedReports} alt="RealEstateCare assigned reports page" />    
    </div>
    <div>
        <img src={CompletedReports} alt="RealEstateCare completed reports page" />
    </div>
    <div>
        <img src={CompletedReportsExpand} alt="RealEstateCare completed reports expanded page" />
    </div>
    <div>
        <img src={KnowledgeBase} alt="RealEstateCare knowledge base page" />
    </div>
    <div>
        <img src={EditReports} alt="RealEstateCare edit reports page" />
    </div>
  </Carousel>
  )
}
