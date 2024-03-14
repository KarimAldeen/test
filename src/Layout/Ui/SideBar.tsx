import React, { useState } from 'react';
import Image from '../../Components/Ui/Image';
import { Divider } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from '../../Routes';
import { MdLogout, MdExpandMore, MdExpandLess } from 'react-icons/md';

const MenuItem = ({ item, location, index }: any) => {
  const isActive = location.pathname.split("/")[1] === item.path?.slice(1);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdown = (index: number) => {
    setOpenDropdown(prev => (prev === index ? null : index));
  };

  const isDropdownOpen = openDropdown === index;

  return (
    <>
      <div className={`link ${isActive ? 'active' : ''}`}>
        <i>{item.icon}</i>
        <Link to={item.path || '/'}>
          {item.text}
        </Link>
        {item?.children && (
          < >
            {isDropdownOpen ? <div className="DropDownIcon" onClick={() => handleDropdown(index)}><MdExpandLess /></div> : <div className="DropDownIcon" onClick={() => handleDropdown(index)}><MdExpandMore /></div>}
          </>
        )}
      </div>

      {item?.children && isDropdownOpen && (
        <div className="sub-menu">
          {item.children.map((childItem: any, index: any) => (
            <MenuItem
              key={index}
              item={childItem}
              location={location}
              index={index}
            />
          ))}
        </div>
      )}
    </>
  );
};

const SideBar = () => {
  const location = useLocation();

  return (
    <div className='side_bar'>
      <h1>
        إعدادية أحمد الصباغ (للبنات)
      </h1>
      <Divider />
      <div className='side_bar_links'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} location={location} index={index} />
        ))}
      </div>
      <button>
        <MdLogout />  تسجيل الخروج 
      </button>
    </div>
  );
};

export default SideBar;
