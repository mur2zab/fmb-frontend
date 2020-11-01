import React, {Component} from 'react';
import NavbarNew from "../common/navbarnew";
import DetailBar from "../common/detailBar";
import "../../styles/elementsCss/calendar.css";
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Link } from 'react-router-dom';

import * as BsIcons from "react-icons/bs";
import {IconContext} from 'react-icons';

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
    const now = new Date();
    const events = [
      {
        id: 16,
        title: ["Biryani,","Soup"],
        start: new Date(2020, 9, 28, 12, 30, 1),
        end: new Date(2020, 9, 28, 12, 30, 0),
    },
    {
        id: 17,
        title: 'Masur Dal, Mixed Veg, Roti, Rice',
        start: new Date(2020, 9, 29, 1, 30, 1),
        end: new Date(2020, 9, 29, 12, 30, 0),
    },
    ]
   
  
    return(
        <div className="calendarPage">
            <NavbarNew/>
            <DetailBar/>
            <Link to="/addmenu" className="add-family-button-link">        
            <div className='add-family-button'>
                <IconContext.Provider value={{color:'#2ACB60'}}>
                <BsIcons.BsFillBookmarkFill className='add-family-button-icon'/>
                <h1>Add Menu</h1>
                </IconContext.Provider>
            </div>
        </Link>
            <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height:'95vh',width: '100%', color:"#000",backgroundColor:"#fff",zIndex:"-10" }}/>
        </div>
    );
  
};

export default MyCalendar;