// 30:50

import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    /*
    {
        title: 'Roles & Permissions',
        path: '/rolespermissions',
        icon: <AiIcons.AiFillCustomerService/>,
        cName: 'nav-text'
    },
    */
    {
        title: 'Families',
        path: '/users',
        icon: <AiIcons.AiFillGithub/>,
        cName: 'nav-text'
    },
    {
        title: 'Scanning',
        path: '/scanning',
        icon: <AiIcons.AiFillSecurityScan/>,
        cName: 'nav-text'
    },
    {
        title: 'Calender Menu',
        path: '/calender',
        icon: <AiIcons.AiFillCalendar/>,
        cName: 'nav-text'
    },
    /*
    {
        title: 'Feedback',
        path: '/feedback',
        icon: <AiIcons.AiFillFolderOpen/>,
        cName: 'nav-text'
    },
    {
        title: 'Statistics',
        path: '/stats',
        icon: <ImIcons.ImStatsDots/>,
        cName: 'nav-text'
    },
    */
]
