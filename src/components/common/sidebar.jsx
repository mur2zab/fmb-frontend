import React, { Component } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from "react-icons/fa";

class Sidebar extends Component {
render(){
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                <SubMenu title="Components" icon={<FaHeart />}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
                </SubMenu>
            </Menu>
                <Menu iconShape="square">
                    <SubMenu title="Components" icon={<FaGem />}>
                        <MenuItem>Component 1</MenuItem>
                        <SubMenu title="Sub Component 1" icon={<FaHeart />}>
                        {/* you can have more nested submenus ... */}
                        </SubMenu>
                    </SubMenu>
                </Menu>
        </ProSidebar>
    );
}
}

export default Sidebar;