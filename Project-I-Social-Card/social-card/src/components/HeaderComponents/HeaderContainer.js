import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

function HeaderContainer() {
  return (
    <div className="headerContainer">
      <div className="nav"><ImageThumbnail/></div>
      <HeaderTitle/>
      <HeaderContent/>
    </div>
  );
};

export default HeaderContainer;
