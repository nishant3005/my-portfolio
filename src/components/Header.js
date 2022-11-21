import React, { useState } from 'react';
import * as GoIcons from 'react-icons/go';
import * as IoIcons from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { SidebarData } from './Data/SidebarData';

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <Link to="#" className="menu-bars" onClick={showSidebar}>
        <GoIcons.GoThreeBars />
      </Link>

      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <IoIcons.IoClose style={{ color: 'black' }} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
