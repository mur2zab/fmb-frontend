import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";
import {IconContext} from 'react-icons';
import {SidebarData} from '../../uidata/SidebarData';
import "../../../src/styles/navbarnew.css";

import logo from "../../img/logo.png";

function NavbarNew() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <IconContext.Provider value={{color:'#2ACB60'}}>
                <div className="navbarnew">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <div className="nav-search-user">
                        <Link to="/profile">
                            <FaIcons.FaUser/>
                        </Link>
                    </div>
                </div>
            </IconContext.Provider>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    <li>
                        <img src={logo} className="sidebar-logo"/>
                    </li>
                    {SidebarData.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavbarNew;